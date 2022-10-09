import fs from "fs";
import path from "path";
import { normalizeEmail } from "validator";
import customerRepository from "../../backend/repository/customer-repository";
import EmailVerificationTokenRepository from "../../backend/repository/email-verification-token-repository";
import mailService from "../../backend/service/mail-service";
import ApiError from "../../backend/utils/api-error";
import cleanInput from "../../backend/utils/clean-input";
import tokenUtil from "../../backend/utils/token-util";
import validateUser from "../../utils/validation/validate-user";

import logo from "../../../public/assets/blue_Logo.png";

function makeCustomer({ lastName, email, ...rest }) {
  const customer = {
    lastName: lastName.toUpperCase(),
    email: normalizeEmail(email),
    emailVerified: false,
    enrollmentDate: new Date(),
    ...rest,
  };

  return customer;
}
export default async function signUp(req, res) {
  try {
    !req.body && res.status(400).json({ success: false, message: "Missing data", data: {} });

    let customer = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    customer.enrollmentIP = req.ips;

    const validationErrors = validateUser(customer);
    if (validationErrors.length) throw ApiError.badRequest(validationErrors);
    customer = makeCustomer(customer);
    await customerRepository.addCustomer(cleanInput(customer));
    const customerRecord = await customerRepository.findByEmail(customer.email);
    customer.id = customerRecord._id.toString();
    const { token, tokenID } = tokenUtil.generateEmailVerificationToken(customer.id);
    await EmailVerificationTokenRepository.addToken({
      token,
      tokenID,
      tokenOwner: customer.id,
      used: false,
    });

    const verificationLink = `https://www.cobaltswap.com/confirm-email?i=${tokenID}&t=${token}`;

    const verificationMailTemplate = fs.readFileSync(
      path.join(process.cwd() + "/src/backend/views/registration-email-template.html"),
      { encoding: "utf-8" }
    );
    const mailBody = mailService.composeMail(verificationMailTemplate, {
      link: verificationLink,
      logo,
    });

    const mailWasSent = await mailService.sendMail({
      to: customer.email,
      subject: "Please confirm your email",
      body: mailBody,
    });

    if (!mailWasSent) {
      await customerRepository.removeCustomer(cleanInput(customer).email);
      console.log("Mail service failed. User was deleted");
      throw ApiError.serverError("Oops! Something went wrong. Please try again.");
    }

    res.status(201).json({
      success: true,
      message: "User created successfully.",
      data: {},
    });

    return;
  } catch (error) {
    console.log(error.name);
    let message = "Oops! Something went wrong",
      code = 500;

    if (error.name === "MongoServerError") {
      if (error?.message?.startsWith("E11000 duplicate key error collection")) {
        message = "Email address already taken.";
        code = 400;
      } else {
        message = "Oops! Something went wrong from our end. Please try again.";
      }
    }
    if (error.name === "ApiError") {
      message = error.message;
      code = 400;
    }
    return res.status(code).json({ success: false, message, data: {} });
  }
}

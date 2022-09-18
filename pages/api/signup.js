import customerRepository from "../../backend/repository/customer-repository";
import EmailVerificationTokenRepository from "../../backend/repository/email-verification-token-repository";
import mailService from "../../backend/service/mail-service";
import ApiError from "../../backend/utils/api-error";
import tokenUtil from "../../backend/utils/token-util";
import trimInput from "../../backend/utils/trim-input";
import validateUser from "../../utils/validation/validate-user";

export default async function signUp(req, res) {
  try {
    !req.body && res.status(400).json({ success: false, message: "Missing data", data: {} });

    const customer = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    customer.emailVerified = false;
    customer.enrollmentDate = new Date();
    customer.enrollmentIP = req.ips;

    const validationErrors = validateUser(customer);
    if (validationErrors.length) throw ApiError.badRequest(validationErrors);
    await customerRepository.addCustomer(trimInput(customer));
    const customerRecord = await customerRepository.findByEmail(customer.email);
    customer.id = customerRecord._id.toString();
    const { token, tokenID } = tokenUtil.generateEmailVerificationToken(customer.id);
    await EmailVerificationTokenRepository.addToken({
      token,
      tokenID,
      tokenOwner: customer.id,
      used: false,
    });
    const verificationLink = `https://landing-page-zeta-weld.vercel.app/confirm-email?i=${tokenID}&t=${token}`;
    const verificationMail = "Hello! your verification email link is" + verificationLink;
    await mailService.sendMail({
      to: customer.email,
      subject: "Please confirm your email",
      body: verificationMail,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully.",
      data: {},
    });
    return;
  } catch (error) {
    let message,
      code = 500;
    if (error.name === "MongoServerError") {
      message = "Oops! Something went wrong";
      if (error.message?.startsWith("E11000 duplicate key error collection")) {
        message = "Email address already taken.";
        code = 400;
      }
    }
    if (error.name === "ApiError") {
      message = error.message;
      code = 400;
    }
    return res.status(code).json({ success: false, message, data: {} });
  }
}

import customerRepository from "../../backend/repository/customer-repository";
import EmailVerificationTokenRepository from "../../backend/repository/email-verification-token-repository";
import ApiError from "../../backend/utils/api-error";
import tokenUtil from "../../backend/utils/token-util";

export default async function emailVerification(req, res) {
  const tokenID = req.query.i;
  const validationToken = req.query.t;

  try {
    if (!(tokenID && validationToken)) throw ApiError.badRequest("Invalid verification link.");
    tokenUtil.validateEmailValidationToken(validationToken, tokenID);
    const storedToken = await EmailVerificationTokenRepository.getTokenByID({ tokenID });

    if (!storedToken) throw ApiError.badRequest("Invalid verification token");

    if (storedToken.used)
      return res
        .status(200)
        .json({ success: true, message: "Email already verified", data: { status: "used" } });

    await customerRepository.editCustomer({
      id: storedToken.tokenOwner,
      emailVerified: true,
    });

    storedToken.used = true;

    await EmailVerificationTokenRepository.editToken({
      id: storedToken._id,
      used: true,
    });

    res.status(200).json({
      success: true,
      message: "Email verification successful",
      data: { status: "success" },
    });
  } catch (error) {
    let message = "Oops! Something went wrong",
      code = 500;
    if (error.name === "ApiError") {
      message = error.message;
      code = error.code;
    }
    if (error.name === "JsonWebTokenError") {
      (message = "Invalid verification link"), (code = 400);
    }
    res.status(code).json({ success: false, message, data: { status: "failed" } });
  }
}

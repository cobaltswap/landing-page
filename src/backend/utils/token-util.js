const jwt = require("jsonwebtoken");
const crypto = require("crypto");

function generateEmailVerificationToken(customerID) {
  const tokenID = crypto.randomUUID();
  const payload = {
    iss: process.env.JWT_ISSUER,
    sub: customerID,
    jti: tokenID,
  };

  return {
    token: jwt.sign(payload, process.env.JWT_VERIFICATION_SECRET, { expiresIn: "30 days" }),
    tokenID,
  };
}

function validateEmailValidationToken(token, tokenID) {
  try {
    const payload = jwt.verify(token, process.env.JWT_VERIFICATION_SECRET, {
      jwtid: tokenID,
    });
    return payload;
  } catch (error) {
    throw error;
  }
}

const tokenUtil = Object.freeze({ generateEmailVerificationToken, validateEmailValidationToken });

export default tokenUtil;

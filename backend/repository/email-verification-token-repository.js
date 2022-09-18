import { ObjectId } from "mongodb";
import EmailVerificationToken from "../entities/email-verification-token";

async function addToken(verificationToken) {
  try {
    return await EmailVerificationToken.insertOne(verificationToken);
  } catch (error) {
    throw error;
  }
}
async function getTokenByID(tokenID) {
  try {
    return EmailVerificationToken.findOne(tokenID);
  } catch (error) {
    throw error;
  }
}

async function editToken(token) {
  try {
    return await EmailVerificationToken.updateOne({ _id: ObjectId(token.id) }, { $set: token });
  } catch (error) {
    throw error;
  }
}

const EmailVerificationTokenRepository = Object.freeze({ addToken, getTokenByID, editToken });

export default EmailVerificationTokenRepository;

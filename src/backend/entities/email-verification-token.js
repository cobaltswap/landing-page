import database from "../database";

const EmailVerificationToken = database.collection("emailVerificationTokens");

export default EmailVerificationToken;

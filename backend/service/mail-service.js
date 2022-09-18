const nodemailer = require("nodemailer");

const NOTIFICATION_ADDRESS = "Cobaltswap notification@cobaltswap.com";

async function sendMail({ from = NOTIFICATION_ADDRESS, to, subject, body, isHTML = true }) {
  if (process.env.NODE_ENV !== "production") return true;

  const transporter = nodemailer.createTransport({
    host: process.env.NOTIFICATION_MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.NOTIFICATION_MAIL_USER,
      pass: process.env.NOTIFICATION_MAIL_PSWD,
    },
    tls: {
      rejectUnauthorized: false,
    },
    pool: true,
  });

  var mailOptions = {
    from,
    to,
    subject,
    text: isHTML ? "" : body,
    html: isHTML ? body : "",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log({ message: "Mail sent successfully.", response: info.response });
    return true;
  } catch (error) {
    console.log({ message: "Mail sending failed.", error });
    return false;
  }
}

const mailService = Object.freeze({ sendMail });

export default mailService;

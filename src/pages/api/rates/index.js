import bcrypt from "bcryptjs";
import config from "../../../backend/config.json";
import ratesRepository from "../../../backend/repository/rate-repository";
import ApiError from "../../../backend/utils/api-error";
import validateRates from "../../../utils/validation/validate-rates";

function makeRates(rates) {
  return rates.map((_rate) =>
    Object.assign({}, _rate, { currency: _rate.currency.toUpperCase(), rate_date: new Date() })
  );
}

async function doCreateRates(reqPayload) {
  const rates = reqPayload.rates;
  const password = reqPayload?.password;
  const username = reqPayload?.username;
  const storedUsername = process.env.RATE_USER;
  const storedPassword = process.env.RATE_PASSWORD;

  const credentialsIsValid = await bcrypt.compare(password, storedPassword);

  if (!(credentialsIsValid && storedUsername === username)) {
    throw ApiError.unauthenticated("Incorrect username/password");
  }
  const errors = validateRates(rates);
  if (errors.length) throw ApiError.badRequest(errors);

  await ratesRepository.addRates(makeRates(rates));
  return makeRates(rates);
}

export default async function ratesHandler(req, res) {
  let message = "Oops! Something went wrong, please try again later",
    httpResponseCode = 500,
    success = false,
    resPayload;

  try {
    switch (req.method) {
      case "POST":
        resPayload = await doCreateRates(req.body);
        httpResponseCode = 201;
        success = true;
        message = "Rates created/updates successfully";
        break;
      case "GET":
        resPayload = await ratesRepository.getLatestRates();
        if (resPayload.length) {
          httpResponseCode = 200;
          success = true;
          message = "Latest rates found";
        } else {
          httpResponseCode = 404;
          success = false;
          message = "No rate found";
          resPayload = config.currencies.map((currency) => ({ currency, buy: "", sell: "" }));
        }
        break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        httpResponseCode = 405;
        message = "Method not allowed.";
    }

    res.setHeader("Content-Type", "application/json");
    return res.status(httpResponseCode).json({
      message,
      success: success,
      body: resPayload || {},
    });
  } catch (error) {
    if (error.name === "ApiError") {
      httpResponseCode = 400;
      message = error.message.toString();
      httpResponseCode = error.code;
    }

    return res.status(httpResponseCode).json({
      message: message,
      success: success,
      body: {},
    });
  }
}

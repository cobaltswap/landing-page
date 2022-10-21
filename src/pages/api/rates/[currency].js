import ratesRepository from "../../../backend/repository/rate-repository";

async function doGetRate(currency) {
  let success, message, httpResponseCode, body;
  try {
    const currencyRate = await ratesRepository.getCurrencyRate(currency.toUpperCase());
    httpResponseCode = 200;
    success = true;
    message = "Rate found";
    body = currencyRate;
  } catch (error) {
    if (error.name === "ApiError") {
      httpResponseCode = 400;
      message = error.message.toString();
      httpResponseCode = error.code;
    }
  }

  return { message, httpResponseCode, success, body };
}

export default async function getRate(req, res) {
  let result = {
    message: "Oops! Something went wrong, please try again later",
    httpResponseCode: 500,
    success: false,
  };

  switch (req.method) {
    case "GET":
      result = await doGetRate(req.query.currency);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      result.httpResponseCode = 405;
      result.message = "Method not allowed.";
  }

  res.setHeader("Content-Type", "application/json");
  return res.status(result.httpResponseCode).json({
    message: result.message,
    success: result.success,
    body: result.body || {},
  });
}

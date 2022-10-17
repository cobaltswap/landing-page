import validateRates from "../../../utils/validation/validate-rates";

export default async function ratesHandler(req, res) {
  let message = "Method not allowed",
    httpResponseCode;
  switch (req.method) {
    case "POST":
      try {
        await setRates(req.body);
        httpResponseCode = 201;
        message = "Rates created/updates successfully";
      } catch (error) {
        httpResponseCode = 500;
        message = "Oops! Something went wrong. Rate was not set";
      }
      break;
    case "GET":
      break;
    default:
      httpResponseCode = 405;
  }
  return res.status(httpResponseCode).json({
    message,
    body: {},
    success: true,
  });
}

async function setRates(payload) {
  const errors = validateRates(payload.rates);
  try {
    if (errors.length) throw errors;
  } catch (error) {
    throw errors;
  }
}

function getCurrencyRates(currency) {}
function getRates() {}

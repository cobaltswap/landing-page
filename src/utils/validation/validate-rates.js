const config = require("../../backend/config.json");

export default function validateRates(rates) {
  const errors = [];
  if (!Array.isArray(rates)) {
    errors.push("Provided rates is not allowed.");
    return errors;
  }
  const providedCurrencies = new Set(rates.map((_rate) => _rate.currency));

  if (providedCurrencies.size !== config.currencies.length) {
    errors.push("Provided rates has incomplete/too many currencies");
    return errors;
  }

  for (let counter = 0; counter < rates.length; counter++) {
    const currentRate = rates[counter];
    if (!config.currencies.includes(currentRate.currency.toUpperCase())) {
      errors.push("Provided rates has one or more invalid currencies");
    }

    if (!(currentRate.buy && currentRate.sell)) {
      errors.push("Provided rates is not allowed");
    }

    if (isNaN(currentRate.buy) || isNaN(currentRate.sell)) {
      errors.push("Buy and sell rates should be numbers");
    }
  }
  return errors;
}

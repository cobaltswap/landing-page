import config from "../config.json";
import Rate from "../entities/rate";

async function addRates(rates) {
  return await Rate.insertMany(rates);
}

async function getLatestRates() {
  try {
    const currencies = config.currencies;
    const query = { currency: { $in: currencies } };
    const projection = { currency: 1, buy: 1, sell: 1, rate_date: 1, _id: 0 };
    return Rate.find(query)
      .sort({ rate_date: -1 })
      .limit(currencies.length)
      .project(projection)
      .toArray();
  } catch (error) {
    throw error;
  }
}

async function getCurrencyRate(currency) {
  const query = { currency };
  const projection = { currency: 1, buy: 1, sell: 1, rate_date: 1, _id: 0 };
  try {
    const currencyRate = await Rate.find(query)
      .sort({ rate_date: -1 })
      .limit(1)
      .project(projection)
      .toArray();
    return currencyRate[0];
  } catch (error) {
    throw error;
  }
}

const ratesRepository = Object.freeze({
  addRates,
  getLatestRates,
  getCurrencyRate,
});

export default ratesRepository;

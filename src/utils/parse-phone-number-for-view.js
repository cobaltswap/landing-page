/**
 * @param {number | string} phoneNumber
 * @param {string} country
 * @return {string}
 */
const countries = {
  UK: "uk",
};

function parsePhoneNumberForView(phoneNumber, country = "") {
  const phoneNumberString = phoneNumber + "";
  switch (country.toLowerCase()) {
    case countries.UK:
      return `+${phoneNumberString.substring(0, 2)} ${phoneNumberString.substring(
        2,
        6
      )} ${phoneNumberString.substring(6, 15)}`;
    default:
      return `+${phoneNumberString.substring(0, 3)} ${phoneNumberString.substring(
        3,
        6
      )} ${phoneNumberString.substring(6, 10)} ${phoneNumberString.substring(10, 20)}`;
  }
}

export default parsePhoneNumberForView;

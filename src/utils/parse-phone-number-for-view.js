/**
 * @param {number | string} phoneNumber
 * @return {string}
 */

function parsePhoneNumberForView(phoneNumber) {
  const phoneNumberString = phoneNumber + "";
  return `+${phoneNumberString.substring(0, 3)} ${phoneNumberString.substring(
    3,
    6
  )} ${phoneNumberString.substring(6, 10)} ${phoneNumberString.substring(10, 20)}`;
}

export default parsePhoneNumberForView;

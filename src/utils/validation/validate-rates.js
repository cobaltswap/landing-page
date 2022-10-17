export default function validateRates(rates) {
  let errors = [];
  try {
    if (!Array.isArray(rates)) errors.push("Provided rates is not allowed");

    // errors = [
    //   ...validateName(firstName, { type: "First name" }),
    //   ...validateName(lastName, { type: "Last name" }),
    //   ...validateEmail(email),
    // ];
    return errors;
  } catch (error) {
    throw error;
  }
}

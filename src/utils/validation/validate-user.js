import { isAlpha, isEmail, isEmpty, isLength } from "validator";

export default function validateUser({ firstName = "", lastName = "", email = "" }) {
  let errors = [];
  try {
    errors = [
      ...validateName(firstName, { type: "First name" }),
      ...validateName(lastName, { type: "Last name" }),
      ...validateEmail(email),
    ];
    return errors;
  } catch (error) {
    throw error;
  }
}

export function validateEmail(email) {
  const error = [];

  email = email + "";

  if (!email) {
    error.push("Email address is required");
  } else {
    if (!isEmail(email + ""))
      error.push("Email address not allowed. Format allowed sample@provider.com");
  }

  return error;
}
export function validateName(name, { type } = { type: "" }) {
  const error = [];

  const MIN_CHARACTERS = 2,
    MAX_CHARACTERS = 25;
  name = name + "";

  if (!type) throw "Source file: validate-name.js\nError: Name type to validate is required.";

  if (isEmpty(name)) {
    error.push(type + " is required");
  } else {
    if (!isLength(name, { min: MIN_CHARACTERS, max: MAX_CHARACTERS }))
      error.push(
        `Only ${MIN_CHARACTERS} - ${MAX_CHARACTERS} characters are allowed for ${type.toLowerCase()}`
      );

    if (!isAlpha(name, ["en-GB"], { ignore: " -" }))
      error.push(`Only alphabets, space and hyphen are allowed for ${type.toLowerCase()}`);
    if (name.endsWith("-")) {
      error.push("Name not allowed.");
    }
  }

  return error;
}

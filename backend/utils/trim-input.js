const { trim } = require("validator");

function cleanInput(input) {
  if (typeof input === "object") {
    const output = {};
    Object.keys(input).map((_key) => {
      if (typeof input[_key] === "string") {
        output[_key] = trim(input[_key]);
      } else {
        output[_key] = input[_key];
      }
    });
    return output;
  }
  if (typeof input === "string") {
    return trim(input);
  }

  throw "Source: clean-input.js\nError: Invalid input provided for sanitization.";
}

module.exports = cleanInput;

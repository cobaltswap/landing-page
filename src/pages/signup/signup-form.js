import { useState } from "react";
import { validateEmail, validateName } from "../../utils/validation/validate-user";

import { SecondaryButton } from "../../components/ui/Button.jsx";

class CustomError {
  constructor(message) {
    this.name = "CustomError";
    this.message = message;
  }
}

function SignupForm({ setShouldDisplayDialog, setDialogText }) {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState(undefined);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate({ firstName, lastName, email }) {
    const errors = {
      firstName: validateName(firstName, { type: "First name" }).join(" "),
      lastName: validateName(lastName, { type: "Last name" }).join(" "),
      email: validateEmail(email).join(" "),
    };

    return errors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setTouched(Object.assign({}, touched, { [name]: true }));
    const newFormValues = Object.assign({}, formValues, { [name]: value });
    setFormValues(newFormValues);
    setFormErrors(Object.assign({}, formErrors, validate(newFormValues)));
  }

  async function handleSignup(e) {
    e.preventDefault();
    setSubmitError(undefined);
    setFormErrors(Object.assign({}, formErrors, validate(formValues)));

    if (formErrors.firstName || formErrors.lastName || formErrors.email) return;
    setIsSubmitting(true);
    const options = {
      body: JSON.stringify(formValues),
      headers: { "content-type": "application/json" },
      method: "POST",
    };
    try {
      const result = await fetch("/api/signup", options);
      const data = await result.json();
      if (result.status !== 201) throw new CustomError(data.message);
      setShouldDisplayDialog(true);
      setDialogText(
        "We are almost there. A verification link has been sent to your email account. Please click on the link to verify your email address."
      );
    } catch (error) {
      if (error.message === "Failed to fetch") {
        let message;
        if (!navigator.onLine) {
          message = "Looks like you are offline. Please check your network connection.";
        } else {
          message = "Please check your internet connection";
        }
        setSubmitError(message);
      } else {
        setSubmitError(error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="signup-form" onSubmit={handleSignup}>
      {submitError && (
        <div className="text-center alert alert-danger mb-4" role="alert">
          {submitError}
        </div>
      )}

      <TextInput
        label={"First Name"}
        name="firstName"
        placeholder="John"
        onChange={handleChange}
        required
        errors={formErrors.firstName && touched.firstName ? formErrors.firstName : ""}
      />

      <TextInput
        label={"Last Name"}
        name="lastName"
        placeholder="Doe"
        onChange={handleChange}
        required
        errors={formErrors.lastName && touched.lastName ? formErrors.lastName : ""}
      />
      <TextInput
        name="email"
        label="Email Address"
        // type="email"
        placeholder="e.g Hello@ask.com"
        onChange={handleChange}
        required
        errors={formErrors.email && touched.email ? formErrors.email : ""}
      />
      <small className="d-block mb-3">
        By clicking Agree & Sign up, you agree to the CobaltSwap Terms, conditions, Privacy Policy,
        and Cookie Policy.
      </small>
      <div className="d-grid">
        <SecondaryButton disabled={isSubmitting}>Agree &amp; Sign Up</SecondaryButton>
      </div>
    </form>
  );
}

function TextInput({ label, name, errors, ...rest }) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input type="text" className="form-control p-2 p-md-3" id={name} name={name} {...rest} />
      <div className="pt-1">
        <small className="text-danger">{errors}</small>
      </div>
    </div>
  );
}

export default SignupForm;

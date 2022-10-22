import { Form, Formik, useField } from "formik";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/assets/white_Logo.png";
import config from "../backend/config.json";
import { SecondaryButton } from "../components/ui/Button";
import CustomError from "../utils/customError";

export default function Home() {
  const [submitError, setSubmitError] = useState(undefined);
  const [submitMessage, setSubmitMessage] = useState(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateForm(value) {
    // const { name, value } = e.target;
    // setTouched((prev) => Object.assign({}, prev, { [name]: true }));
    // setFormValues((prev) => Object.assign({}, prev, { [name]: value }));
    // setFormErrors(Object.assign({}, formErrors, validate(newFormValues)));
  }

  async function handleSubmit(formValues) {
    setIsSubmitting(true);
    setSubmitError(undefined);
    setSubmitMessage(undefined);
    const endpoint = "/api/rates";
    const options = {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "content-type": "application/json",
      },
    };
    try {
      const result = await fetch(endpoint, options);
      const resultJson = await result.json();
      if (resultJson.success) {
        setSubmitMessage(resultJson.message);
      } else {
        throw new CustomError(resultJson.message);
      }
    } catch (error) {
      let message = "Oops! Something went wrong";
      if (error.name === "CustomError") message = error.message;
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Head>
        <title>Rate Manager - CobaltSwap</title>
      </Head>
      <div className="position-relative main py-5" style={{ minHeight: "100%" }}>
        <div className="container" style={{ minHeight: "100%" }}>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100%" }}
          >
            <div className="col-11 col-md-7 col-lg-5 bg-primary-local p-5 px-4 p-md-5 rounded-3">
              <div className="mb-2 font-heading text-center mb-5">
                <Image src={logo} alt="Cobaltswap logo" />
                <p className="h5 fw-400">Rate Manager</p>
                <small className="text-secondary fst-italic">
                  Use this form to set system global FX rate
                </small>
                <div>
                  <small className="text-danger fw-300 fst-italic">
                    <i className="bi bi-exclamation-triangle-fill me-1"></i>
                    Only use this form if you are authorized to do so
                  </small>
                </div>
              </div>
              <div className="form-container">
                {submitError && (
                  <SubmitAlert icon="bi-exclamation-triangle-fill" message={submitError} error />
                )}
                <Formik
                  initialValues={{
                    rates: [{ currency: "USD" }, { currency: "GBP" }, { currency: "EURO" }],
                  }}
                  validate={validateForm}
                  onSubmit={handleSubmit}
                >
                  <Form className="mb-3">
                    {config.currencies.map((_currency, index) => (
                      <div className="row" key={index}>
                        <TextInput
                          name={`rates[${index}].currency`}
                          type="hidden"
                          value={_currency}
                          required
                        />
                        <div className="col-6">
                          <TextInput
                            label={`${_currency} Buy`}
                            name={`rates[${index}].buy`}
                            type="number"
                            placeholder="0"
                            required
                          />
                        </div>
                        <div className="col-6">
                          <TextInput
                            label={`${_currency} Sell`}
                            name={`rates[${index}].sell`}
                            type="number"
                            placeholder="0"
                            required
                          />
                        </div>
                      </div>
                    ))}
                    <TextInput label={"Username"} name="username" placeholder="johnDoe" required />
                    <TextInput
                      label={"Password"}
                      type="password"
                      name="password"
                      placeholder="**********"
                      required
                    />

                    <div className="d-grid my-5 mb-3">
                      <SecondaryButton type="submit" disabled={isSubmitting}>
                        Submit new rate
                      </SecondaryButton>
                    </div>
                    {submitMessage && (
                      <SubmitAlert icon="bi-check-circle-fill" message={submitMessage} success />
                    )}
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer style={{ position: "absolute", bottom: "0" }} /> */}
      </div>
    </>
  );
}

function TextInput({ label, type = "text", ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={type !== "hidden" ? `mb-2` : null}>
      {label ? (
        <label className="form-label" htmlFor={props.id || props.name}>
          <small>{label}</small>
        </label>
      ) : null}
      <input type={type} className="form-control" {...field} {...props} />
      {meta.touched && meta.error ? (
        <small className="text-accent-local fw-500">
          <i className="bi bi-exclamation-circle-fill pe-1"></i> {errors}
        </small>
      ) : null}
    </div>
  );
}

function SubmitAlert({ icon, message, success = false, error = false }) {
  const successClassName = success ? "alert-success" : null;
  const errorClassName = error ? "alert-danger-local" : null;

  return (
    <div
      className={`d-flex justify-content-center align-items-center text-center alert mb-4 ${successClassName} ${errorClassName}`}
      role="alert"
    >
      <i className={`bi me-1 ${icon}`}></i>
      {message}
    </div>
  );
}

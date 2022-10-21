import Head from "next/head";
import { useState } from "react";
import config from "../backend/config.json";
import { SecondaryButton } from "../components/ui/Button";

export default function Home() {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState(undefined);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setTouched(Object.assign({}, touched, { [name]: true }));
    const newFormValues = Object.assign({}, formValues, { [name]: value });
    setFormValues(newFormValues);
    // setFormErrors(Object.assign({}, formErrors, validate(newFormValues)));
  }

  async function handleSubmit(e) {
    e.preventDefault();
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
      console.log(resultJson);
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 29 ~ handleSubmit ~ error", error);
    }
  }

  return (
    <>
      <Head>
        <title>Rate Manager - CobaltSwap</title>
      </Head>
      <div className="position-relative main" style={{ minHeight: "100%", overflow: "auto" }}>
        <div className="container text-center my-5" style={{ minHeight: "100%" }}>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100%" }}
          >
            <div className="col-10 col-md-7 col-lg-5 bg-primary-local p-5 rounded-3">
              <div id="logo" className="logo-container mb-5">
                Logo goes here
              </div>
              <div className="form-container">
                <div className="mb-2 font-heading">
                  <p className="h4 mb-4 fw-600">Rate Manager</p>
                </div>
                {/* [
                  {currency: USD, buy: "700", sell: 900},
                  {currency: USD, buy: "700", sell: 900}
                    ] */}
                <form onSubmit={handleSubmit}>
                  {config.currencies.map((_currency, index) => (
                    <div className="row" key={index}>
                      <div>
                        <TextInput
                          name={`rates[${index}].currency`}
                          type="hidden"
                          value={_currency}
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <TextInput
                          label={`${_currency} Buy`}
                          name={`rates[${index}].buy`}
                          type="number"
                          onChange={handleChange}
                          placeholder="0"
                          required
                          errors={
                            formErrors.username && touched.username ? formErrors.username : ""
                          }
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <TextInput
                          label={`${_currency} Sell`}
                          name={`rates[${index}].sell`}
                          type="number"
                          placeholder="0"
                          onChange={handleChange}
                          required
                          errors={
                            formErrors.username && touched.username ? formErrors.username : ""
                          }
                        />
                      </div>
                    </div>
                  ))}
                  <TextInput
                    label={"Username"}
                    name="username"
                    placeholder="johnDoe"
                    onChange={handleChange}
                    required
                    errors={formErrors.username && touched.username ? formErrors.username : ""}
                  />
                  <TextInput
                    label={"Password"}
                    type="password"
                    name="password"
                    placeholder="**********"
                    onChange={handleChange}
                    required
                    errors={formErrors.password && touched.password ? formErrors.password : ""}
                  />

                  <div className="d-grid mt-1">
                    <SecondaryButton disabled={isSubmitting}>Submit new rate</SecondaryButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer style={{ position: "absolute", bottom: "0" }} /> */}
      </div>
    </>
  );
}

function TextInput({ label, name, errors, type = "text", ...rest }) {
  return (
    <div className="mb-2">
      <label htmlFor={name} className="form-label d-flex mb-1">
        <small>{label}</small>
      </label>
      <input type={type} className="form-control p-3" id={name} name={name} {...rest} />
      <div className="pt-2">
        <small className="text-accent-local fw-500">
          {errors ? (
            <>
              <i className="bi bi-exclamation-circle-fill pe-1"></i> {errors}
            </>
          ) : (
            ""
          )}
        </small>
      </div>
    </div>
  );
}

function SignupForm() {
  return (
    <div className="signup-form">
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control p-2 p-md-3"
          id="firstName"
          placeholder="John"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control p-2 p-md-3"
          id="lastName"
          placeholder="Doe"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control p-2 p-md-3"
          id="firstName"
          placeholder="e.g Hello@ask.com"
          required
        />
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          I read and agree to the Terms and Conditions
        </label>
      </div>
      <div className="d-grid">
        <button className="btn btn-secondary-local py-3">Sign Up</button>
      </div>
    </div>
  );
}

export default SignupForm;

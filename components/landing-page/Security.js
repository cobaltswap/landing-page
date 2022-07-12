function Security() {
  return (
    <section className="landing-page-security py-4 py-md-5">
      <div className="container d-flex flex-column flex-md-row align-items-center px-3 px-md-5">
        <div className="order-1 ms-md-5 mb-3 text-center text-md-start">
          <h2 className="fw-bold text-primary-local">Guaranteed safety and security</h2>
          <p>
            At Cobalt, all transactions are 100% safe and secure. We guarantee high-level protection
            from fraudulent transactions.
          </p>
        </div>
        <div className="order-0 col-md-4 col-lg-4 mb-5 mb-md-0">
          <img className="img-fluid" src="./Security lock.png" alt="Security code lock" />
        </div>
      </div>
    </section>
  );
}

export default Security;

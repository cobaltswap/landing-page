import Image from "next/image";
import securityLockImage from "../../../public/assets/security_lock.png";

function Security() {
  return (
    <section className="landing-page-security">
      <div className="container py-5 px-4 px-md-5">
        <div className="row align-items-md-center py-4 py-md-5 my-3">
          <div className="order-md-2 col-12 col-md-6 col-lg-6 mb-5 pb-4 mb-sm-3 mb-md-0">
            <div className="col-lg-10">
              <header className="h1 fw-700 mb-4 font-heading">Guaranteed safety and security</header>
              <p className="text-secondary fs-4">
                At Cobalt, all transactions are 100% safe and secure. We guarantee high-level
                protection from fraudulent transactions.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 me-md-auto">
            <div className="col-md-10">
              <Image
                className="img-fluid"
                src={securityLockImage}
                alt="Security code lock"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Security;

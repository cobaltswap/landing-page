import Link from "next/link";

function CTA_section() {
  return (
    <section className="bg-accent py-5">
      <div className="container py-3 px-3 px-md-5 text-center">
        <div className="row">
          <h2 className=" col-12 col-md-10 col-lg-6 mx-auto fw-bold mb-4 mb-md-3">
            Send and receive money within and outside Africa
          </h2>
          <p className="col-md-10 col-lg-7 mx-auto mb-3">
            Receive payments from anywhere in the world, and convert them to your desired currency.
            You&apos;ll always get the real exchange rate, and the low fees we&apos;re known for.
          </p>
          <div className="d-grid gap-2 d-md-block">
            <Link href="#">
              <a className="col-6 col-lg-2 mx-auto btn btn-primary-local cta">Get Early Access</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA_section;

import Link from "next/link";

function CTA_section() {
  return (
    <section className="bg-accent">
      <div className="container py-5 px-4 px-md-5 text-center">
        <div className="row py-md-5 my-1">
          <header className="fw-700 h1 col-11 col-md-10 col-lg-6 mx-auto mb-4 font-heading">
            Send and receive money within and outside Africa
          </header>
          <p className="fs-4 col-md-10 col-lg-8 mx-auto mb-5">
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

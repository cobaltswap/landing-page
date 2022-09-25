import Link from "next/link";

function CTA_section() {
  return (
    <section className="bg-accent py-5">
      <div className="container col-md-10 col-lg-8 text-center py-3">
        <h2 className="fw-bold mb-4">
          Seamless solution to send and receive money within and outside Africa
        </h2>
        <p className="col-lg-9 mx-auto mb-5">
          Receive payments from anywhere in the world, and convert them to your desired currency.
          You&apos;ll always get the real exchange rate, and the low fees we&apos;re known for.
        </p>
        <div className="d-grid gap-2 d-md-block">
          <Link href="#">
            <a className="col-6 col-lg-5 mx-auto btn btn-primary-local cta">Get Early Access</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA_section;

import Link from "next/link";

function Hero() {
  return (
    <section
      id="home"
      className="hero d-flex flex-column justify-content-center align-items-center text-center text-white"
    >
      <div className="container p-5 col-12 col-md-11 col-lg-10">
        <div className="hero__headline mb-3">
          <h1 className="fw-bolder display-1">
            No stress!
            <br />
            Swap your FX
            <br />
            on Cobalt.
          </h1>
        </div>
        <div className="hero__sub-head mb-4 mx-auto">
          Carry out your transactions with ease,
          <br />
          just as you want it.
        </div>
        <div className="hero__cta d-grid gap-2 col-12 col-md-4 col-lg-3 mx-auto my-2">
          <Link href="#">
            <a className="col-md-12 btn btn-lg btn-secondary-local" role="button">
              Get Started
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

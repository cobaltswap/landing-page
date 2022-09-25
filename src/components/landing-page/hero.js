import Image from "next/image";
import Link from "next/link";
import illustration from "../../../public/assets/illustration_hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="hero d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container py-5 col-12 col-md-11 col-lg-10 text-center text-sm-start">
        <div className="row py-5">
          <div className="hero-text-section col-12 col-sm-6 mb-5 mb-sm-0">
            <div className="hero__headline mb-3">
              <h1 className="display-3 fw-bold lh-1">
                No stress!
                <br />
                Swap your FX
                <br />
                on Cobalt.
              </h1>
            </div>
            <div className="hero__sub-head mb-4 mx-auto text-secondary">
              Carry out your transactions with ease,
              <br />
              just as you want it.
            </div>
            <div className="hero__cta row gap-2 col-12 mx-auto my-2">
              <Link href="/signup">
                <a className="col-sm-5 col-md-3 btn btn-lg btn-primary-local" role="button">
                  Get Started
                </a>
              </Link>
              <Link href="/#">
                <a className="col-sm-5 col-md-3 btn btn-lg btn-outline-primary-local" role="button">
                  How it Works
                </a>
              </Link>
            </div>
          </div>
          <div className="hero-illustration-section col-9 cols-sm-6 mx-auto position-relative">
            <div className="rounded">
              <Image
                className="img-fluid rounded-3 float-end"
                src={illustration}
                alt="Illustration hero"
              />
            </div>
            <div className="rates rounded-3 p-3 position-absolute">
              <div className="header text-center mb-5 fw-bold">Daily FX rates</div>
              <div className="buy"></div>
              <div className="sell"></div>
              rate goes here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

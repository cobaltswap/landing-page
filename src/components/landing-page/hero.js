import Image from "next/image";
import Link from "next/link";
import illustration from "../../../public/assets/illustration_hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="hero d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container py-5 py-md-3 px-5 px-md-3 px-lg-5">
        <div className="row py-3 align-items-center">
          <div className="hero-text-section me-auto col-12 col-md-7 col-lg-6 mb-5 mb-sm-0 text-center text-sm-start">
            <div className="col-xxl-10">
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
                Carry out your transactions with ease, just as you want it.
              </div>
              <div className="hero__cta container my-2 p-0">
                <div className="row px-md-3 gap-2">
                  <Link href="/signup">
                    <a className="col-md-4 col-lg-3 btn btn-lg btn-primary-local" role="button">
                      Get Started
                    </a>
                  </Link>
                  <Link href="/#">
                    <a
                      className="col-md-4 col-lg-3 btn btn-lg btn-outline-primary-local"
                      role="button"
                    >
                      How it Works
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-illustration-section col-12 col-md-5 col-lg-5 col-xxl-5 mx-auto position-relative">
            <div className="rounded">
              <Image
                className="img-fluid rounded-3 float-end"
                src={illustration}
                alt="Illustration hero"
              />
            </div>
            <div className="rates container rounded-3 py-3 py-md-2 py-lg-3 py-xxl-4 position-absolute">
              <header className="text-center mb-3 mb-lg-4 fw-bold">Daily FX rates</header>
              <div className="row gap-2 align-items-center justify-content-center">
                <div className="buy d-flex align-items-center flex-1 mx-auto col-11 col-md-5 p-0">
                  <small className="fw-mid flex-fill">We buy</small>
                  <div className="d-flex align-self-end align-items-center px-3 py-2 border border-1 bg-white rounded rounded-3">
                    <div className="input-group">
                      <button
                        className="btn bg-primary-local dropdown-toggle me-3"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="me-1" id="buy-currency-flag">
                          $
                        </span>{" "}
                        USD
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          {/* <a className="dropdown-item" href="#">
                            Action
                          </a> */}
                        </li>
                      </ul>
                    </div>
                    <span id="buy-rate" className="">
                      710/$
                    </span>
                  </div>
                </div>
                <div className="sell d-flex align-items-center mx-auto col-11 col-md-5 p-0">
                  <small className="fw-mid flex-fill">We Sell</small>
                  <div className="d-flex align-items-center px-3 py-2 border border-1 bg-white rounded rounded-3">
                    <div className="input-group">
                      <button
                        className="btn bg-primary-local dropdown-toggle me-3"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="me-1" id="buy-currency-flag">
                          $
                        </span>{" "}
                        USD
                      </button>
                      <ul className="dropdown-menu"></ul>
                    </div>
                    <span id="buy-rate" className="">
                      710/$
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import Link from "next/link";

function Hero() {
  return (
    <section
      id="hero"
      className="hero d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container pt-5 py-md-3 px-5 px-md-3 px-lg-5">
        <div className="row justify-content-between">
          <div className="hero-text-section pt-5 pt-md-5 px-md-0 col-12 col-md-6 col-lg-5 mb-5 me-auto pb-5 text-center text-md-start">
            <div className="col-xxl-10">
              <div className="hero__headline mb-3">
                <h1 className="display-3 fw-600 lh-1 font-heading">
                  No stress!
                  <br />
                  Swap your FX
                  <br />
                  on Cobalt.
                </h1>
              </div>
              <div className="hero__sub-head col-11 col-md-12 mb-4 mx-auto text-secondary">
                Carry out your transactions with ease, just as you want it.
              </div>
              <div className="hero__cta my-2">
                <div className="d-flex flex-wrap gap-2">
                  <div className="col-9 col-md-4 col-lg-4 mx-auto mx-md-0 p-0">
                    <Link href="/signup">
                      <a className="col-12 btn btn-lg btn-primary-local" role="button">
                        Get Started
                      </a>
                    </Link>
                  </div>
                  <div className="col-9 col-md-4 col-lg-4 mx-auto mx-md-0 p-0">
                    <Link href="/#">
                      <a className="col-12 btn btn-lg btn-outline-primary-local" role="button">
                        How it Works
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-illustration-section rounded-3 align-self-stretch col-12 col-md-5 col-lg-5 col-xxl-5"></div>
        </div>
        <div className="rates mt-5 mt-md-0">
          <div className="container">
            <div className="row col-md-11 rounded-3 col-lg-9 mx-md-auto mb-2 py-4 py-md-4 py-lg-3 py-xxl-4">
              <header className="text-center mb-3 mb-lg-4 fw-bold">Daily FX rates</header>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <div className="buy d-flex align-items-center col-9 col-md-5 p-0">
                  <small className="fw-500 me-3">We buy</small>
                  <div className="d-flex col-9 align-self-end align-items-center px-3 py-2 border border-1 bg-white rounded rounded-3">
                    <div className="input-group">
                      <button
                        className="btn btn-primary-local dropdown-toggle me-3"
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
                    <span id="buy-rate" className="fw-600">
                      710/$
                    </span>
                  </div>
                </div>
                <div className="sell d-flex align-items-center col-9 col-md-5 p-0">
                  <small className="fw-500 me-3">We Sell</small>
                  <div className="d-flex col-9 align-items-center px-3 py-2 border border-1 bg-white rounded rounded-3">
                    <div className="input-group">
                      <button
                        className="btn btn-primary-local dropdown-toggle me-3"
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
                    <span id="buy-rate" className="fw-600">
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

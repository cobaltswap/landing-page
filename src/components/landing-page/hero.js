import Link from "next/link";

function Hero({ rates }) {
  const currencyMap = {
    usd: { symbol: "bi-currency-dollar" },
    gbp: { symbol: "bi-currency-pound" },
    euro: { symbol: "bi-currency-euro" },
    cad: { symbol: "bi-currency-dollar" },
  };
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
            <div className="row flex-wrap col-md-10 col-lg-9 mx-md-auto mb-2 p-3 py-4 rounded-3">
              {/* Buy section */}
              <div className="col-12 col-md-6">
                <div className="p-3 mb-3 mx-2 mb-md-0 rounded-3 bg-primary-local text-white text-center">
                  <p className="fw-500 mb-1">WE BUY</p>
                  <div className="d-flex justify-content-evenly align-items-center px-4">
                    {rates.map((_rate, index) => (
                      <div className="px-1" key={index}>
                        <small>{_rate.currency.toUpperCase()}</small>
                        <div className="fw-500">
                          {_rate.buy}/
                          <i
                            className={`bi ${currencyMap[_rate.currency.toLowerCase()]?.symbol}`}
                          ></i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Sell section */}
              <div className="col-12 col-md-6">
                <div className="rounded-3 p-3 mx-2 bg-dark text-white text-center">
                  <p className="fw-500 mb-1">WE SELL</p>
                  <div className="d-flex justify-content-evenly align-items-center px-4">
                    {rates.map((_rate, index) => (
                      <div className="px-1" key={index}>
                        <small>{_rate.currency.toUpperCase()}</small>
                        <div className="fw-500">
                          {_rate.sell}/
                          <i
                            className={`bi ${currencyMap[_rate.currency.toLowerCase()]?.symbol}`}
                          ></i>
                        </div>
                      </div>
                    ))}
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

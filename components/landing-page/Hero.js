function Hero() {
  return (
    <section id="home" className="hero bg-primary-local d-flex flex-column text-center">
      <div className="container p-5 col-12 col-md-11 col-lg-10">
        <div className="hero__headline mb-3">
          <h1 className="fw-bolder display-1">No stress! Swap your FX on Cobalt.</h1>
        </div>
        <div className="hero__sub-head mb-4 mx-auto">
          Carry out your transactions with ease just as you want it.
        </div>
        <div className="hero__cta d-grid gap-2 col-12 col-md-4 col-lg-3 mx-auto my-2">
          <a href="#" className="col-md-12 btn btn-lg btn-secondary-local mx-3" role="button">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

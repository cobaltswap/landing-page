import Image from "next/image";
import illustration1 from "../../public/assets/illustration1.png";
import illustration2 from "../../public/assets/illustration2.png";
import illustration3 from "../../public/assets/illustration3.png";

export default function Illustrations() {
  return (
    <section id="about" className="landing-page-illustrations">
      <div className="container px-3 px-md-3 px-lg-5">
        <div className="illustration row d-flex align-items-md-center justify-content-mb-between mb-5 mb-md-1 pb-md-1">
          <div className="illustration__text col-12 col-md-6 me-auto">
            <p className="h3 text-primary-local mb-3 fw-bold">
              Send and receive money across borders with Cobalt
            </p>
            <p>
              Cobalt allows you exchange currencies with other users at your own desired or
              negotiated rates. You can beat the bank rates and save time by doing this all in the
              comfort of your own home.
            </p>
          </div>
          <div className="illustration__img col-12 col-md-5 ms-auto mb-5">
            <Image
              className="img-fluid rounded float-end"
              src={illustration1}
              alt="Illustration 1"
            />
          </div>
        </div>
        <div className="illustration row d-flex align-items-md-center justify-content-mb-between mb-1 pb-md-5">
          <div className="illustration__img col-12 col-md-5 me-auto mb-5">
            <Image
              className="img-fluid rounded float-end"
              src={illustration2}
              alt="Illustration 2"
            />
          </div>
          <div className="illustration__text col-12 col-md-6 ms-auto">
            <div className="d-flex align-items-center mb-3">
              <p className="h3 fw-bold">Cobalt Swap</p>
              <span className="small fst-italic fw-6 text-warning">&nbsp; Coming Soon</span>
            </div>
            <p>
              Cobalt allows you exchange currencies with other users at your own desired or
              negotiated rates. You can beat the bank rates and save time by doing this all in the
              comfort of your own home.
            </p>
          </div>
        </div>
        <div className="illustration row d-flex align-items-md-center justify-content-mb-between mb-1 pb-md-5">
          <div className="illustration__text col-12 col-md-6 me-auto">
            <div className="d-flex flex-wrap align-items-center mb-3">
              <p className="h3 text-primary-local fw-bold">Join the Express Road</p>
              <span className="small fst-italic fw-6 text-warning">&nbsp; Coming Soon</span>
            </div>
            <p>
              Get rid of delays and lags when trying to send money to family and friends outside
              Nigeria. Cobalt Express feature is your solution. Now you can send money from the UK
              or US to Nigeria and to up to 20 African countries at the best rates and at the speed
              of light.
            </p>
          </div>
          <div className="illustration__img col-12 col-md-5 ms-auto mb-5">
            <Image
              className="img-fluid rounded float-end"
              src={illustration3}
              alt="Illustration 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

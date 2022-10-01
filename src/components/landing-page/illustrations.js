import Image from "next/image";
import illustration1 from "../../../public/assets/illustration1.png";
import illustration2 from "../../../public/assets/illustration2.png";
import illustration3 from "../../../public/assets/illustration3.png";

export default function Illustrations() {
  return (
    <section id="about" className="landing-page-illustrations">
      <div className="illustration">
        <div className="container py-5 px-4 px-md-5">
          <div className="row align-items-md-center py-md-5">
            <div className="illustration__text col-12 col-md-6 me-auto mb-5 pb-5 mb-md-0">
              <div className="col-12 col-md-11 col-lg-10">
                <header className="h1 mb-3 fw-700 font-heading">
                  Send and receive money across borders with Cobalt
                </header>
                <p className="text-secondary fs-4">
                  Cobalt allows you exchange currencies with other users at your own desired or
                  negotiated rates. You can beat the bank rates and save time by doing this all in
                  the comfort of your own home.
                </p>
              </div>
            </div>
            <div className="illustration__img col-12 col-md-6 ms-auto mb-5 mb-md-0">
              <Image
                className="img-fluid float-end"
                layout="responsive"
                src={illustration1}
                alt="Illustration 1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="illustration bg-accent-2">
        <div className="container py-5 px-4 px-md-5">
          <div className="row py-4 py-md-5 my-3">
            <div className="order-md-2 illustration__text col-12 col-md-5 ms-auto mb-5 pb-5">
              <header className="mb-5">
                <span className="h1 fw-700 font-heading">Cobalt Swap</span>
                <span className="small fs-5 text-warning">&nbsp;Coming Soon</span>
              </header>
              <p className="fs-4 mb-4">
                Take advantage of our ever-active secure marketplace to get the currency you need
                sent to anyone.
              </p>
              <p className="fs-4">
                Create an offer card at your preferred rate, Accept existing offers that work for
                you and provide the beneficiary of the exchanged funds.
              </p>
            </div>
            <div className="order-1 illustration__img col-12 col-md-6 me-auto">
              <Image
                className="img-fluid float-end"
                layout="responsive"
                src={illustration2}
                alt="Illustration 2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="illustration">
        <div className="container py-5 px-4 px-md-5">
          <div className="row align-items-md-center py-4 py-mb-5 my-3">
            <div className="illustration__text col-12 col-md-5 col-lg-5 me-auto">
              <div className="col-12 col-md-12">
                <div className="d-flex flex-wrap align-items-center mb-3">
                  <header className="mb-4">
                    <span className="h1 fw-700 font-heading">Join the Express Road</span>
                    <span className="small fw-6 text-warning">&nbsp; Coming Soon</span>
                  </header>
                </div>
                <p className="text-secondary fs-4 mb-4">
                  Get rid of delays and lags when trying to send money to family and friends outside
                  Nigeria.Cobalt Express feature is your solution.
                </p>
                <p className="text-secondary fs-4 mb-4">
                  Now you can send money from the UK or US to Nigeria and to up to 20 African
                  countries at the best rates and at the speed of light.
                </p>
              </div>
            </div>
            <div className="illustration__img col-12 col-md-7 ms-auto mb-5">
              <Image className="img-fluid float-end" src={illustration3} alt="Illustration 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coming Soon | Cobaltswap</title>
      </Head>
      <div className="position-relative fullscreen">
        <Navbar />
        <ComingSoon />
      </div>
    </>
  );
}

function ComingSoon() {
  const [emailAddress, setEmailAddress] = useState(undefined);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(emailAddress);
  }
  return (
    <div id="coming-soon" className="coming-soon d-flex align-items-center pt-5">
      <div className="container mt-3 mt-md-5">
        <div className="d-flex flex-column col-10 col-md-8 mx-auto text-center">
          <div className="coming-soon__scroll col-10 col-lg-8 mx-auto bg-light-green mb-4 text-start">
            {/* <div className="scroll-text text-start">coming soon...coming soon...</div>
            <div className="scroll-text text-start">coming soon...coming soon...</div> */}
            <div className="scroll-text">
              <span className="me-4">coming soon...</span>
              <span className="me-4">coming soon...</span>
            </div>
            <div className="scroll-text">
              <span className="me-4">coming soon...</span>
              <span className="me-4">coming soon...</span>
            </div>
            <div className="scroll-text">
              <span className="me-4">coming soon...</span>
              <span className="me-4">coming soon...</span>
            </div>
            <div className="scroll-text">
              <span className="me-4">coming soon...</span>
              <span className="me-4">coming soon...</span>
            </div>
          </div>
          <p className="display-3 fw-600 lh-1 font-heading">
            Our platform will be launching <span className="text-primary-local">SOON!</span>
          </p>
          <p className="text-secondary col-9 mb-4 mx-auto">
            We are working hard to get things up and running
          </p>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-wrap gap-2 justify-content-center col-10 col-lg-12 mx-auto mb-5 pb-5">
              <div className="col-11 col-lg-4">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="Enter your email address"
                />
              </div>
              <div className="col-11 col-lg-2">
                <button className="btn btn-primary-local py-2 col-12" type="submit">
                  Notify me
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

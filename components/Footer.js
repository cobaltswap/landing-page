function Footer() {
  return (
    <footer className="bg-primary-local py-5 py-md-5">
      <div className="container px-3 px-lg-5 py-md-5">
        <div className="d-md-flex justify-content-md-between">
          <div className="mb-4">
            <a href="#">
              <img src="./Logo Explorations-blue_Logo in PNG copy 1.png" alt="" />
            </a>
          </div>
          <div className="d-md-flex justify-content-md-evenly mx-md-1 mx-lg-2 col-md-6 col-lg-7">
            <section className="mb-4 mx-md-2">
              <h5 className="mb-3">Products</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">CobaltSwap</a>
                </li>
              </ul>
            </section>
            <section className="mb-4 mx-md-2">
              <h5 className="mb-3">Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#">How it Works</a>
                </li>
              </ul>
            </section>
            <section className="mb-4 mx-md-2">
              <h5 className="mb-3">Legal</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </section>
          </div>
          <address className="mb-4 text-md-end">
            {/* Social media */}
            <div className="footer__social-media mb-2">
              <a className="pe-2" href="#" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a className="pe-2" href="#" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
            {/* email */}
            <div className="footer__email mb-2">
              <a href="mailto:contact@cobaltswap.com">contact@cobaltswap.com</a>
            </div>
            {/* phone */}
            <div className="footer__phone mb-2">
              <a href="tel:+234703365997">+234 070 336 5997</a>
            </div>
          </address>
        </div>
        <div className="copyright text-center">
          <small>&copy; All Right Reserved, Cobalt {new Date().getFullYear()}</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

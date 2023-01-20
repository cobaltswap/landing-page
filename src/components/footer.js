import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/white_Logo.png";
import config from "../config.json";
import parsePhoneNumberForView from "../utils/parse-phone-number-for-view";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 fw-300">
      <div className="container px-4 px-md-3 px-lg-4 py-md-5">
        <div className="d-md-flex justify-content-md-between">
          <div className="col-4 col-md-2 mb-3">
            <Link href="#">
              <a>
                <Image src={logo} alt="Cobaltswap logo" layout="responsive" />
              </a>
            </Link>
          </div>
          <div className="d-md-flex justify-content-md-between mx-md-1 mx-lg-2 col-md-6 col-lg-6 fs-6">
            <section className="mb-4 mx-md-2">
              <header className="h5 mb-2 mb-md-4">Products</header>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">
                    <a>CobaltSwap</a>
                  </Link>
                </li>
              </ul>
            </section>
            <section className="mb-4 mx-md-2">
              <header className="mb-2 mb-md-4 h5">Company</header>
              <ul className="list-unstyled">
                <li>
                  <Link href="#about">
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>How it Works</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Reviews</a>
                  </Link>
                </li>
              </ul>
            </section>
            <section className="mb-4 mx-md-2">
              <header className="h5 mb-2 mb-md-4">Legal</header>
              <ul className="list-unstyled">
                <li>
                  <Link href="/terms">
                    <a>Terms &amp; Conditions</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Privacy</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Security</a>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <address className="mb-4 text-md-end">
            {/* Social media */}
            <div className="footer__social-media mb-2">
              <Link href={config.contact.instagramHandle}>
                <a className="pe-2" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
              </Link>
              <Link href={config.contact.twitterHandle}>
                <a className="pe-2" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
              </Link>
              <Link href={config.contact.linkedinHandle}>
                <a className="pe-2" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </Link>
              <Link href={config.contact.facebookHandle}>
                <a className="pe-2" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
              </Link>
            </div>
            {/* email */}
            <div className="footer__email mb-2">
              <Link href={`mailto:${config.contact.email}`}>
                <a>{config.contact.email}</a>
              </Link>
            </div>
            {/* phone */}
            <div className="footer__phone mb-2">
              <Link href={`tel:+${config.contact.mobilePhone1}`}>
                <a>{parsePhoneNumberForView(config.contact.mobilePhone1)}</a>
              </Link>
              <br />
              <Link href={`tel:+${config.contact.mobilePhone2}`}>
                <a>{parsePhoneNumberForView(config.contact.mobilePhone2, "uk")}</a>
              </Link>
            </div>
          </address>
        </div>
        <div className="copyright text-center mt-5 pt-5">
          <small>&copy; All Right Reserved, Cobalt {new Date().getFullYear()}</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

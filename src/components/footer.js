import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/white_Logo.png";
import config from "../config.json";

function Footer() {
  return (
    <footer className="bg-primary-local py-5 py-md-5">
      <div className="container px-3 px-lg-5 py-md-5">
        <div className="d-md-flex justify-content-md-between">
          <div className="mb-4">
            <Link href="#">
              <a className="col-4">
                <Image src={logo} alt="" />
              </a>
            </Link>
          </div>
          <div className="d-md-flex justify-content-md-evenly mx-md-1 mx-lg-2 col-md-6 col-lg-7">
            <section className="mb-4 mx-md-2">
              <h5 className="mb-3 fw-600">Products</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">
                    <a>CobaltSwap</a>
                  </Link>
                </li>
              </ul>
            </section>
            <section className="mb-4 mx-md-2">
              <h5 className="mb-3">Company</h5>
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
              </ul>
            </section>
            <section className="mb-4 mx-md-2">
              <h5 className="mb-3">Legal</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="#">
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
              <Link href={`tel:+${config.contact.mobilePhone}`}>
                <a>+{config.contact.mobilePhone}</a>
              </Link>
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

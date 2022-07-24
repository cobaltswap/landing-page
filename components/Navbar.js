import Image from "next/image";
import Link from "next/link";
import logo from "../public/Logo Explorations-blue_Logo in PNG copy 1.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md bg-primary-local">
      <div className="container my-4 px-md-3 px-lg-5">
        <Link href="#">
          <a className="navbar-brand col-4">
            <Image src={logo} alt="" />
          </a>
        </Link>
        <button
          className="navbar-toggler me-2 collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="navbar-toggle-icon d-flex flex-column justify-content-center fs-1">
            <i className="bi bi-list"></i>
            <i className="bi bi-x-lg"></i>
          </div>
        </button>
        <div
          className="collapse navbar-collapse mt-5 mt-md-0 justify-content-md-end"
          id="navbarSupportedContent"
        >
          <div className="navbar-links-container d-md-flex py-4 py-md-0">
            <ul className="navbar-nav ms-auto mb-lg-0 px-3">
              <li className="nav-item mx-md-3 py-2 py-md-0">
                <Link href="/#about">
                  <a className="nav-link fs-6">
                    <span className="bi bi-info-circle pe-3 fw-bold d-md-none"></span>
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item mx-md-3 py-2 py-md-0">
                <Link href="#">
                  <a className="nav-link fs-6">
                    <span className="bi bi-gear pe-3 fw-bold d-md-none"></span>
                    How it Works
                  </a>
                </Link>
              </li>
              <li className="nav-item mx-md-3 py-2 py-md-0">
                <Link href="/#faq">
                  <a className="nav-link fs-6">
                    <span className="bi bi-question-square pe-3 fw-bold d-md-none"></span>
                    FAQs
                  </a>
                </Link>
              </li>
            </ul>
            <div className="d-grid py-3 py-md-0 mb-4 mb-md-0">
              <Link href="/signup">
                <a className="fw-bold btn mx-3 mx-md-0 cta" role="button">
                  Sign Up
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

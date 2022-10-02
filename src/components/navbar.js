import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import logo from "../../public/assets/blue_Logo.png";

function Navbar() {
  useEffect(() => {
    document.addEventListener("scroll", addWhiteBgToNav);
    return () => {
      document.removeEventListener("scroll", addWhiteBgToNav);
    };
  }, []);

  function addWhiteBgToNav() {
    if (window.pageYOffset >= 100) {
      document.querySelector("#nav-bar").classList.add("bg-white-translucent", "pt-2");
    } else {
      document.querySelector("#nav-bar").classList.remove("bg-white-translucent", "pt-2");
    }
  }

  return (
    <nav id="nav-bar" className="navbar navbar-expand-lg navbar-expand-md">
      <div className="container py-1 py-md-4 px-4 px-md-3 px-lg-4">
        <Link href="/">
          <a className="navbar-brand">
            <Image src={logo} alt="Cobaltswap logo" />
          </a>
        </Link>
        <button
          className="navbar-toggler collapsed"
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
          className="collapse navbar-collapse justify-content-md-end"
          id="navbarSupportedContent"
        >
          <div
            id="navbar-links-container"
            className="navbar-links-container d-md-flex py-4 py-md-0"
          >
            <ul className="navbar-nav d-md-flex align-items-md-center ms-md-auto mb-lg-0 px-3">
              <NavbarNavLink to="/#about" icon="bi-info-circle" name="About" />
              <NavbarNavLink to="#" icon="bi-gear" name="How it Works" />
              <NavbarNavLink to="/#faq" icon="bi-question-square" name="FAQs" />
            </ul>
            <div className="d-grid py-3 py-md-0 mb-4 mb-md-0">
              <Link href="/signup">
                <a className="btn btn-primary-local mx-3 mx-md-0 cta" role="button">
                  Get Started
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavbarNavLink({ to = "", icon, name }) {
  return (
    <li className="nav-item mx-md-3 py-2 py-md-0">
      <Link href={to}>
        <a className="nav-link fs-6">
          <span className={`bi ${icon ? icon : ""} pe-3 fw-bold d-md-none`}></span>
          {name}
        </a>
      </Link>
    </li>
  );
}

export default Navbar;

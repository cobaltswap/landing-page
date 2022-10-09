import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import logo from "../../public/assets/blue_Logo.png";
import config from "../config.json";

function Navbar() {
  useEffect(() => {
    document.addEventListener("scroll", addWhiteBgToNav);

    return () => {
      document.removeEventListener("scroll", addWhiteBgToNav);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function DOMSelector(_selector) {
    return document.querySelector(_selector);
  }

  function addWhiteBgToNav() {
    console.log(window.scrollY);
    if (window.pageYOffset > 0) {
      const dropdownIsActive = DOMSelector("#navbarSupportedContent").classList.contains("show");
      DOMSelector("#nav-bar").classList.add("border-bottom");
      if (dropdownIsActive) {
        DOMSelector("#nav-bar").classList.add("bg-white");
      } else {
        DOMSelector("#nav-bar").classList.add("bg-white-translucent");
      }
    } else {
      DOMSelector("#nav-bar").classList.remove("bg-white-translucent");
      DOMSelector("#nav-bar").classList.remove("bg-white");
      DOMSelector("#nav-bar").classList.remove("border-bottom");
    }
  }

  return (
    <nav id="nav-bar" className="navbar navbar-expand-lg">
      <div className="container py-1 py-md-2 px-4 px-md-3 px-lg-4">
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
            className="navbar-links-container d-flex d-md-flex align-items-md-center py-4 py-md-0"
          >
            <ul className="navbar-nav d-md-flex align-items-md-center ms-md-auto mb-lg-0 px-3">
              <NavbarNavLink
                to={`tel:${config.contact.mobilePhone1}`}
                icon="bi-telephone-outbound-fill"
                name={`${parsePhoneNumberForView(config.contact.mobilePhone1)}`}
                showIcon
              />
              <NavbarNavLink
                to={`mailto:${config.contact.email}`}
                icon="bi-envelope-fill"
                name={config.contact.email}
                showIcon
              />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavbarNavLink({ to = "", icon, name, showIcon }) {
  return (
    <li className="nav-item mx-md-1 py-2 py-md-0">
      <Link href={to}>
        <a className="nav-link fs-6">
          <span
            className={`bi ${icon ? icon : ""} pe-2 fw-bold ${showIcon ? "" : "d-md-none"}`}
          ></span>
          {name}
        </a>
      </Link>
    </li>
  );
}

function parsePhoneNumberForView(phoneNumber) {
  const phoneNumberString = phoneNumber + "";
  return `+${phoneNumberString.substring(0, 3)} ${phoneNumberString.substring(
    3,
    6
  )} ${phoneNumberString.substring(6, 10)} ${phoneNumberString.substring(10, 20)}`;
}

export default Navbar;

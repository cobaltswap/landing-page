function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md bg-primary-local">
      <div className="container my-4 px-md-3 px-lg-5">
        <a className="navbar-brand" href="#">
          <img src="./Logo Explorations-blue_Logo in PNG copy 1.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                How it Works
              </a>
            </li>
            <a href="#" className="btn mx-3 btn-secondary-local" role="button">
              Sign Up
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

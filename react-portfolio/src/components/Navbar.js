import React from "react";
// import {
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarNav,
//   MDBNavItem,
//   MDBNavLink,
//   MDBNavbarToggler,
//   MDBCollapse,
//   MDBIcon,
// } from "mdbreact";

const NavbarPage = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          RJ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active"
              aria-current="page"
              href="Aboutme.js"
            >
              About Me
            </a>
            <a className="nav-link" href="./Portfolio">
              Portfolio
            </a>
            {/* <a className="nav-link" href="#">
              Resume
            </a> */}
            <ul class="navbar-nav d-flex flex-row reverse">
              <li class="nav-item me-3 me-lg-0">
                <a class="nav-link" href="https://github.com/neoblack91">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a
                  class="nav-link"
                  href="https://www.linkedin.com/in/rajahni-fields"
                >
                  <i class="fab fa-Linkeden"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;

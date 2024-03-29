import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="container-fluid  row g-0 d-none d-lg-flex">
        <div className="col-lg-6 ps-5 text-start d-inline-flex align-items-center">
          <div className="h-100 ">
            <span>Follow Us:</span>
            <a className="btn btn-link " href="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-link " href="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-link " href="linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="btn btn-link " href="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-6 text-end">
          <div className="h-100 topbar-right py-2 px-5">
            <span className="fs-5 fw-bold me-2">
              <i className="fa fa-phone-alt me-2"></i>Call Us:
            </span>
            <span className="fs-5 fw-bold">+012 345 6789</span>
          </div>
        </div>
      </div>
  );
}

export default Header;

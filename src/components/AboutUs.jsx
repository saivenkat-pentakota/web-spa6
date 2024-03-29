import React from "react";
import "./AboutUs.css";
import aboutImg1 from '../images/about-1.jpg';
import aboutImg2 from '../images/about-2.jpg';

function AboutUs() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row gx-3 h-100">
              <div
                className="col-6 align-self-start wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <img className="img-fluid" src={aboutImg1} alt="aboutimg" />
              </div>
              <div
                className="col-6 align-self-end wow fadeInDown"
                data-wow-delay="0.1s"
              >
                <img className="img-fluid" src={aboutImg2} alt="aboutimg" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <p className="fw-medium text-uppercase text-primary mb-2">
              About Us
            </p>
            <h1 className="display-5 mb-4">
              We Are Leader In Industrial Market
            </h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="d-flex align-items-center mb-4">
              <div className="flex-shrink-0 bg-primary p-4">
                <h1 className="display-2">25</h1>
                <h5 className="text-white">Years of</h5>
                <h5 className="text-white">Experience</h5>
              </div>
              <div className="ms-4">
                <p>
                  <i className="fa fa-check text-primary me-2"></i>Power &
                  Energy
                </p>
                <p>
                  <i className="fa fa-check text-primary me-2"></i>Civil
                  Engineering
                </p>
                <p>
                  <i className="fa fa-check text-primary me-2"></i>Chemical
                  Engineering
                </p>
                <p>
                  <i className="fa fa-check text-primary me-2"></i>Mechanical
                  Engineering
                </p>
                <p className="mb-0">
                  <i className="fa fa-check text-primary me-2"></i>Oil & Gas
                  Engineering
                </p>
              </div>
            </div>
            <div className="row pt-2">
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-envelope-open text-white"></i>
                  </div>
                  <div className="ms-3">
                    <p className="mb-2">Email us</p>
                    <h5 className="mb-0">
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="1e777078715e7b667f736e727b307d7173"
                      >
                        industro@gmail.com
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-phone-alt text-white"></i>
                  </div>
                  <div className="ms-3">
                    <p className="mb-2">Call us</p>
                    <h5 className="mb-0">+012 345 6789</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

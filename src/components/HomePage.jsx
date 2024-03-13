import React from "react";
import "./HomePage.css";
import carouselImage1 from '../images/carousel-1.jpg';
import carouselImage2 from '../images/carousel-2.jpg';

import NavBar from "./NavBar";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Facts from "./Facts";
import ChooseUs from "./Chooseus";
import Services from "./Services";
import OurProjects from "./OurProjects";
import OurTeam from "./OurTeam";
import OurOffice from "./OurOffice";


function HomePage() {
  return (
    <>
    <div>
      <Header />
      <NavBar />
      <div className="container-fluid px-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src={carouselImage1}
                alt="carouselImage"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-10 text-start">
                      <p className="fs-5 fw-medium text-primary text-uppercase animated slideInRight">
                        25 Years of Working Experience
                      </p>
                      <h1 className="display-1 text-white mb-5 animated slideInRight">
                        Industrial Solution Providing Company
                      </h1>
                      <a
                        href
                        className="btn btn-primary py-3 px-5 animated slideInRight"
                      >
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src={carouselImage2}
                alt="carouselImage"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-10 text-start">
                      <p className="fs-5 fw-medium text-primary text-uppercase animated slideInRight">
                        25 Years of Working Experience
                      </p>
                      <h1 className="display-1 text-white mb-5 animated slideInRight">
                        The Best Reliable Industry Solution
                      </h1>
                      <a
                        href
                        className="btn btn-primary py-3 px-5 animated slideInRight"
                      >
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <AboutUs/>
    <Facts/>
    <ChooseUs/>
    <Services/>
    <OurProjects/>
    <OurTeam/>
    <OurOffice/>
    </>
  );
}

export default HomePage;

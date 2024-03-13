import React from "react";
import "./OurProjects.css";
import projectImg1 from "../images/project-1.jpg";
import projectImg2 from "../images/project-2.jpg";
import projectImg3 from "../images/project-3.jpg";
import projectImg4 from "../images/project-4.jpg";
import projectImg5 from "../images/project-5.jpg";
import projectImg6 from "../images/project-6.jpg";

function OurProjects() {
  return (
    <div class="d-flex flex-row container-fluid bg-dark pt-5 my-5 px-0">
      <div
        class="text-center mx-auto mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <p class="fw-medium text-uppercase text-primary mb-2">Our Projects</p>
        <h1 class="display-5 text-white mb-5">
          See What We Have Completed Recently
        </h1>
      </div>
      <div
        class="d-flex flex-row owl-carousel project-carousel wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a class="project-item" href>
          <img class="img-fluid" src={projectImg1} alt="projectImg-1" />
          <div class="project-title">
            <h5 class="text-primary mb-0">Auto Engineering</h5>
          </div>
        </a>
        <a class="project-item" href>
          <img class="img-fluid" src={projectImg2} alt="projectImg-2" />
          <div class="project-title">
            <h5 class="text-primary mb-0">Civil Engineering</h5>
          </div>
        </a>
        <a class="project-item" href>
          <img class="img-fluid" src={projectImg3} alt="projectImg-3" />
          <div class="project-title">
            <h5 class="text-primary mb-0">Gas Engineering</h5>
          </div>
        </a>
        <a class="project-item" href>
          <img class="img-fluid" src={projectImg4} alt="projectImg-4" />
          <div class="project-title">
            <h5 class="text-primary mb-0">Power Engineering</h5>
          </div>
        </a>
        <a class="project-item" href>
          <img class="img-fluid" src={projectImg5} alt="projectImg-5" />
          <div class="project-title">
            <h5 class="text-primary mb-0">Energy Engineering</h5>
          </div>
        </a>
        <a class="project-item" href>
          <img class="img-fluid" src={projectImg6} alt="projectImg-6" />
          <div class="project-title">
            <h5 class="text-primary mb-0">Water Engineering</h5>
          </div>
        </a>
      </div>
    </div>
  );
}

export default OurProjects;

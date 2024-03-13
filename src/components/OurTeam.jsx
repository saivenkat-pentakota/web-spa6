import React from "react";
import './OurTeam.css';
import team1 from '../images/team-1.jpg';
import team2 from '../images/team-2.jpg';
import team3 from '../images/team-3.jpg';


function OurTeam(){
    return(
        <div className="container-xxl py-5">
<div className="container">
<div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
<p className="fw-medium text-uppercase text-primary mb-2">Our Team</p>
<h1 className="display-5 mb-5">Dedicated Team Members</h1>
</div>
<div className="row g-4">
<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
<div className="team-item">
<img className="img-fluid" src={team1} alt="team1"/>
<div className="d-flex">
<div className="flex-shrink-0 btn-square bg-primary" style={{width: "90px", height: "90px"}}>
<i className="fa fa-2x fa-share text-white"></i>
</div>
<div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4" style={{height: "90px"}}>
<h5>Rob Miller</h5>
<span className="text-primary">CEO & Founder</span>
<div className="team-social">
<a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-facebook-f"></i></a>
<a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-twitter"></i></a>
<a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-instagram"></i></a>
</div>
</div>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
<div className="team-item">
<img className="img-fluid" src={team2} alt="team2"/>
<div className="d-flex">
<div className="flex-shrink-0 btn-square bg-primary" style={{width: "90px", height: "90px"}}>
<i className="fa fa-2x fa-share text-white"></i>
</div>
<div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4" style={{height: "90px"}}>
<h5>Adam Crew</h5>
<span className="text-primary">Project Manager</span>
<div className="team-social">
<a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-facebook-f"></i></a>
<a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-twitter"></i></a>
<a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-instagram"></i></a>
</div>
</div>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
<div className="team-item">
<img className="img-fluid" src={team3} alt="team3"/>
<div className="d-flex">
<div className="flex-shrink-0 btn-square bg-primary" style={{width: "90px", height: "90px"}}>
<i className="fa fa-2x fa-share text-white"></i>
</div>
<div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4" style={{height: "90px"}}>
<h5>Peter Farel</h5>
<span className="text-primary">Engineer</span>
<div className="team-social">
<a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-facebook-f"></i></a>
<a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-twitter"></i></a>
<a className="btn btn-square btn-dark rounded-circle mx-1" href><i className="fab fa-instagram"></i></a>
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

export default OurTeam;
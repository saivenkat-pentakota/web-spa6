import React from "react";
import './Services.css';
import serviceImg1 from '../images/service-1.jpg';
import serviceImg2 from '../images/service-2.jpg';
import serviceImg3 from '../images/service-3.jpg';

function Services(){
    return(
        <div class="container-xxl py-5">
<div class="container">
<div class="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
<p class="fw-medium text-uppercase text-primary mb-2">Our Services</p>
<h1 class="display-5 mb-4">We Provide Best Industrial Services</h1>
</div>
<div class="row gy-5 gx-4">
<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
<div class="service-item">
<img class="img-fluid" src={serviceImg1} alt="serviceImg1"/>
<div class="service-img">
<img class="img-fluid" src={serviceImg1} alt="serviceImg1"/>
</div>
<div class="service-detail">
<div class="service-title">
<hr class="w-25"/>
<h3 class="mb-0">Civil & Gas Engineering</h3>
<hr class="w-25"/>
</div>
<div class="service-text">
<p class="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
</div>
</div>
<a class="btn btn-light" href>Read More</a>
</div>
</div>
<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
<div class="service-item">
<img class="img-fluid" src={serviceImg2} alt="serviceImg2"/>
<div class="service-img">
<img class="img-fluid" src={serviceImg2} alt="serviceImg2"/>
</div>
<div class="service-detail">
<div class="service-title">
<hr class="w-25"/>
<h3 class="mb-0">Power & Energy Engineering</h3>
<hr class="w-25"/>
</div>
<div class="service-text">
<p class="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
</div>
</div>
<a class="btn btn-light" href>Read More</a>
</div>
</div>
<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
<div class="service-item">
<img class="img-fluid" src={serviceImg3} alt="serviceImg3"/>
<div class="service-img">
<img class="img-fluid" src={serviceImg3} alt="serviceImg3"/>
</div>
<div class="service-detail">
<div class="service-title">
<hr class="w-25"/>
<h3 class="mb-0">Plumbing & Water Treatment</h3>
<hr class="w-25"/>
</div>
<div class="service-text">
<p class="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
</div>
</div>
<a class="btn btn-light" href>Read More</a>
</div>
</div>
</div>
</div>
</div>


        
    );

}

export default Services;
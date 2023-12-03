import React from 'react';
import "./Timetable.scss";
const Timetable = () => {
  return (
    <>
    <section className=" doctors-list" id="Timetable">
      <div className="container">
    <div className="content-header-text">
   <h3>WE are Here for you</h3>
   <p>All our consultants are highly experienced in their fields and <br/>produce excellent outcomes for patients</p>
   </div>

   <div id="doctors-card" className="carousel slide mt-5" data-bs-ride="carousel">

{/* <!-- Indicators/dots --> */}
<div className="carousel-indicators">
  <button type="button" data-bs-target="#doctors-card" data-bs-slide-to="0" className="active indicators-button"></button>
  <button className="indicators-button" type="button" data-bs-target="#doctors-card" data-bs-slide-to="1"></button>
  <button className="indicators-button" type="button" data-bs-target="#doctors-card" data-bs-slide-to="2"></button>
</div>

{/* <!-- The slideshow/carousel --> */}
<div className="carousel-inner">
  <div className="carousel-item active">

<div className="row">
<div className="col-lg-3 col-md-6 mb-4">
<div className="card">
    <img className="card-img-top" src="./images/doctors (1).jpg" alt="Card image"/>
    <div className="card-body">
    <h6 className="card-title mt-2">DR. PAUL REYNOLDS</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisci elit</p>
      <a href="#" className="btn btn-outline-primary button">READ MORE</a>
    </div>
  </div>
</div>

<div className="col-lg-3 col-md-6 mb-4">
<div className="card">
    <img className="card-img-top" src="./images/doctors (2).jpg" alt="Card image"/>
    <div className="card-body">
    <h6 className="card-title mt-2">DR. TOM SMITH </h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisci elit</p>
      <a href="#" className="btn btn-outline-primary button">READ MORE</a>
    </div>
  </div>
</div>

<div className="col-lg-3 col-md-6 mb-4">
<div className="card">
    <img className="card-img-top" src="./images/doctors (3).jpg" alt="Card image"/>
    <div className="card-body">
      <h6 className="card-title mt-2">DR. PAYAL SKINNER</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisci elit</p>
      <a href="#" className="btn btn-outline-primary button">READ MORE</a>
    </div>
  </div>
</div>

<div className="col-lg-3 col-md-6 mb-4">
<div className="card">
    <img className="card-img-top" src="./images/doctors (4).jpg" alt="Card image"/>
    <div className="card-body">
    <h6 className="card-title mt-2">DR. PRADEEP ROY</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisci elit</p>
      <a href="#" className="btn btn-outline-primary button">READ MORE</a>
    </div>
  </div>
</div>
</div>
  </div>
    {/* <img src="la.jpg" alt="Los Angeles" className="d-block"/> */}
    
    
    {/* <div className="carousel-caption">
      <h3>Los Angeles</h3>
      <p>We had such a great time in LA!</p>
    </div> */}
 



  <div className="carousel-item">
  <div className="row">
<div className="col-lg-3 col-md-6 mb-4">
<div className="card">
    <img className="card-img-top" src="./images/doctors (5).jpg" alt="Card image"/>
    <div className="card-body">
    <h6 className="card-title mt-2">DR. PAUL ROY</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisci elit</p>
      <a href="#" className="btn btn-outline-primary button">READ MORE</a>
    </div>
  </div>
</div>

<div className="col-lg-3 col-md-6 mb-4">
<div className="card">
    <img className="card-img-top" src="./images/doctors (6).jpg" alt="Card image"/>
    <div className="card-body">
    <h6 className="card-title mt-2">DR. TOM SMITH </h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisci elit</p>
      <a href="#" className="btn btn-outline-primary button">READ MORE</a>
    </div>
  </div>
</div>

<div className="col-lg-3 col-md-6 mb-4">
<div className="card">
    <img className="card-img-top" src="./images/doctors (7).jpg" alt="Card image"/>
    <div className="card-body">
      <h6 className="card-title mt-2">DR. PAYAL SKINNER</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisci elit</p>
      <a href="#" className="btn btn-outline-primary button">READ MORE</a>
    </div>
  </div>
</div>

<div className="col-lg-3 col-md-6 mb-4">
<div className="card">
    <img className="card-img-top" src="./images/doctors (8).jpg" alt="Card image"/>
    <div className="card-body">
    <h6 className="card-title mt-2">DR. PRADEEP ROY</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisci elit</p>
      <a href="#" className="btn btn-outline-primary button">READ MORE</a>
    </div>
  </div>
</div>
</div> 
  </div>



  <div className="carousel-item">
  <div className="row">
<div className="col-lg-3 col-md-6 mb-4">
<div className="card">
    <img className="card-img-top" src="./images/doctors (9).jpg" alt="Card image"/>
    <div className="card-body">
    <h6 className="card-title mt-2">DR. PAUL REYNOLDS</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisci elit</p>
      <a href="#" className="btn btn-outline-primary button">READ MORE</a>
    </div>
  </div>
</div>

<div className="col-lg-3 col-md-6 mb-4">
<div className="card">
    <img className="card-img-top" src="./images/doctors (10).jpg" alt="Card image"/>
    <div className="card-body">
    <h6 className="card-title mt-2">DR. TOM SMITH </h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisci elit</p>
      <a href="#" className="btn btn-outline-primary button">READ MORE</a>
    </div>
  </div>
</div>

<div className="col-lg-3 col-md-6 mb-4">
<div className="card">
    <img className="card-img-top" src="./images/doctors (11).jpg" alt="Card image"/>
    <div className="card-body">
      <h6 className="card-title mt-2">DR. PAYAL SKINNER</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisci elit</p>
      <a href="#" className="btn btn-outline-primary button">READ MORE</a>
    </div>
  </div>
</div>

<div className="col-lg-3 col-md-6 mb-4">
<div className="card">
    <img className="card-img-top" src="./images/doctors (12).jpg" alt="Card image"/>
    <div className="card-body">
    <h6 className="card-title mt-2">DR. PRADEEP RO</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisci elit</p>
      <a href="#" className="btn btn-outline-primary button">READ MORE</a>
    </div>
  </div>
</div>
</div>  
  </div>


  </div>

{/* <!-- Left and right controls/icons --> */}
{/* <button className="carousel-control-prev" type="button" data-bs-target="#doctors-card" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#doctors-card" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button> */}
</div>
</div>
</section>
<section className="footer" style={{ backgroundImage: "url(/images/background-image.jpg)"}}>
  <div className="footer-contener">
  <div className="container ">
      <div className="row text-center text-light">
         <div className="col-md-3 col-6 column">
<h2>856</h2>
<p>Hospital Rooms</p>
         </div>

         <div className="col-md-3 col-6 column">
<h2>5234</h2>
<p>Satisfied Patients</p>
</div>

<div className="col-md-3 col-6 column">
<h2>789</h2>
<p>Different Services</p>
</div>

<div className="col-md-3 col-6 column">
<h2>3657</h2>
<p>People Working</p>
</div>
      </div>
  </div>

  </div>
</section>

<section className="container our-servises">
<div className="row">

<div className="col-lg-4">
  <div className="department-list"> 
     <h6>DEPARTMENTS</h6>
  <p>Primary Health Care</p>
  <span></span>
  <p>Pediatric Clinic</p>
  <span></span>
  <p>Gynaecological Clinic</p>
  <span></span>
  <p>Outpatient Surgery</p>
  <span></span>
  <p>Cardiac Clinic</p>
  <span></span>
  <p>Ophthalmology Clinic</p>
  <button className="btn btn-outline-light text-light">VIEW ALL</button>
  </div>

</div>
<div className="col-lg-8 carousei-cantent">
<h3>Our Servises</h3>

<div id="doctor-patient" className="carousel slide carousel-slide mt-4 " data-bs-ride="carousel">
  {/* <!-- Indicators/dots --> */}
  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#doctor-patient" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#doctor-patient" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#doctor-patient" data-bs-slide-to="2"></button>
  </div> */}
  
  {/* <!-- The slideshow/carousel --> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row">
     <div className="col-lg-4 col-md-6 mb-4">
     <div className="card"> 
     <img className="image" src="./images/doctor-patient-1.jpg" alt="" />
    <div className="card-body">
      <h6 className="card-title mt-2">Primary Health Care</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur it adipiscing elit Nulla id enim nec</p>
    </div>
  </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
     <div className="card">
     <img className="image" src="./images/doctor-patient-2.jpg" alt="" />
    <div className="card-body">
      <h6 className="card-title mt-2">Pediatric Clinic</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur it adipiscing elit Nulla id enim nec</p>
      
    </div>
  </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
     <div className="card">
     <img className="image" src="./images/doctor-patient-3.jpg" alt="" />
    <div className="card-body">
      <h6 className="card-title mt-2">Gynaecological Clinic</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur it adipiscing elit Nulla id enim nec</p>
      
    </div>
  </div>
    </div>
    </div>
    </div>
    <div className="carousel-item">
    <div className="row">
    <div className="col-lg-4 col-md-6 mb-4">
     <div className="card">
     <img className="image" src="./images/doctor-patient-4.jpg" alt="" />
    <div className="card-body">
    <h6 className="card-title mt-2">Outpatient Surgery</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur it adipiscing elit Nulla id enim nec</p> 
    </div>
  </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
     <div className="card">
     <img className="image" src="./images/doctor-patient-5.jpg" alt="" />
    <div className="card-body">
    <h6 className="card-title mt-2">Cardiac Clinic</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur it adipiscing elit Nulla id enim nec</p> 
    </div>
  </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
     <div className="card">
     <img className="image" src="./images/doctor-patient-6.jpg" alt="" />
    <div className="card-body">
    <h6 className="card-title mt-2">Ophthalmomogy Clinic</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur it adipiscing elit Nulla id enim nec</p>
    </div>
  </div>
    </div>
    </div> 
    </div>
    <div className="carousel-item">
    <div className="row">
    <div className="col-lg-4 col-md-6 mb-4">
     <div className="card">
     <img className="image" src="./images/doctor-patient-7.jpg" alt="" />
    <div className="card-body">
    <h6 className="card-title mt-2">Primary Health Care</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur it adipiscing elit Nulla id enim nec</p>  
    </div>
  </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
     <div className="card">
     <img className="image" src="./images/doctor-patient-8.jpg" alt="" />
    <div className="card-body">
      <h6 className="card-title mt-2">Ophthalmology Clinic</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur it adipiscing elit Nulla id enim nec</p>
      
    </div>
  </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
     <div className="card">
     <img className="image" src="./images/doctor-patient-9.jpg" alt="" />
    <div className="card-body">
    <h6 className="card-title mt-2">Primary Health Care</h6>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur it adipiscing elit Nulla id enim nec</p> 
    </div>
  </div>
    </div>
    </div>  
    </div>
  </div>
  
  {/* <!-- Left and right controls/icons --> */}
   <button className="carousel-control-prev" type="button" data-bs-target="#doctor-patient" data-bs-slide="prev">
  <i class="fa-solid fa-chevron-left"></i>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#doctor-patient" data-bs-slide="next">
  <i class="fa-solid fa-chevron-right"></i>
  </button> 
</div>


</div>
</div>
    </section>
    </>
  )
}

export default Timetable

import "./Features.scss"

const Featires = () => {
  return (
   <>
   <section className="features" id="Features">
    <div className="container">
   <div className="content-header-text">
   <h3>Customer Reviews</h3>
   <p>All our consultants are highly experienced in their fields and <br/>produce excellent outcomes for patients</p>
   </div>

   <div id="patient" className="carousel slide" data-bs-ride="carousel">

  {/* <!-- Indicators/dots --> */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#patient" data-bs-slide-to="0" className="active indicators-button"></button>
    <button className="indicators-button" type="button" data-bs-target="#patient" data-bs-slide-to="1"></button>
    <button className="indicators-button" type="button" data-bs-target="#patient" data-bs-slide-to="2"></button>
  </div>
  
  {/* <!-- The slideshow/carousel --> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row">
<div className="col-lg-4 col-md-6 mb-4">
<img className="image" src="./images/patient-1.jpg" alt="" />
      <div className="justin-forder">
       <h6>JUSTIN FORDER</h6>
  <p className="text-primary">Patient</p>
  <p>Doctors really do Care! i had a<br/>wonderful experience when coming in to Doctors Care! The staff was incredibly friendly and professional.</p>
      </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
<img className="image" src="./images/patient-2.jpg" alt="" />
      <div className="justin-forder">
       <h6>JUSTIN FORDER</h6>
  <p className="text-primary">Patient</p>
  <p>Doctors really do Care! i had a<br/>wonderful experience when coming in to Doctors Care! The staff was incredibly friendly and professional.</p>
      </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
<img className="image" src="./images/patient-3.jpg" alt="" />
      <div className="justin-forder">
       <h6>JUSTIN FORDER</h6>
  <p className="text-primary">Patient</p>
  <p>Doctors really do Care! i had a<br/>wonderful experience when coming in to Doctors Care! The staff was incredibly friendly and professional.</p>
      </div>
</div>

      </div>
     
      
    </div>
    <div className="carousel-item">
    <div className="row">
<div className="col-lg-4 col-md-6 mb-4">
<img className="image" src="./images/patient-4.jpg" alt="" />
      <div className="justin-forder">
       <h6>JUSTIN FORDER</h6>
  <p className="text-primary">Patient</p>
  <p>Doctors really do Care! i had a<br/>wonderful experience when coming in to Doctors Care! The staff was incredibly friendly and professional.</p>
      </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
<img className="image" src="./images/patient-5.jpg" alt="" />
      <div className="justin-forder">
       <h6>JUSTIN FORDER</h6>
  <p className="text-primary">Patient</p>
  <p>Doctors really do Care! i had a<br/>wonderful experience when coming in to Doctors Care! The staff was incredibly friendly and professional.</p>
      </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
<img className="image" src="./images/patient-6.jpg" alt="" />
      <div className="justin-forder">
       <h6>JUSTIN FORDER</h6>
  <p className="text-primary">Patient</p>
  <p>Doctors really do Care! i had a<br/>wonderful experience when coming in to Doctors Care! The staff was incredibly friendly and professional.</p>
      </div>
</div>

      </div> 
    </div>
    <div className="carousel-item">
    <div className="row">
<div className="col-lg-4 col-md-6 mb-4">
<img className="image" src="./images/patient-7.jpg" alt="" />
      <div className="justin-forder">
       <h6>JUSTIN FORDER</h6>
  <p className="text-primary">Patient</p>
  <p>Doctors really do Care! i had a<br/>wonderful experience when coming in to Doctors Care! The staff was incredibly friendly and professional.</p>
      </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
<img className="image" src="./images/patient-8.jpg" alt="" />
      <div className="justin-forder">
       <h6>JUSTIN FORDER</h6>
  <p className="text-primary">Patient</p>
  <p>Doctors really do Care! i had a<br/>wonderful experience when coming in to Doctors Care! The staff was incredibly friendly and professional.</p>
      </div>
</div>

<div className="col-lg-4 col-md-6 mb-4">
<img className="image" src="./images/patient-9.jpg" alt="" />
      <div className="justin-forder">
       <h6>JUSTIN FORDER</h6>
  <p className="text-primary">Patient</p>
  <p>Doctors really do Care! i had a<br/>wonderful experience when coming in to Doctors Care! The staff was incredibly friendly and professional.</p>
      </div>
</div>

      </div>  
    </div>
  </div>
  
  {/* <!-- Left and right controls/icons --> */}
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#patient" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#patient" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button> */}
</div>
</div>
   </section>
   </>
  )
}

export default Featires

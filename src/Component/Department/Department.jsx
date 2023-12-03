import React from 'react';
import "./Department.scss";
const Department = () => {
  return (
   <>
   <section className="container department" id="Department">
    <div className="content-header-text">
   <h3>Wellcome to Medical</h3>
   <p>Our medical specialists care about you & your family's health</p>
   </div>
   <div className="row text-center mt-5">
    <div className="col-lg-4 col-md-6 mb-4  ">
        <div className="medical-health">
    <i class="fa-solid fa-suitcase-medical icons"></i>
    <h6 className="mt-4"><b>Medical Excelleance</b></h6>
    <p>lorem ipsum amet, consectetur adipiscing elit. Nullam placeral lorem quis tortor dignissim, eget ultrices sapien blbendum. Aenean scelerisque</p>
    </div>
    </div>
<div className="col-lg-4 col-md-6 mb-4">
    <div className="medical-health">
<i class="fa-solid fa-lungs icons"></i>
<h6 className="mt-4"><b>Healthcare Professionals</b></h6>
    <p>lorem ipsum amet, consectetur adipiscing elit. Nullam placeral lorem quis tortor dignissim, eget ultrices sapien blbendum. Aenean scelerisque</p>
</div>
</div>
<div className="col-lg-4 col-md-6 mb-4">
    <div className="medical-health">
<i class="fa-solid fa-tooth icons"></i>
<h6 className="mt-4"><b>Latest Technologies</b></h6>
    <p>lorem ipsum amet, consectetur adipiscing elit. Nullam placeral lorem quis tortor dignissim, eget ultrices sapien blbendum. Aenean scelerisque</p>
</div>
</div>
   </div>
   </section>
   </>
  )
}

export default Department


import "./Header.scss";

const Header = () => {
  return (
    <>
     <section id="Home" className="carousel slide carousel" data-bs-ride="carousel">

{/* <!-- Indicators/dots --> */}
{/* <div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div> */}


{/* <!-- The slideshow/carousel --> */}
<div className="carousel-inner">

  <div className=" header-content">
  <div className="container header ">
    <div className="row align-items-center">
<div className="col-sm-6 d-flex ">
      <a  className="text" href="">FAQS</a>
      <a className="text" href="">About</a>
      <a className="text"  href="">Contact</a>
    </div>

<div className="col-sm-6 d-flex justify-content-end icon-cantent">
<span> <i className="fa-brands fa-facebook-f icons"></i></span>
            <span><i className="fa-solid fa-dove social-media-icon icons"></i></span>
            <span><i className="fa-brands fa-google-plus-g social-media-icon icons"></i></span>
            <span> <i className="fa-brands fa-linkedin-in icons"></i></span>
            <span> <i className='fab fa-skype icons'></i></span>
</div>
</div>

  </div>
        <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container navbar-contant">
    <div className="logo">
      <img  className="image"src="/images/logo.png" alt="" />
    <a className="navbar-brand" href="#">MEDICAL</a>
    </div>
    <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#Home">Home <span></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Department">Departments <span></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Timetable">Timetable <span></span></a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="#Features">Features <span></span></a>
        </li>   
        <li className="nav-item">
          <a className="nav-link" href="#Shortcodes">Shortcodes <span></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#News">News <span></span></a>
        </li>
        <li>
        <button type="button" className="btn text-light" data-bs-toggle="modal" data-bs-target="#myModal">
                  <i className="fa-solid fa-magnifying-glass glass"></i>
                </button>
                 </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
   <div className="carousel-item active">
    <div className="image-shudo">
    <img  src="/images/medics.jpg" alt="" className="d-block images"/>
    </div>
    <div className="carousel-caption">
      <h1>Welcome To Medical <br /> Services You Can Trust</h1>
      <button type="button" className="btn btn-light">MAKE AN APPOINTMENT</button>
      <button type="button" className="btn btn-light">DOCTORS TIMETABLE</button>
    </div>
  </div>
  <div className="carousel-item">
  <div className="image-shudo">
    <img src="/images/medics-2.jpg" alt="Chicago" className="d-block images"/>
    </div>
    <div className="carousel-caption">
    <h1>Welcome To Medical <br /> Services You Can Trust</h1>
    <button type="button" className="btn btn-light">MAKE AN APPOINTMENT</button>
      <button type="button" className="btn btn-light">DOCTORS TIMETABLE</button>

    </div> 
  </div>
  <div className="carousel-item">
  <div className="image-shudo">
    <img src="/images/medics-3.jpg" alt="New York" className="d-block images"/>
    </div>
    <div className="carousel-caption">
    <h1>Welcome To Medical <br /> Services You Can Trust</h1>
    <button type="button" className="btn btn-light">MAKE AN APPOINTMENT</button>
      <button type="button" className="btn btn-light">DOCTORS TIMETABLE</button>

    </div>  
  </div>
</div>

{/* <!-- Left and right controls/icons --> */}
<button className="carousel-control-prev carousel-control-button" type="button" data-bs-target="#Home" data-bs-slide="prev">
<i className="fa-solid fa-chevron-left carousel-arrow-button"></i>
</button>
<button className="carousel-control-next carousel-control-button" type="button" data-bs-target="#Home" data-bs-slide="next">
<i className="fa-solid fa-chevron-right carousel-arrow-button"></i>
</button>
</section>
<section className="modal" id="myModal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        {/* <!-- Modal Header --> */}
        <div className="modal-header">
          <h4 className="modal-title">Modal Heading</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
        </div>
        {/* <!-- Modal body --> */}
        <div className="modal-body">
          Modal body..
        </div>
        {/* <!-- Modal footer --> */}
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </section>

  <section className=" container header-card">
    <div className="row">
      <div className="col-md-4 emergency-box boxs">
        <h6>EMERGENCY CASE</h6>
        <p className="mt-3">If an urgent problem arises or you need a doctor urgently outside of medicenter opening hours, call emergency appolntment number for emergency service.</p>
        <p className="number">+86-123-456-789</p>
        <button type="button" className="btn btn-outline-light text-light">READ MORE</button>

      </div>
      <div className="col-md-4 timetable-box boxs">
        <h6>DOCTORS TIMETABLE</h6>
        <p className="mt-3">This timetable may change from time to time, so should be used as a guide only click read more below to see services and current timetable for our doctors to help you planyour appaintment with a preferred doctor. </p>
        <button type="button" className="btn btn-outline-light text-light mt-3">READ MORE</button>

      </div>
      <div className="col-md-4 opening-box boxs">
        <h6>OPENING HOURS</h6>
        <div className="row mt-3">
<div className="col-6">
<p>Monday - Friday</p>
<p>Saturday</p>
<p>Sunday</p>
<p>Public Holidays</p>
</div>
<div className="col-6">
<p>08:00 - 17:00</p>
<p>09:00 - 14:00</p>
<p>08: - 10:00</p>
<p>Closed</p>
</div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
};

export default Header;

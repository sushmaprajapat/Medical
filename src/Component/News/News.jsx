
import "./News.scss"

const News = () => {
  return (
    <>

<section className="news" id="News">
<div className="container">
<div className="row">
<div className="col-lg-4 ">
<div className="logo">
      <img  className="image"src="/images/logo.png" alt="" />
    <a className="navbar-brand" href="#">MEDICAL</a>
    </div>
<div className="mt-5">
<div className="content">
    <i class="fa-solid fa-phone"></i>
    <p>Call Us : +86-123-456-789</p>
    </div>
    <span> </span>
    <div className="content">
    <i class="fa-solid fa-location-dot"></i>
    <p>6110 Athens Place Washington, DC 20521-7100</p>
    </div>
    <span> </span>
    <div className="content">
    <i class="fa-regular fa-envelope"></i>
    <p>Support@MedicalHealth.com</p>
    </div>
    <span> </span>
    <div className="social-media">
    <i className="fa-solid fa-dove social-media-icon icons"></i>
    <i className="fa-brands fa-facebook-f icons"></i>
<i className="fa-brands fa-google-plus-g social-media-icon icons"></i>
             <i className="fa-brands fa-linkedin-in icons"></i>
             <i className='fab fa-skype icons'></i>
    </div>
</div>
</div>






<div className="col-lg-4 information-content">
<h6>NAVIGATION</h6>
<div className="row mt-5 navigation">
<div className="col-6">
<div className="content">
<i class="fa-solid fa-angles-right icon"></i>
    <p>Appointment</p>
    </div>
    <div className="content">
    <i class="fa-solid fa-angles-right icon"></i>
    <p>Other Specialist Staff</p>
    </div>
    <div className="content">
    <i class="fa-solid fa-angles-right icon"></i>
    <p>patient FAQs</p>
    </div>

    <div className="content">
    <i class="fa-solid fa-angles-right icon"></i>
    <p>Healthy Eating</p>
    
    </div>
    
    <div className="content">
    <i class="fa-solid fa-angles-right icon"></i>
    <p>Our vision and values</p>
    </div>
     </div>

    <div className="col-6">
    <div className="content">
    <i class="fa-solid fa-angles-right icon"></i>
    <p>Why Choose Us</p>
    </div>
    <div className="content">
    <i class="fa-solid fa-angles-right icon"></i>
    <p>Physlotheraplsts</p>
    </div>
    <div className="content">
    <i class="fa-solid fa-angles-right icon"></i>
    <p>Find a Doctor</p>
    </div>
    <div className="content">
    <i class="fa-solid fa-angles-right icon"></i>
    <p>Volunteer roles</p>
    </div>
    <div className="content">
    <i class="fa-solid fa-angles-right icon"></i>
    <p>Health Topics</p>
    </div>
    </div>
    </div>
</div>

<div className="col-lg-4 popular-posts information-content">
<h6>POPULAR POSTS</h6>
<div className="row mt-5 mb-1">
<div className="col-lg-3 col-md-3 col-3">
<img  className="image"src="./images/popular-posts-1.jpg" alt="" />
</div>
<div className="col-lg-9 col-md-9 col-9">
<p>Why i finally tried therapy and how it changed my life</p>
<p className="date">25 March, 2018</p>
</div>

</div>
<span></span>
<div className="row mt-3">
<div className="col-lg-3 col-md-3 col-3">
<img  className="image"src="./images/popular-posts-2.jpg" alt="" />
</div>
<div className="col-lg-9 col-md-9 col-9">
<p>Why i finally tried therapy and how it changed my life</p>
<p className="date">25 March, 2018</p>
</div>

</div>

</div>
</div>
</div>
</section>
<div className=" footer">
  <div className="container footer-text">
<div className="row">
<div className="col-md-6">
<p> &#169; 2018 MedicalHealth, All rights reserved</p>
</div>

<div className="col-md-6 tag text-end">
<a href="">Home</a>
  <a href="">About</a>
<a href="">Contact</a>
</div>
</div>
</div>
</div>
</>
  )
}

export default News

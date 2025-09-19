import { useState } from "react";
import "./About.css"
import Loader from "./Loader";

import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  
  // go to the next page also loding is include.,,,,...................................
  const goToContact = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate("/contact")

    }, 2000)
  }
  if (loading) {
    return <Loader />
  }


  // ////////////////////////////////////////////////////////////////////////////
  return (

    <section >
      <div className="container">
        <div className="blog-section">
          <div className="heading">
            <h1>Our Blogs</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis qu.</p>
          </div>
          <div className="cards-sec">

            <div className="content">
              <div className="card">
                <img src="/pic1.jpg" alt="" />
                <div className="content-main">

                  <p className="text-title">Architecture and design </p>
                  <span>03-june, 2022</span>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, vero?</p>
                  <a href="#"  className="button">Read More</a>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="card">
                <img src="/pic2.jpg" alt="" />
                <div className="content-main">

                  <p className="text-title">Architecture and design </p>
                  <span>03-june, 2022</span>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, vero?</p>
                  <a href="#"  className="button">Read More</a>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="card">
                <img src="/pic3.jpg" alt="" />
                <div className="content-main">

                  <p className="text-title">Architecture and design </p>
                  <span>03-june, 2022</span>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, vero?</p>
                  <a href="#"  className="button">Read More</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="about-next">

        <button className="next-btn" onClick={goToContact}>Next</button>
      </div>


      
    </section>
  );
};

export default About;

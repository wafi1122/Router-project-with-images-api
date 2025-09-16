import { useState } from "react";
import "./Contact.css"

const Contact = () => {


  return (
    <>
      <section className="head-form">

        <div className="wrapper">
          <h2>Registration</h2>
          <form action="#">
            <div className="input-box">
              <input type="text" required placeholder="Enter Your Name" />
            </div>
            <div className="input-box">
              <input type="text" required placeholder="Enter Your Email" />
            </div>
            <div className="input-box">
              <input type="password" required placeholder="Password" />
            </div>
            <div className="input-box">
              <input type="password" required placeholder="Confirm Password" />
            </div>
            <div className="policy">
              <input type="checkbox" />
              <h3>Accept all terms & conditions</h3>
            </div>
            <div className="input-box button">
              <button className="form-btn">Register Now</button>
            </div>
            <div className="text">
              <h3>Already have an account ? <a href="#">Login Now</a>
              </h3>
            </div>
          </form>
        </div>
      </section>
    </>
  )

}

export default Contact;

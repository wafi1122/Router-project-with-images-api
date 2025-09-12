import { useState } from "react";
import "./About.css"
import Loader from "./Loader";

import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false)

// go to the next page also loding is include.,,,,...................................
  const goToContact = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate("/contact")

    },2000)
  }
  if (loading){
    return <Loader/>
  }
// ////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <h1>Image Search Engine</h1>
      <button className="next-btn" onClick={goToContact}>Next</button>
    </div>
  );
};

export default About;

import { useState } from "react";
import "./Contact.css"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false)

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // ............first method to do this ........................................................

    // if(!isValidEmail(email)){
    //   alert('please enter a valid email address')
    //   return
    // }
    // if(password !== confirmPassword){
    //   alert("Password do not match")
    //   return
    // }
    // if(!name){
    //   alert("Name is required")
    //   return
    // }
    // ..................End.....................

    // .......................Second method......................................

    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required"
    }
    if (!isValidEmail(email)) {
      newErrors.email = "please enter a valid email address"
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "passwords do not match"
    }
    setErrors(newErrors);

    if(Object.keys(newErrors).length === 0){

      setSuccess("Form Submitted successfully")
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      setConfirmPassword("")
      setErrors({});
    }else{
      setSuccess("")
    }
    setLoading(false);
  }



  return (
    <>
      <section className="head-form">

        <div className="wrapper">
          <h2>Registration</h2>
          <form action="#" onSubmit={handleSubmit}>
            <div className="input-box">
              <input type="text" value={name} onChange={(e) => (setName(e.target.value))} placeholder="Enter Your Name" />
              {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
            </div>
            <div className="input-box">
              <input type="text" value={email} onChange={(e) => (setEmail(e.target.value))} placeholder="Enter Your Email" />
              {errors.email && <p style={{ color: "red", }}>{errors.email}</p>}
            </div>

            <div className="input-box">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div className="input-box">
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  placeholder="Confirm Password" />
              {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}
            </div>
            <div className="policy">
              <input type="checkbox" />
              <h3>Accept all terms & conditions</h3>
            </div>
            <div className="input-box button">
                <button className="form-btn" disabled={loading}>{loading ? "Submitting..." : "Register Now"}</button>
              {success && <p style={{color:"green", textAlign:"center"}}>{success}</p>}
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

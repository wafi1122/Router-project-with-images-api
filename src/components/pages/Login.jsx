import React from 'react'
import { useState } from 'react'
import "./Contact.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Both fields are Required")
            setSuccess("")
            return
        }
        setError("")
        setSuccess("Login SuccessFul")

    }


    return (
        <section className='head-form'>
            <div className='wrapper'>
                <h2>Login</h2>
                <form action="#" onSubmit={handleLogin}>
                    <div className='input-box'>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' />

                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {success && <p style={{ color: "green" }}>{success}</p>}
                    <div className='input-box button'>
                        <button className='form-btn'>Login</button>
                    </div>
                </form>
                <div className="text">
                    <h3 style={{fontFamily:"sans-serif" }}>Don't have an account? {" "}
                        <button onClick={() => navigate("/contact")}
                            style={{ border: "none", background: "none", color: "blue", cursor: "pointer" }}
                        >Register Now</button>
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default Login
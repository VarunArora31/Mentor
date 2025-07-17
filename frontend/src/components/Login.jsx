import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import {toast} from "react-toastify"
function Login() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


   const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        console.log('Login form data:', data);
        console.log('API URL:', process.env.REACT_APP_API_URL);
        
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, data)
            console.log('Login response:', res.data);
            
            if (res.data.status === 200) {
                sessionStorage.setItem("userInfo", JSON.stringify(res.data.body))
                navigate("/")
                toast.success(`Hello ${res.data.body.name}! Login successful`)
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log('Login error:', error)
            console.log('Error response:', error.response?.data);
            toast.error("Login failed. Please check your credentials and try again.")
        }
    }

  return (
    <main className="main">
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Login</h1>
                <p className="mb-0">
                  Access your dashboard and manage your account.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Login</li>
            </ol>
          </div>
        </nav>
      </div>

      <section className="section" id="login">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade-up">
            <div className="col-lg-6">
              <div className="card p-4 shadow">
                <h3 className="text-center mb-3">Welcome Back</h3>
                <form onChange={handleChange} onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="email" name='email' className="form-control" placeholder="Enter your email" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input type="password" name='password' className="form-control" placeholder="Enter your password" />
                  </div>
                  <button type="submit" className="btn btn-success w-100">Login</button>
                  <p className="text-center mt-3">
                    Don't have an account? <Link to="/Signup">Signup</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;

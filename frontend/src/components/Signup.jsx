import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Signup() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

const [data, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    });
    const navigate = useNavigate();

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]:  value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log('Signup form data:', data);
        console.log('API URL:', process.env.REACT_APP_API_URL);
        
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/signUp`, data);
            console.log('Signup response:', res.data);
            
            if (res.data.status === 200) {
                toast.success(res.data.message);
                navigate("/Login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log('Signup error:', error);
            console.log('Error response:', error.response?.data);
            toast.error("Signup failed. Please try again.");
        }
    };



  return (
    <main className="main">
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Signup</h1>
                <p className="mb-0">
                  Create your account to access exclusive features and services.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Signup</li>
            </ol>
          </div>
        </nav>
      </div>

      <section className="section" id="signup">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade-up">
            <div className="col-lg-6">
              <div className="card p-4 shadow">
                <h3 className="text-center mb-3">Create Account</h3>
                <form onChange={handleChange} onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label>Full Name</label>
                    <input type="text" name='name' className="form-control" placeholder="Enter your name" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="email" name='email' className="form-control" placeholder="Enter your email" />
                  </div>
                  
                  <div className="form-group mb-3">
                    <label>Mobile</label>
                    <input type="number" name='mobile' className="form-control" placeholder="Enter Your Mobile" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input type="password" name='password' className="form-control" placeholder="Create a password" />
                  </div>
                  <button type="submit" className="btn btn-success w-100">Signup</button>
                  <p className="text-center mt-3">
                    Already have an account? <Link to="/login">Login</Link>
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

export default Signup;

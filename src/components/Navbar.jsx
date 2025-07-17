import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"
function Navbar() {
    const token = sessionStorage.getItem("userInfo")
    const userToken = token ? JSON.parse(token) : null
    const navigate = useNavigate()

    const logoutHandler = () => {
        sessionStorage.clear("userInfo")
        navigate("/Login")
        toast.success("Logout successfully")
    }


    return (
        <>
            <header id="header" className="header d-flex align-items-center sticky-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">
                    <a href="index.html" className="logo d-flex align-items-center me-auto">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.png" alt=""> */}
                        <h1 className="sitename">Mentor</h1>
                    </a>
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li>
                                <Link to={"/"}>Home</Link>

                            </li>
                            <li>
                                <Link to={"/About"}>About</Link>
                            </li>
                            <li>
                                <Link to={"/Courses"}>Courses</Link>
                            </li>
                            <li>
                                <Link to={"/Trainer"}>Trainer</Link>
                            </li>
                            <li>
                                <Link to={"/Events"}>Events</Link>
                            </li>
                            <li>
                                <Link to={"/Pricing"}>Pricing</Link>
                            </li>

                            <li>
                                <Link to={"/Contact"}>Contact</Link>
                            </li>
                            {!userToken ? <>
                                <li>
                                    <Link to={"/Signup"}>Signup</Link>
                                </li>
                                <li>
                                    <Link to={"/Login"}>Login</Link>
                                </li>
                            </> : <li>
                                <button className='btn btn-danger' onClick={logoutHandler} >Logout</button>
                            </li>}

                        </ul>
                        {/* <i className="mobile-nav-toggle d-xl-none bi bi-list" /> */}
                    </nav>
                    {/* <a className="btn-getstarted" href="courses.html">
                        Get Started
                    </a> */}
                </div>
            </header>

        </>
    )
}

export default Navbar
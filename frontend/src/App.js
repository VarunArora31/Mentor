import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MainSection from './components/MainSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import CoursesDetail from './components/CoursesDetail';
import Events from './components/Events';
import Pricing from './components/Pricing';
import Trainer from './components/Trainer';
import Login from './components/Login';
import Signup from './components/Signup';
import { ToastContainer} from "react-toastify"

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
    });
  }, []);
  return (
   <>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<MainSection/>} />
      <Route path='About' element={<About/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route path='Courses' element={<Courses/>} />
      <Route path='CoursesDetail' element={<CoursesDetail/>} />
      <Route path='Events' element={<Events/>} />
      <Route path='Pricing' element={<Pricing/>} />
      <Route path='Trainer' element={<Trainer/>} />
      <Route path='Login' element={<Login/>} />
      <Route path='Signup' element={<Signup/>} />
    </Route>
   </Routes>
   <ToastContainer/>
   </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import icon from './Images/Logo.svg'
import style from './style.css'

function Header() {
  return (
    // <Router>
    // <div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/reservation">Reservation</Link>
    //       </li>
    //     </ul>
    //   </nav>

      
    // </div>
//   </Router>
//---------------------------------------------
<header>
        <nav>
        {/* <a href="/home"><img src={icon} alt="Description of my image" />
        </a> */}
        <Link to="/"><img src={icon} alt="Description of my image" /></Link>
          <ul>
            <li>
            <Link to="/">Homepage</Link>
            </li>

            <li>
                {/* <a href="/about">About Us</a> */}
                <Link to="/About">About Us</Link>
            </li>
            <li>
                {/* <a href="/menu">Menu</a> */}
                <Link to="/Menu">Menu</Link>
            </li>

            <li>
                {/* <a href="/Reservation">Reservation</a> */}
                <Link to="/Reservation">Reservation</Link>
            </li>

            <li>
                {/* <a href="/oreder_online">Order Online</a> */}
                <Link to="/Order">Order Online</Link>
            </li>

            <li>
                {/* <a href="/login"><span>Login</span></a> */}
                <Link to="/Login"><span>Login</span></Link>
            </li>

          </ul>
        </nav>
        </header>
//---------------------------------------------



  );
}

export default Header;
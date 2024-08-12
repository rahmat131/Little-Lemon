import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import pic from './Images/restauranfood.jpg'

function Footer() {
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
<footer>
<div class="FooterWrapper">
    <div class="First">
        <img src={pic} alt="img"/>
    </div>
    <div class="Second">
        <h5>Doormat Navigation</h5>

        {/* <a href="/about">About Us</a> */}
        <Link to="/About">About Us</Link>

        {/* <a href="/menu">Menu</a> */}
        <Link to="/Menu">Menu</Link>

        {/* <a href="/">Reservation</a> */}
        <Link to="/Reservation">Reservation</Link>

        {/* <a href="/oreder_online">Order Online</a> */}
        <Link to="/Order">Order Online</Link>

        {/* <a href="/login"><span>Login</span></a> */}
        <Link to="/Login"><span>Login</span></Link>
    </div>
    <div class="Third">
        <h5>Contact</h5>

        {/* <a href="/Adress"><span>Adress</span></a> */}
        <Link to="/Contact"><span>Adress</span></Link>

        {/* <a href="/PhoneNumber"><span>Phone Number</span></a> */}
        <Link to="/Contact"><span>PhoneNumber</span></Link>

        {/* <a href="/email"><span>Email</span></a> */}
        <Link to="/Contact"><span>Email</span></Link>
    </div>
    <div class="Fourth">
        <h5>Social Media Links</h5>

        {/* <a href="https://www.facebook.com/"><span>Facebook</span></a> */}
        <a href="https://www.facebook.com/" target="_blank" >
  <span>Facebook</span>
</a>

        {/* <Link to="/Facebook"><span>Facebook</span></Link> */}

        {/* <a href="/instagram"><span>Instagram</span></a> */}
        {/* <Link to="/Instagram"><span>Instagram</span></Link> */}
        <a href="https://www.instagram.com/" target="_blank" >
  <span>Instagram</span>
</a>

        {/* <a href="/x"><span>X</span></a> */}
        {/* <Link to="/X"><span>X</span></Link> */}
        <a href="https://www.X.com/" target="_blank" >
  <span>X</span>
</a>

    </div>
</div>
</footer>
  );
}

export default Footer;
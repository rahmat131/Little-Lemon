import React from 'react';
import Booking from './Booking.js';
import Header from './Header.js';
import Footer from './Footer.js';


function Reservation() {
  return (
    <div>
        <Header/>
      <h1>Reservation Page</h1>
      <p>Make your reservations here!</p>
      <Booking/>
      <Footer/>
    </div>
  );
}

export default Reservation;
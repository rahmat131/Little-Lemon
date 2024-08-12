// BookingPage.jsx
import React from 'react';
import BookingForm from './BookingForm.js';
import Header from './Header.js';
import Footer from './Footer.js';

const BookingPage = () => {
  return (
    <div>
      <Header/>
      <h1>Book Your Table</h1>
      <p>Please fill out the form below to make a reservation.</p>
      <BookingForm />
      <p>Thank you for booking with us!</p>
      <Footer/>
    </div>
  );
};

export default BookingPage;

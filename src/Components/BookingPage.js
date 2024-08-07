// BookingPage.jsx
import React from 'react';
import BookingForm from './BookingForm.js';

const BookingPage = () => {
  return (
    <div>
      <h1>Book Your Table</h1>
      <p>Please fill out the form below to make a reservation.</p>
      <BookingForm />
      <p>Thank you for booking with us!</p>
    </div>
  );
};

export default BookingPage;

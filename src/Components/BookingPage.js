// // BookingPage.jsx
// import React from 'react';
// import BookingForm from './BookingForm.js';
// import Header from './Header.js';
// import Footer from './Footer.js';

// const BookingPage = () => {
//   return (
//     <div className='BookingText'>
//       <Header/>
//       <div className='TextWrapper'>
//       <h1>Your Occasion!</h1>
//       <h3>Your Table</h3>
//       <p>Reserve Now!</p>
//       <BookingForm />
//       {/* <p>Thank you for booking with us!</p> */}
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default BookingPage;
//-------------------------Updated------
// BookingPage.js
import React from 'react';
import BookingForm from './BookingForm';
import Header from './Header';
import Footer from './Footer';

const BookingPage = ({ submitForm }) => {
  return (
    <div className='BookingText'>
      {/* <Header /> */}
      <div className='TextWrapper'>
        <h1>Your Occasion!</h1>
        <h3>Your Table</h3>
        <p>Reserve Now!</p>
        <BookingForm submitForm={submitForm} />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default BookingPage;

//--------------------------------------
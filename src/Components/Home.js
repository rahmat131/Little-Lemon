import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import  Main from './Main.js'
// import  Footer from './Components/Footer.js'
import  Testimonials from './Testimonials.js'
import  About from './About.js'
import BookingPage from './BookingPage.js'

function Home() {
  return (
    <div>
      {/* <Header/> */}
      <Main/>
      <Testimonials/>
      {/* <BookingPage/> */}
      <About/>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
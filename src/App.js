import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Reservation from './Components/BookingPage';
import About from './Components/About';
import Menu from './Components/Menu';
import Order from './Components/Order';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/reservation">Reservation</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/reservation" element={<Reservation />} />
    //     </Routes>
    //   </div>
    // </Router>
    // <div>
      // <Header/>
       <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<div>
          <Header/>
          <About/>
          <Footer/>
          </div>} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/Facebook" element={<a href="https://www.facebook.com/"></a>} /> */}
          </Routes>
         </Router>
      // </div>
  );
}

export default App;
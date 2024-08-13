// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './Components/Home';
// import Reservation from './Components/BookingPage';
// import About from './Components/About';
// import Menu from './Components/Menu';
// import Order from './Components/DishesPage';
// import Login from './Components/Login';
// import Contact from './Components/Contact';
// import Header from './Components/Header';
// import Footer from './Components/Footer';


// function App() {
//   return (
//        <Router>
//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={
//           <div>
//           <Header/>
//           <About/>
//           <Footer/>
//           </div>
//         } />
//         <Route path="/Menu" element={<Menu />} />
//         <Route path="/reservation" element={<Reservation />} />
//         <Route path="/Order" element={
//           <div>
//           <Header/>
//           <Order />
//           <Footer/>
//           </div>  
//         } />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Contact" element={<Contact />} />
//           </Routes>
//          </Router>
//       // </div>
//   );
// }

// export default App;

//--------------------------------------------Updated!--------
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import Reservation from './Components/BookingPage';
import About from './Components/About';
import Menu from './Components/Menu';
import Order from './Components/DishesPage';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ConfirmedBooking from './Components/ConfirmedBooking';
import { submitAPI } from './Components/api.js'; // Ensure you import submitAPI from api.js

function App() {
  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    return isSubmitted;
  };

  return (
    <Router>
      <Header /> {/* Include Header here so it's visible across all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation submitForm={submitForm} />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} /> {/* Route for confirmation */}
      </Routes>
      <Footer /> {/* Include Footer here so it's visible across all routes */}
    </Router>
  );
}

export default App;

//------------------------------------------------------------
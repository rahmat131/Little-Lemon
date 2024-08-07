import './App.css';
import  Header from './Components/Header.js'
import  Main from './Components/Main.js'
import  Footer from './Components/Footer.js'
import  Testimonials from './Components/Testimonials.js'
import  About from './Components/About.js'
// import BookingPage from './Components/BookingPage.js';
import BookingPage from './Components/BookingPage.js'

function App() {
  return (
    
    <div className="App">
     <Header/>
      <Main/>
      <Testimonials/>
      <BookingPage/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;

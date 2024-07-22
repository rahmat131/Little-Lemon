import pic from './Images/restauranfood.jpg'

function Footer() {
    return (
        <footer>
        <div class="FooterWrapper">
            <div class="First">
                <img src={pic} alt="img"/>
            </div>
            <div class="Second">
                <h5>Doormat Navigation</h5>
                <a href="/about">About Us</a>
                <a href="/menu">Menu</a>
                <a href="/reservation">Reservation</a>
                <a href="/oreder_online">Order Online</a>
                <a href="/login"><span>Login</span></a>
            </div>
            <div class="Third">
                <h5>Contact</h5>
                <a href="/Adress"><span>Adress</span></a>
                <a href="/PhoneNumber"><span>Phone Number</span></a>
                <a href="/email"><span>Email</span></a>
            </div>
            <div class="Fourth">
                <h5>Social Media Links</h5>
                <a href="/facebook"><span>Facebook</span></a>
                <a href="/instagram"><span>Instagram</span></a>
                <a href="/x"><span>X</span></a>
            </div>
        </div>
        </footer>
    );
  } 
  export default Footer;
import icon from './Images/Logo.svg'

function Header() {
    return (
      
      
        <header>
        <nav>
        <a href="/home"><img src={icon} alt="Description of my image" /></a>
          <ul>
            <li><a href="/home">Homepage</a></li>
            <li><a href="/about">About Us</a></li>
            <li ><a href="/menu">Menu</a></li>  
            <li ><a href="/reservation">Reservation</a></li>  
            <li ><a href="/oreder_online">Order Online</a></li>  
            <li ><a href="/login"><span>Login</span></a></li>  
          </ul>
        </nav>
        </header>
      
     
    );
  }
  
  export default Header;
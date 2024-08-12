import Footer from './Footer';
import Header from './Header';
import img1 from './Images/MarioandAdrianb.jpg'
import img2 from './Images/restaurantchefB.jpg'

function About() {
    return (
        <div>
            {/* <Header/> */}
        
        <div class="AboutMain">
            <div class="AboutWrapper">
                <div class="Text">
                    <h1>Little Lemon</h1>
                    <h4>Chicago</h4>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div class="DualImg">
                    <div class="Image1">
                        <img src={img1} alt="Image"/>
                    </div>
                    <div class="Image2">
                        <img src={img2} alt="Image"/>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer/> */}
        </div>
    );
  }
  export default About;
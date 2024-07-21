import alex from './Images/1.jpg'
import angelina from './Images/2.jpg'
import emmo from './Images/3.jpg'
import mike from './Images/4.jpg'
function Testimonials() {
    return (
        <main class="Testmain">
            <h1>Testimonials</h1>
          <div class="Wrapper">
            <div class="Person">
                <h3>Rating 4.5/5</h3>
                <div class="Profile">
                    <img src={alex} alt="Description of my image" />
                    <span><h4>Alex</h4></span>
                </div>
            <p>I love the Greek Salad. Top Choice!</p>
            </div>
            <div class="Person">
                <h3>Rating 5/5</h3>
                <div class="Profile">
                    <img src={angelina} alt="Description of my image" />
                    <span><h4>Angelina</h4></span>
                </div>
            <p>Great Ambiance!</p>
            </div>
            <div class="Person">
                <h3>Rating 3.5/5</h3>
                <div class="Profile">
                    <img src={emmo} alt="Description of my image" />
                    <span><h4>Emmo</h4></span>
                </div>
            <p>I am craving Lemon Desert again. I was Superb!</p>
            </div>
            <div class="Person">
                <h3>Rating 4/5</h3>
                <div class="Profile">
                    <img src={mike} alt="Description of my image" />
                    <span><h4>Mike</h4></span>
                </div>
            <p>Great Service!</p>
            </div>
          </div>
        </main>
    );
  }
  export default Testimonials;
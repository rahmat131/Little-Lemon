import restpic from './Images/restaurant.jpg'
import greeksalad from './Images/greeksalad.jpg'
import bruchetta from './Images/bruchetta.jpg'
import lemon from './Images/lemondessert.jpg'
function Main() {
    return (
        <main>
            <div Class="ONE">
            <div class="Hero">
                <div class="Left">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                    <button Class="mybtn">Reserve a Table</button>
                </div>
                <div class="Right">
                <img src={restpic} alt="Description of my image" />
                </div>
            </div>
            </div>
            <div class="Highlights">
                <div class="Top">
                    <h1>Specials</h1>
                        <button class="mybtn">
                             Online Menu
                        </button>
                </div>
                 <div Class="Bottom">
                        <div class="Card">
                            <div class="image">
                        <img src={greeksalad} alt="Description of my image" />
                        </div>
                        <div class="Content">
                            <div class="Item">
                            <h2>Greek Salad</h2>
                            <span>$12.99</span>
                            </div >
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                            <span>Order a delivery</span>
                        </div>
                        </div>
                        <div class="Card">
                            <div class="image">
                        <img src={bruchetta} alt="Description of my image" />
                        </div>
                        <div class="Content">
                            <div class="Item">
                            <h2>Bruchetta</h2>
                            <span>$5.99</span>
                            </div >
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
                            <span>Order a delivery</span>
                        </div>
                        </div>
                        <div class="Card">
                        <div class="image">
                        <img src={lemon} alt="Description of my image" />
                        </div>
                        <div class="Content">
                            <div class="Item">
                            <h2>Lemon Dessert</h2>
                            <span>$5.00</span>
                            </div >
                            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <span>Order a delivery</span>
                        </div>
                        </div>
                 </div>
            </div>
        </main>
    );
  }
  export default Main;
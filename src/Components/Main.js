import restpic from './Images/restaurant.jpg'
function Main() {
    return (
      
      
        <main>
            <div class="Hero">
                <div class="Left">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                    <button>Reserve a Table</button>
                </div>
                <div class="Right">
                <img src={restpic} alt="Description of my image" />
                </div>
            </div>
        </main>
      
     
    );
  }
  
  export default Main;
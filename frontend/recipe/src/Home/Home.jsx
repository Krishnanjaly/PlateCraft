import logo from "./recipe logo.jpg";
import "./Home.css";
import { useEffect, useState } from "react";
import entry from "./PlateCraft Special Recipes.png";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");

useEffect(() => {
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) setUsername(storedUsername);
}, []);

  const navigate = useNavigate();

  useEffect(() => {
    let slideIndex = 0;
    const showSlides = () => {
      let slides = document.getElementsByClassName("slide");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 2000);
    };
    showSlides();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    navigate("/Login");
  };

  return (
    <>
      <div className="first">
        <div className="first-logo">
          <img src={logo} alt="Logo" width="100" height="100" />
          <h1>PlateCraft</h1>
        </div>
        <input type="text" placeholder="🔍Search...." />
        {username ? (
          <div className="welcome-container">
            <span className="welcome-msg">👋 Welcome, {username}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/Login">
            <button>Login</button>
          </Link>
        )}
      </div>
            <div className="second">
                <div className="slide fade"><img src={entry} width='100%' height="90%"/></div>
                <div className="slide fade"><img src="https://ptfswny.com/wp-content/uploads/solutions-featured-food-variety-and-options.jpg" width='100%'/></div>
                <div className="slide fade"><img src="https://images.alphacoders.com/189/189163.jpg" width='100%' /></div>
                <div className="slide fade"><img src="https://c4.wallpaperflare.com/wallpaper/984/944/941/burger-french-fries-hamburger-wallpaper-preview.jpg" width='100%'/></div>
            </div>
            <div className="third">
                <div className="one">
                    <h2>Trending Recipes</h2>
                    <ul>
                        <Link to="/TrendingRecipes"><li>Foil-Pack Ravioli</li>
                        <li>No-Cook, Fresh Summer Dinners</li>
                        <li> Roasted Figs & Prosciutto</li>
                        <li>Bright, Fruit-Focused Breakfasts</li>
                        <li>Summer Fruit Desserts</li>
                        <li>Pimientos Rellenos & Sardine Empanadas</li>
                        <li>Turmeric-Infused Comfort</li></Link>
                    </ul>
                </div>
                <div className="two">
                    <h2>Spicy Foods</h2>
                    <ul>
                        <Link to="/SpicyFoods"><li>Vindaloo (India)</li>
                        <li>Sichuan Hot Pot (China)</li>
                        <li>Kimchi Jjigae (Korea)</li>
                        <li>Tom Yum Goong (Thailand) </li>
                        <li>Tacos al Pastor with Salsa Roja (Mexico)</li>
                        <li>Pil-Pil Prawns (Spain)</li>
                        <li>Berbere Chicken Stew (Ethiopia) </li></Link>
                    </ul>
                </div>
                <div className="three">
                    <h2>Sugary Foods</h2>
                    <ul>
                        <Link to="/Sugary"><li>Chocolate Cake</li>
                        <li>Baklava (Middle East/Greece)</li>
                        <li>Red Velvet Cake</li>
                        <li>Doughnuts</li>
                        <li>Milk Chocolate Bars</li>
                        <li>Chocolate Chip Cookies</li>
                        <li>Macarons (France)</li>
                        <li>Gelato (Italy)</li>
                        <li>Tres Leches Cake</li></Link>
                    </ul>
                </div>
                <div className="four">
                    <h2>Evening Snacks</h2>
                    <ul>
                        <Link to="/Snacks"><li>Samosa</li>
                        <li>Pakora/Bhaji</li>
                        <li>Spring Rolls</li>
                        <li>French Fries / Masala Fries </li>
                        <li>Chicken Nuggets / Popcorn Chicken </li>
                        <li>Grilled Cheese Sandwich</li>
                        <li>Garlic Bread</li>
                        <li>Paneer/Chicken Kathi Roll</li>
                        <li>Peanut Chikki / Ladoo</li>
                        <li>Egg Bhurji / Scrambled Eggs </li></Link>
                    </ul>
                </div>
                <div className="five">
                    <h2>American Foods</h2>
                    <ul>
                        <Link to="/American"><li>Hamburger</li>
                        <li>Hot Dog</li>
                        <li>Fried Chicken</li>
                        <li>Barbecue Ribs</li>
                        <li>Mac and Cheese</li>
                        <li>Meatloaf</li>
                        <li>Pizza (New York-style or Chicago deep-dish)</li>
                        <li>Chicken Wings (Buffalo style)</li>
                        <li>Philly Cheesesteak</li>
                        <li>Apple Pie</li></Link>
                    </ul>
                </div>
                <div className="six">
                    <h2>Korean Dishes</h2>
                    <ul>
                        <Link to="/Korean"><li>Bibimbap (비빔밥)</li>
                        <li>Kimchi Bokkeumbap (김치볶음밥)</li>
                        <li>Bulgogi (불고기)</li>
                        <li>Samgyeopsal (삼겹살)</li>
                        <li>Galbi (갈비)</li>
                        <li>Jajangmyeon (짜장면)</li>
                        <li>Tteokbokki (떡볶이)</li>
                        <li>Corn Dogs (콘도그)</li>
                        <li>Kimchi (김치)</li>
                        <li>Gyeran Mari (계란말이)</li></Link>
                    </ul>
                </div>
                <div className="seven">
                    <h2>Chinese Dishes</h2>
                    <ul>
                        <Link to="/Chinese"><li>Chow Mein (炒面)</li>
                        <li>Lo Mein (捞面)</li>
                        <li>Fried Rice (炒饭)</li>
                        <li>Dan Dan Noodles (担担面)</li>
                        <li>Kung Pao Chicken (宫保鸡丁)</li>
                        <li>Sweet and Sour Pork (糖醋里脊)</li>
                        <li>General Tso's Chicken (more American-Chinese)</li>
                        <li>Orange Chicken</li>
                        <li>Sheng Jian Bao (生煎包)</li>
                        <li>Eggplant in Garlic Sauce (鱼香茄子)</li></Link>
                    </ul>
                </div>
                <div className="eight">
                    <h2>Breakfast</h2>
                    <ul>
                        <Link to="/Breakfast"><li>Pancakes / Waffles</li>
                        <li>Omelet</li>
                        <li>Scrambled Eggs & Toast</li>
                        <li>French Toast</li>
                        <li>Cereal and Milk</li>
                        <li>Peanut Butter Toast</li>
                        <li>Breakfast Sandwich</li>
                        <li>Avocado Toast</li>
                        <li>Smoothie</li>
                        <li>Idli / Dosa / Uttapam</li></Link>
                    </ul>
                </div>
                <div className="nine">
                    <h2>Dinner</h2>
                    <ul>
                        <Link to="/Dinner"><li>Chapati + Sabzi</li>
                        <li>Dal Tadka + Rice</li>
                        <li>Paneer Butter Masala + Naan</li>
                        <li>Rajma / Chole + Rice</li>
                        <li>Biryani / Pulao</li>
                        <li>Kadhi + Jeera Rice</li>
                        <li>Spaghetti Aglio e Olio</li>
                        <li>Grilled Chicken with Mashed Potatoes</li>
                        <li>Tacos / Quesadillas</li>
                        <li>Baked Lasagna</li></Link>
                    </ul>
                </div>
                <div className="ten">
                    <h2>South Indian Dishes</h2>
                    <ul>
                        <Link to="SouthIndian"><li>Dosa</li>
                        <li>Idli</li>
                        <li>Porotta + Beef Curry</li>
                        <li>Sambar</li>
                        <li>Rasam</li>
                        <li>Curd Rice</li>
                        <li>Pongal</li>
                        <li>Lemon Rice</li>
                        <li>Avial</li>
                        <li>Chettinad Chicken Fry</li></Link>
                    </ul>
                </div>
                <div className="eleven">
                    <h2>North Indian Dishes</h2>
                    <ul>
                        <Link to="/NorthIndian"><li>Chapati / Roti / Naan / Paratha</li>
                        <li>Gulab Jamun</li>
                        <li>Chole Bhature</li>
                        <li>Aloo Puri</li>
                        <li>Paneer Butter Masala</li>
                        <li>Dal Makhani</li>
                        <li>Kofta Curry</li>
                        <li>Veg / Chicken Biryani (Awadhi or Punjabi styles)</li>
                        <li>Pulao</li>
                        <li>Tandoori Chicken</li></Link>
                    </ul>
                </div>
                <div className="tweleve">
                    <h2>Cool Drinks</h2>
                    <ul>
                        <Link to="/CoolDrinks"><li>Lemonade / Nimbu Pani</li>
                        <li>Watermelon Juice</li>
                        <li>Aam Panna </li>
                        <li>Cucumber Mint Cooler </li>
                        <li>Virgin Mojito</li>
                        <li>Mango Milkshake</li>
                        <li>Cold Coffee</li>
                        <li>Falooda</li>
                        <li>Chikoo / Custard Apple Shake</li>
                        <li>Rose Lemonade</li></Link>
                    </ul>
                </div>
            </div>

            <div className="last">
                <footer>
                    <div><h4>&copy;PlateCraft.ac.in</h4></div>
                    <div className="logos">
                        <img src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png" alt="insta" width="30" height="20"/>
                        <img src="https://www.pngplay.com/wp-content/uploads/9/Facebook-Free-PNG.png" alt="facebook" width="30" height="20"/>
                        <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-photo-0.png" alt="youtube" width="30" height="20"/>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default Home;
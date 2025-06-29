import React from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

function SnackRecipes() {
  const snacks = [
    {
      title: "Samosa",
      prep: `Prepare a spiced potato-pea filling. Fill triangular pastry sheets, seal, and deep-fry until crispy and golden brown. Serve with mint or tamarind chutney.`
    },
    {
      title: "Pakora / Bhaji",
      prep: `Dip sliced vegetables (onion, potato, spinach) in spiced gram flour batter and deep-fry until golden. Serve hot with chutney or ketchup.`
    },
    {
      title: "Spring Rolls",
      prep: `Sauté veggies like cabbage, carrots, and noodles in soy sauce. Wrap in spring roll sheets, seal with flour paste, and deep-fry until crispy.`
    },
    {
      title: "French Fries / Masala Fries",
      prep: `Cut potatoes into sticks, soak and dry. Deep-fry until crisp. Toss with salt or masala mix (chili powder, chaat masala) for extra flavor.`
    },
    {
      title: "Chicken Nuggets / Popcorn Chicken",
      prep: `Marinate chicken pieces, coat with flour or breadcrumbs, and deep-fry or air-fry. Serve with mayo, ketchup, or hot sauce.`
    },
    {
      title: "Grilled Cheese Sandwich",
      prep: `Layer cheddar or mozzarella between bread slices. Butter the outside and grill until golden and melty. Optionally add tomato or onion.`
    },
    {
      title: "Garlic Bread",
      prep: `Mix butter, minced garlic, and herbs. Spread on bread slices and bake until crispy. Top with cheese for a cheesy version.`
    },
    {
      title: "Paneer / Chicken Kathi Roll",
      prep: `Cook spiced paneer or chicken, wrap in paratha or roti with onions, chutney, and lime juice. Roll up and serve warm.`
    },
    {
      title: "Peanut Chikki / Ladoo",
      prep: `Heat jaggery until melted, stir in roasted peanuts or roasted gram. Pour into a tray and cut (chikki) or roll into balls (ladoo) while warm.`
    },
    {
      title: "Egg Bhurji / Scrambled Eggs",
      prep: `Cook whisked eggs with onions, chilies, tomatoes, and spices. Scramble until fluffy. Serve with toast or pav.`
    }
  ];

  return (
    <div className="recipe-list">
      <div className="top-bar">
        <h1>🥪 Quick Snacks & Street Food</h1>
      <Link to="/" className="home-button">🏠 Home</Link>
      </div>
      {snacks.map((recipe, index) => (
        <div className="recipe-card" key={index}>
          <h2>{recipe.title}</h2>
          <p>{recipe.prep}</p>
        </div>
      ))}
    </div>
  );
}

export default SnackRecipes;

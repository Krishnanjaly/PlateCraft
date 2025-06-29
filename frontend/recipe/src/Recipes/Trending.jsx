import React from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

function Trending() {
  const recipes = [
    {
      title: "Foil-Pack Ravioli",
      prep: `Toss cheese or meat ravioli with marinara sauce, mozzarella, and cherry tomatoes. Seal in foil and bake at 400°F for 20–25 minutes or grill for 15–20 minutes. Garnish with basil.`
    },
    {
      title: "No-Cook, Fresh Summer Dinners",
      prep: `Layer sliced heirloom tomatoes, cucumbers, fresh mozzarella, and avocado. Drizzle with olive oil, balsamic vinegar, salt, and pepper. Serve chilled with crusty bread.`
    },
    {
      title: "Roasted Figs & Prosciutto",
      prep: `Halve fresh figs, drizzle with honey, and roast at 375°F for 10 minutes. Wrap with prosciutto, add goat cheese if desired, and serve warm.`
    },
    {
      title: "Bright, Fruit-Focused Breakfasts",
      prep: `Top Greek yogurt with fresh berries, mango slices, granola, and a drizzle of honey. Add a handful of mint or basil for a refreshing twist.`
    },
    {
      title: "Summer Fruit Desserts",
      prep: `Make a quick cobbler with peaches, berries, or plums. Toss fruit with sugar and lemon juice, top with biscuit dough, and bake until golden.`
    },
    {
      title: "Pimientos Rellenos & Sardine Empanadas",
      prep: `Stuff roasted red peppers with seasoned rice and cheese. For empanadas, mix sardines with onion and paprika, fill pastry rounds, and bake until golden.`
    },
    {
      title: "Turmeric-Infused Comfort",
      prep: `Simmer turmeric with coconut milk, ginger, and garlic. Add chickpeas or lentils and cook until thick. Serve over rice with lime and fresh cilantro.`
    }
  ];

  return (
    <div className="recipe-list">
      <div className="top-bar">
        <h1>🍴 Summer Recipes Collection</h1>
      <Link to="/" className="home-button">🏠 Home</Link>
      </div>
      {recipes.map((recipe, index) => (
        <div className="recipe-card" key={index}>
          <h2>{recipe.title}</h2>
          <p>{recipe.prep}</p>
        </div>
      ))}
    </div>
  );
}

export default Trending;

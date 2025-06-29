import React from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

function AmericanClassics() {
  const classics = [
    {
      title: "Hamburger",
      prep: `Grill or pan-fry seasoned beef patties. Place on toasted buns with lettuce, tomato, onion, pickles, cheese, and condiments like ketchup or mayo.`
    },
    {
      title: "Hot Dog",
      prep: `Boil, grill, or steam sausages. Serve in buns topped with mustard, ketchup, onions, relish, or sauerkraut.`
    },
    {
      title: "Fried Chicken",
      prep: `Marinate chicken pieces in buttermilk and spices. Dredge in seasoned flour and deep-fry until crispy and golden.`
    },
    {
      title: "Barbecue Ribs",
      prep: `Season pork ribs with dry rub, slow-cook or smoke them until tender, then slather with barbecue sauce and grill to caramelize.`
    },
    {
      title: "Mac and Cheese",
      prep: `Cook elbow pasta and mix with a creamy cheese sauce made from butter, milk, flour, and cheddar. Bake with breadcrumbs for extra texture.`
    },
    {
      title: "Meatloaf",
      prep: `Combine ground beef, breadcrumbs, onion, eggs, and spices. Form into a loaf, top with ketchup or glaze, and bake until cooked through.`
    },
    {
      title: "Pizza (New York-style or Chicago deep-dish)",
      prep: `For NY-style: thin crust with tomato sauce and mozzarella, baked until foldable. For Chicago: deep pan, layers of cheese, toppings, then chunky sauce. Bake until bubbling.`
    },
    {
      title: "Chicken Wings (Buffalo style)",
      prep: `Fry wings until crispy, then toss in a spicy Buffalo sauce made with hot sauce and butter. Serve with celery and blue cheese dip.`
    },
    {
      title: "Philly Cheesesteak",
      prep: `Grill thinly sliced beef with onions and peppers. Load into a hoagie roll and top with provolone or Cheez Whiz.`
    },
    {
      title: "Apple Pie",
      prep: `Fill pie crust with spiced apple slices, top with another crust or crumble, and bake until golden and bubbly. Serve warm with ice cream.`
    }
  ];

  return (
    <div className="recipe-list">
      <div className="top-bar">
        <h1>🍔 American Comfort Food Classics</h1>
      <Link to="/" className="home-button">🏠 Home</Link>
      </div>
      {classics.map((recipe, index) => (
        <div className="recipe-card" key={index}>
          <h2>{recipe.title}</h2>
          <p>{recipe.prep}</p>
        </div>
      ))}
    </div>
  );
}

export default AmericanClassics;

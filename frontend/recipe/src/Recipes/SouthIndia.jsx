import React from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

function SouthIndianDishes() {
  const dishes = [
    {
      title: "Dosa",
      prep: `Crispy, golden crepe made from fermented rice and urad dal batter. Serve with coconut chutney and sambar.`
    },
    {
      title: "Idli",
      prep: `Soft steamed rice-lentil cakes, made from the same fermented batter as dosa. Light, healthy, and served with chutney and sambar.`
    },
    {
      title: "Porotta + Beef Curry",
      prep: `Flaky, layered flatbread made with maida, paired with spicy, slow-cooked Kerala-style beef curry.`
    },
    {
      title: "Sambar",
      prep: `A tangy lentil-based stew with vegetables and tamarind. Flavored with mustard seeds, curry leaves, and sambar powder.`
    },
    {
      title: "Rasam",
      prep: `Thin, spicy soup made with tamarind juice, tomatoes, pepper, and garlic. Often served over rice or as a starter.`
    },
    {
      title: "Curd Rice",
      prep: `Cooked rice mixed with yogurt, tempered with mustard seeds, curry leaves, and chilies. Served cold and soothing.`
    },
    {
      title: "Pongal",
      prep: `A creamy rice-lentil dish cooked with ghee, black pepper, cumin, and cashews. Traditionally served for breakfast.`
    },
    {
      title: "Lemon Rice",
      prep: `Flavored rice with mustard seeds, green chilies, turmeric, and fresh lemon juice. Often garnished with peanuts or curry leaves.`
    },
    {
      title: "Avial",
      prep: `A thick mix of seasonal vegetables cooked with coconut, yogurt, and seasoned with coconut oil and curry leaves.`
    },
    {
      title: "Chettinad Chicken Fry",
      prep: `Spicy dry chicken fry made with Chettinad spices, curry leaves, black pepper, and coconut oil. Bold and flavorful.`
    }
  ];

  return (
    <div className="recipe-list">
      <div className="top-bar">
        <h1>🌴 South Indian Dishes</h1>
      <Link to="/" className="home-button">🏠 Home</Link>
      </div>
      {dishes.map((dish, index) => (
        <div className="recipe-card" key={index}>
          <h2>{dish.title}</h2>
          <p>{dish.prep}</p>
        </div>
      ))}
    </div>
  );
}

export default SouthIndianDishes;

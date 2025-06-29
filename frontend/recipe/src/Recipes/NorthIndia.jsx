import React from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

function NorthIndianDishes() {
  const dishes = [
    {
      title: "Chapati / Roti / Naan / Paratha",
      prep: `Indian flatbreads made from wheat flour (chapati/roti), refined flour (naan), or stuffed (paratha). Cooked on tawa or tandoor and served with curries.`
    },
    {
      title: "Gulab Jamun",
      prep: `Deep-fried milk-solid balls soaked in warm cardamom-infused sugar syrup. Soft, sweet, and served warm or chilled.`
    },
    {
      title: "Chole Bhature",
      prep: `Spicy chickpeas cooked in a thick masala served with deep-fried, fluffy fermented flour bread called bhature. Popular Punjabi dish.`
    },
    {
      title: "Aloo Puri",
      prep: `Fluffy puris served with spicy potato curry (aloo sabzi). Often enjoyed as a breakfast or festive meal.`
    },
    {
      title: "Paneer Butter Masala",
      prep: `Cubes of paneer simmered in a creamy tomato-butter gravy with cashews, cream, and North Indian spices.`
    },
    {
      title: "Dal Makhani",
      prep: `Slow-cooked black urad dal and kidney beans in a creamy, buttery base. Rich in flavor and often served with naan or rice.`
    },
    {
      title: "Kofta Curry",
      prep: `Vegetable or meat balls (kofta) simmered in a spicy onion-tomato-based curry. Served with paratha or rice.`
    },
    {
      title: "Veg / Chicken Biryani (Awadhi or Punjabi)",
      prep: `Layered rice dish cooked with marinated meat or vegetables, whole spices, saffron, and ghee. Often served with raita or salan.`
    },
    {
      title: "Pulao",
      prep: `Fragrant rice cooked with vegetables or meat and mild spices. Lighter than biryani and quicker to prepare.`
    },
    {
      title: "Tandoori Chicken",
      prep: `Chicken marinated in yogurt and spices, then roasted in a tandoor (clay oven) or grilled. Has a smoky flavor and bright red hue.`
    }
  ];

  return (
    <div className="recipe-list">
      <div className="top-bar">
        <h1>🕌 North Indian Dishes</h1>
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

export default NorthIndianDishes;

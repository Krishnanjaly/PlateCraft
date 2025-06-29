import React from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

function DinnerRecipes() {
  const dinners = [
    {
      title: "Chapati + Sabzi",
      prep: `Serve soft, warm chapatis with a dry or semi-gravy vegetable dish like aloo gobi, bhindi masala, or baingan bharta.`
    },
    {
      title: "Dal Tadka + Rice",
      prep: `Cook yellow lentils with turmeric and salt. Prepare a tempering of ghee, cumin, garlic, and chili, and pour over the dal. Serve hot with steamed rice.`
    },
    {
      title: "Paneer Butter Masala + Naan",
      prep: `Simmer paneer cubes in a rich tomato-butter-cream gravy with cashew paste and spices. Serve with soft naan or kulcha.`
    },
    {
      title: "Rajma / Chole + Rice",
      prep: `Slow-cook red kidney beans or chickpeas in an onion-tomato masala base. Serve hot with basmati rice and onions.`
    },
    {
      title: "Biryani / Pulao",
      prep: `Layer marinated meat or vegetables with spiced rice and saffron. Cook on dum or pressure. Serve with raita and salad.`
    },
    {
      title: "Kadhi + Jeera Rice",
      prep: `Make a tangy yogurt-based curry with gram flour. Add pakoras if desired. Pair with cumin-flavored basmati rice.`
    },
    {
      title: "Spaghetti Aglio e Olio",
      prep: `Toss spaghetti with olive oil, garlic, chili flakes, and parsley. Quick, light, and flavorful Italian dinner.`
    },
    {
      title: "Grilled Chicken with Mashed Potatoes",
      prep: `Marinate chicken breasts in herbs and grill until juicy. Serve with creamy mashed potatoes and steamed veggies.`
    },
    {
      title: "Tacos / Quesadillas",
      prep: `Fill tortillas with spiced meat, beans, or veggies. Top with salsa, cheese, and guac. Grill quesadillas or fold tacos.`
    },
    {
      title: "Baked Lasagna",
      prep: `Layer pasta sheets with tomato meat sauce, béchamel, and mozzarella. Bake until bubbling and golden on top.`
    }
  ];

  return (
    <div className="recipe-list">
      <div className="top-bar">
        <h1>🍽️ Dinner Recipes</h1>
      <Link to="/" className="home-button">🏠 Home</Link>
      </div>
      {dinners.map((item, index) => (
        <div className="recipe-card" key={index}>
          <h2>{item.title}</h2>
          <p>{item.prep}</p>
        </div>
      ))}
    </div>
  );
}

export default DinnerRecipes;

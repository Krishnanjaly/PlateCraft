import React from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

function ChineseCuisine() {
  const chineseDishes = [
    {
      title: "Chow Mein (炒面)",
      prep: `Stir-fry boiled noodles until slightly crispy with vegetables, soy sauce, and choice of meat or tofu. Toss everything in a hot wok.`
    },
    {
      title: "Lo Mein (捞面)",
      prep: `Toss soft egg noodles with stir-fried vegetables, soy-based sauce, and protein. Lo mein is saucier and more tender than chow mein.`
    },
    {
      title: "Fried Rice (炒饭)",
      prep: `Stir-fry day-old rice with eggs, scallions, vegetables, soy sauce, and meat or shrimp. Fry on high heat for a smoky “wok hei” flavor.`
    },
    {
      title: "Dan Dan Noodles (担担面)",
      prep: `Top boiled noodles with a spicy sesame-peanut sauce, minced pork, scallions, chili oil, and Sichuan pepper for a tongue-tingling taste.`
    },
    {
      title: "Kung Pao Chicken (宫保鸡丁)",
      prep: `Sauté diced chicken with dried chilies, peanuts, and veggies in a sweet, sour, and spicy sauce made with soy sauce, vinegar, and sugar.`
    },
    {
      title: "Sweet and Sour Pork (糖醋里脊)",
      prep: `Deep-fry battered pork pieces, then toss in a glossy sauce made with ketchup, sugar, vinegar, and bell peppers.`
    },
    {
      title: "General Tso’s Chicken",
      prep: `Fry breaded chicken chunks and coat in a thick, sweet-spicy sauce. This dish is popular in American-Chinese cuisine, often served with broccoli.`
    },
    {
      title: "Orange Chicken",
      prep: `Similar to General Tso's, this dish features crispy fried chicken tossed in a sweet and tangy orange sauce with chili flakes.`
    },
    {
      title: "Sheng Jian Bao (生煎包)",
      prep: `Pan-fry juicy pork-filled dumplings in a covered skillet until the bottoms are golden and the tops are steamed. Sprinkle with sesame and scallions.`
    },
    {
      title: "Eggplant in Garlic Sauce (鱼香茄子)",
      prep: `Stir-fry Chinese eggplant with garlic, ginger, soy sauce, sugar, and vinegar. Serve with rice — spicy, sweet, and savory.`
    }
  ];

  return (
    <div className="recipe-list">
      <div className="top-bar">
        <h1>🥡 Chinese Cuisine Collection</h1>
      <Link to="/" className="home-button">🏠 Home</Link>
      </div>
      {chineseDishes.map((dish, index) => (
        <div className="recipe-card" key={index}>
          <h2>{dish.title}</h2>
          <p>{dish.prep}</p>
        </div>
      ))}
    </div>
  );
}

export default ChineseCuisine;

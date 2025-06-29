import React from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

function KoreanCuisine() {
  const dishes = [
    {
      title: "Bibimbap (비빔밥)",
      prep: `Serve warm rice topped with sautéed veggies, beef, fried egg, and gochujang (Korean chili paste). Mix well before eating.`
    },
    {
      title: "Kimchi Bokkeumbap (김치볶음밥)",
      prep: `Stir-fry chopped kimchi with rice, garlic, sesame oil, and optional diced pork or spam. Top with a fried egg.`
    },
    {
      title: "Bulgogi (불고기)",
      prep: `Thinly slice beef and marinate in soy sauce, sugar, garlic, sesame oil, and pear juice. Grill or pan-fry until tender.`
    },
    {
      title: "Samgyeopsal (삼겹살)",
      prep: `Grill thick slices of pork belly at the table. Eat wrapped in lettuce with garlic, ssamjang (spicy paste), and rice.`
    },
    {
      title: "Galbi (갈비)",
      prep: `Marinate beef short ribs in a sweet-soy garlic sauce. Grill until slightly charred and tender. Serve with rice and banchan.`
    },
    {
      title: "Jajangmyeon (짜장면)",
      prep: `Cook noodles and top with thick black bean sauce made from chunjang, diced pork, and vegetables. Mix well before eating.`
    },
    {
      title: "Tteokbokki (떡볶이)",
      prep: `Simmer chewy rice cakes in a spicy-sweet gochujang sauce with fish cakes, boiled egg, and scallions.`
    },
    {
      title: "Corn Dogs (콘도그)",
      prep: `Skewer sausage (and mozzarella, optionally), coat in a thick batter, roll in breadcrumbs or sugar, and deep-fry until golden.`
    },
    {
      title: "Kimchi (김치)",
      prep: `Ferment napa cabbage with Korean chili flakes (gochugaru), garlic, ginger, and fish sauce. Store for days to develop flavor.`
    },
    {
      title: "Gyeran Mari (계란말이)",
      prep: `Whisk eggs with chopped vegetables, then roll in layers on a nonstick pan until it forms a tight egg log. Slice and serve.`
    }
  ];

  return (
    <div className="recipe-list">
      <div className="top-bar">
        <h1>🇰🇷 Korean Cuisine Collection</h1>
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

export default KoreanCuisine;

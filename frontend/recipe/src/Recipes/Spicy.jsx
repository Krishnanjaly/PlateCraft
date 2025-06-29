import React from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

function Spicy() {
  const spicyRecipes = [
    {
      title: "Vindaloo (India)",
      prep: `Marinate pork or chicken with vinegar, garlic, ginger, cumin, coriander, paprika, and lots of red chili powder. Cook slowly with onions and tomatoes until tender and rich. Serve with rice or naan.`
    },
    {
      title: "Sichuan Hot Pot (China)",
      prep: `Simmer a broth base made with Sichuan peppercorns, dried chilies, star anise, and doubanjiang (fermented chili paste). Dip thinly sliced meats, tofu, and vegetables into the bubbling pot and eat with sesame dipping sauces.`
    },
    {
      title: "Kimchi Jjigae (Korea)",
      prep: `Boil aged kimchi with pork belly, tofu, scallions, garlic, and gochujang (Korean chili paste). Simmer until flavors deepen and serve steaming hot with rice.`
    },
    {
      title: "Tom Yum Goong (Thailand)",
      prep: `Make a broth with lemongrass, kaffir lime leaves, galangal, chili paste, lime juice, and fish sauce. Add shrimp, mushrooms, and fresh chilies. Serve hot and sour with fresh cilantro.`
    },
    {
      title: "Tacos al Pastor with Salsa Roja (Mexico)",
      prep: `Marinate pork in a blend of dried chilies, pineapple, vinegar, and spices. Grill on a spit or stovetop, then slice into tacos. Top with onion, cilantro, and smoky salsa roja.`
    },
    {
      title: "Pil-Pil Prawns (Spain)",
      prep: `Sauté garlic and chili flakes in olive oil, then add fresh prawns and cook until sizzling and infused. Serve immediately with crusty bread to soak up the spicy oil.`
    },
    {
      title: "Berbere Chicken Stew (Ethiopia)",
      prep: `Cook chicken with onions, garlic, ginger, and Ethiopian berbere spice blend. Simmer with tomatoes and broth until thick and fragrant. Serve with injera or rice.`
    }
  ];

  return (
    <div className="recipe-list">
      <div className="top-bar">
        <h1>🔥 Spicy Recipes From Around the World</h1>
      <Link to="/" className="home-button">🏠 Home</Link>
      </div>
      {spicyRecipes.map((recipe, index) => (
        <div className="recipe-card" key={index}>
          <h2>{recipe.title}</h2>
          <p>{recipe.prep}</p>
        </div>
      ))}
    </div>
  );
}

export default Spicy;

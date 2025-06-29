import React from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

function CoolDrinks() {
  const drinks = [
    {
      title: "Lemonade / Nimbu Pani",
      prep: `Mix lemon juice with water, sugar, and a pinch of salt. Add ice cubes and mint for a refreshing summer drink.`
    },
    {
      title: "Watermelon Juice",
      prep: `Blend watermelon cubes with a splash of lime juice. Strain and serve chilled with mint leaves.`
    },
    {
      title: "Aam Panna",
      prep: `Boil raw mangoes, extract pulp, and blend with mint, cumin, black salt, and jaggery. Chill and serve.`
    },
    {
      title: "Cucumber Mint Cooler",
      prep: `Blend cucumber with mint, lime juice, salt, and chilled water. A hydrating detox-style cooler.`
    },
    {
      title: "Virgin Mojito",
      prep: `Muddle mint leaves, lime wedges, and sugar. Top with soda or Sprite and ice. Stir and serve.`
    },
    {
      title: "Mango Milkshake",
      prep: `Blend ripe mango pulp with milk and sugar. Chill and serve topped with chopped mango or dry fruits.`
    },
    {
      title: "Cold Coffee",
      prep: `Blend instant coffee, milk, sugar, and ice. Serve chilled with a scoop of vanilla ice cream if desired.`
    },
    {
      title: "Falooda",
      prep: `Layer rose syrup, soaked sabja seeds, falooda sev, milk, and ice cream in a glass. Top with nuts or jelly.`
    },
    {
      title: "Chikoo / Custard Apple Shake",
      prep: `Blend peeled chikoo or custard apple pulp with milk and sugar. Strain if needed and serve cold.`
    },
    {
      title: "Rose Lemonade",
      prep: `Mix rose syrup with lemon juice, chilled water or soda, and ice. Garnish with mint and rose petals.`
    }
  ];

  return (
    <div className="recipe-list">
      <div className="top-bar">
        <h1>🥤 Cool Summer Drinks</h1>
      <Link to="/" className="home-button">🏠 Home</Link>
      </div>
      {drinks.map((drink, index) => (
        <div className="recipe-card" key={index}>
          <h2>{drink.title}</h2>
          <p>{drink.prep}</p>
        </div>
      ))}
    </div>
  );
}

export default CoolDrinks;

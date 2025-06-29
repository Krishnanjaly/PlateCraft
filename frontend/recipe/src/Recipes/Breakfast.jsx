import React from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

function BreakfastRecipes() {
  const breakfasts = [
    {
      title: "Pancakes / Waffles",
      prep: `Mix flour, eggs, milk, and baking powder into a batter. Cook pancakes on a griddle or use a waffle iron. Serve with maple syrup, butter, or fruit.`
    },
    {
      title: "Omelet",
      prep: `Whisk eggs, pour into a hot pan, and cook until set. Fill with cheese, vegetables, or meats. Fold and serve hot.`
    },
    {
      title: "Scrambled Eggs & Toast",
      prep: `Cook whisked eggs over low heat with butter until soft and fluffy. Serve with toasted bread.`
    },
    {
      title: "French Toast",
      prep: `Dip bread slices in a mixture of eggs, milk, and cinnamon. Pan-fry until golden. Top with syrup, fruit, or powdered sugar.`
    },
    {
      title: "Cereal and Milk",
      prep: `Pour cereal into a bowl and top with chilled milk. Add fruit or nuts for extra nutrition.`
    },
    {
      title: "Peanut Butter Toast",
      prep: `Toast bread and spread with peanut butter. Add banana slices, honey, or chia seeds for variety.`
    },
    {
      title: "Breakfast Sandwich",
      prep: `Layer eggs, cheese, and sausage or bacon between bread, English muffins, or bagels. Toast until warm and melty.`
    },
    {
      title: "Avocado Toast",
      prep: `Mash ripe avocado with lime juice, salt, and chili flakes. Spread over toast and top with egg, tomato, or seeds.`
    },
    {
      title: "Smoothie",
      prep: `Blend fruits (like banana, berries, mango) with yogurt or milk. Add oats, seeds, or protein powder as desired.`
    },
    {
      title: "Idli / Dosa / Uttapam",
      prep: `Made from fermented rice-lentil batter. Steam for idli, spread and crisp for dosa, or make thick and topped for uttapam. Serve with chutney and sambar.`
    }
  ];

  return (
    <div className="recipe-list">
      <div className="top-bar">
        <h1>🥞 Breakfast Recipes</h1>
      <Link to="/" className="home-button">🏠 Home</Link>
      </div>
      {breakfasts.map((item, index) => (
        <div className="recipe-card" key={index}>
          <h2>{item.title}</h2>
          <p>{item.prep}</p>
        </div>
      ))}
    </div>
  );
}

export default BreakfastRecipes;

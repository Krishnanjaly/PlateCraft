import React from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

function Sugary() {
  const desserts = [
    {
      title: "Chocolate Cake",
      prep: `Mix cocoa powder, flour, sugar, baking soda, eggs, oil, and buttermilk. Bake in layers at 350°F until moist and fluffy. Frost with rich chocolate ganache or buttercream.`
    },
    {
      title: "Baklava (Middle East/Greece)",
      prep: `Layer thin phyllo dough with chopped nuts (usually pistachios or walnuts) and butter. Bake until golden, then soak with honey-lemon syrup. Let sit before serving.`
    },
    {
      title: "Red Velvet Cake",
      prep: `Blend cocoa powder with red food coloring, buttermilk, vinegar, and flour. Bake and layer with classic cream cheese frosting for a tangy-sweet flavor.`
    },
    {
      title: "Doughnuts",
      prep: `Make a soft yeast dough, let it rise, and cut into rings. Fry until golden, then glaze with sugar, chocolate, or cinnamon-sugar.`
    },
    {
      title: "Milk Chocolate Bars",
      prep: `Melt milk chocolate with a bit of cocoa butter, pour into molds, and cool until set. Add nuts, caramel, or crisped rice if desired.`
    },
    {
      title: "Chocolate Chip Cookies",
      prep: `Cream butter, sugar, and eggs. Fold in flour, baking soda, and chocolate chips. Bake at 350°F for 10–12 minutes until golden and gooey.`
    },
    {
      title: "Macarons (France)",
      prep: `Whisk almond flour and powdered sugar with meringue. Pipe onto baking sheets, let rest, then bake. Sandwich with ganache, jam, or buttercream.`
    },
    {
      title: "Gelato (Italy)",
      prep: `Simmer milk and sugar with flavoring (chocolate, pistachio, fruit). Churn slowly for a dense, creamy texture. Freeze and serve soft.`
    },
    {
      title: "Tres Leches Cake",
      prep: `Bake a light sponge cake and soak it in a mixture of evaporated milk, condensed milk, and cream. Top with whipped cream and fruit. Chill before serving.`
    }
  ];

  return (
    <div className="recipe-list">
      <div className="top-bar">
        <h1>🍰 Dessert Recipes Collection</h1>
      <Link to="/" className="home-button">🏠 Home</Link>
      </div>
      {desserts.map((recipe, index) => (
        <div className="recipe-card" key={index}>
          <h2>{recipe.title}</h2>
          <p>{recipe.prep}</p>
        </div>
      ))}
    </div>
  );
}

export default Sugary;

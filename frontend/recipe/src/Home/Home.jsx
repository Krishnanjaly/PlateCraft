import logo from "./recipe logo.jpg";
import "./Home.css";
import { useEffect, useState, useMemo, useRef } from "react";
import entry from "./PlateCraft Special Recipes.png";
import { Link, useNavigate } from "react-router-dom";
import { ALL_RECIPES } from "../data/recipesData.js";

const CATEGORIES_DATA = [
  {
    id: "trending",
    title: "Trending Recipes",
    path: "/TrendingRecipes",
    icon: "🔥",
    badge: "Popular",
    tag: "Trending",
    items: [
      "Foil-Pack Ravioli",
      "No-Cook, Fresh Summer Dinners",
      "Roasted Figs & Prosciutto",
      "Bright, Fruit-Focused Breakfasts",
      "Summer Fruit Desserts",
      "Pimientos Rellenos & Sardine Empanadas",
      "Turmeric-Infused Comfort"
    ]
  },
  {
    id: "spicy",
    title: "Spicy Foods",
    path: "/SpicyFoods",
    icon: "🌶️",
    badge: "Hot & Fiery",
    tag: "Spicy",
    items: [
      "Vindaloo (India)",
      "Sichuan Hot Pot (China)",
      "Kimchi Jjigae (Korea)",
      "Tom Yum Goong (Thailand)",
      "Tacos al Pastor with Salsa Roja (Mexico)",
      "Pil-Pil Prawns (Spain)",
      "Berbere Chicken Stew (Ethiopia)"
    ]
  },
  {
    id: "sugary",
    title: "Sugary Foods",
    path: "/Sugary",
    icon: "🍰",
    badge: "Dessert",
    tag: "Desserts",
    items: [
      "Chocolate Cake",
      "Baklava (Middle East/Greece)",
      "Red Velvet Cake",
      "Doughnuts",
      "Milk Chocolate Bars",
      "Chocolate Chip Cookies",
      "Macarons (France)",
      "Gelato (Italy)",
      "Tres Leches Cake"
    ]
  },
  {
    id: "snacks",
    title: "Evening Snacks",
    path: "/Snacks",
    icon: "🥟",
    badge: "Quick Bites",
    tag: "Snacks",
    items: [
      "Crispy Samosa",
      "Onion & Paneer Pakora",
      "Vegetable Spring Rolls",
      "Masala French Fries",
      "Chicken Nuggets / Popcorn Chicken",
      "Grilled Cheese Sandwich",
      "Garlic Bread",
      "Paneer / Chicken Kathi Roll",
      "Peanut Chikki / Ladoo",
      "Egg Bhurji / Scrambled Eggs"
    ]
  },
  {
    id: "american",
    title: "American Foods",
    path: "/American",
    icon: "🍔",
    badge: "Classics",
    tag: "World Cuisine",
    items: [
      "Gourmet Hamburger",
      "Hot Dog",
      "Fried Chicken",
      "Barbecue Pork Ribs",
      "Classic Mac and Cheese",
      "Meatloaf",
      "Pizza (New York / Chicago)",
      "Buffalo Chicken Wings",
      "Philly Cheesesteak",
      "Warm Apple Pie"
    ]
  },
  {
    id: "korean",
    title: "Korean Dishes",
    path: "/Korean",
    icon: "🍲",
    badge: "K-Cuisine",
    tag: "World Cuisine",
    items: [
      "Bibimbap (비빔밥)",
      "Kimchi Bokkeumbap (김치볶음밥)",
      "Bulgogi (불고기)",
      "Samgyeopsal (삼겹살)",
      "Galbi (갈비)",
      "Jajangmyeon (짜장면)",
      "Tteokbokki (떡볶이)",
      "Crispy Korean Corn Dogs",
      "Kimchi (김치)",
      "Gyeran Mari (계란말이)"
    ]
  },
  {
    id: "chinese",
    title: "Chinese Dishes",
    path: "/Chinese",
    icon: "🥢",
    badge: "Wok & Dim Sum",
    tag: "World Cuisine",
    items: [
      "Chow Mein (炒面)",
      "Lo Mein (捞面)",
      "Vegetable / Chicken Fried Rice",
      "Dan Dan Noodles (担担面)",
      "Kung Pao Chicken (宫保鸡丁)",
      "Sweet and Sour Pork (糖醋里脊)",
      "General Tso's Chicken",
      "Orange Chicken",
      "Sheng Jian Bao (生煎包)",
      "Eggplant in Garlic Sauce (鱼香茄子)"
    ]
  },
  {
    id: "breakfast",
    title: "Breakfast Recipes",
    path: "/Breakfast",
    icon: "🥞",
    badge: "Morning Glory",
    tag: "Breakfast",
    items: [
      "Fluffy Buttermilk Pancakes",
      "Avocado Sourdough Toast",
      "Classic French Toast Brioche",
      "Classic Herb Omelet",
      "Scrambled Eggs & Toast",
      "Cereal & Fresh Berries",
      "Peanut Butter Toast",
      "Tropical Power Smoothie",
      "Idli / Dosa / Uttapam"
    ]
  },
  {
    id: "dinner",
    title: "Dinner Specials",
    path: "/Dinner",
    icon: "🍛",
    badge: "Feast",
    tag: "Dinner",
    items: [
      "Paneer Butter Masala",
      "Royal Dum Biryani",
      "Spaghetti Aglio e Olio",
      "Dal Tadka + Jeera Rice",
      "Chapati + Seasonal Sabzi",
      "Rajma / Chole + Basmati Rice",
      "Grilled Chicken & Mashed Potatoes",
      "Crispy Tacos / Quesadillas",
      "Baked Cheesy Lasagna"
    ]
  },
  {
    id: "south-indian",
    title: "South Indian Delights",
    path: "/SouthIndian",
    icon: "🥥",
    badge: "Traditional",
    tag: "Indian",
    items: [
      "Crispy Ghee Dosa",
      "Steamed Idli with Sambar",
      "Malabar Porotta + Roast Curry",
      "Aromatic Sambar",
      "Tangy Pepper Rasam",
      "Tempered Curd Rice",
      "Ven Pongal with Cashews",
      "Zesty Lemon Rice",
      "Traditional Kerala Avial",
      "Chettinad Chicken Fry"
    ]
  },
  {
    id: "north-indian",
    title: "North Indian Royal",
    path: "/NorthIndian",
    icon: "🫓",
    badge: "Rich & Savory",
    tag: "Indian",
    items: [
      "Chole Bhature",
      "Dal Makhani",
      "Tandoori Chicken Skewers",
      "Paneer Butter Masala",
      "Butter Naan & Laccha Paratha",
      "Bedmi Aloo Puri",
      "Malai Kofta Curry",
      "Awadhi Dum Biryani",
      "Gulab Jamun"
    ]
  },
  {
    id: "cool-drinks",
    title: "Chilled Beverages",
    path: "/CoolDrinks",
    icon: "🍹",
    badge: "Refreshing",
    tag: "Beverages",
    items: [
      "Mint Nimbu Pani",
      "Sparkling Virgin Mojito",
      "Royal Rose Falooda",
      "Alphonso Mango Shake",
      "Fresh Watermelon Cooler",
      "Kairi Aam Panna",
      "Cucumber Mint Splash",
      "Artisan Cold Coffee",
      "Creamy Chikoo Shake"
    ]
  }
];

const FILTER_TAGS = ["All", "Trending", "Spicy", "Desserts", "Snacks", "Breakfast", "Dinner", "Indian", "World Cuisine", "Beverages"];

function Home() {
  const [username, setUsername] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeTag, setActiveTag] = useState("All");
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) setUsername(storedUsername);
  }, []);

  // Close search dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex = (slideIndex + 1) % slides.length;
      if (slides[slideIndex]) {
        slides[slideIndex].style.display = "block";
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    navigate("/Login");
  };

  // Real-time matching recipes across all categories
  const matchingRecipes = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return [];
    return ALL_RECIPES.filter((r) =>
      r.title.toLowerCase().includes(query) ||
      r.prep.toLowerCase().includes(query) ||
      r.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Filtered categories for the grid
  const filteredCategories = useMemo(() => {
    return CATEGORIES_DATA.filter((cat) => {
      const matchesTag = activeTag === "All" || cat.tag === activeTag;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesTag;

      const matchesTitle = cat.title.toLowerCase().includes(query);
      const matchesItems = cat.items.some((item) => item.toLowerCase().includes(query));
      return matchesTag && (matchesTitle || matchesItems);
    });
  }, [searchQuery, activeTag]);

  const [pantryIngredients, setPantryIngredients] = useState(["Eggs", "Tomato", "Onion", "Cheese", "Garlic"]);
  const [customIngInput, setCustomIngInput] = useState("");
  const [showAiStudio, setShowAiStudio] = useState(true);

  const togglePantryIng = (ing) => {
    if (pantryIngredients.includes(ing)) {
      setPantryIngredients(pantryIngredients.filter((i) => i !== ing));
    } else {
      setPantryIngredients([...pantryIngredients, ing]);
    }
  };

  const addCustomIngredient = (e) => {
    e.preventDefault();
    if (customIngInput.trim() && !pantryIngredients.includes(customIngInput.trim())) {
      setPantryIngredients([...pantryIngredients, customIngInput.trim()]);
      setCustomIngInput("");
    }
  };

  // AI Matching algorithm based on selected pantry ingredients
  const aiMatchedRecipes = useMemo(() => {
    if (pantryIngredients.length === 0) return [];
    const matched = ALL_RECIPES.map((recipe) => {
      let matchCount = 0;
      const text = (recipe.title + " " + recipe.prep).toLowerCase();
      pantryIngredients.forEach((ing) => {
        if (text.includes(ing.toLowerCase())) {
          matchCount++;
        }
      });

      const score = Math.min(
        95,
        Math.round((matchCount / Math.max(1, pantryIngredients.length)) * 100) + (matchCount > 0 ? 30 : 0)
      );

      return {
        ...recipe,
        matchScore: score,
        matchCount
      };
    });

    return matched
      .filter((r) => r.matchCount > 0)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 4);
  }, [pantryIngredients]);

  const [selectedCuisine, setSelectedCuisine] = useState("Any Global Cuisine");
  const [specificDishInput, setSpecificDishInput] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiGeneratedRecipe, setAiGeneratedRecipe] = useState(null);
  const [aiError, setAiError] = useState("");

  const handleGenerateLiveAiRecipe = async () => {
    setAiLoading(true);
    setAiError("");
    setAiGeneratedRecipe(null);

    try {
      const response = await fetch("http://localhost:5000/api/ai/generate-recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ingredients: pantryIngredients,
          cuisine: selectedCuisine,
          dishName: specificDishInput
        })
      });

      const data = await response.json();
      if (data.success && data.recipe) {
        setAiGeneratedRecipe(data.recipe);
      } else {
        setAiError(data.error || "Failed to generate recipe. Please check your Gemini API key.");
      }
    } catch (err) {
      console.error("AI Fetch error:", err);
      setAiError("Could not connect to backend server. Make sure server is running on port 5000.");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <>
      {/* Top Sticky Header with Active Search */}
      <header className="first">
        <div className="first-logo" onClick={() => navigate("/home")}>
          <img src={logo} alt="PlateCraft Logo" />
          <h1>PlateCraft</h1>
        </div>

        <div className="search-wrapper" ref={searchContainerRef}>
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search recipes, ingredients, dishes (e.g. Biryani, Ramen, Tacos)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSearchFocused(true);
            }}
            onFocus={() => setIsSearchFocused(true)}
          />
          {searchQuery && (
            <button
              className="search-clear-btn"
              onClick={() => {
                setSearchQuery("");
                setIsSearchFocused(false);
              }}
              title="Clear search"
            >
              ✕
            </button>
          )}

          {/* Instant Dropdown Results */}
          {isSearchFocused && searchQuery.trim() && (
            <div className="search-dropdown">
              <div className="search-dropdown-header">
                <span>Matching Recipes ({matchingRecipes.length})</span>
                <span style={{ fontSize: "11px", color: "var(--color-primary-light)" }}>Press Esc to close</span>
              </div>

              {matchingRecipes.length > 0 ? (
                matchingRecipes.slice(0, 8).map((recipe, idx) => (
                  <Link
                    key={idx}
                    to={recipe.path}
                    className="search-result-item"
                    onClick={() => {
                      setIsSearchFocused(false);
                    }}
                  >
                    <div className="search-result-top">
                      <span className="search-result-title">
                        <span>{recipe.icon}</span>
                        <span>{recipe.title}</span>
                      </span>
                      <span className="search-result-category">{recipe.category}</span>
                    </div>
                    <p className="search-result-prep">{recipe.prep}</p>
                  </Link>
                ))
              ) : (
                <div className="search-dropdown-empty">
                  No recipes found matching "{searchQuery}". <br />
                  <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                    Try searching for ingredients like "chicken", "ramen", "pasta", or "tacos".
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="auth-controls">
          <a
            href="#ai-studio"
            className="btn-nav-signin"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(244, 140, 6, 0.15)",
              borderColor: "rgba(244, 140, 6, 0.4)",
              color: "var(--color-accent)",
              padding: "7px 16px",
              borderRadius: "var(--radius-full)",
              fontSize: "13px",
              fontWeight: "700"
            }}
          >
            <span>✨</span> AI Chef Studio
          </a>

          {username ? (
            <div className="welcome-container">
              <span className="welcome-msg">👋 Welcome, <strong>{username}</strong></span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/Login" className="btn-primary">
              Login
            </Link>
          )}
        </div>
      </header>

      {/* Hero Banner Carousel */}
      <section className="hero-section">
        <div className="second">
          <div className="slide fade" style={{ display: "block" }}>
            <img src={entry} alt="PlateCraft Specials" />
            <div className="slide-overlay">
              <h3>PlateCraft Special Collection</h3>
              <p>Handcrafted culinary treasures crafted for food lovers and passionate home chefs.</p>
            </div>
          </div>
          <div className="slide fade">
            <img src="https://ptfswny.com/wp-content/uploads/solutions-featured-food-variety-and-options.jpg" alt="Global Cuisine" />
            <div className="slide-overlay">
              <h3>Global Cuisines & Flavors</h3>
              <p>Experience diverse culinary heritage from Korean street snacks to classic American grills.</p>
            </div>
          </div>
          <div className="slide fade">
            <img src="https://images.alphacoders.com/189/189163.jpg" alt="Rich Spices" />
            <div className="slide-overlay">
              <h3>Authentic Aromas & Spices</h3>
              <p>Delve into royal North Indian gravies and aromatic South Indian coastal traditions.</p>
            </div>
          </div>
          <div className="slide fade">
            <img src="https://c4.wallpaperflare.com/wallpaper/984/944/941/burger-french-fries-hamburger-wallpaper-preview.jpg" alt="Snacks & Burgers" />
            <div className="slide-overlay">
              <h3>Gourmet Quick Bites</h3>
              <p>Crispy evening treats, comforting burgers, and irresistible desserts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
         AI STUDIO & FEATURE HUB (POST-LOGIN)
         ---------------------------------------------------------------------- */}
      <section id="ai-studio" className="ai-studio-section">
        <div className="ai-studio-banner">
          <div className="ai-studio-header">
            <div className="ai-studio-title">
              <span className="ai-tag-badge">🤖 Powered by Google Gemini AI</span>
              <h3>
                <span>✨</span> Global AI Recipe Generator & Pantry Matcher
              </h3>
              <p>
                Choose ingredients or pick a world cuisine (Japanese, Mexican, Italian, Thai, French, etc.) to have Gemini AI invent an authentic recipe on the spot!
              </p>
            </div>
          </div>

          <div className="ai-matcher-container">
            {/* Left: Interactive Pantry Picker & Live AI Prompt */}
            <div className="pantry-picker">
              <h4>
                <span>🥕 1. Select Available Ingredients ({pantryIngredients.length})</span>
                <span style={{ fontSize: "11px", color: "var(--color-primary-light)", cursor: "pointer" }} onClick={() => setPantryIngredients([])}>
                  Clear All
                </span>
              </h4>

              <div className="pantry-chips-grid">
                {["Eggs", "Tomato", "Onion", "Cheese", "Garlic", "Chicken", "Paneer", "Rice", "Potatoes", "Chili", "Milk", "Pasta", "Spinach", "Shrimp", "Beef", "Mushrooms", "Soy Sauce", "Avocado", "Tortillas"].map((ing) => (
                  <button
                    type="button"
                    key={ing}
                    className={`pantry-chip ${pantryIngredients.includes(ing) ? "active" : ""}`}
                    onClick={() => togglePantryIng(ing)}
                  >
                    <span>{pantryIngredients.includes(ing) ? "✓" : "+"}</span> {ing}
                  </button>
                ))}
              </div>

              <form onSubmit={addCustomIngredient} style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                <input
                  type="text"
                  placeholder="Add custom ingredient (e.g. Saffron, Lemongrass)..."
                  value={customIngInput}
                  onChange={(e) => setCustomIngInput(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "9px 14px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text-primary)",
                    fontSize: "13px",
                    outline: "none"
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "9px 16px",
                    background: "rgba(244, 140, 6, 0.2)",
                    border: "1px solid var(--color-primary-light)",
                    borderRadius: "var(--radius-sm)",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  + Add
                </button>
              </form>

              {/* World Cuisine Selection */}
              <div style={{ marginTop: "14px" }}>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "6px", textTransform: "uppercase", fontWeight: "700" }}>
                  🌍 2. Select World Cuisine Style:
                </div>
                <select
                  value={selectedCuisine}
                  onChange={(e) => setSelectedCuisine(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    background: "rgba(20, 15, 12, 0.95)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--color-accent)",
                    fontSize: "13.5px",
                    fontWeight: "600",
                    outline: "none",
                    marginBottom: "14px",
                    cursor: "pointer"
                  }}
                >
                  <option value="Any Global Cuisine">🌐 Any World Cuisine</option>
                  <option value="Japanese">🇯🇵 Japanese Cuisine (Ramen, Katsu, Teriyaki)</option>
                  <option value="Mexican">🇲🇽 Mexican Cuisine (Tacos, Enchiladas, Salsas)</option>
                  <option value="Italian">🇮🇹 Italian Cuisine (Pastas, Risottos, Pizza)</option>
                  <option value="Thai">🇹🇭 Thai Cuisine (Curries, Pad Thai, Soups)</option>
                  <option value="French">🇫🇷 French Gourmet (Classic Sauces & Bakes)</option>
                  <option value="Spanish">🇪🇸 Spanish Cuisine (Paella, Tapas, Bravas)</option>
                  <option value="Turkish">🇹🇷 Turkish & Mediterranean (Kebabs, Flatbreads)</option>
                  <option value="Indian">🇮🇳 Indian Royal (Curries, Tandoor & Biryani)</option>
                  <option value="Korean">🇰🇷 Korean Cuisine (BBQ, Stews, Kimchi)</option>
                </select>

                <button
                  type="button"
                  className="ai-generate-btn"
                  onClick={handleGenerateLiveAiRecipe}
                  disabled={aiLoading}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px"
                  }}
                >
                  {aiLoading ? "✨ Gemini AI is Cooking Up Your Recipe..." : "✨ Generate Authentic World Recipe with AI"}
                </button>
              </div>
            </div>

            {/* Right: Instant Catalog Matches */}
            <div className="ai-results-box">
              <div className="ai-results-header">
                <span>Instant Catalog Matches</span>
                <span>{aiMatchedRecipes.length} Matches</span>
              </div>

              {aiMatchedRecipes.length > 0 ? (
                <div className="ai-results-list">
                  {aiMatchedRecipes.map((r, idx) => (
                    <Link to={r.path} key={idx} className="ai-result-card">
                      <div className="ai-result-info">
                        <h5>
                          <span>{r.icon}</span>
                          <span>{r.title}</span>
                        </h5>
                        <p>{r.category} • Ready in 15–25 mins</p>
                      </div>
                      <span className="ai-score-pill">{r.matchScore}% Match</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "30px 10px", color: "var(--text-muted)", fontSize: "13.5px" }}>
                  <span>🥕 Select ingredients on the left to discover recipes you can make immediately!</span>
                </div>
              )}
            </div>
          </div>

          {/* Live Generated AI Chef Recipe Card */}
          {aiLoading && (
            <div className="ai-loading-spinner">
              <div className="spinner-wheel"></div>
              <p style={{ color: "var(--color-accent)", fontWeight: "600", fontSize: "14px" }}>
                👨‍🍳 Google Gemini is crafting your authentic {selectedCuisine} recipe...
              </p>
            </div>
          )}

          {aiError && (
            <div style={{ marginTop: "16px", padding: "14px", background: "rgba(244, 63, 94, 0.15)", border: "1px solid rgba(244, 63, 94, 0.3)", borderRadius: "var(--radius-sm)", color: "#fda4af", fontSize: "13.5px" }}>
              ⚠️ {aiError}
            </div>
          )}

          {aiGeneratedRecipe && (
            <div className="ai-gen-card">
              <div className="ai-gen-header">
                <div className="ai-gen-title">
                  <h3>{aiGeneratedRecipe.title}</h3>
                  <p>{aiGeneratedRecipe.description}</p>
                </div>
                <div className="ai-gen-meta-badges">
                  <span className="ai-meta-badge">🌍 {aiGeneratedRecipe.cuisine}</span>
                  <span className="ai-meta-badge">⏱️ Prep: {aiGeneratedRecipe.prepTime}</span>
                  <span className="ai-meta-badge">🔥 Cook: {aiGeneratedRecipe.cookTime}</span>
                  <span className="ai-meta-badge">🍽️ {aiGeneratedRecipe.servings}</span>
                  <span className="ai-meta-badge">📊 {aiGeneratedRecipe.calories}</span>
                  <span className="ai-meta-badge">⚡ {aiGeneratedRecipe.difficulty}</span>
                </div>
              </div>

              <div className="ai-gen-body">
                <div className="ai-gen-ingredients">
                  <h4>🥣 Ingredients Needed:</h4>
                  <ul>
                    {aiGeneratedRecipe.ingredients?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="ai-gen-instructions">
                  <h4>👨‍🍳 Step-by-Step Cooking Guide:</h4>
                  <ol>
                    {aiGeneratedRecipe.instructions?.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>

              {aiGeneratedRecipe.chefTip && (
                <div className="ai-chef-tip-box">
                  <strong>💡 Master Chef's Secret:</strong> {aiGeneratedRecipe.chefTip}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Filter Chips Bar */}
      <section className="filter-bar">
        {FILTER_TAGS.map((tag) => (
          <button
            key={tag}
            className={`filter-chip ${activeTag === tag ? "active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </section>

      {/* Categories Grid */}
      <main className="third">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <div className="category-card" key={cat.id}>
              <div>
                <div className="card-header">
                  <h2>
                    <span>{cat.icon}</span>
                    <span>{cat.title}</span>
                  </h2>
                  <span className="card-badge">{cat.badge}</span>
                </div>
                <ul>
                  {cat.items.slice(0, 6).map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        color: searchQuery && item.toLowerCase().includes(searchQuery.toLowerCase().trim())
                          ? "var(--color-accent)"
                          : "var(--text-secondary)",
                        fontWeight: searchQuery && item.toLowerCase().includes(searchQuery.toLowerCase().trim())
                          ? "700"
                          : "normal"
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to={cat.path} className="card-footer-link">
                <span>Explore {cat.items.length} Recipes</span>
                <span>→</span>
              </Link>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>
            <h3>No recipe categories found matching "{searchQuery}"</h3>
            <p>Try searching for ingredients, dish names, or click below to reset search.</p>
            <button
              className="btn-primary"
              style={{ marginTop: "16px" }}
              onClick={() => {
                setSearchQuery("");
                setActiveTag("All");
              }}
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </main>

      {/* Modern Footer */}
      <div className="last">
        <footer className="footer-content">
          <div className="footer-brand">
            <h4>🍽️ PlateCraft</h4>
            <p>&copy; {new Date().getFullYear()} PlateCraft. All rights reserved. Master the art of cooking.</p>
          </div>
          <div className="logos">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <img src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png" alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
              <img src="https://www.pngplay.com/wp-content/uploads/9/Facebook-Free-PNG.png" alt="Facebook" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="YouTube">
              <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-photo-0.png" alt="YouTube" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;

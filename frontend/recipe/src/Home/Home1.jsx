import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./recipe logo.jpg";
import entry from "./PlateCraft Special Recipes.png";
import "./Home1.css";

const CUISINES = [
  {
    id: "indian",
    name: "Indian Cuisine",
    flag: "🇮🇳",
    image: "https://images.alphacoders.com/189/189163.jpg",
    desc: "Bold spices, rich gravies, and timeless regional comfort classics.",
    path: "/NorthIndian"
  },
  {
    id: "korean",
    name: "Korean Dishes",
    flag: "🇰🇷",
    image: "https://ptfswny.com/wp-content/uploads/solutions-featured-food-variety-and-options.jpg",
    desc: "Iconic kimchi delights, savory bulgogi, and sizzling street foods.",
    path: "/Korean"
  },
  {
    id: "chinese",
    name: "Chinese Flavors",
    flag: "🇨🇳",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
    desc: "Wok-tossed noodles, delicate dim sum, and vibrant sweet-sour glazes.",
    path: "/Chinese"
  },
  {
    id: "american",
    name: "American Classics",
    flag: "🇺🇸",
    image: "https://c4.wallpaperflare.com/wallpaper/984/944/941/burger-french-fries-hamburger-wallpaper-preview.jpg",
    desc: "Gourmet burgers, barbecue ribs, and comforting hearty classics.",
    path: "/American"
  },
  {
    id: "desserts",
    name: "Decadent Desserts",
    flag: "🍰",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    desc: "From French macarons to artisanal cakes and rich chocolate delights.",
    path: "/Sugary"
  },
  {
    id: "spicy",
    name: "Spicy Sensations",
    flag: "🌶️",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    desc: "Fiery curries, zesty salsas, and tingling hot pots from across the globe.",
    path: "/SpicyFoods"
  }
];

const FEATURES = [
  {
    icon: "🍳",
    title: "Discover Recipes",
    desc: "Explore hundreds of step-by-step recipes across global cuisines, breakfast bowls, and weekend feasts."
  },
  {
    icon: "🌍",
    title: "Global Flavors",
    desc: "Travel the world from your kitchen with authentic Indian, Korean, Chinese, and Mediterranean dishes."
  },
  {
    icon: "🥕",
    title: "Cook With What You Have",
    desc: "Turn pantry staples into gourmet dinners with our intelligent ingredient-matching engine."
  },
  {
    icon: "✨",
    title: "Smart Recommendations",
    desc: "Get personalized recipe suggestions tailored to your dietary goals, taste preferences, and prep time."
  }
];

function Home1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState(["Eggs", "Tomato", "Onion", "Cheese"]);
  const navigate = useNavigate();

  const toggleIngredient = (ing) => {
    if (selectedIngredients.includes(ing)) {
      setSelectedIngredients(selectedIngredients.filter((i) => i !== ing));
    } else {
      setSelectedIngredients([...selectedIngredients, ing]);
    }
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing-page">
      {/* ----------------------------------------------------------------------
         1. NAVBAR
         ---------------------------------------------------------------------- */}
      <nav className={`landing-navbar ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <Link to="/" className="landing-brand">
          <img src={logo} alt="PlateCraft Logo" />
          <span className="landing-brand-text">PlateCraft</span>
        </Link>

        <ul className="landing-nav-links">
          <li>
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}>
              Home
            </a>
          </li>
          <li>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection("features"); }}>
              Features
            </a>
          </li>
          <li>
            <a href="#what-can-i-cook" onClick={(e) => { e.preventDefault(); scrollToSection("what-can-i-cook"); }}>
              What Can I Cook?
            </a>
          </li>
          <li>
            <a href="#explore-cuisines" onClick={(e) => { e.preventDefault(); scrollToSection("explore-cuisines"); }}>
              Explore Cuisines
            </a>
          </li>
          <li>
            <a href="#why-platecraft" onClick={(e) => { e.preventDefault(); scrollToSection("why-platecraft"); }}>
              Why Us
            </a>
          </li>
        </ul>

        <div className="landing-nav-actions">
          <Link to="/Login" className="btn-nav-signin">
            Sign In
          </Link>
          <Link to="/Signup" className="btn-nav-signup">
            Join Free
          </Link>
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* ----------------------------------------------------------------------
         2. HERO SECTION
         ---------------------------------------------------------------------- */}
      <header id="hero" className="landing-hero">
        <div className="hero-content">
          <div className="hero-pill-badge">
            <span>✨</span> Your Next Meal Starts Here
          </div>
          <h1 className="hero-title">
            Discover Recipes. <br />
            <span className="gradient-text">Create Something Delicious.</span>
          </h1>
          <p className="hero-subtitle">
            Explore recipes from around the world, discover new flavors, and find the perfect dish for whatever ingredients you have in your kitchen.
          </p>

          <div className="hero-buttons">
            <button className="btn-hero-primary" onClick={() => scrollToSection("explore-cuisines")}>
              Explore Recipes <span>→</span>
            </button>
            <button className="btn-hero-secondary" onClick={() => scrollToSection("what-can-i-cook")}>
              <span>✨</span> What Can I Cook?
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat-item">
              <h4>1,200+</h4>
              <p>Handcrafted Recipes</p>
            </div>
            <div className="hero-stat-item">
              <h4>12+</h4>
              <p>Global Cuisines</p>
            </div>
            <div className="hero-stat-item">
              <h4>4.9 ★</h4>
              <p>Community Loved</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src={entry} alt="PlateCraft Gourmet Showcase" />
            <div className="hero-image-gradient"></div>
          </div>

          <div className="floating-badge floating-badge-top">
            <span className="badge-icon">⭐</span>
            <div>
              <div className="badge-title">4.9 / 5.0 Rating</div>
              <div className="badge-sub">Over 1,200+ reviews</div>
            </div>
          </div>

          <div className="floating-badge floating-badge-bottom">
            <span className="badge-icon">🔥</span>
            <div>
              <div className="badge-title">Trending Dish</div>
              <div className="badge-sub">Saffron Dum Biryani</div>
            </div>
          </div>
        </div>
      </header>

      {/* ----------------------------------------------------------------------
         3. FEATURE HIGHLIGHTS
         ---------------------------------------------------------------------- */}
      <section id="features" className="section-features">
        <div className="section-header-center">
          <span className="section-tag">Why You'll Love PlateCraft</span>
          <h2 className="section-title">Designed for Curious Cooks & Food Lovers</h2>
          <p className="section-subtitle">
            Everything you need to turn simple kitchen ingredients into unforgettable culinary experiences.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((item, idx) => (
            <div className="feature-card" key={idx}>
              <div className="feature-icon-wrapper">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------------------
         4. "WHAT CAN I COOK?" AI FEATURE PREVIEW
         ---------------------------------------------------------------------- */}
      <section id="what-can-i-cook" className="section-ai-preview">
        <div className="ai-preview-container">
          <div className="ai-preview-content">
            <span className="section-tag">AI INGREDIENT MATCHER</span>
            <h2 className="section-title">What Can I Cook?</h2>
            <p>
              Not sure what to make tonight? Tell PlateCraft what ingredients you have in your fridge or pantry, and let our smart engine surface the most delicious recipes instantly.
            </p>

            <ul className="ai-feature-checklist">
              <li>
                <span className="check">✓</span> Reduce food waste by using what you already have
              </li>
              <li>
                <span className="check">✓</span> Instant match scoring & missing ingredient suggestions
              </li>
              <li>
                <span className="check">✓</span> Quick 15–30 minute weekday dinner solutions
              </li>
            </ul>

            <Link to="/Signup" className="btn-hero-primary" style={{ display: "inline-flex" }}>
              Try What Can I Cook <span>→</span>
            </Link>
          </div>

          <div className="ai-demo-card">
            <div className="ai-card-header">
              <h4>
                <span>🥕</span> What can I cook with?
              </h4>
              <span className="ai-status-badge">● AI Ready</span>
            </div>

            <div className="ai-ingredient-box">
              <div className="ai-box-label">Your Available Ingredients:</div>
              <div className="ingredient-pills">
                {["Eggs", "Tomato", "Onion", "Cheese", "Garlic", "Spinach", "Paneer"].map((ing) => (
                  <button
                    type="button"
                    key={ing}
                    className={`ing-pill ${selectedIngredients.includes(ing) ? "selected" : ""}`}
                    onClick={() => toggleIngredient(ing)}
                    style={{
                      cursor: "pointer",
                      background: selectedIngredients.includes(ing) ? "rgba(244, 140, 6, 0.25)" : "rgba(255, 255, 255, 0.06)",
                      borderColor: selectedIngredients.includes(ing) ? "var(--color-primary-light)" : "rgba(255, 255, 255, 0.12)",
                      color: selectedIngredients.includes(ing) ? "#fff" : "var(--text-secondary)"
                    }}
                  >
                    <span>{selectedIngredients.includes(ing) ? "✓" : "+"}</span> {ing}
                  </button>
                ))}
              </div>
            </div>

            <button className="ai-find-btn" onClick={() => navigate("/Signup")}>
              ✨ Find Matching Recipes
            </button>

            <div className="ai-suggestions-title">AI Suggested Matches:</div>
            <div className="ai-suggestions-list">
              <div className="ai-recipe-item">
                <div className="ai-recipe-left">
                  <span>🍳</span>
                  <div>
                    <div className="ai-recipe-name">Masala Cheese Omelette</div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>10 mins • Easy prep</div>
                  </div>
                </div>
                <span className="match-badge match-high">80% match</span>
              </div>

              <div className="ai-recipe-item">
                <div className="ai-recipe-left">
                  <span>🥪</span>
                  <div>
                    <div className="ai-recipe-name">Crispy Egg Cheese Toast</div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>8 mins • Quick bite</div>
                  </div>
                </div>
                <span className="match-badge match-high">75% match</span>
              </div>

              <div className="ai-recipe-item">
                <div className="ai-recipe-left">
                  <span>🍅</span>
                  <div>
                    <div className="ai-recipe-name">Mediterranean Shakshuka</div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>20 mins • Rich skillet</div>
                  </div>
                </div>
                <span className="match-badge match-mid">60% match</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
         5. EXPLORE CUISINES
         ---------------------------------------------------------------------- */}
      <section id="explore-cuisines" className="section-cuisines">
        <div className="section-header-center">
          <span className="section-tag">Culinary Journeys</span>
          <h2 className="section-title">Explore Flavors From Around the World</h2>
          <p className="section-subtitle">
            Curated recipe collections created to bring world-class international cuisines straight to your table.
          </p>
        </div>

        <div className="cuisines-grid">
          {CUISINES.map((item) => (
            <Link to={item.path} key={item.id} className="cuisine-card">
              <img src={item.image} alt={item.name} loading="lazy" />
              <div className="cuisine-card-overlay">
                <span className="cuisine-tag">{item.flag} Cuisine</span>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="cuisine-explore-cta">
                  Explore Recipes <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------------------
         6. WHY PLATECRAFT (TWO-COLUMN)
         ---------------------------------------------------------------------- */}
      <section id="why-platecraft" className="section-why">
        <div className="why-visual-wrapper">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
            alt="Cooking in Kitchen"
          />
          <div className="why-overlay-badge">
            <h5>👨‍🍳 Master Every Recipe</h5>
            <p>From foundational techniques to gourmet plating and pairings.</p>
          </div>
        </div>

        <div className="why-content">
          <span className="section-tag">The PlateCraft Advantage</span>
          <h2 className="section-title">Everything You Need to Decide What's for Dinner</h2>

          <ul className="why-checklist">
            <li>
              <div className="check-icon">✓</div>
              <div className="check-text">
                <h4>Discover recipes easily</h4>
                <p>Enjoy clean, clutter-free recipe views without distracting ads or endless backstories.</p>
              </div>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <div className="check-text">
                <h4>Explore cuisines from around the world</h4>
                <p>Taste authentic culinary traditions with easy-to-find substitute suggestions.</p>
              </div>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <div className="check-text">
                <h4>Find recipes based on available ingredients</h4>
                <p>Never wonder what to cook again—enter your ingredients and get matched.</p>
              </div>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <div className="check-text">
                <h4>Save time deciding what to cook</h4>
                <p>Streamlined navigation and categorized collections built for busy cooks.</p>
              </div>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <div className="check-text">
                <h4>Simple and beginner-friendly guidance</h4>
                <p>Clear step-by-step instructions designed to build confidence in any kitchen.</p>
              </div>
            </li>
          </ul>

          <Link to="/Signup" className="btn-hero-primary" style={{ display: "inline-flex" }}>
            Start Cooking Today <span>→</span>
          </Link>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
         7. FINAL CALL TO ACTION (CTA)
         ---------------------------------------------------------------------- */}
      <section className="section-cta">
        <div className="cta-banner">
          <h2 className="cta-title">Ready to Find Your Next Favorite Recipe?</h2>
          <p className="cta-subtitle">
            Join the PlateCraft culinary community and start exploring hundreds of delicious possibilities today.
          </p>
          <div className="cta-buttons">
            <Link to="/Signup" className="btn-hero-primary">
              Join PlateCraft — Free <span>→</span>
            </Link>
            <Link to="/Login" className="btn-hero-secondary">
              Sign In to Your Account
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
         8. FOOTER
         ---------------------------------------------------------------------- */}
      <footer className="landing-footer">
        <div className="footer-inner">
          <div className="footer-col-brand">
            <div className="landing-brand">
              <img src={logo} alt="PlateCraft Logo" />
              <span className="landing-brand-text">PlateCraft</span>
            </div>
            <p>
              Discover. Cook. Enjoy. PlateCraft is your intelligent companion to exploring delicious recipes and mastering the art of cooking.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Instagram">
                <img src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png" alt="Instagram" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Facebook">
                <img src="https://www.pngplay.com/wp-content/uploads/9/Facebook-Free-PNG.png" alt="Facebook" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="YouTube">
                <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-photo-0.png" alt="YouTube" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Explore Cuisines</h4>
            <ul className="footer-links">
              <li><Link to="/NorthIndian">Indian Specials</Link></li>
              <li><Link to="/Korean">Korean Street Food</Link></li>
              <li><Link to="/Chinese">Chinese Wok</Link></li>
              <li><Link to="/American">American Classics</Link></li>
              <li><Link to="/Sugary">Sweet Treats</Link></li>
              <li><Link to="/SpicyFoods">Spicy Hot Pots</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>PlateCraft</h4>
            <ul className="footer-links">
              <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}>Home</a></li>
              <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection("features"); }}>Features</a></li>
              <li><a href="#what-can-i-cook" onClick={(e) => { e.preventDefault(); scrollToSection("what-can-i-cook"); }}>What Can I Cook?</a></li>
              <li><a href="#explore-cuisines" onClick={(e) => { e.preventDefault(); scrollToSection("explore-cuisines"); }}>World Cuisines</a></li>
              <li><a href="#why-platecraft" onClick={(e) => { e.preventDefault(); scrollToSection("why-platecraft"); }}>Why PlateCraft</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get Started</h4>
            <ul className="footer-links">
              <li><Link to="/Login">Sign In</Link></li>
              <li><Link to="/Signup">Create Free Account</Link></li>
              <li><Link to="/TrendingRecipes">Trending Recipes</Link></li>
              <li><Link to="/Breakfast">Morning Breakfasts</Link></li>
              <li><Link to="/CoolDrinks">Summer Beverages</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} PlateCraft. All rights reserved.</div>
          <div>Crafted for food lovers and home chefs everywhere.</div>
        </div>
      </footer>
    </div>
  );
}

export default Home1;
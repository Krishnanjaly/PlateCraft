import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";
import logos from "./recipe logo.jpg";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!username || !email || !password) {
      alert("Please fill in all required fields (Name, Email, Password).");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);
    fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        phone: contact,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        alert(data.message || data.error);
        if (data.message) navigate("/Login");
      })
      .catch((err) => {
        setLoading(false);
        alert("Signup failed. Please make sure the backend server is running.");
        console.error("Signup error:", err);
      });
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-start">
        <Link to="/" className="back-home">← Back to Home</Link>
        
        <div className="signup-head">
          <img src={logos} alt="PlateCraft Logo" />
          <div>
            <h2>Create an Account</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "13px", margin: "2px 0 0 0" }}>
              Join the PlateCraft culinary community
            </p>
          </div>
        </div>

        <div className="info">
          <label>Full Name *</label>
          <input
            type="text"
            placeholder="Chef Gordon"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="info">
          <label>Email Address *</label>
          <input
            type="email"
            placeholder="chef@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="info">
          <label>Contact Number (Optional)</label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <div className="info">
          <label>Password *</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="info">
          <label>Confirm Password *</label>
          <input
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSignup()}
          />
        </div>

        <button className="signup-btn" onClick={handleSignup} disabled={loading}>
          {loading ? "Creating Account..." : "Create Free Account"}
        </button>

        <div className="sign-footer">
          <p>
            Already have an account?{" "}
            <Link to="/Login">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;


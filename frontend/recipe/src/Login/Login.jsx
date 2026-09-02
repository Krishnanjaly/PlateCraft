import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logos from "./recipe logo.jpg";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    console.log("🟡 Submitting login with:", { email, password });

    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        console.log("🔵 Response status:", res.status);
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        console.log("🟢 Full login response from backend:", data);

        if (data.username) {
          localStorage.setItem("username", data.username);
          alert(data.message || "Login successful!");
          navigate("/home");
        } else {
          alert(data.error || data.message || "Login failed");
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("Error connecting to server. Please ensure the backend is running.");
        console.error("Login error:", err);
      });
  };

  return (
    <div className="login-wrapper">
      <div className="login-start">
        <Link to="/" className="back-home">← Back to Home</Link>
        
        <div className="head">
          <img src={logos} alt="PlateCraft Logo" />
          <div>
            <h2>Welcome Back</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "13px", margin: "2px 0 0 0" }}>
              Sign in to your PlateCraft account
            </p>
          </div>
        </div>

        <div className="info">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="chef@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="info">
          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
        </div>

        <div className="pass">
          <Link to="#">Forgot Password?</Link>
        </div>

        <button className="login-btn" onClick={handleLogin} disabled={loading}>
          {loading ? "Signing in..." : "Sign In to PlateCraft"}
        </button>

        <div className="sign">
          <p>
            Don't have an account?{" "}
            <Link to="/Signup">Create one free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;


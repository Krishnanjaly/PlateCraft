import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logos from "./recipe logo.jpg";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
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
      console.log("🟢 Full login response from backend:", data);

      if (data.username) {
        localStorage.setItem("username", data.username);
        alert(data.message || "Login successful");

        // ✅ Navigate after login
        navigate("/home");
      } else {
        alert(data.error || data.message || "Login failed");
      }
    })
    .catch((err) => {
      alert("Error connecting to server");
      console.error("Login error:", err);
    });
};

  return (
    <div className="login-start">
      <div className="head">
        <img src={logos} alt="logo" width="60px" height="60px" />
        <h2>Login Page</h2>
      </div>

      <div className="info">
        <label>E-Mail ID</label>
        <input
          type="email"
          placeholder="Enter your email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />

      <div className="info">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter the password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />

      <div className="pass">
        <Link to="#">Forgot Password?</Link>
      </div>
      <br />

      <button onClick={handleLogin}>Login</button>

      <div className="sign">
        <h5>
          If you don't have an account, please{" "}
          <Link to="/Signup">Signup!!</Link>
        </h5>
      </div>
    </div>
  );
}

export default Login;

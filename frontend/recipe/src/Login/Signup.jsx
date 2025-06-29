import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import logos from "./recipe logo.jpg";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,     // ✅ matches backend
        email,
        phone: contact,     // ✅ matches backend
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message || data.error);
        if (data.message) navigate("/Login");
      })
      .catch((err) => {
        alert("Signup failed");
        console.error("Signup error:", err);
      });
  };

  return (
    <div className="signup-start">
      <img src={logos} alt="logo" width="60px" height="60px" />
      <h2>Signup</h2>

      <div className="info">
        <label>UserName</label>
        <input
          type="text"
          placeholder="Enter your name.."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <br />

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
        <label>Contact Number</label>
        <input
          type="number"
          placeholder="Enter your contact number.."
          value={contact}
          onChange={(e) => setContact(e.target.value)}
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

      <div className="info">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Re-enter the password.."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <br />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;

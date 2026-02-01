import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter email and password.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Backend response:", response.data);

      // Expected JWT response
      const { success, message, token } = response.data;

      setMessage(message);

      if (success) {
        // 🔐 Save JWT token
        localStorage.setItem("token", token);

        // Redirect to protected page
        navigate("/home");
      }

    } catch (err) {
      console.error(err);
      setMessage("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}

      <p>
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;

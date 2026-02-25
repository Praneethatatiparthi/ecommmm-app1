import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";
function Login(){
     const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "Praneetha" && password === "123") {
      localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);  
      navigate("/products1 ");
    } else {
      alert("Invalid username or password");
    }
  };
    return(
        <>
              <Header />
      <div style={{ textAlign: "center",padding:"120px"}}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button onClick={handleLogin}>Login</button>
        <p>
          New user? <Link to="/signup">Register here</Link>
        </p>
      </div>
      <Footer />

        </>
    )
}
export default Login
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "Usuario" && password === "Contraseña") {
      navigate("/App");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin}>
        <label className="login-label">
          Usuario:
          <input
            className="login-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label className="login-label">
          Contraseña:
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="login-button" type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/register");
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
      <p>
        No tienes una cuenta? <a href="/register">Regístrate</a>
      </p>
    </div>
  );
}

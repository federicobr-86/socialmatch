import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/matching");
  };

  return (
    <div>
      <h1>Register</h1>
      <input type="text" placeholder="Nombre" />
      <input type="number" placeholder="Edad" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="file" accept="image/*" />
      <textarea placeholder="Descripción"></textarea>
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
}

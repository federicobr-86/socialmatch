import { useParams } from "react-router-dom";

export default function Profile() {
  const { userId } = useParams();

  return (
    <div className="main">
      <h1>Tu perfil {userId}</h1>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Perfil"
          className="img"
        />
        <p>Nombre</p>
        <p>Edad</p>
        <p>Descripción</p>
        <button className="button">Editar</button>
      </div>
    </div>
  );
}

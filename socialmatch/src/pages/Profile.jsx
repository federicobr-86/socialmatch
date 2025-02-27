import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "../styles/Profile.scss";

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Profile() {
  const userId = "1"; // User ID fijo para testeo
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log("Fetching user profile for ID:", userId);
        const docRef = doc(db, "Profile", "Person"); // Acceder al documento "Person"
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Profile data:", docSnap.data());
          setProfile(docSnap.data());
        } else {
          console.warn("No such document found!");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <p>Cargando perfil...</p>;
  }

  if (!profile) {
    return <p>No se encontró el perfil.</p>;
  }

  return (
    <div className="main">
      <h1>Perfil de {profile.Nombre}</h1>{" "}
      {/* Aquí cambio "Name" por "Nombre" */}
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Perfil"
          className="img"
        />
        <p>
          <strong>Nombre:</strong> {profile.Nombre}{" "}
          {/* Cambio "Name" por "Nombre" */}
        </p>
        <p>
          <strong>Edad:</strong> {profile.Edad} {/* Cambio "Age" por "Edad" */}
        </p>
        <p>
          <strong>Descripción:</strong> {profile.Descripcion}{" "}
          {/* Cambio "Description" por "Descripcion" */}
        </p>
        <p>
          <strong>Instagram:</strong> {profile.Instagram}
        </p>
        <p>
          <strong>Teléfono:</strong> {profile.Telefono}{" "}
          {/* Cambio "Phone" por "Telefono" */}
        </p>
        <button className="button">Editar</button>
      </div>
    </div>
  );
}

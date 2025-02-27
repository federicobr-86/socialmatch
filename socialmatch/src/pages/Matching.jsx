import { useNavigate } from "react-router-dom";
import TinderCard from "react-tinder-card";
import { useState } from "react";
import "../styles/Matching.scss";

const dummyProfiles = [
  {
    id: 1,
    name: "María",
    description: "Amante de los viajes y el café.",
    img: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Lucía",
    description: "Apasionada por la música y el arte.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1936&auto=format&fit=crop",
  },
];

export default function Matching() {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState(dummyProfiles);

  const handleSwipe = (direction, id) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== id));
  };

  const handleProfileClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <div className="main">
      <h1>Matching</h1>
      {profiles.length > 0 ? (
        <div className="card-container">
          {profiles.map((profile, index) => (
            <TinderCard
              key={profile.id}
              className="card"
              onSwipe={(dir) => handleSwipe(dir, profile.id)}
              preventSwipe={["up", "down"]}
            >
              <div
                className="card-content"
                onClick={() => handleProfileClick(profile.id)}
              >
                <img src={profile.img} alt={profile.name} className="img" />
                <h2>{profile.name}</h2>
                <p>{profile.description}</p>
              </div>
              <div className="buttons">
                <button
                  className="button"
                  onClick={() => handleSwipe("left", profile.id)}
                >
                  No me gusta
                </button>
                <button
                  className="button"
                  onClick={() => handleSwipe("right", profile.id)}
                >
                  Me gusta
                </button>
              </div>
            </TinderCard>
          ))}
        </div>
      ) : (
        <p>No hay más perfiles disponibles</p>
      )}
    </div>
  );
}

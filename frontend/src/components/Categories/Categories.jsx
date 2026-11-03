import { useState } from "react";
import "./Categories.css";

// Images dans public/images/ (si le fichier manque, l'emoji s'affiche)
// `color` = fond de la tuile derrière l'image. À remplacer plus tard par l'API.
const DEFAULT_CATEGORIES = [
  { id: "real-estate", label: "Real Estate", image: "/images/immobilier.jpg", emoji: "🏠", color: "#e4e4ee" },
  { id: "mobility", label: "Mobility", image: "/images/velo.jpg", emoji: "🚲", color: "#e4e4ee" },
  { id: "pro-tools", label: "Pro Tools", image: "/images/perforateur.jpg", emoji: "🔨", color: "var(--color-primary)" },
  { id: "even-tech", label: "Even Tech", image: "/images/tech-manquante.jpg", emoji: "📽️", color: "#e4e4ee" },
  { id: "tech-evenement", label: "Tech Événement", image: "/images/camera-reflex.jpg", emoji: "🎥", color: "#e4e4ee" },
  { id: "camping", label: "Camping", image: "/images/camping.jpg", emoji: "⛺", color: "#d9ead3" },
];

function Tile({ category }) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="categories__tile" style={{ background: category.color }} aria-hidden="true">
      {category.image && !failed ? (
        <img src={category.image} alt="" onError={() => setFailed(true)} />
      ) : (
        <span className="categories__emoji">{category.emoji}</span>
      )}
    </span>
  );
}

export default function Categories({
  categories = DEFAULT_CATEGORIES,
  onSelect = () => {}, // reçoit l'id de la catégorie (ou null si on désélectionne)
}) {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    const next = id === activeId ? null : id;
    setActiveId(next);
    onSelect(next);
  };

  return (
    <nav className="categories" aria-label="Catégories">
      <ul>
        {categories.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              className={c.id === activeId ? "is-active" : ""}
              aria-pressed={c.id === activeId}
              onClick={() => handleClick(c.id)}
            >
              <Tile category={c} />
              <span className="categories__label">{c.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

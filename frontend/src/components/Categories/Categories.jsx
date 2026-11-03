import { useState } from "react";
import "./Categories.css";

// À remplacer plus tard par les catégories venant de l'API.
// `emoji` → remplace par `icon: "/icons/xxx.svg"` quand tu auras les icônes.
const DEFAULT_CATEGORIES = [
  { id: "real-estate", label: "Real Estate", emoji: "🏠" },
  { id: "mobility", label: "Mobility", emoji: "🚗" },
  { id: "pro-tools", label: "Pro Tools", emoji: "🧰" },
  { id: "even-tech", label: "Even Tech", emoji: "🔧" },
  { id: "tech-evenement", label: "Tech Événement", emoji: "🎬" },
  { id: "camping", label: "Camping", emoji: "⛺" },
];

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
              <span className="categories__icon" aria-hidden="true">
                {c.icon ? <img src={c.icon} alt="" /> : c.emoji}
              </span>
              <span className="categories__label">{c.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

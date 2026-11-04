import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Categories.css";

// Images dans public/images/. Si un fichier manque, l'emoji s'affiche.
// Les ids correspondent à ceux du menu "Catégorie" du Hero.
const DEFAULT_CATEGORIES = [
  { id: "immobilier", label: "Immobilier", image: "/images/immobilier.jpg", emoji: "🏢" },
  { id: "mobilite", label: "Mobilité", image: "/images/velo.jpg", emoji: "🚲" },
  { id: "outils-pro", label: "Outils Pro", image: "/images/perforateur.jpg", emoji: "🔨" },
  { id: "evenementiel", label: "Événementiel", image: "/images/enceinte.jpg", emoji: "🔊" },
  { id: "high-tech", label: "High-Tech", image: "/images/camera-reflex.jpg", emoji: "📷" },
  { id: "camping", label: "Camping", image: "/images/camping.jpg", emoji: "⛺" },
  { id: "maison-jardin", label: "Maison & Jardin", image: "/images/maison-jardin.jpg", emoji: "🪴" },
  { id: "sports-loisirs", label: "Sports & Loisirs", image: "/images/sports-loisirs.jpg", emoji: "🎾" },
  { id: "enfants-bebe", label: "Enfants & Bébé", image: "/images/enfants-bebe.jpg", emoji: "🍼" },
  { id: "autres", label: "Autres", more: true },
];

function Thumb({ category }) {
  const [failed, setFailed] = useState(false);

  if (category.more) {
    return (
      <span className="cat__more" aria-hidden="true">
        <MoreHorizontal size={22} />
      </span>
    );
  }
  if (category.image && !failed) {
    return <img src={category.image} alt="" onError={() => setFailed(true)} />;
  }
  return <span className="cat__emoji" aria-hidden="true">{category.emoji}</span>;
}

export default function Categories({
  categories = DEFAULT_CATEGORIES,
  onSelect = () => {}, // id de la catégorie (ou null si on désélectionne)
  onSeeAll = () => {},
}) {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    const next = id === activeId ? null : id;
    setActiveId(next);
    onSelect(next);
  };

  return (
    <section aria-labelledby="cat-title">
      <SectionHeader
        title="Parcourez nos catégories"
        linkLabel="Voir toutes les catégories"
        onLinkClick={onSeeAll}
      />
      <ul className="cat__list">
        {categories.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              className={`cat${c.id === activeId ? " is-active" : ""}`}
              aria-pressed={c.id === activeId}
              onClick={() => handleClick(c.id)}
            >
              <span className="cat__thumb"><Thumb category={c} /></span>
              <span className="cat__label">{c.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

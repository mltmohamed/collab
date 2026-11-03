import { useState } from "react";
import OfferCard from "../OfferCard/OfferCard";
import "./BestOffers.css";

const DEFAULT_TABS = [
  { id: "populaire", label: "Populaire" },
  { id: "logements", label: "Logements" },
  { id: "mobilite", label: "Mobilité" },
  { id: "outils-pro", label: "Outils Pro" },
  { id: "tech-evenement", label: "Tech Événement" },
  { id: "camping", label: "Camping" },
];

// Données d'exemple : à remplacer par l'API.
// `category` sert au filtrage par onglet ; `popular` alimente l'onglet "Populaire".
const DEFAULT_OFFERS = [
  {
    id: 1, category: "logements", popular: true, emoji: "🏢", image: "/images/immobilier.jpg",
    title: "Studio Centre-Ville", price: 250,
    features: [
      { label: "1 Chambre", emoji: "🛏️" },
      { label: "SDB", emoji: "🚿" },
      { label: "Proche Tram", emoji: "📍" },
    ],
  },
  {
    id: 2, category: "mobilite", popular: true, emoji: "🚲", image: "/images/velo.jpg",
    title: "Vélo Électrique", price: 45,
    features: [
      { label: "Autonomie 80km", emoji: "🔋" },
      { label: "Antivol inclus", emoji: "🔒" },
    ],
  },
  {
    id: 3, category: "outils-pro", popular: true, emoji: "🔨", image: "/images/perforateur.jpg",
    title: "Marteau-Piqueur Pro", price: 90,
    features: [
      { label: "Puissance Industrielle", emoji: "⚡" },
      { label: "Sac de transport", emoji: "🎒" },
    ],
  },
  {
    id: 4, category: "tech-evenement", popular: true, emoji: "🎥", image: "/images/camera-pro.jpg",
    title: "Caméra 4K Pro", price: 180,
    features: [
      { label: "Objectif interchangeable", emoji: "📷" },
      { label: "Manuel", emoji: "✏️" },
    ],
  },
];

export default function BestOffers({
  tabs = DEFAULT_TABS,
  offers = DEFAULT_OFFERS,
  onTabChange = () => {}, // utile si le back filtre côté serveur
  onReserve = () => {},
}) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTab = (id) => {
    setActiveTab(id);
    onTabChange(id);
  };

  // Filtrage côté front (peut être retiré si l'API renvoie déjà la bonne liste)
  const visible = offers.filter((o) =>
    activeTab === tabs[0].id ? o.popular : o.category === activeTab
  );

  return (
    <section className="best">
      <h2 className="best__title">Nos Meilleures Offres</h2>

      <div className="best__tabs" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={t.id === activeTab}
            className={t.id === activeTab ? "is-active" : ""}
            onClick={() => handleTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {visible.length ? (
        <div className="best__grid">
          {visible.map((o) => (
            <OfferCard key={o.id} offer={o} onReserve={onReserve} />
          ))}
        </div>
      ) : (
        <p className="best__empty">Aucune offre dans cette catégorie pour le moment.</p>
      )}
    </section>
  );
}

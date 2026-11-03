import { useState } from "react";
import ResultCard from "../ResultCard/ResultCard";
import "./ResultsGrid.css";

// Données d'exemple : à remplacer par l'API
const DEFAULT_RESULTS = [
  { id: 1, title: "Citadine Hatchback", subtitle: "Hatchback", emoji: "🚗", available: true, statusLabel: "Disponible maintenant", seats: 5, transmission: "Manuel", price: 250 },
  { id: 2, title: "Caméra 4K Pro", subtitle: "Manuel", emoji: "🎥", image: "/images/camera-reflex.jpg", available: true, statusLabel: "Disponible maintenant", seats: 1, transmission: "Manuel", price: 180 },
  { id: 3, title: "Vélo Électrique", subtitle: "VAE", emoji: "🚲", image: "/images/velo.jpg", available: true, statusLabel: "Disponible maintenant", seats: 1, transmission: "Manuel", price: 45 },
  { id: 4, title: "Marteau-Piqueur Pro", subtitle: "Sac de transport", emoji: "🔨", image: "/images/perforateur.jpg", available: false, statusLabel: "Retour à 9h", seats: 1, transmission: "Manuel", price: 90 },
  { id: 5, title: "Monospace MPV", subtitle: "MPV", emoji: "🚐", image: "/images/monospace.jpg", available: true, statusLabel: "Disponible maintenant", seats: 7, transmission: "Manuel", price: 120 },
  { id: 6, title: "Caméra 4K Pro", subtitle: "SUV", emoji: "🎥", image: "/images/camera-cube.jpg", available: false, statusLabel: "Retour à 14h", seats: 1, transmission: "Manuel", price: 180 },
];

export default function ResultsGrid({
  results = DEFAULT_RESULTS,
  initialFavorites = [], // ids déjà en favoris (venant du back)
  onToggleFavorite = () => {}, // (id, isFavorite)
  onReserve = () => {},
}) {
  const [favorites, setFavorites] = useState(() => new Set(initialFavorites));

  const handleFavorite = (id, isFav) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      isFav ? next.add(id) : next.delete(id);
      return next;
    });
    onToggleFavorite(id, isFav);
  };

  return (
    <section className="results">
      <h2 className="results__title">
        Résultats <span>({results.length})</span>
      </h2>

      {results.length ? (
        <div className="results__grid">
          {results.map((item) => (
            <ResultCard
              key={item.id}
              item={item}
              isFavorite={favorites.has(item.id)}
              onToggleFavorite={handleFavorite}
              onReserve={onReserve}
            />
          ))}
        </div>
      ) : (
        <p className="results__empty">Aucun résultat pour votre recherche.</p>
      )}
    </section>
  );
}

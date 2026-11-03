import "./OfferCard.css";

// Carte réutilisable (Meilleures Offres + résultats de recherche)
// offer = { id, title, image?, emoji?, features: [{ label, emoji? }], price, unit? }
export default function OfferCard({ offer, onReserve = () => {} }) {
  const { title, image, emoji, features = [], price, unit = "/jour" } = offer;

  return (
    <article className="offer">
      <div className="offer__media">
        {image ? <img src={image} alt={title} /> : <span aria-hidden="true">{emoji}</span>}
      </div>

      <h3 className="offer__title">{title}</h3>

      <ul className="offer__features">
        {features.map((f) => (
          <li key={f.label}>
            <span aria-hidden="true">{f.emoji ?? "•"}</span> {f.label}
          </li>
        ))}
      </ul>

      <div className="offer__footer">
        <p className="offer__price">
          €{price} <span>{unit}</span>
        </p>
        <button type="button" className="offer__btn" onClick={() => onReserve(offer)}>
          Réserver
        </button>
      </div>
    </article>
  );
}

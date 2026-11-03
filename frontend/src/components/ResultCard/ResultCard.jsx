import "./ResultCard.css";

// item = { id, title, subtitle, image?, emoji?, available, statusLabel, seats, transmission, price, unit? }
export default function ResultCard({
  item,
  isFavorite = false,
  onToggleFavorite = () => {},
  onReserve = () => {},
}) {
  const {
    title, subtitle, image, emoji, available = true, statusLabel,
    seats, transmission, price, unit = "/jour",
  } = item;

  return (
    <article className="result">
      <div className="result__top">
        <span className={`result__badge ${available ? "is-ok" : "is-off"}`}>
          {statusLabel ?? (available ? "Disponible" : "Indisponible")}
        </span>
        <button
          type="button"
          className={`result__fav${isFavorite ? " is-on" : ""}`}
          aria-pressed={isFavorite}
          aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
          onClick={() => onToggleFavorite(item.id, !isFavorite)}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <h3 className="result__title">{title}</h3>
      {subtitle && <p className="result__subtitle">{subtitle}</p>}

      <div className="result__media">
        {image ? <img src={image} alt={title} /> : <span aria-hidden="true">{emoji}</span>}
      </div>

      <div className="result__specs">
        {seats != null && <span>👤 {seats}</span>}
        {transmission && <span>⚙️ {transmission}</span>}
      </div>

      <div className="result__footer">
        <p className="result__price">
          €{price} <span>{unit}</span>
        </p>
        <button type="button" className="result__btn" onClick={() => onReserve(item)}>
          Réserver
        </button>
      </div>
    </article>
  );
}

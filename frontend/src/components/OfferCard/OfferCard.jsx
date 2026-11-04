import { useState } from "react";
import { Heart, Star, MapPin } from "lucide-react";
import "./OfferCard.css";

export default function OfferCard({
  offer,
  onReserve = () => {},
  onToggleFavorite = () => {},
}) {
  const [favorite, setFavorite] = useState(Boolean(offer.favorite));
  const [imageFailed, setImageFailed] = useState(false);

  const toggleFavorite = () => {
    const next = !favorite;
    setFavorite(next);
    onToggleFavorite(offer.id, next);
  };

  return (
    <article className="offer">
      {offer.badge && (
        <span className={`offer__badge offer__badge--${offer.badgeType || "popular"}`}>
          {offer.badge}
        </span>
      )}

      <button
        type="button"
        className={`offer__fav${favorite ? " is-on" : ""}`}
        aria-label={favorite ? "Retirer des favoris" : "Ajouter aux favoris"}
        aria-pressed={favorite}
        onClick={toggleFavorite}
      >
        <Heart size={17} fill={favorite ? "currentColor" : "none"} />
      </button>

      <button
        type="button"
        className="offer__image-button"
        onClick={() => onReserve(offer)}
        aria-label={`Voir ${offer.title}`}
      >
        <div className="offer__media">
          {offer.image && !imageFailed ? (
            <img
              src={offer.image}
              alt={offer.title}
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <span className="offer__placeholder" aria-hidden="true">
              {offer.emoji || "📦"}
            </span>
          )}
        </div>
      </button>

      <div className="offer__content">
        <h3 className="offer__title">{offer.title}</h3>
        <p className="offer__price">
          {offer.price} €<span> /jour</span>
          {offer.oldPrice && <del>{offer.oldPrice} €</del>}
        </p>

        <div className="offer__meta">
          <span className="offer__rating">
            <Star size={13} fill="currentColor" />
            {offer.rating ?? "Nouveau"}
            {offer.reviews != null && <span> ({offer.reviews})</span>}
          </span>
          {offer.city && (
            <span className="offer__city">
              <MapPin size={12} />
              {offer.city}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

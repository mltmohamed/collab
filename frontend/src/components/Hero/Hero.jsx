import { useState } from "react";
import "./Hero.css";

// Remplace `emoji` par `src: "/images/xxx.png"` quand tu auras les vraies images
const DEFAULT_COLLAGE = [
  { id: "building", emoji: "🏢", accent: true },
  { id: "scooter", emoji: "🛵" },
  { id: "drill", emoji: "🔨" },
  { id: "car", emoji: "🚗", large: true },
  { id: "projector", emoji: "📽️" },
  { id: "toolbox", emoji: "🧰", accent: true },
];

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
  </svg>
);

export default function Hero({
  totalItems = "10 000",
  collage = DEFAULT_COLLAGE,
  onSearch = () => {}, // à brancher avec l'API : reçoit { dates, location }
}) {
  const [dates, setDates] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ dates, location });
  };

  return (
    <section className="hero">
      <div className="hero__inner">
        <form className="hero__content" onSubmit={handleSubmit}>
          <h1 className="hero__title">
            Trouvez tout pour la location.
            <br />+{totalItems} articles.
          </h1>

          <p className="hero__label">Que voulez-vous louer ?</p>

          <div className="hero__fields">
            <label className="field">
              <input
                type="text"
                placeholder="Dates"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
                aria-label="Dates"
              />
              <CalendarIcon />
            </label>
            <label className="field">
              <input
                type="text"
                placeholder="Lieu"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                aria-label="Lieu"
              />
              <PinIcon />
            </label>
          </div>

          <button type="submit" className="hero__cta">Rechercher Maintenant</button>
        </form>

        <div className="hero__collage" aria-hidden="true">
          {collage.map((item) => (
            <div
              key={item.id}
              className={`tile tile--${item.id}${item.accent ? " tile--accent" : ""}${item.large ? " tile--large" : ""}`}
            >
              {item.src ? <img src={item.src} alt="" /> : <span>{item.emoji}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

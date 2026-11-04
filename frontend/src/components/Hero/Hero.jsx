import { useState } from "react";
import { Calendar, MapPin, ChevronDown } from "lucide-react";
import WhyFilko from "../WhyFilko/WhyFilko";
import "./Hero.css";

const DEFAULT_CATEGORIES = [
  { id: "all", label: "Toutes les catégories" },
  { id: "immobilier", label: "Immobilier" },
  { id: "mobilite", label: "Mobilité" },
  { id: "outils-pro", label: "Outils Pro" },
  { id: "evenementiel", label: "Événementiel" },
  { id: "high-tech", label: "High-Tech" },
  { id: "camping", label: "Camping" },
  { id: "maison-jardin", label: "Maison & Jardin" },
  { id: "sports-loisirs", label: "Sports & Loisirs" },
  { id: "enfants-bebe", label: "Enfants & Bébé" },
];

export default function Hero({
  totalItems = "10 000",
  image = "/images/hero-illustration.jpg",
  categories = DEFAULT_CATEGORIES,
  onSearch = () => {}, // reçoit { dates, location, category }
  onLearnMore = () => {},
}) {
  const [dates, setDates] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState(categories[0].id);
  const [imageFailed, setImageFailed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ dates, location, category });
  };

  return (
    <section className="hero">
      <div className="hero__main">
        <div className="hero__intro">
          <div className="hero__text">
            <h1 className="hero__title">
              Trouvez tout pour
              <span> la location...</span>
            </h1>
            <p className="hero__count">+{totalItems} articles disponibles.</p>
            <p className="hero__sub">Louez facilement ce qu'il vous faut, quand il vous faut.</p>
          </div>

          {!imageFailed && (
            <img
              className="hero__image"
              src={image}
              alt=""
              onError={() => setImageFailed(true)}
            />
          )}
        </div>

        <form className="searchbar" onSubmit={handleSubmit}>
          <label className="searchbar__seg">
            <Calendar size={18} aria-hidden="true" />
            <span className="searchbar__body">
              <span className="searchbar__label">Dates</span>
              <input
                type="text"
                placeholder="Sélectionner"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
              />
            </span>
          </label>

          <label className="searchbar__seg">
            <span className="searchbar__body">
              <span className="searchbar__label">Lieu</span>
              <input
                type="text"
                placeholder="Où ça ?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </span>
            <MapPin size={18} aria-hidden="true" />
          </label>

          <label className="searchbar__seg">
            <span className="searchbar__body">
              <span className="searchbar__label">Catégorie</span>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </span>
            <ChevronDown size={18} aria-hidden="true" />
          </label>

          <button type="submit" className="searchbar__btn">Rechercher</button>
        </form>
      </div>

      <WhyFilko onLearnMore={onLearnMore} />
    </section>
  );
}

import { useState } from "react";
import { Search, MapPin, ChevronDown, Bell } from "lucide-react";
import "./Topbar.css";

export default function Topbar({
  locationLabel = "Lieu actuel",
  language = "FR",
  user = null, // { name } quand l'utilisateur est connecté (fourni par le back)
  onSearch = () => {}, // { query }
  onLocationClick = () => {}, // ouvrir le choix du lieu
  onLogin = () => {},
}) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query: query.trim() });
  };

  return (
    <header className="topbar">
      <form className="topbar__search" onSubmit={handleSubmit} role="search">
        <div className="topbar__field">
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            placeholder="Rechercher un article, une location, un service..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Rechercher"
          />
          <button type="button" className="topbar__location" onClick={onLocationClick}>
            <MapPin size={16} aria-hidden="true" />
            {locationLabel}
            <ChevronDown size={16} aria-hidden="true" />
          </button>
        </div>
        <button type="submit" className="topbar__submit">Rechercher</button>
      </form>

      <div className="topbar__actions">
        <button type="button" className="topbar__lang">
          {language} <ChevronDown size={14} aria-hidden="true" />
        </button>
        <button type="button" className="topbar__bell" aria-label="Notifications">
          <Bell size={20} />
        </button>
        <button type="button" className="topbar__login" onClick={onLogin}>
          {user ? user.name : "Se connecter"}
        </button>
      </div>
    </header>
  );
}

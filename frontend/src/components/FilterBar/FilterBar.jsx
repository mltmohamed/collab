import { useState } from "react";
import "./FilterBar.css";

export default function FilterBar({
  onFilter = () => {}, // reçoit le mot-clé saisi
}) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(keyword.trim());
  };

  return (
    <form className="filterbar" onSubmit={handleSubmit} role="search">
      <span className="filterbar__icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
          <circle cx="16" cy="7" r="2" /><circle cx="8" cy="17" r="2" />
        </svg>
      </span>
      <input
        type="search"
        placeholder="Filtrer par mots-clés (ex: marque, modèle)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        aria-label="Filtrer par mots-clés"
      />
      <button type="submit">Filtrer</button>
    </form>
  );
}

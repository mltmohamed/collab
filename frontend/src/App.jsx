
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import "./styles/tokens.css";
import "./styles/layout.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import BestOffers from "./components/BestOffers/BestOffers";
import TrustBar from "./components/TrustBar/TrustBar";
import Newsletter from "./components/Newsletter/Newsletter";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fermer le menu avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearch = (data) => {
    console.log("Recherche :", data);
  };

  const handleCategorySelect = (id) => {
    console.log("Catégorie sélectionnée :", id);
  };

  const handleOfferClick = (offer) => {
    console.log("Offre sélectionnée :", offer);
  };

  const handleSubscribe = async (email) => {
    console.log("Inscription newsletter :", email);
  };

  return (
    <div className={`app ${menuOpen ? "menu-open" : ""}`}>

      {/* Fond sombre sur mobile */}
      {menuOpen && (
        <button
          className="sidebar-overlay"
          onClick={() => setMenuOpen(false)}
          aria-label="Fermer le menu"
        />
      )}

      {/* Menu latéral */}
      <Sidebar
        activePath="/"
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onUpgrade={() => console.log("Filko Plus")}
      />

      <div className="app__main">

        {/* En-tête mobile avec bouton burger */}
        <div className="mobile-header">
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          <span className="mobile-header__brand">Filko</span>
        </div>

        <Topbar
          onSearch={handleSearch}
          onLocationClick={() => console.log("Choisir le lieu")}
          onLogin={() => console.log("Connexion")}
        />

        <main className="app__content">

          <Hero
            onSearch={handleSearch}
            onLearnMore={() => console.log("En savoir plus")}
          />

          <Categories
            onSelect={handleCategorySelect}
            onSeeAll={() => console.log("Toutes les catégories")}
          />

          <BestOffers
            onSeeAll={() => console.log("Toutes les offres")}
            onOfferClick={handleOfferClick}
          />

          <section className="home-bottom">
            <TrustBar />
            <Newsletter onSubscribe={handleSubscribe} />
          </section>

        </main>
      </div>
    </div>
  );
}

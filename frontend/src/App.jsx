
import "./styles/tokens.css";
import "./styles/layout.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import BestOffers from "./components/BestOffers/BestOffers";

export default function App() {
  // Navigation et actions
  const handleSearch = (data) => {
    console.log("Recherche :", data);
  };

  const handleCategorySelect = (id) => {
    console.log("Catégorie sélectionnée :", id);
  };

  const handleOfferClick = (offer) => {
    console.log("Offre sélectionnée :", offer);
  };

  return (
    <div className="app">

      {/* Menu latéral */}
      <Sidebar
        activePath="/"
        onUpgrade={() => console.log("Filko Plus")}
      />

      {/* Contenu principal */}
      <div className="app__main">

        {/* Barre supérieure */}
        <Topbar
          onSearch={handleSearch}
          onLocationClick={() => console.log("Choisir le lieu")}
          onLogin={() => console.log("Connexion")}
        />

        <main className="app__content">

          {/* Présentation et recherche */}
          <Hero
            onSearch={handleSearch}
            onLearnMore={() => console.log("En savoir plus")}
          />

          {/* Catégories */}
          <Categories
            onSelect={handleCategorySelect}
            onSeeAll={() => console.log("Toutes les catégories")}
          />

          {/* Meilleures offres */}
          <BestOffers
            onSeeAll={() => console.log("Toutes les offres")}
            onOfferClick={handleOfferClick}
          />

        </main>
      </div>
    </div>
  );
}

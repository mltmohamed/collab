
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
  // Gestion de la recherche
  const handleSearch = (data) => {
    console.log("Recherche :", data);
  };

  // Sélection d'une catégorie
  const handleCategorySelect = (id) => {
    console.log("Catégorie sélectionnée :", id);
  };

  // Sélection d'une offre
  const handleOfferClick = (offer) => {
    console.log("Offre sélectionnée :", offer);
  };

  // Inscription à la newsletter
  const handleSubscribe = async (email) => {
    console.log("Inscription newsletter :", email);
  };

  return (
    <div className="app">

      {/* Menu latéral */}
      <Sidebar
        activePath="/"
        onUpgrade={() => console.log("Filko Plus")}
      />

      <div className="app__main">

        {/* Barre supérieure */}
        <Topbar
          onSearch={handleSearch}
          onLocationClick={() => console.log("Choisir le lieu")}
          onLogin={() => console.log("Connexion")}
        />

        <main className="app__content">

          {/* Présentation */}
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

          {/* Réassurance et newsletter */}
          <section className="home-bottom">
            <TrustBar />
            <Newsletter onSubscribe={handleSubscribe} />
          </section>

        </main>
      </div>
    </div>
  );
}

import "./styles/tokens.css";
import "./styles/layout.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import BestOffers from "./components/BestOffers/BestOffers";

export default function App() {
  return (
    <div className="app">
      <Sidebar activePath="/" onUpgrade={() => console.log("Filko Plus")} />

      <div className="app__main">
        <Topbar
          onSearch={(p) => console.log("Recherche :", p)}
          onLocationClick={() => console.log("Choisir le lieu")}
          onLogin={() => console.log("Connexion")}
        />

        <main className="app__content">
          <Hero
            onSearch={(p) => console.log("Recherche :", p)}
            onLearnMore={() => console.log("En savoir plus")}
          />
          <Categories
            onSelect={(id) => console.log("Catégorie :", id)}
            onSeeAll={() => console.log("Toutes les catégories")}
          />
          <BestOffers
            onSeeAll={() => console.log("Toutes les offres")}
            onOfferClick={(offer) => console.log("Offre sélectionnée :", offer)}
          />
          {/* Étape suivante : réassurance + newsletter */}
        </main>
      </div>
    </div>
  );
}

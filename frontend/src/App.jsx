import "./styles/tokens.css";
import "./styles/layout.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

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
          {/* Étape 2 : Hero + barre Dates/Lieu/Catégorie + carte "Pourquoi louer avec Filko ?" */}
          {/* Étape 3 : catégories · Étape 4 : meilleures offres · Étape 5 : réassurance + newsletter */}
        </main>
      </div>
    </div>
  );
}

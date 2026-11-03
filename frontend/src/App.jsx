import "./styles/tokens.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <>
      <Header />
      <Hero onSearch={(params) => console.log("Recherche :", params)} />
      {/* Étape 3 : barre de filtre + catégories */}
    </>
  );
}

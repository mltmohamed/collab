import "./styles/tokens.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FilterBar from "./components/FilterBar/FilterBar";
import Categories from "./components/Categories/Categories";
import BestOffers from "./components/BestOffers/BestOffers";
import ResultsGrid from "./components/ResultsGrid/ResultsGrid";

export default function App() {
  return (
    <>
      <Header />
      <Hero onSearch={(params) => console.log("Recherche :", params)} />
      <FilterBar onFilter={(kw) => console.log("Mot-clé :", kw)} />
      <Categories onSelect={(id) => console.log("Catégorie :", id)} />
      <BestOffers onReserve={(offer) => console.log("Réserver :", offer)} />
      <ResultsGrid
        onToggleFavorite={(id, fav) => console.log("Favori :", id, fav)}
        onReserve={(item) => console.log("Réserver :", item)}
      />
    </>
  );
}

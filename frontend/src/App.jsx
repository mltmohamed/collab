import "./styles/tokens.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FilterBar from "./components/FilterBar/FilterBar";
import Categories from "./components/Categories/Categories";

export default function App() {
  return (
    <>
      <Header />
      <Hero onSearch={(params) => console.log("Recherche :", params)} />
      <FilterBar onFilter={(kw) => console.log("Mot-clé :", kw)} />
      <Categories onSelect={(id) => console.log("Catégorie :", id)} />
      {/* Étape 4 : Nos Meilleures Offres */}
    </>
  );
}

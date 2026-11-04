import OfferCard from "../OfferCard/OfferCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./BestOffers.css";

// Place les photos dans frontend/public/images_0/
const DEFAULT_OFFERS = [
  { id: 1, badge: "Populaire", badgeType: "popular", title: "Perceuse Sans Fil Pro", image: "/images_0/perceuse.jpg", price: 15, rating: 4.8, reviews: 128, city: "Paris, France" },
  { id: 2, badge: "Top noté", badgeType: "top", title: "Peugeot 208 - 2023", image: "/images_0/voiture.jpg", price: 45, rating: 4.9, reviews: 89, city: "Lyon, France" },
  { id: 3, badge: "Promo", badgeType: "promo", title: "Tente 4 Places", image: "/images_0/tente.jpg", price: 10, oldPrice: 16, rating: 4.6, reviews: 64, city: "Bordeaux, France" },
  { id: 4, badge: "Nouveau", badgeType: "new", title: "Canon EOS 250D", image: "/images_0/appareil-photo.jpg", price: 20, rating: 4.7, reviews: 93, city: "Paris, France" },
  { id: 5, badge: "Populaire", badgeType: "popular", title: "Enceinte Sono 1000W", image: "/images_0/enceinte.jpg", price: 30, rating: 4.5, reviews: 41, city: "Marseille, France" },
  { id: 6, badge: "Promo", badgeType: "promo", title: "Vélo Électrique", image: "/images_0/velo.jpg", price: 25, oldPrice: 36, rating: 4.8, reviews: 76, city: "Nice, France" },
];

export default function BestOffers({
  offers = DEFAULT_OFFERS,
  onSeeAll = () => {},
  onOfferClick = () => {},
}) {
  return (
    <section className="best" aria-labelledby="best-title">
      <SectionHeader
        title="Nos meilleures offres"
        linkLabel="Voir toutes les offres"
        onLinkClick={onSeeAll}
      />
      <div className="best__grid">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} onReserve={onOfferClick} />
        ))}
      </div>
    </section>
  );
}

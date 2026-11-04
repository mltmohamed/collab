import { Check } from "lucide-react";
import "./WhyFilko.css";

const DEFAULT_REASONS = [
  "Économique & Écologique",
  "Large choix",
  "Réservation sécurisée",
  "Assistance 7j/7",
];

export default function WhyFilko({
  reasons = DEFAULT_REASONS,
  onLearnMore = () => {},
}) {
  return (
    <aside className="why">
      <h2 className="why__title">Pourquoi louer avec Filko ?</h2>
      <ul className="why__list">
        {reasons.map((r) => (
          <li key={r}>
            <span className="why__check" aria-hidden="true">
              <Check size={12} strokeWidth={3.5} />
            </span>
            {r}
          </li>
        ))}
      </ul>
      <button type="button" className="why__btn" onClick={onLearnMore}>
        En savoir plus
      </button>
    </aside>
  );
}

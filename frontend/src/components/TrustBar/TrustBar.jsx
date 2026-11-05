import { Lock, Headset, RefreshCw, ShieldCheck } from "lucide-react";
import "./TrustBar.css";

const DEFAULT_ITEMS = [
  { icon: Lock, title: "Réservation 100% sécurisée", text: "Paiement protégé et confirmation instantanée." },
  { icon: Headset, title: "Assistance 7j/7", text: "Notre équipe est là pour vous aider." },
  { icon: RefreshCw, title: "Annulation flexible", text: "Modifiez ou annulez sans frais." },
  { icon: ShieldCheck, title: "Communauté vérifiée", text: "Des milliers d'utilisateurs satisfaits." },
];

export default function TrustBar({ items = DEFAULT_ITEMS }) {
  return (
    <ul className="trust">
      {items.map(({ icon: Icon, title, text }) => (
        <li key={title}>
          <Icon size={30} strokeWidth={1.6} aria-hidden="true" />
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

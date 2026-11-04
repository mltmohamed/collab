import {
  Home, LayoutGrid, Megaphone, Heart, Tag, Mail, CalendarCheck,
  Calendar, Star, Bell, Settings, CircleHelp, ArrowUpRight,
} from "lucide-react";
import "./Sidebar.css";

const MAIN_LINKS = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Catégories", href: "/categories", icon: LayoutGrid },
  { label: "Annonces", href: "/annonces", icon: Megaphone },
  { label: "Favoris", href: "/favoris", icon: Heart },
  { label: "Offres", href: "/offres", icon: Tag },
  { label: "Messages", href: "/messages", icon: Mail },
  { label: "Réservations", href: "/reservations", icon: CalendarCheck },
  { label: "Calendrier", href: "/calendrier", icon: Calendar },
  { label: "Évaluations", href: "/evaluations", icon: Star },
  { label: "Alertes", href: "/alertes", icon: Bell },
  { label: "Paramètres", href: "/parametres", icon: Settings },
];

const SECONDARY_LINKS = [
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "Aide & FAQ", href: "/aide", icon: CircleHelp },
];

function NavList({ links, activePath }) {
  return (
    <ul>
      {links.map(({ label, href, icon: Icon }) => {
        const active = href === activePath;
        return (
          <li key={href}>
            <a href={href} className={active ? "is-active" : ""} aria-current={active ? "page" : undefined}>
              <Icon size={18} strokeWidth={2} aria-hidden="true" />
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar({
  activePath = "/",
  mainLinks = MAIN_LINKS,
  secondaryLinks = SECONDARY_LINKS,
  onUpgrade = () => {}, // "Découvrir Plus"
}) {
  return (
    <aside className="sidebar">
      <a href="/" className="sidebar__logo" aria-label="Filko, accueil">
        <svg width="52" height="30" viewBox="0 0 52 30" aria-hidden="true">
          <rect width="52" height="30" rx="15" fill="var(--color-dark)" />
          <rect x="7" y="7" width="16" height="16" rx="8" fill="var(--color-primary)" />
          <rect x="29" y="7" width="16" height="16" rx="8" fill="var(--color-primary)" />
        </svg>
        <span>Filko</span>
      </a>

      <nav className="sidebar__nav" aria-label="Navigation principale">
        <NavList links={mainLinks} activePath={activePath} />
        <hr />
        <NavList links={secondaryLinks} activePath={activePath} />
      </nav>

      <div className="sidebar__plus">
        <span className="sidebar__plus-icon" aria-hidden="true">
          <Star size={26} fill="currentColor" />
        </span>
        <h2>Passez à Filko Plus</h2>
        <p>Plus d'avantages, plus de visibilité.</p>
        <button type="button" onClick={onUpgrade}>
          Découvrir Plus <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}

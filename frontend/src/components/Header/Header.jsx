import "./Header.css";

const DEFAULT_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Mobilité", href: "/mobilite" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
];

export default function Header({
  links = DEFAULT_LINKS,
  activePath = "/",
  language = "EN",
  onLogin = () => {}, // à brancher avec l'auth du back
}) {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo" aria-label="Accueil">
          <svg width="52" height="30" viewBox="0 0 52 30" aria-hidden="true">
            <rect width="52" height="30" rx="15" fill="var(--color-primary)" />
            <rect x="8" y="8" width="14" height="14" rx="7" fill="var(--color-dark)" />
            <rect x="30" y="8" width="14" height="14" rx="7" fill="var(--color-dark)" />
          </svg>
        </a>

        <nav className="header__nav" aria-label="Navigation principale">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={l.href === activePath ? "is-active" : ""}
              aria-current={l.href === activePath ? "page" : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="header__lang">{language} ▾</button>
          <button type="button" className="header__login" onClick={onLogin}>
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

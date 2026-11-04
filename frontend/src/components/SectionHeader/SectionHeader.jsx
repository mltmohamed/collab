import "./SectionHeader.css";

export default function SectionHeader({ title, linkLabel, onLinkClick = () => {}, href }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {linkLabel &&
        (href ? (
          <a href={href}>{linkLabel}</a>
        ) : (
          <button type="button" onClick={onLinkClick}>{linkLabel}</button>
        ))}
    </div>
  );
}

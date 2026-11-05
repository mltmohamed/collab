import { useState } from "react";
import { Megaphone } from "lucide-react";
import "./Newsletter.css";

export default function Newsletter({
  image, // illustration optionnelle (ex : "/images/newsletter.png")
  onSubscribe = () => {}, // reçoit l'email (le back peut renvoyer une Promise)
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | done | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await onSubscribe(email.trim());
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <aside className="news">
      <div className="news__body">
        <h2>Restez informé !</h2>
        <p>Recevez nos meilleures offres et nouveautés.</p>

        {status === "done" ? (
          <p className="news__msg" role="status">Merci, vous êtes inscrit(e) !</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Votre email"
            />
            <button type="submit" disabled={status === "loading"}>
              S'abonner
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="news__msg" role="alert">Une erreur est survenue, réessayez.</p>
        )}
      </div>

      <div className="news__art" aria-hidden="true">
        {image ? <img src={image} alt="" /> : <Megaphone size={44} strokeWidth={1.6} />}
      </div>
    </aside>
  );
}

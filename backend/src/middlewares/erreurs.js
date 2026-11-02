// Attrape les erreurs non gérées et renvoie une réponse propre
export function gererErreurs(erreur, req, res, next) {
  console.error(erreur)
  res.status(500).json({ message: 'Erreur interne du serveur' })
}

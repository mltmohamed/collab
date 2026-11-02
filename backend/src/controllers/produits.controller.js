// Le controller : reçoit la requête, appelle le service, renvoie la réponse
import * as produitsService from '../services/produits.service.js'

export async function listerProduits(req, res, next) {
  try {
    const produits = await produitsService.trouverTous()
    res.json(produits)
  } catch (erreur) {
    next(erreur) // envoie l'erreur au middleware gererErreurs
  }
}

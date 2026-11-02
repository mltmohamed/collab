// Les routes : quelle URL appelle quelle fonction
import { Router } from 'express'
import { listerProduits } from '../controllers/produits.controller.js'

const router = Router()

router.get('/', listerProduits) // GET /produits

export default router

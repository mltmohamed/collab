import express from 'express'
import produitsRoutes from './routes/produits.routes.js'
import { gererErreurs } from './middlewares/erreurs.js'

const app = express()

// Permet de lire le JSON envoyé dans le corps des requêtes
app.use(express.json())

// Les routes de l'API
app.use('/produits', produitsRoutes)

// Doit rester en dernier : attrape toutes les erreurs
app.use(gererErreurs)

export default app

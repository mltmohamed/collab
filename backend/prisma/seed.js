// Remplit la base avec quelques produits d'exemple : npm run db:seed
import prisma from '../src/lib/prisma.js'

const produits = [
  { nom: 'Perceuse', description: 'Perceuse visseuse sans fil', prixJour: 2500, stock: 3 },
  { nom: 'Échelle 3 m', description: 'Échelle en aluminium', prixJour: 1500, stock: 2 },
  { nom: 'Tente 10 places', description: 'Tente pour événements', prixJour: 20000, stock: 1 },
  { nom: 'Chaises (lot de 10)', description: 'Chaises en plastique', prixJour: 5000, stock: 5 },
]

await prisma.location.deleteMany()
await prisma.produit.deleteMany()
await prisma.produit.createMany({ data: produits })

console.log(`${produits.length} produits ajoutés`)
await prisma.$disconnect()

// Le service : la logique métier et l'accès à la base de données
import prisma from '../lib/prisma.js'

export function trouverTous() {
  return prisma.produit.findMany({ orderBy: { nom: 'asc' } })
}

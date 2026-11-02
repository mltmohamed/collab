# Collab

Application de location de produits non périssables (outils, matériel, mobilier…).
Projet d'apprentissage : le code est volontairement simple et commenté.

## Structure

```
collab/
├── backend/    API (Node.js + Express + Prisma + SQLite)
│   ├── prisma/          schéma de la base, migrations, données d'exemple
│   └── src/
│       ├── routes/      les URLs de l'API
│       ├── controllers/ reçoivent la requête et renvoient la réponse
│       ├── services/    la logique métier et l'accès à la base
│       ├── middlewares/ gestion des erreurs
│       └── lib/         connexion Prisma
└── frontend/   interface (React + Vite)
```

## Lancer le backend

Il faut Node.js 22.18 ou plus récent.

```bash
cd backend
npm install
cp .env.example .env
npm run db:migrate   # crée la base SQLite
npm run db:seed      # ajoute des produits d'exemple
npm run dev          # http://localhost:3000
```

Test : ouvrir http://localhost:3000/produits

Autres commandes : `npm run db:studio` (voir la base dans le navigateur).

## Lancer le frontend

```bash
cd frontend
npm install
npm run dev
```

## API

| Méthode | URL         | Description             |
| ------- | ----------- | ----------------------- |
| GET     | `/produits` | Liste tous les produits |

## Contribuer

1. Créer une branche : `git checkout -b ma-fonctionnalite`
2. Commiter ses changements : `git commit -m "Ajout de ..."`
3. Pousser la branche : `git push origin ma-fonctionnalite`
4. Ouvrir une Pull Request

## Auteurs

- mohTraCode

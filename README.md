# Marketplace Béninois

Plateforme marketplace multi-vendeurs moderne, responsive et optimisée pour le Bénin.

## Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma + SQLite
- Framer Motion
- API Routes pour produits, vendeurs, chat et paiements

## Install

1. `npm install`
2. Copier `.env.example` en `.env` et définir `DATABASE_URL="file:./dev.db"`
3. `npx prisma generate`
4. `npx prisma db push`
5. `npm run dev`

## Structure

- `app/` pages et layout
- `components/` composants UI
- `lib/` données statiques et utilitaires
- `app/api/` endpoints REST
- `prisma/` schéma de données

## Objectifs

- marketplace produits, services, ebooks
- multi-vendeurs et validation admin
- chat temps réel basique
- paiements MTN MoMo / Moov Money / Celtiis Cash (simulé)
- devise FCFA
- UX mobile-first

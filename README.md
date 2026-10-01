# Portfolio de Lavagna Théo

Portfolio bilingue français/anglais consacré aux systèmes, aux réseaux et à la cybersécurité.

## Mise en ligne sur GitHub Pages

1. Créez un nouveau dépôt GitHub vide, public si vous utilisez l'offre GitHub Free.
2. Décompressez le ZIP et placez **son contenu** à la racine du dépôt.
3. Envoyez les fichiers sur la branche `main`.
4. Dans **Settings > Pages > Build and deployment**, choisissez **GitHub Actions** comme source.
5. Ouvrez l'onglet **Actions** : le workflow « Déployer le portfolio sur GitHub Pages » construit et publie automatiquement le site.

Le workflow détecte le nom du dépôt. Il fonctionne aussi bien pour :

- un site de projet : `https://utilisateur.github.io/nom-du-depot/` ;
- un site personnel : `https://utilisateur.github.io/` si le dépôt se nomme `utilisateur.github.io`.

Chaque nouvel envoi sur `main` republie automatiquement le portfolio.

## Modifier le portfolio

- Contenu principal : `app/components/portfolio-site.tsx`
- Mise en forme : `app/globals.css`
- Photo et visuel : `public/images/`
- CV français et anglais : `public/docs/`
- Déploiement automatique : `.github/workflows/deploy-pages.yml`

## Tester en local

Node.js 22 est recommandé.

```bash
npm ci
npm run dev
```

Puis ouvrez `http://localhost:3000`.

Pour vérifier la version statique de production :

```bash
npm run build
npm run preview
```

## Technologies

- Next.js avec export statique
- React
- TypeScript
- Tailwind CSS


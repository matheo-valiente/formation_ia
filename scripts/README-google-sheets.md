# Récupérer les emails dans un Google Sheet

## 1. Google Sheet

1. Crée un Google Sheet (ou utilise-en un existant).
2. Sur la première ligne, mets des en-têtes, par exemple : **Email** (A1), **Date** (B1).

## 2. Apps Script

1. Dans le Sheet : **Extensions** → **Apps Script**.
2. Supprime le contenu par défaut et colle le code du fichier `google-sheets-lead.gs.js` dans ce dépôt.
3. Enregistre le projet (Ctrl+S).

## 3. Déployer en Web App

1. **Déploiement** → **Nouvelle version**.
2. Type : **Application Web**.
3. **Exécuter en tant que** : Moi (ton compte).
4. **Qui peut y accéder** : **Toute personne** (anonyme peut appeler l’URL).
5. Clique sur **Déployer** et copie l’**URL du déploiement** (elle se termine par `/exec`).

## 4. Vercel

1. Sur [vercel.com](https://vercel.com), ouvre le projet du site.
2. **Settings** → **Environment Variables**.
3. Ajoute une variable :
   - **Name** : `GOOGLE_SHEETS_WEBAPP_URL`
   - **Value** : l’URL copiée à l’étape 3 (ex. `https://script.google.com/macros/s/xxxx/exec`).
4. Redéploie le projet pour que la variable soit prise en compte.

Après ça, chaque soumission du formulaire « Accéder à la méthode » (email valide) envoie l’email à l’API Vercel (`/api/lead`), qui l’enregistre dans ton Google Sheet via le script.

## Développement local

En local, `npm run dev` ne lance pas l’API Vercel. Pour tester l’envoi d’emails :

- Soit lancer `vercel dev` (après `npm i -g vercel`) pour que `/api/lead` soit disponible localement (en configurant `GOOGLE_SHEETS_WEBAPP_URL` dans `.env` ou `.env.local`).
- Soit déployer une fois sur Vercel et définir `VITE_LEAD_API_URL=https://ton-projet.vercel.app/api/lead` dans un fichier `.env.local` pour que le front envoie les leads à la version déployée.

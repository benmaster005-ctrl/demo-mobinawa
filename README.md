<p align="center">
  <img src="./readme-banniere.svg" alt="Mobinawa, communication unifiée et annuaire ProCom" width="100%" />
</p>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/prototype-v131-E85D04?style=for-the-badge" />
  <img alt="React 18" src="https://img.shields.io/badge/React-18.3-3D752F?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="Vite 5" src="https://img.shields.io/badge/Vite-5.4-3D752F?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="Tailwind CSS 3" src="https://img.shields.io/badge/Tailwind-3.4-3D752F?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img alt="Langues" src="https://img.shields.io/badge/langues-FR%20%C2%B7%20EN-1F3D19?style=for-the-badge" />
  <img alt="Hébergement" src="https://img.shields.io/badge/h%C3%A9bergement-Vercel-1F3D19?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

# Mobinawa · Guide du développeur

Ce document explique tout ce qu'un développeur doit savoir pour comprendre, lancer, modifier, traduire et déployer le prototype de l'application mobile **Mobinawa**. Il complète le fichier `MEMO.md`, qui décrit les règles produit et l'historique des décisions. En cas de doute sur une règle métier, `MEMO.md` fait foi ; pour tout ce qui touche au code, c'est ce guide.

> [!IMPORTANT]
> Le prototype est une **maquette fonctionnelle**. Il n'a ni serveur, ni base de données, ni authentification réelle. Toutes les données sont des données de démonstration écrites dans le code, et toutes les actions sensibles (validation d'un dossier, prélèvement, paiement, suppression de compte) sont **simulées** par des boutons de démonstration.

## Sommaire

1. [Le produit en une page](#1-le-produit-en-une-page)
2. [Démarrage rapide](#2-démarrage-rapide)
3. [Structure du dépôt](#3-structure-du-dépôt)
4. [Architecture technique](#4-architecture-technique)
5. [Chargement automatique de la version](#5-chargement-automatique-de-la-version)
6. [État de l'application](#6-état-de-lapplication)
7. [Navigation et écrans](#7-navigation-et-écrans)
8. [Données et configuration](#8-données-et-configuration)
9. [Règles métier à connaître avant de coder](#9-règles-métier-à-connaître-avant-de-coder)
10. [Parcours simulés pour la démonstration](#10-parcours-simulés-pour-la-démonstration)
11. [Traduction français et anglais](#11-traduction-français-et-anglais)
12. [Système visuel et codes couleur](#12-système-visuel-et-codes-couleur)
13. [Composants réutilisables](#13-composants-réutilisables)
14. [Recettes : les modifications les plus courantes](#14-recettes--les-modifications-les-plus-courantes)
15. [Déploiement sur Vercel](#15-déploiement-sur-vercel)
16. [Vérifications avant chaque livraison](#16-vérifications-avant-chaque-livraison)
17. [Erreurs fréquentes et solutions](#17-erreurs-fréquentes-et-solutions)
18. [Limites connues](#18-limites-connues)
19. [Plateformes externes visées en production](#19-plateformes-externes-visées-en-production)
20. [Repères de l'historique des versions](#20-repères-de-lhistorique-des-versions)
21. [Conventions de contribution](#21-conventions-de-contribution)

---

## 1. Le produit en une page

Mobinawa est une application mobile de **communication unifiée** et de **standard téléphonique**, exploitée sur le réseau **ProCom**. Elle s'adresse d'abord à un consommateur qui cherche à joindre une organisation : la page d'accueil est donc l'**annuaire ProCom**, et non le compte de l'usager.

### Trois niveaux de compte

| Niveau | Pour qui | Ce qu'il apporte |
| --- | --- | --- |
| ![](https://img.shields.io/badge/Mobinawa-Basic-5A9447?style=flat-square) | Tout utilisateur, par défaut | Identification comme consommateur, communication gratuite entre comptes Mobinawa, accès aux annuaires ProCom |
| ![](https://img.shields.io/badge/Mobinawa-PRO-E85D04?style=flat-square) | Un indépendant, un commerçant | Un numéro PRO fixe virtuel, un crédit d'appel prépayé, le suivi de sa consommation |
| ![](https://img.shields.io/badge/Mobinawa-Business-1F3D19?style=flat-square) | Une organisation | Un numéro PRO officiel sur standard (SVI), des numéros dédiés, des comptes collaborateurs, la publication dans l'annuaire |

### Deux règles qui structurent tout le code

1. **Le numéro mobile est l'identifiant du compte.** Il est vérifié à l'inscription par un code OTP reçu par WhatsApp ou par SMS (assuré en amont par CIRPACK, hors du prototype).
2. **Une ligne ne porte qu'un seul rattachement.** PRO et Business s'excluent sur une même ligne. Un compte PRO peut migrer vers Business en gardant son numéro et son crédit ; l'inverse n'existe pas.

### Opérateurs et pays

L'opérateur d'un usager n'est jamais choisi : il **découle du préfixe de son numéro mobile**. Il détermine les offres disponibles, la devise et l'interlocuteur.

| Opérateur | Numéros | Offres | Devise |
| --- | --- | --- | --- |
| GTS-Infotel Cameroon | `+2376` | PRO et Business | FCFA (XAF) |
| GTS Africa (diaspora) | Tout autre préfixe | PRO uniquement, sur un numéro d'un pays africain couvert choisi par l'usager | Euro |

Le Congo et le Nigéria sont déjà décrits dans la configuration mais **fermés** (`ouvert: false`).

---

## 2. Démarrage rapide

### Prérequis

| Outil | Version | Remarque |
| --- | --- | --- |
| Node.js | 18 ou plus | Exigé par Vite 5 |
| npm | 9 ou plus | Fourni avec Node.js |
| Navigateur | Récent | Chrome, Safari, Firefox ou Edge. L'app est pensée pour un écran de téléphone |

### Installation et lancement

```bash
npm install        # installe React, Vite, Tailwind et les icônes lucide-react
npm run dev        # serveur de développement, rechargement à chaud
npm run build      # construit la version de production dans dist/
npm run preview    # sert localement le contenu de dist/
```

Ouvrez ensuite l'adresse affichée par Vite (en général `http://localhost:5173`). Pour juger le rendu réel, activez le **mode appareil mobile** des outils de développement du navigateur (par exemple 390 × 844 pixels).

> [!TIP]
> Au premier affichage, une fenêtre de bienvenue s'ouvre. Fermez la par la croix ou en touchant le fond sombre. Le bloc **Démonstration**, en bas de l'accueil, permet de basculer entre une session camerounaise et une session diaspora.

---

## 3. Structure du dépôt

Le dépôt est volontairement **à plat**, sans aucun sous dossier. Le dépôt de fichiers par glisser déposer sur le site de GitHub perd en effet les dossiers, ce qui provoquait des erreurs de construction sur Vercel.

```text
.
├── index.html            Page d'entrée : balises meta, icônes (logo Mobinawa), point de montage #root
├── main.jsx              Point d'entrée React : charge automatiquement la dernière version de l'app
├── Mobinawa_v131.jsx     L'application complète (un seul composant de plus de 7 000 lignes)
├── index.css             Directives Tailwind (base, components, utilities)
├── tailwind.config.js    Fichiers analysés par Tailwind, dont tous les Mobinawa*.jsx
├── postcss.config.js     Tailwind et Autoprefixer
├── vite.config.js        Vite avec le greffon React
├── package.json          Dépendances et scripts
├── package-lock.json     Versions exactes des dépendances
├── MEMO.md               Mémo de reprise : règles produit, décisions, points ouverts
├── README.md             Ce guide
├── readme-banniere.svg   Bannière de ce guide
└── .gitignore            node_modules, dist, .env
```

Plusieurs fichiers `Mobinawa_vNN.jsx` peuvent coexister dans le dépôt (historique) : seul celui qui porte le **plus grand numéro** est chargé.

---

## 4. Architecture technique

### Pile technique

| Brique | Rôle |
| --- | --- |
| **React 18** | Interface. Composants fonctionnels et hooks (`useState`, `useRef`, `useLayoutEffect`, contextes) |
| **Vite 5** | Serveur de développement et construction |
| **Tailwind CSS 3** | Classes utilitaires de mise en page. Les couleurs ne passent pas par Tailwind mais par la palette `C` (voir section 12) |
| **lucide-react 0.383** | Toutes les icônes. Version figée : une icône absente de cette version fait échouer la construction |
| **Aucune autre dépendance** | Pas de routeur, pas de gestionnaire d'état, pas de bibliothèque de traduction, pas de requêtes réseau |

### Un composant unique, découpé en sections

Toute l'application tient dans `Mobinawa_vNN.jsx`, qui exporte par défaut le composant `MobinawaApp`. Le fichier est organisé dans cet ordre :

| Ordre | Section | Contenu principal |
| --- | --- | --- |
| 1 | Directives de compilation | Les trois commentaires `@jsxRuntime`, `@jsx`, `@jsxFrag` en toute première ligne (voir section 11) |
| 2 | Imports | React et les icônes lucide-react |
| 3 | Traduction | `TRADUCTIONS_EN`, `PATRONS_EN`, `tr()`, `creerElement()`, `traduirePage()` |
| 4 | Palette et typographie | `C`, `LOGO_SRC`, `FONT_HEAD`, `FONT_BODY`, fonctions de format `fcfa()` et `somme()` |
| 5 | Version et session | `VERSION_PROTO`, `SESSION_CIRPACK` (session simulée) |
| 6 | Données de démonstration | Historique d'appels, notifications, tarifs, couvertures pays, annuaire, services, urgences, langues |
| 7 | Fonctions utilitaires | Opérateur d'un numéro, conversion de devise, prix de la minute, recherche, initiales |
| 8 | Composants d'interface | Badges, boutons, cartes, champs, drapeaux, menu, fenêtres |
| 9 | Écrans | Un composant par écran (`HomeScreen`, `ProcomScreen`, `TarifsScreen`, etc.) |
| 10 | `MobinawaApp` | L'état global, les actions (`goTo`, `deposerDemande`, `prelever`…) et le rendu de l'écran courant |

Les commentaires du code sont rédigés en français et indiquent la version qui a introduit chaque règle (par exemple `(v80)`). Ils servent de documentation de proximité : gardez cette habitude.

### Ce que l'app ne fait pas, volontairement

| Absent | Pourquoi |
| --- | --- |
| Appels réseau | Le prototype ne dépend d'aucun service. Les données viennent de constantes |
| Stockage navigateur | Rien n'est conservé d'une visite à l'autre : recharger la page remet tout à zéro |
| Routeur et adresses par écran | La navigation est un état interne (`screen`). Une seule adresse pour toute l'app |
| Gestion de l'espace Business | Après déploiement, tout se passe sur les plateformes web (espace Manager). L'app ne montre que la fiche Basic du collaborateur |

---

## 5. Chargement automatique de la version

`main.jsx` recherche tous les fichiers `Mobinawa_v*.jsx` du dépôt et charge celui dont le numéro est le plus grand :

```jsx
const versions = import.meta.glob("./Mobinawa_v*.jsx");
const numero = (chemin) => parseInt(chemin.match(/_v(\d+)\.jsx$/)[1], 10);
const derniere = Object.keys(versions).sort((a, b) => numero(a) - numero(b)).pop();
const MobinawaApp = lazy(versions[derniere]);
```

Conséquences pratiques :

- **Publier une nouvelle version** revient à déposer `Mobinawa_v100.jsx` à la racine, sans rien renommer. Vercel reconstruit le site tout seul.
- Le tri est **numérique** : `v100` passe bien après `v99`.
- Chaque version est construite dans un fichier séparé ; l'usager ne télécharge que la plus récente.
- Le numéro du fichier et la constante `VERSION_PROTO` doivent **toujours correspondre**. `VERSION_PROTO` s'affiche en bas de l'écran « À propos de Mobinawa ».

---

## 6. État de l'application

Tout l'état vit dans `MobinawaApp` sous forme de `useState`. Les écrans le reçoivent en propriétés et le modifient par des fonctions passées en propriétés.

| État | Rôle |
| --- | --- |
| `compte` | Session simulée : numéro mobile, nom, date de vérification |
| `offre`, `statut` | Offre demandée ou active (`pro`, `business`) et statut (`aucune`, `en_attente`, `active`) |
| `demande`, `entreprise` | Dossier déposé en attente de revue, fiche entreprise saisie |
| `lignes` | Lignes de l'usager : rattachement (`perso`, `pro`, `entreprise`), numéro PRO, **crédit du compte**, **crédit d'appel**, prix de la minute, mois offert |
| `recharges`, `prelevements` | Journal des recharges par carte et des prélèvements d'abonnement |
| `notifications` | Fil des notifications, alimenté par les actions de démonstration |
| `screen`, `historique`, `paramsEcran` | Écran courant, pile de navigation pour la flèche de retour, réglage passé à l'écran ouvert |
| `menuOpen`, `welcomeOpen`, `rechargeTarget`, `transfertTarget` | Ouverture du menu et des fenêtres |
| `paysPro`, `paysProcom`, `procomFiltre` | Pays choisi par un usager de la diaspora, pays de l'annuaire consulté, filtre de l'annuaire (catégorie, recherche, ouverture du clavier) |
| `tarifsOffre` | Onglet d'ouverture de la grille tarifaire (Business depuis la présentation Business) |
| `vueBusiness` | `collaborateur` ou `manager` : vue de démonstration d'un compte Business actif |
| `langue` | `fr` ou `en`. Copiée dans la variable de module `langueUI` à chaque rendu |
| `compteSupprime`, `toast` | Écran de compte supprimé, message temporaire en bas d'écran |

### Les actions principales

| Fonction | Effet |
| --- | --- |
| `goTo(ecran, params)` | Ouvre un écran, empile l'écran courant, ferme le menu |
| `retour()` | Revient à l'écran précédent de la pile, sinon à l'accueil |
| `ouvrirProcom(filtre)` | Ouvre l'annuaire sur une catégorie, une recherche ou une fiche |
| `notifier(categorie, titre, texte)` | Ajoute une notification en tête du fil |
| `deposerDemande(type, donnees)` | Enregistre une demande PRO ou Business et ouvre l'accusé de réception |
| `validerDemande()` | Simule la validation humaine : attribue le numéro, crédite l'offre de bienvenue |
| `annulerDemande()` | Retire une demande en cours |
| `recharger(ligne, montant, moyen)` | Crédite le compte par carte Visa |
| `transferer(ligne, montant)` | Transfère du crédit du compte vers le crédit d'appel |
| `prelever(ligne)` | Simule le prélèvement mensuel (mois offert, puis débit, découvert possible) |
| `changerOperateur(id)` | Bascule de session de démonstration (Cameroun ou diaspora) et remet le compte à zéro |
| `simulerSuppression(motif)`, `reinscrire()` | Simule la suppression du compte, puis une nouvelle inscription |

---

## 7. Navigation et écrans

### Principes

- **Un seul écran à la fois**, désigné par la chaîne `screen`. Il n'y a pas d'adresse par écran.
- `goTo(ecran)` **empile** l'écran courant. Revenir à l'accueil vide la pile, tout comme l'envoi d'un formulaire de souscription, pour que la flèche de l'accusé de réception ne rouvre pas le formulaire.
- **Aucun bandeau d'en-tête.** L'accueil porte sa rangée du haut sur la photo. Toutes les autres pages ouvrent sur une **rangée de titre** : flèche de retour à gauche (`BoutonRetour`), icône de l'écran sans fond (`IconeEcran`, celle de son onglet dans le menu), titre, logo Mobinawa à droite (`LogoAccueil`, retour direct à l'accueil). Cette rangée reste **figée en haut** au défilement grâce à la classe `rangee-titre`.
- Les deux boutons lisent leur action dans deux contextes React, `RetourContext` et `AccueilContext`, fournis par `MobinawaApp`. Un nouvel écran n'a donc rien à recevoir pour les afficher.
- Chaque changement d'écran remet le défilement en haut de page.

### Carte des écrans

| Identifiant | Composant | Titre affiché | Accès |
| --- | --- | --- | --- |
| `home` | `HomeScreen` | (accueil plein écran) | Démarrage, logo, flèche depuis le premier écran |
| `procom` | `ProcomScreen` | Annuaire ProCom | Barre de recherche de l'accueil (clavier ouvert), catégories |
| `services` | `ServicesScreen` | Services gratuits & pratiques | Menu, titre et rangée « Nos services gratuits » de l'accueil |
| `categories` | `CategoriesScreen` | Toutes les catégories | Titre « Choisir une catégorie » de l'accueil |
| `urgences` | `UrgencesScreen` | Numéros d'urgence | Tuile « Numéros d'urgence » de l'accueil ou des services |
| `evolution` | `EvolutionScreen` | Faire évoluer mon compte | Badge Mobinawa-Basic de l'accueil, bouton « Souscrire un compte ProCom » du menu, Mon compte |
| `moreInfoPro` | `MoreInfoProScreen` (mode « choix ») | Mobinawa-PRO | Carte PRO de Mon compte ; pour la diaspora, commence par le choix du pays |
| `infoPro` | `MoreInfoProScreen` (mode « info ») | Mobinawa-PRO | « En savoir plus » de la carte PRO (usagers locaux) |
| `moreInfoBusiness` | `MoreInfoBusinessScreen` | Mobinawa-Business | « En savoir plus » de la carte Business, découverte de la migration |
| `subscribePro` | `SubscribeProForm` | Formulaire Mobinawa-PRO | « Souscrire à Mobinawa-PRO » |
| `subscribeBusiness` | `SubscribeBusinessForm` | Formulaire Mobinawa-Business | « Souscrire à Mobinawa-Business », « Migrer vers Mobinawa-Business » |
| `attente` | `AttenteScreen` | Ma demande | Après l'envoi d'un formulaire, « Ma demande en cours » |
| `account` | `AccountScreen` (`BasicAccount`, `ProAccount` ou `ManagerAccount`) | Mon compte, Mon espace client ou Mon espace Manager | Menu, badge de l'accueil |
| `historique` | `AppelsEtDepenses` (mode complet) | Historique | « Voir tout l'historique » de l'espace client, au delà de 6 éléments |
| `conso` | `ConsoScreen` | Ma conso | Bouton « Ma conso » de l'espace client |
| `recharges` | `RechargesScreen` | Historique des recharges | Menu (PRO actif), « Mes recharges » |
| `factures` | `FacturesScreen` | Mes factures | Menu (PRO actif) |
| `tarifs` | `TarifsScreen` | Grille tarifaire | Menu, boutons « Consulter la grille tarifaire » |
| `notifications` | `NotificationsScreen` | Notifications | Cloche de l'accueil, menu |
| `about` | `AboutScreen` | À propos de Mobinawa | Menu |
| `langue` | `LangueScreen` | Langue | Menu |

Hors pile de navigation : `CompteSupprimeScreen` (remplace toute l'app quand `compteSupprime` est renseigné) et les fenêtres `SideMenu`, `WelcomeModal`, `RechargeModal`, `TransfertModal`, `AppelGratuitModal`, `InfosProcomModal`, `MyAppModal`.

### Le menu

Il ne s'ouvre que depuis l'accueil. Il présente le logo, puis : Mon compte Mobinawa (ou Mon espace client), Services gratuits & pratiques, Grille tarifaire, Notifications, **Historique des recharges et Mes factures pour un compte PRO actif uniquement**, À propos de Mobinawa, Langue (icône : drapeau de la langue active), le bouton « Souscrire un compte ProCom » à contour orange, un séparateur et Se déconnecter.

---

## 8. Données et configuration

Toutes les données sont des **constantes** déclarées en haut du fichier. Les modifier suffit à changer le comportement de l'app.

| Constante | Contenu | À savoir |
| --- | --- | --- |
| `COUVERTURES` | Un objet par pays opérateur : nom, contact, préfixes, devise, offres, crédit offert, montants de recharge, formes `locatif` et `genitif`, drapeau, photo d'accueil `fondAccueil`, `ouvert` | Ajouter un pays commence ici (recette en section 14) |
| `DIASPORA` | L'opérateur de repli GTS Africa | Offre PRO seule, en euros, pas d'annuaire propre |
| `OPERATEURS_DEMO` | Opérateurs proposés dans le bloc Démonstration | Calculé : pays ouverts plus la diaspora |
| `DEVISES`, `TAUX_XAF` | Devises affichables et taux de conversion vers le FCFA | `EUR: 655.957` |
| `TARIFS_PRO`, `TARIFS_BUSINESS`, `CONDITIONS_BUSINESS` | Grilles tarifaires officielles par opérateur | Business affiché hors taxes, PRO toutes taxes comprises |
| `SECTEURS`, `SOUS_SECTEURS`, `SECTEUR_ICONES` | Les 16 secteurs d'activité, leurs sous secteurs et icônes | Partagés par l'annuaire et le formulaire Business |
| `CATEGORIES_MISES_EN_AVANT` | Ordre des premières catégories de la rangée d'accueil | Les autres suivent, « Autre » en dernier |
| `ANNUAIRE_PROCOM` | Les fiches par pays : `id`, `nom`, `secteur`, `sousSecteur`, `numero`, `email` et `site` (facultatifs, simulés), `couleur`, `description`, `webapp` | `webapp: true` active l'option MyApp |
| `SERVICES_GRATUITS` | Services de l'accueil et de l'écran Services | Une entrée avec `route` est cliquable, les autres portent « Bientôt disponible » |
| `NUMEROS_URGENCE` | Numéros d'urgence par pays | Cameroun : 117, 113, 118, 119, à faire valider officiellement |
| `INFOS_PROCOM` | Les quatre informations de la fenêtre « i » de l'annuaire et de « À propos » | |
| `LANGUES` | Français (par défaut) et anglais | |
| `CONSO_DEMO` | Statistiques de « Ma conso » pour deux mois | En FCFA, converties pour un compte en euros |
| `HISTORIQUE_APPELS` | Appels de démonstration de l'espace client | Statiques |
| `NOTIFICATIONS_SEED`, `CATEGORIES_NOTIF` | Notifications initiales et leurs catégories | |
| `MOYENS_PAIEMENT` | Carte Visa uniquement | Le Mobile Money a été retiré |
| `NIVEAUX` | Basic, PRO, Business pour le schéma de progression | |
| `LIMITE_HISTORIQUE` | Nombre d'éléments de l'historique avant « Voir tout » | 6 |
| `FOND_CAMEROUN`, `LOGO_SRC` | Photo d'accueil et logo, intégrés en base64 | L'app n'a besoin d'aucun fichier image séparé |

---

## 9. Règles métier à connaître avant de coder

> [!WARNING]
> Ces règles sont la source des erreurs les plus fréquentes. `MEMO.md` les détaille toutes ; voici celles qui touchent directement le code.

### Deux soldes distincts sur chaque ligne PRO

| | Crédit du compte (`soldeCompte`) | Crédit d'appel (`soldeAppel`) |
| --- | --- | --- |
| Alimenté par | Recharge par carte Visa | Transfert depuis le crédit du compte |
| Sert à | Transférer vers le crédit d'appel, payer l'abonnement mensuel | Payer les appels et les SMS |
| Peut être négatif | **Oui** (abonnement prélevé malgré un crédit insuffisant) | Non |

### Activation d'un numéro PRO

- Le crédit d'appel de bienvenue est offert : 500 FCFA au Cameroun, 1 € en diaspora. Le crédit du compte démarre à zéro.
- Le **premier mois d'abonnement est offert** : le premier prélèvement ne débite rien mais apparaît dans l'historique comme « Mois d'abonnement offert ».
- Recharge minimale : 10 000 FCFA ou 15 €. Le transfert n'a pas de minimum.

### Parcours et affichages conditionnels

- **Diaspora** : jamais d'offre Business, pas de bouton « Comparer les deux offres », pas de « En savoir plus » sur la carte PRO ; toute demande PRO commence par le **choix du pays**.
- **Accès à la souscription** : en haut de l'accueil, le badge du niveau de compte mène selon l'état à « Faire évoluer mon compte », « Ma demande » ou au compte ; dans le menu, le bouton « Souscrire un compte ProCom » suit la même logique (`cibleSouscription(statut)`), pour ne jamais proposer de souscrire deux fois.
- **Grille tarifaire avant demande** : sur toutes les présentations d'offre, « Consulter la grille tarifaire » précède le bouton de demande.
- **Business** : l'app ne gère que la demande. Après validation, le menu ne propose plus factures ni recharges.
- **Annuaire** : seules les organisations Business y figurent. Le numéro de la fiche est un cartouche vert façon numéro de service ; seule sa partie numéro est un lien `tel:` complet, préfixe compris ; l'appel ou le message gratuit passe par la liste de contacts Mobinawa (« Communiquer gratuitement »).
- **Nom de l'opérateur** : un seul nom par opérateur, celui qui signe ses e-mails, partout dans l'app.

---

## 10. Parcours simulés pour la démonstration

| Pour tester | Faites |
| --- | --- |
| Un usager camerounais | Session par défaut (`+237 6 55 12 34 78`) |
| Un usager de la diaspora | Bloc **Démonstration** en bas de l'accueil, choisissez GTS Africa (`+33 6 12 34 56 78`) |
| Une souscription PRO | Badge Mobinawa-Basic en haut de l'accueil, Souscrire à Mobinawa-PRO, remplir, envoyer, puis **Simuler la validation par nos équipes** |
| Le mois offert et le découvert | Espace client, **Simuler le prélèvement de ce mois** une fois (mois offert), puis une seconde fois (débit) |
| Une recharge et un transfert | Espace client, Recharger (carte Visa simulée), puis Transférer |
| La vue Manager d'un compte Business | Souscrire à Mobinawa-Business, envoyer, simuler la validation, puis bouton **Manager** du bloc Démonstration et badge de l'accueil |
| Une migration vers Business | Espace client PRO, Découvrir la migration, Migrer, envoyer la fiche, simuler la validation |
| Une suppression de compte | Menu, lien de simulation de suppression, puis Se réinscrire |
| L'anglais | Menu, Langue, English |

---

## 11. Traduction français et anglais

L'interface est **écrite en français**. Quand l'anglais est choisi, chaque texte affiché est traduit **au moment de l'affichage**, sans dupliquer les écrans.

### Fonctionnement

1. Les trois directives en tête du fichier demandent au compilateur d'utiliser `creerElement` à la place de `React.createElement` :
   ```js
   /** @jsxRuntime classic */
   /** @jsx creerElement */
   /** @jsxFrag FragmentTraduit */
   ```
2. `creerElement` passe chaque texte enfant et les attributs `placeholder`, `aria-label`, `title`, `alt` par `tr()` quand `langueUI === "en"`. Le contenu des balises `<style>` n'est jamais traduit.
3. `tr(texte)` réduit les espaces multiples, cherche le texte exact dans `TRADUCTIONS_EN`, puis dans `PATRONS_EN` (phrases à valeur variable, où `{}` marque chaque valeur, elle même traduite à son tour), puis tente une liste séparée par des virgules. Les espaces de début et de fin sont conservés.
4. **Filet de sécurité** : certains outils (dont l'aperçu des fichiers `.jsx` dans Claude) ignorent les directives. En anglais, `traduirePage()`, branchée sur un `MutationObserver`, traduit aussi les textes directement dans la page. Changer de langue reconstruit l'affichage (clé `langue` sur le conteneur) pour un retour au français complet.
5. Sont volontairement **invariables** (`estInvariable`) : noms d'organisations, marques (Mobinawa, MyApp, ProCom, GTS…), montants, durées, sigles et références.

### Ajouter ou modifier un texte

> [!IMPORTANT]
> **Règle permanente : chaque nouveau texte français affiché reçoit sa traduction anglaise dans la même version.**

- Texte fixe : ajoutez une entrée à `TRADUCTIONS_EN`, avec pour clé le texte français **exact**, espaces multiples réduits à un seul.
  ```js
  "Voir tout l'historique (": "See full history (",
  ```
- Texte avec une valeur variable : ajoutez un patron à `PATRONS_EN`.
  ```js
  ["Recharge de {} effectuée", "Top-up of {} completed"],
  ```
- Une phrase coupée par du gras (`<b>`) ou par une valeur `{...}` produit **plusieurs morceaux** : traduisez chaque morceau séparément.

### Contrôler qu'aucun texte n'est oublié

En anglais, tout texte sans traduction reste en français et s'inscrit dans un ensemble consultable depuis la console du navigateur :

```js
[...window.__mobinawaManquants]
```

Parcourez les écrans touchés par votre modification en anglais : cette liste doit rester **vide**.

> [!CAUTION]
> N'écrivez **jamais** le mot `@jsx` suivi d'un autre mot dans un commentaire du fichier. Le compilateur le prend pour une directive et remplace la fonction de rendu par ce mot : l'app affiche alors une page blanche avec une erreur du type `en is not defined`. C'est arrivé deux fois.

### Recherche selon la langue

La recherche de l'annuaire (`correspond`) compare la saisie au secteur, au sous secteur et à la description **dans la langue choisie** : « hôpital » en français, « hospital » en anglais. Le nom d'une organisation, qui ne se traduit pas, est reconnu dans les deux langues.

---

## 12. Système visuel et codes couleur

### Palette `C`

Toutes les couleurs passent par l'objet `C`. N'écrivez pas de code couleur en dur dans un écran.

| Aperçu | Clé | Code | Usage |
| --- | --- | --- | --- |
| ![](https://img.shields.io/badge/%20-%20-3D752F?style=flat-square) | `C.blue` | `#3D752F` | **Vert du logo**, couleur de marque : boutons principaux, titres, pastilles actives |
| ![](https://img.shields.io/badge/%20-%20-1F3D19?style=flat-square) | `C.blueDark` | `#1F3D19` | Vert profond : accent Business, synthèses |
| ![](https://img.shields.io/badge/%20-%20-5A9447?style=flat-square) | `C.blueLight` | `#5A9447` | Vert clair : icônes, liens secondaires, accent Basic |
| ![](https://img.shields.io/badge/%20-%20-EDF5E9?style=flat-square) | `C.blueSoft` | `#EDF5E9` | Fond des cartes sélectionnées et des tuiles d'icônes |
| ![](https://img.shields.io/badge/%20-%20-E85D04?style=flat-square) | `C.orange` | `#E85D04` | **Orange du logo** : action, accent PRO, souscription |
| ![](https://img.shields.io/badge/%20-%20-FDEAE0?style=flat-square) | `C.orangeSoft` | `#FDEAE0` | Fond orange pâle |
| ![](https://img.shields.io/badge/%20-%20-2FA36B?style=flat-square) | `C.green` | `#2FA36B` | Statut uniquement : succès, en ligne, gratuit |
| ![](https://img.shields.io/badge/%20-%20-E7F5EE?style=flat-square) | `C.greenSoft` | `#E7F5EE` | Fond des statuts positifs |
| ![](https://img.shields.io/badge/%20-%20-F2F5F0?style=flat-square) | `C.bg` | `#F2F5F0` | Fond des pages |
| ![](https://img.shields.io/badge/%20-%20-FFFFFF?style=flat-square) | `C.card` | `#FFFFFF` | Cartes |
| ![](https://img.shields.io/badge/%20-%20-F9FBF8?style=flat-square) | `C.cardSoft` | `#F9FBF8` | Cartes secondaires et encadrés |
| ![](https://img.shields.io/badge/%20-%20-18221A?style=flat-square) | `C.text` | `#18221A` | Texte principal |
| ![](https://img.shields.io/badge/%20-%20-5F7262?style=flat-square) | `C.muted` | `#5F7262` | Texte secondaire |
| ![](https://img.shields.io/badge/%20-%20-E2E9DF?style=flat-square) | `C.border` | `#E2E9DF` | Bordures et séparateurs |
| ![](https://img.shields.io/badge/%20-%20-C0392B?style=flat-square) | `C.alertText` | `#C0392B` | Alertes, découvert, appels manqués (fond `#FFF5F5`, bordure `#F7D6D6`) |
| ![](https://img.shields.io/badge/%20-%20-B26A00?style=flat-square) | `C.waitText` | `#B26A00` | Dossier en attente de revue (fond `#FFF8EA`, bordure `#F3DFB6`) |
| ![](https://img.shields.io/badge/%20-%20-8A93A0?style=flat-square) | `C.soonText` | `#8A93A0` | Badge « Bientôt disponible » (fond `#EEF1F5`) |
| ![](https://img.shields.io/badge/%20-%20-E4432F?style=flat-square) | (en dur) | `#E4432F` | Numéros d'urgence uniquement |

> [!NOTE]
> Les clés vertes s'appellent encore `blue`, `blueDark`, `blueLight`, `blueSoft` : la couleur de marque était bleue jusqu'à la v48. Les renommer toucherait environ 140 usages ; un commentaire en tête de palette le rappelle.

### Typographie

| Constante | Police | Usage |
| --- | --- | --- |
| `FONT_HEAD` | Plus Jakarta Sans (500, 700, 800) | Titres, montants, boutons |
| `FONT_BODY` | Inter (400 à 700) | Texte courant |

Les polices sont chargées depuis Google Fonts par une règle `@import` dans le bloc `<style>` de `MobinawaApp`, avec des polices de repli système.

### Tailwind et styles

- Les classes Tailwind servent à la **mise en page** (flex, grilles, marges, arrondis, tailles de texte). Les **couleurs** sont posées en `style` à partir de `C`.
- Le bloc `<style>` de `MobinawaApp` définit quelques classes propres à l'app :

| Classe | Rôle |
| --- | --- |
| `hauteur-ecran` | Hauteur réellement visible du téléphone (`100dvh`, repli `100vh`) |
| `hero-plein` | Photo d'accueil à la hauteur exacte de l'écran, avec les variables `--ecart`, `--tuile`, `--libelle`, `--titre-section`, `--recherche` qui rétrécissent sur les écrans bas |
| `rangee-titre` | Rangée flèche, titre et logo, figée en haut de chaque page |
| `tuile-icone` | Icônes des rangées de l'accueil, à 52 % de leur tuile |

- Tous les champs de saisie ont un texte de **16 pixels minimum**, pour que Safari sur iPhone ne zoome pas au toucher.
- L'app est **toujours en clair** : `color-scheme: only light` et une règle `prefers-color-scheme: dark` empêchent l'assombrissement automatique de Samsung Internet et de Chrome. Ne retirez pas les balises `color-scheme` de `index.html`.

### Repères d'interface

- **Mobile d'abord** : largeur maximale de 430 pixels, centrée sur ordinateur.
- **Drapeaux** : dessinés en SVG dans `DessinDrapeau`, affichés en rectangle (`Flag`) ou en rond qui remplit tout le cercle (`DrapeauRond`).
- **Logo** : sans fond, PNG transparent intégré dans `LOGO_SRC`.
- **Ton** : vouvoiement, phrases courtes, aucun jargon interne (ni « SVI », ni « flotte », ni « ProcomCRM » à l'écran).

---

## 13. Composants réutilisables

| Composant | Usage |
| --- | --- |
| `Card` | Carte blanche arrondie à bordure fine, cliquable si `onClick` est fourni |
| `PrimaryButton`, `GhostButton` | Bouton plein et bouton secondaire, couleur au choix |
| `SectionTitle` | Titre de section en petites capitales |
| `IconTile` | Tuile d'icône colorée (44 pixels par défaut) |
| `SoonBadge`, `PilotBadge`, `OffreBadge` | Badges « Bientôt disponible », « Gratuit · phase pilote », niveau du compte |
| `TextField`, `TextArea`, `SelectField`, `LockedField`, `FileField` | Champs de formulaire avec libellé, aide et erreur |
| `AlertBanner`, `RuleCallout` | Encadrés d'alerte et de règle (cadenas) |
| `Toast` | Message temporaire en bas d'écran, via `showToast(message)` |
| `BoutonRetour`, `IconeEcran`, `LogoAccueil` | Flèche de retour, icône de l'écran et logo de la rangée de titre |
| `OffreBadge` | Badge du niveau de compte ; cliquable en haut de l'accueil, il ouvre « Faire évoluer mon compte », « Ma demande » ou le compte selon l'état |
| `DrapeauRond`, `Flag`, `SelecteurPays` | Drapeaux et sélecteur de pays |
| `RangeeIcones`, `TitreSurPhoto` | Rangées défilantes et titres de l'accueil |
| `LogoOrg` | Pastille aux initiales et à la couleur d'une organisation |
| `NuageCle`, `NuageCleTuile` | Icône SVG unique : un nuage avec un cadenas, pour l'accès MyApp (propriété `fond` : couleur du fond, qui détache la clé du nuage) |
| `Progression` | Schéma Basic, PRO, Business |
| `AppelsEtDepenses` | Historique filtrable de l'espace client (mode limité ou complet) |

Pour un nouvel écran, reprenez ce gabarit :

```jsx
function MonEcran() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={Sparkles} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Titre de l'écran
        </h2>
        <LogoAccueil />
      </div>
      {/* contenu */}
    </div>
  );
}
```

---

## 14. Recettes : les modifications les plus courantes

### Publier une nouvelle version

1. Copiez le dernier fichier en `Mobinawa_vNN.jsx` avec le numéro suivant.
2. Mettez `VERSION_PROTO` à jour avec le même numéro.
3. Faites la modification, en datant vos commentaires `(vNN)`.
4. Traduisez tout nouveau texte (section 11) et faites les vérifications (section 16).
5. Mettez `MEMO.md` à jour : règle concernée, point ouvert éventuel, nom du fichier de référence.
6. Déposez `Mobinawa_vNN.jsx` (et `MEMO.md`) à la racine du dépôt.

### Ajouter un écran

1. Écrivez le composant avec le gabarit de la section 13.
2. Ajoutez son rendu dans `MobinawaApp` : `{screen === "monEcran" && <MonEcran ... />}`.
3. Ouvrez le depuis un bouton avec `goTo("monEcran")`.
4. Traduisez ses textes.

### Ajouter une organisation à l'annuaire

Ajoutez un objet dans `ANNUAIRE_PROCOM.cm` avec un `id` unique, un `secteur` et un `sousSecteur` **existants**, un `numero`, un `email` et un `site` facultatifs, une `couleur`, une `description` et `webapp`. Traduisez la description dans `TRADUCTIONS_EN` pour la recherche et l'affichage en anglais. La liste est triée par ordre alphabétique automatiquement.

### Ouvrir un nouveau pays

1. Dans `COUVERTURES`, passez le pays à `ouvert: true` et vérifiez ses préfixes, ses offres, son crédit offert et ses montants de recharge.
2. Ajoutez sa devise dans `DEVISES` et son taux dans `TAUX_XAF`.
3. Vérifiez son dessin dans `DessinDrapeau` et ajoutez le à la liste de `DrapeauRond`.
4. Renseignez `locatif` et `genitif` (« au Cameroun », « du Cameroun » ; un pays comme la Côte d'Ivoire demanderait « en » et « de »).
5. Ajoutez sa photo d'accueil (`fondAccueil`), ses fiches dans `ANNUAIRE_PROCOM`, ses numéros dans `NUMEROS_URGENCE` et ses tarifs.
6. Traduisez ses formes grammaticales et ses textes.

### Brancher un service gratuit

Ajoutez une `route` à son entrée dans `SERVICES_GRATUITS`, créez l'écran correspondant et branchez le dans `MobinawaApp`. La tuile de l'accueil et celle de l'écran Services deviennent cliquables d'elles mêmes.

### Changer une couleur

Modifiez la valeur dans `C`. Toute l'app suit. Contrôlez le contraste du texte blanc sur les nouveaux fonds.

---

## 15. Déploiement sur Vercel

1. Créez un dépôt GitHub (privé conseillé) et déposez **tous** les fichiers de la racine, sans sous dossier.
2. Sur Vercel, « Add New Project », importez le dépôt. Les réglages sont détectés seuls :

| Réglage | Valeur |
| --- | --- |
| Framework | Vite |
| Commande de construction | `npm run build` |
| Dossier publié | `dist` |
| Variables d'environnement | Aucune |

3. Chaque dépôt de fichier sur la branche principale redéploie le site en une à deux minutes.

L'icône d'onglet et l'icône d'écran d'accueil pour iPhone sont intégrées dans `index.html` à partir du logo.

---

## 16. Vérifications avant chaque livraison

- [ ] `npm run build` réussit sans erreur.
- [ ] L'app s'ouvre sans page blanche ni erreur dans la console.
- [ ] Le nouvel écran ou la modification s'affichent correctement à 360, 390 et 430 pixels de large.
- [ ] Les deux sessions de démonstration (Cameroun et diaspora) se comportent comme prévu.
- [ ] En anglais, `[...window.__mobinawaManquants]` est vide sur les écrans touchés.
- [ ] `VERSION_PROTO` correspond au nom du fichier.
- [ ] `MEMO.md` est à jour.
- [ ] Aucun commentaire ne contient `@jsx` suivi d'un mot.

---

## 17. Erreurs fréquentes et solutions

| Symptôme | Cause | Solution |
| --- | --- | --- |
| `Could not resolve "./Mobinawa.jsx" from "main.jsx"` | Ancien `main.jsx`, antérieur au chargement automatique | Déposez le `main.jsx` actuel et `tailwind.config.js` |
| `Rollup failed to resolve import "/src/main.jsx"` | Fichiers déposés dans un sous dossier, ou dossier perdu au dépôt | Déposez tous les fichiers à la racine |
| Page blanche, `xx is not defined` dans la console | Un commentaire contient `@jsx` suivi d'un mot | Reformulez le commentaire |
| Page blanche, `Cannot access 'xx' before initialization` | Un hook utilise une variable déclarée plus bas dans `MobinawaApp` | Déplacez le hook après la déclaration |
| Construction en échec sur une icône | Icône absente de lucide-react 0.383 | Choisissez une icône existante dans cette version |
| Textes restés en français en anglais | Traduction manquante | Consultez `window.__mobinawaManquants` et complétez `TRADUCTIONS_EN` |
| Couleurs ou espacements ignorés | Classe Tailwind non standard | Utilisez une classe de base de Tailwind ou un `style` |
| Zoom à l'ouverture du clavier sur iPhone | Champ de moins de 16 pixels | La règle globale l'impose ; ne la contournez pas |

---

## 18. Limites connues

- Aucune persistance : recharger la page remet la démonstration à zéro.
- Consommation non simulée : le crédit d'appel ne baisse pas, l'historique d'appels et « Ma conso » sont statiques.
- Services gratuits non branchés, sauf les numéros d'urgence.
- Pas de parcours « dossier refusé ».
- Numéros d'urgence du Cameroun à faire valider auprès d'une source officielle.
- Préfixes du Congo et du Nigéria provisoires, devise nigériane absente.
- Montants au format français (`5 820 FCFA`) même en anglais.
- La page d'aperçu publiée dans Claude ne peut afficher qu'un emoji comme icône d'onglet.

La liste complète et à jour figure dans la section « Points ouverts » de `MEMO.md`.

---

## 19. Plateformes externes visées en production

| Plateforme | Rôle |
| --- | --- |
| **CIRPACK** | Authentification par code OTP (WhatsApp ou SMS), provisionnement |
| **SIPPY-Softswitch** | Voix, crédits d'appel, données de consommation |
| **ProcomCRM** | Relation client, revue des dossiers, espace de configuration Business (nom interne, jamais affiché) |
| **Espace Manager** | Pilotage quotidien d'une instance Business sur ordinateur |
| **WebApp-Mobinawa** | Application web intégrée à l'app mobile |

---

## 20. Repères de l'historique des versions

| Versions | Évolutions |
| --- | --- |
| v48 | Version de départ, couleur de marque bleue |
| v49 | Vert du logo comme couleur de marque |
| v50 à v55 | Accueil sur photo du pays, bouton de souscription centré, suppression des bandeaux d'en-tête, flèche de retour sur chaque page |
| v56 à v66 | Souscription dans le menu, MyApp (ex Click2WebApp), numéro dans la liste, fiche simplifiée, logo d'accueil sur chaque page, règles diaspora |
| v67 à v73 | Grille tarifaire avant toute demande, parcours diaspora par le choix du pays, carte Business reformulée |
| v74 à v83 | Photo plein écran ajustée à la hauteur de l'écran, fichiers numérotés et chargement automatique, rangée de titre figée |
| v84 à v94 | Numéros d'urgence, menu repensé, mois offert dans l'historique, Ma conso, filtres et historique complet, ouverture de l'annuaire au clavier, onglet Langue |
| v95 à v98 | Traduction anglaise complète, recherche selon la langue, filet de sécurité de traduction |
| v99 | Factures et recharges retirées du menu pour Business, logo en icône du site |
| v100 à v130 |
| v131 | Espace Manager Business : crédit d'appel de l'entreprise, numéros PRO, reporting des appels par numéro ; choix Collaborateur ou Manager dans la démonstration | Fiche entreprise réorganisée (identité et activités dans un bloc, numéro PRO sur une ligne), « Communiquer gratuitement », « Accéder à nos services », fenêtre de communication gratuite simplifiée, présentation Business réécrite, thème toujours clair, formulaire Business en deux parties et e-mail de l'entreprise, boutons « Souscrire à… », titres « Formulaire… », icônes de titre sans fond, site web de l'entreprise |

Le détail de chaque décision est daté dans `MEMO.md` et dans les commentaires du code.

---

## 21. Conventions de contribution

- **Langue du code** : identifiants, commentaires et textes en français ; anglais uniquement dans `TRADUCTIONS_EN` et `PATRONS_EN`.
- **Commentaires datés** : chaque règle nouvelle porte sa version entre parenthèses.
- **Pas de couleur en dur** hors de `C` (seule exception : le rouge des urgences).
- **Pas de dépendance nouvelle** sans nécessité ; vérifiez qu'une icône existe dans lucide-react 0.383 avant de l'utiliser.
- **Une version, un fichier** : on ne modifie jamais un `Mobinawa_vNN.jsx` déjà publié, on en crée un nouveau.
- **Traduction et mémo à jour** dans la même version que la modification.

<p align="center">
  <img alt="Vert du logo" src="https://img.shields.io/badge/%233D752F-vert%20du%20logo-3D752F?style=flat-square" />
  <img alt="Orange du logo" src="https://img.shields.io/badge/%23E85D04-orange%20du%20logo-E85D04?style=flat-square" />
  <img alt="Vert profond" src="https://img.shields.io/badge/%231F3D19-vert%20profond-1F3D19?style=flat-square" />
  <br />
  <sub>Mobinawa · prototype exploité sur le réseau ProCom · GTS-Infotel Cameroon et GTS Africa</sub>
</p>

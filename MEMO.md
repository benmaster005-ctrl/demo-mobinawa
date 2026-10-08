# Mobinawa — mémo de reprise

Oct 6, 2026 · @Franck

## Le produit en bref

Mobinawa est une application mobile de communication unifiée et de standard téléphonique, exploitée sur le réseau ProCom. Elle sert d'abord un consommateur qui cherche à joindre une organisation : l'accueil est l'annuaire ProCom, pas le compte de l'usager.

Trois niveaux de compte coexistent.

| Niveau | Pour qui | Ce qu'il apporte |
| --- | --- | --- |
| Mobinawa-Basic | Tout utilisateur, par défaut | Identification comme consommateur, communication gratuite entre comptes Mobinawa, accès aux annuaires ProCom |
| Mobinawa-PRO | Un indépendant, un commerçant | Un numéro PRO fixe virtuel, crédit d'appel prépayé, suivi de consommation |
| Mobinawa-Business | Une organisation | Une instance : numéro PRO officiel sur SVI, numéros dédiés, comptes collaborateurs |

Deux règles structurent tout le reste.

Le **numéro mobile est l'identifiant du compte**. Il est vérifié à l'inscription par code OTP reçu par WhatsApp ou SMS, selon le numéro.

**Une ligne ne porte qu'un seul rattachement.** PRO et Business sont exclusifs sur une même ligne. Un utilisateur PRO peut migrer vers Business en conservant son numéro et son crédit ; l'inverse n'existe pas. Pour cumuler, il faut une seconde ligne, donc un second compte.

## Les opérateurs et les pays

L'opérateur d'un utilisateur n'est jamais choisi : il découle du préfixe de son numéro mobile. Il détermine les offres accessibles, la devise du contrat et l'interlocuteur en cas de problème.

| Opérateur | Numéros | Offres | Devise |
| --- | --- | --- | --- |
| GTS-Infotel Cameroon | +2376 | PRO et Business | FCFA |
| GTS Africa (France) | Tout autre préfixe | PRO uniquement | Euro |

**Un seul nom par opérateur** : celui qui signe ses e-mails, « L'équipe Mobinawa de Nom_Opérateur ». L'app l'emploie partout, y compris dans la consigne de recherche de l'interlocuteur : « GTS-Infotel Cameroon » et « GTS Africa ». Chaque pays ouvert suit la même règle. L'app précise aussi où chercher : GTS-Infotel Cameroon dans l'onglet « Contacts » ou dans l'annuaire ProCom du Cameroun, où il a sa fiche ; GTS Africa, qui n'a pas d'annuaire propre, dans l'onglet « Contacts » uniquement.

Un usager GTS Africa ne voit jamais l'offre Business : ni carte Business dans « Mon compte » ou le comparatif, ni bouton « Comparer les deux offres », retiré pour lui puisqu'il n'a qu'une offre (v66).

GTS Africa ne fournit aucun numéro local. Ses utilisateurs souscrivent à PRO sur un **numéro d'un pays africain couvert**, qu'ils choisissent. C'est la différence de fond entre les deux opérateurs.

Le code est écrit pour l'extension. Une constante `COUVERTURES` liste les opérateurs pays ; `DIASPORA` est l'opérateur de repli. Le Congo et le Nigéria y figurent déjà, marqués `ouvert: false`. Ouvrir un pays est une entrée de tableau, plus trois points à ne pas oublier : sa devise dans `DEVISES`, son taux dans `TAUX_XAF`, son drapeau dans le composant `Flag`.

Chaque couverture porte aussi ses formes grammaticales, `locatif` et `genitif`, pour que les libellés restent corrects — « au Cameroun », « l'annuaire du Cameroun ». Un pays comme la Côte d'Ivoire exigerait « en » et « de » ; le champ existe pour ça.

Point à vérifier avant ouverture : les préfixes mobiles du Congo et du Nigéria sont des valeurs provisoires, et la devise nigériane n'a ni entrée dans `DEVISES` ni taux de conversion.

## Parcours Mobinawa-PRO

Le parcours s'ouvre depuis le bouton « Souscrire un compte ProCom » de l'en-tête de l'accueil (v50), depuis le bouton du même nom en bas du menu, au-dessus de « Se déconnecter », à contour orange sans fond plein (v56, v57, v85), ou depuis « Mon compte ». Les deux boutons partagent la même logique. Ils mènent au choix entre PRO et Business. Son libellé suit l'état du compte, pour ne jamais proposer de souscrire deux fois : « Ma demande en cours » mène à l'accusé de réception tant qu'un dossier est en examen, « Mon compte ProCom » mène au compte une fois l'offre active.

1. **Choix du pays.** Un utilisateur d'une couverture locale a son pays imposé par son numéro. Un utilisateur GTS Africa choisit d'abord le pays africain où il veut être joignable : tant qu'il n'a pas choisi, le détail de l'offre ne s'affiche pas et aucun bouton n'apparaît. Seuls les pays où l'offre existe sont proposés.
   Pour un usager GTS Africa, tout bouton « Demander un numéro PRO » ramène à ce choix du pays : celui du comparatif des offres comme celui de la présentation de l'offre (v68). Le comparatif ne lui propose pas de bouton « En savoir plus » (v72) : le choix du pays présente déjà l'offre. Pour un usager local, « En savoir plus » ouvre la présentation de Mobinawa-PRO, sans choix de pays préalable : l'offre, puis « Consulter la grille tarifaire » et « Demander un numéro PRO ». La grille y passe avant la demande, comme partout (v69, v70). Dans le code, c'est le même écran en deux modes, « choix » (`moreInfoPro`) et « info » (`infoPro`).

   Sur tous les écrans de présentation de l'offre PRO, et pour tous les usagers, « Consulter la grille tarifaire » passe avant « Demander un numéro PRO » (v67 pour la diaspora, généralisé en v70) : l'usager voit le tarif avant de faire sa demande.
2. **Formulaire.** Prénom, nom, adresse e-mail, métier, activité professionnelle. Le numéro WhatsApp et le pays du numéro PRO y figurent en lecture seule. La pièce d'identité est facultative.
3. **Accusé de réception.** L'app confirme l'enregistrement et annonce une réponse sous 2 jours. Le même texte est archivé dans les notifications, pour que l'usager le retrouve après avoir quitté l'écran.
4. **Revue humaine.** Un responsable technico-commercial examine le dossier dans ProcomCRM et attribue un numéro PRO depuis la base de numéros disponibles. Aucune attribution automatique.
5. **Activation.** Le support technique configure le compte sur SIPPY-Softswitch et CIRPACK. Un e-mail de création de compte web part, une notification WhatsApp prévient de l'attribution, et le profil bascule de Basic à PRO à la reconnexion.

**Ce qui est offert à l'activation** : 500 FCFA de crédit d'appel au Cameroun, 1 € chez GTS Africa, plus un mois d'abonnement gratuit. Le crédit du compte, lui, démarre à zéro — il n'y a rien à prélever le premier mois.

Une demande peut être retirée par l'usager tant qu'elle est en cours. Le parcours ne comporte pas de branche « dossier refusé » ; si l'opérateur rejette un dossier, l'écran correspondant reste à concevoir.

## Parcours Mobinawa-Business

**Formulaires (v115).** Les boutons qui y mènent s'appellent « Souscrire à Mobinawa-PRO » et « Souscrire à Mobinawa-Business » (à la place de « Demander un numéro PRO » et « Créer un compte entreprise »), partout dans l'app. Les pages s'intitulent « Formulaire Mobinawa‑PRO » et « Formulaire Mobinawa‑Business », avec un trait d'union insécable pour que le titre ne se coupe pas au tiret. Les champs facultatifs ne portent plus la mention « Facultatif » : seuls les champs obligatoires sont signalés, par une étoile. L'encart « En choisissant Business, cette ligne ne pourra pas porter de rattachement PRO » a été retiré ; seul l'encart de migration depuis PRO reste.

**Formulaire Mobinawa-Business.** Il s'ouvre sur « Réservé au responsable de l'organisation. Après validation, vous devenez administrateur du compte entreprise et vos collaborateurs y sont rattachés. » (la phrase sur le numéro PRO pendant l'examen a été retirée en v122). Il est découpé en deux parties distinctes (v114). « L'entreprise » : raison sociale, secteur et sous-secteur, description des activités, **e-mail de l'entreprise** et **site web de l'entreprise** (facultatifs, affichés sur la fiche de l'annuaire ; site ajouté en v116), logo et justificatif facultatifs. « Le demandeur » : prénom, nom, fonction, e-mail du demandeur (obligatoire) et numéro mobile WhatsApp verrouillé.

**Carte du comparatif.** Dans « Faire évoluer mon compte », la carte Mobinawa-Business s'adresse à « une organisation et ses collaborateurs » et présente quatre avantages, reformulés en v73 dans des mots d'usager : un numéro officiel avec standard téléphonique et des numéros dédiés ; des comptes collaborateurs gérés par un responsable depuis un espace web ; la publication dans l'annuaire ProCom, réservée à Business ; des abonnements facturés à l'organisation, avec appels et SMS sur un crédit prépayé commun. Un encadré rappelle que l'offre est possible sans passer par Mobinawa-PRO. L'encart « La progression va dans un seul sens… », placé sous la carte Business en v87, a été retiré (v105) : la règle figure dans la présentation de la migration.

**Présentation de l'offre.** L'écran ouvert par « En savoir plus » de la carte Mobinawa-Business a été réécrit pour être plus clair (v105) : une phrase d'introduction (pour qui), « Ce que vous obtenez » (un numéro officiel avec standard, un compte pour chaque collaborateur, travailler ensemble, la présence dans l'annuaire), « Comment ça se passe » (quatre étapes : la fiche, la vérification sous 2 jours, l'accès web du Manager, l'activation des collaborateurs), « Qui paie quoi », et, pour un compte PRO, « Si vous passez de Mobinawa-PRO à Business » (numéro gardé, crédit utilisé en premier, plus de recharge, passage définitif). Il se termine par « Consulter la grille tarifaire », puis « Créer un compte entreprise » (ou « Migrer vers Mobinawa-Business » depuis un compte PRO actif), dans le même ordre que pour PRO (v71). La grille s'ouvre alors directement sur l'onglet Mobinawa-Business ; ouverte depuis le menu, elle garde son onglet par défaut.

Règle d'architecture décidée en séance : **l'app ne gère que la demande de souscription**. Toute la suite se passe sur les plateformes web.

1. **Formulaire dans l'app.** Raison sociale, secteur, sous-secteur dépendant du secteur, logo facultatif, description des activités, prénom et nom du demandeur, fonction, e-mail, numéro WhatsApp en lecture seule, justificatif facultatif. Les données partent vers ProcomCRM.
2. **Accusé de réception.** L'app annonce qu'après examen de la fiche, un membre des équipes adressera un e-mail contenant le lien d'accès à l'espace de configuration. L'envoi est un geste humain, pas un automatisme.
3. **Espace de configuration.** Lien valable 7 jours, à usage unique. Le représentant y déclare effectifs et sites, parc et consommation, nombre de numéros PRO souhaités, configuration du SVI, liste des collaborateurs par site, groupes de réception d'appels. Il peut inviter un ou deux délégués.
4. **Validation et attribution.** Le responsable technico-commercial valide, puis sélectionne le numéro PRO officiel et les numéros supplémentaires. Si le demandeur a déjà un numéro PRO, celui-ci devient le numéro officiel de l'organisation.
5. **Déploiement.** Le support configure l'instance. Partent alors : un e-mail au Manager, un e-mail à chaque collaborateur identifié par adresse, un message WhatsApp à chaque collaborateur identifié par mobile. La fiche de l'organisation est publiée dans l'annuaire ProCom, icône d'appel active.
6. **MyApp, en option** (anciennement Click2WebApp, renommé en v61). Après tests d'intégration de l'API Mobinawa, la fiche de l'annuaire ouvre un accès sécurisé à la plateforme web de l'organisation, qui récupère automatiquement le numéro mobile de l'usager.

Cinq plateformes portent ce parcours : la WebApp-Mobinawa intégrée à l'app mobile, ProcomCRM pour la relation client et l'espace de configuration, CIRPACK pour le provisionnement, SIPPY-Softswitch pour la voix et les crédits d'appel, et l'espace Manager pour le pilotage quotidien.

**Après déploiement, l'app ne montre rien du compte entreprise.** Le collaborateur y retrouve sa fiche Basic, sans option de migration. Pas d'annuaire interne, pas de facturation, pas de gestion des collaborateurs : tout cela vit dans l'espace Manager.

## Crédits et facturation

Une ligne porte **deux soldes distincts**, et les confondre est l'erreur la plus facile à commettre.

|  | Crédit du compte | Crédit d'appel |
| --- | --- | --- |
| Alimenté par | Recharge carte Visa | Transfert depuis le crédit du compte |
| Sert à | Transférer vers le crédit d'appel, régler l'abonnement mensuel du numéro | Payer les appels et les SMS |
| Détenu par | Le compte | SIPPY-Softswitch |
| Peut être négatif | Oui | Non |

**Recharge.** Par carte Visa uniquement. Minimum 10 000 FCFA ou 15 €. Le Mobile Money ne figure dans aucun document fourni ; il a été retiré de l'app.

**Transfert.** Montant libre, plafonné au crédit du compte disponible, avec un bouton « Tout ». Il n'y a pas de minimum : les paliers tarifaires couvrent tout solde. Avant confirmation, l'écran annonce le crédit d'appel obtenu et le prix de la minute qui en découle, et rappelle de garder de quoi couvrir l'abonnement.

**Prélèvement.** L'abonnement mensuel du numéro est prélevé sur le crédit du compte en début de mois. Il est reconduit **même si le crédit est insuffisant** : le solde passe alors en négatif et reste à régulariser, le prélèvement suivant s'y ajoutant. Le crédit d'appel n'est pas touché : un usager à découvert continue d'appeler tant que son crédit d'appel tient.

Le premier prélèvement est absorbé par le mois offert à l'activation : il ne débite rien, mais il apparaît lui aussi dans l'historique, sous le libellé « Mois d'abonnement offert » et la mention « Offert » (v88). Le prélèvement apparaît dans « Appels et dépenses » et dans l'écran « Mes factures », qui réunit abonnements et recharges avec trois filtres.

**Côté Business**, les abonnements des numéros et des comptes collaborateurs sont facturés à l'entreprise, mais les appels et les SMS sont prépayés comme en PRO, sur un crédit commandé d'un montant minimum de 100 000 F HT. Le collaborateur ne recharge rien lui-même.

**Commande du crédit prépayé Business.** Elle se passe hors de l'app, par l'un de deux canaux : depuis l'espace Manager, ou par bon de commande traité par les équipes commerciales dans ProcomCRM. L'app se contente de l'expliquer, dans la grille tarifaire (conditions commerciales et encadré Business), dans l'écran de présentation de Mobinawa-Business et dans l'écran des recharges vu par un collaborateur. Le nom ProcomCRM, interne, n'apparaît pas à l'usager.

## Historique de l'espace client

L'historique « Appels et dépenses » de l'espace client PRO se filtre par des pastilles, chacune avec son nombre d'éléments : Tout, Émis, Reçus, Manqués et Abonnements (v90). Un filtre sans résultat affiche un message plutôt qu'une liste vide.

L'espace client n'affiche que les six éléments les plus récents du filtre choisi. Au-delà, un bouton « Voir tout l'historique (n) » ouvre l'écran « Historique », qui présente la liste complète avec les mêmes pastilles, sur le filtre qui était sélectionné ; sa flèche ramène à l'espace client (v91). La limite est la constante `LIMITE_HISTORIQUE`.

## Ma conso

Écran ouvert par le bouton « Ma conso » de l'espace client PRO, à côté de « Mes recharges » ; il remplace le bouton « Grille tarifaire », et le lien « Voir la grille tarifaire » de l'espace client a été retiré : la grille reste accessible depuis le menu (v89).

L'écran présente, pour le mois en cours ou le mois précédent : le montant dépensé en appels, avec l'écart par rapport au mois précédent ; les minutes émises et reçues ; le crédit d'appel restant et le nombre de minutes qu'il permet encore au prix en vigueur ; quatre compteurs (appels émis, reçus, manqués, durée moyenne d'un appel émis) ; un histogramme des minutes émises par semaine ; la répartition des dépenses entre mobiles, fixes et international ; les trois numéros les plus appelés. Une note rappelle que les échanges entre comptes Mobinawa, gratuits, n'y figurent pas.

Les chiffres sont des données de démonstration (`CONSO_DEMO`), en FCFA, convertis pour un compte en euros. En production, ils viendront de SIPPY-Softswitch.

## Grille tarifaire

Chaque opérateur ne publie que sa propre grille, dans sa propre devise. Ce n'est pas une conversion : ce sont des tarifs contractuels distincts. La devise n'est pas réglable, elle découle du préfixe du numéro.

**Mobinawa-PRO**, affiché TTC.

| Ligne | Cameroun | Diaspora |
| --- | --- | --- |
| Numéro PRO | 2 000 FCFA / mois | 5,00 € / mois |
| Accueil vocal personnalisé | 10 000 FCFA, une fois | — |
| Appel local | 40 à 50 FCFA / min | 0,10 € / min |

Le numéro est gratuit pendant la phase pilote ; le montant reste affiché pour annoncer le tarif de sortie.

L'appel local camerounais est **dégressif selon le solde du crédit d'appel** : 50 F/min jusqu'à 49 999 FCFA, 45 F/min de 50 000 à 99 999 FCFA, 40 F/min à partir de 100 000 FCFA. Les paliers sont contigus, sans trou entre eux.

Le palier est **fixé à chaque transfert, sur le solde total du crédit d'appel après transfert**, et s'applique jusqu'au transfert suivant. Les appels qui font baisser le solde ne font pas remonter le prix de la minute. Exemple : un usager à 30 000 FCFA qui transfère 25 000 FCFA atteint 55 000 FCFA et passe à 45 F/min. Le crédit offert à l'activation fixe le premier palier de la même façon. Le prix en vigueur s'affiche sous le crédit d'appel, dans le compte PRO.

**Mobinawa-Business**, offre SaaS GTS-Infotel Cameroon, hors taxes.

| Prestation | Tarif |
| --- | --- |
| Numéro PRO officiel sur le SVI | 100 000 F / an |
| Numéro dédié à un service | 50 000 F / an |
| Numéro dédié à un collaborateur | 30 000 F / an |
| Configuration personnalisée du SVI | à partir de 50 000 F |
| Compte CU sur smartphone | gratuit |
| Compte CU/Tel, toutes configurations | 2 000 F / mois |
| Compte Manager CU/Tel | 5 000 F / mois |
| Appel local | 40 F / min |
| Envoi SMS | 8 F / SMS |

Les trois numéros PRO restent gratuits pendant le pilote. Groupe de réception d'appel, annuaire d'entreprise et assistance en ligne du Manager sont gratuits.

**CU** signifie accès aux services de communications unifiées, **Tel** accès aux services de standard téléphonique. Une formule CU seule ne donne donc pas la téléphonie d'entreprise.

Conditions commerciales : abonnements annuels payables à réception de facture, abonnements mensuels facturés trimestriellement, appels et SMS en prépayé sur crédit commandé de 100 000 F HT minimum.

## L'annuaire ProCom

**Qui y figure.** Seules les organisations disposant d'un numéro PRO officiel, c'est-à-dire les clients Mobinawa-Business : la publication est une ligne de leur offre. Un indépendant Mobinawa-PRO n'y est pas publié. L'app le dit dans le comparatif des offres (« Faire évoluer mon compte »), où la publication figure parmi les avantages de Mobinawa-Business : « Votre organisation dans l'annuaire ProCom, où l'on vous appelle gratuitement. Réservé à Business : un numéro PRO individuel n'y figure pas. » La même règle figure aussi dans les informations de l'annuaire (voir plus bas).

**Un annuaire par pays.** Celui du pays dont provient le numéro de l'usager, le Cameroun par défaut si son pays n'en a pas. Tout le monde peut consulter n'importe quel annuaire ouvert : c'est un service de recherche, pas un périmètre commercial. Le sélecteur de pays est le drapeau à gauche de la barre de recherche, sur l'accueil comme sur l'écran annuaire.

**L'accueil est l'annuaire.** Depuis la v50, il reprend la présentation de l'app en production. De haut en bas :

1. **Une photo de fond propre au pays** de l'annuaire consulté, sous un voile sombre qui garde le texte blanc lisible ; il est un peu plus dense en haut, derrière le titre, et en bas, derrière les libellés des icônes. Pour le Cameroun, le monument de la Réunification à Yaoundé (v53). À l'ouverture, la photo occupe exactement la hauteur visible de l'écran du téléphone ; le reste de l'accueil apparaît en faisant défiler (v74). Pour qu'elle tienne aussi sur les écrans bas, les écarts, les tuiles d'icônes, la barre de recherche et les textes se réduisent avec la hauteur disponible (variables CSS `--ecart`, `--tuile`, `--libelle`, `--titre-section`, `--recherche`, v83). Vérifié de 640 à 932 pixels de haut ; en dessous d'environ 560 pixels, le contenu dépasse de quelques pixels. La photo a des bords droits, sans arrondi (v75). Elle change avec le drapeau. Chaque pays porte la sienne dans le champ `fondAccueil` de `COUVERTURES` (adresse https ou image intégrée) ; tant qu'il est vide, un fond de repli vert et orange s'affiche.
2. **Une rangée du haut, sans bandeau d'en-tête**, posée sur la photo et qui défile avec elle : menu à gauche, bouton « Souscrire un compte ProCom » centré avec son bandeau orange « PRO » en coin, cloche des notifications et logo à droite, puis le badge du niveau de compte, centré lui aussi (v51), un peu plus espacé du bouton (v76). Le logo n'a plus de fond blanc, ni sur l'accueil ni sur les autres pages (v76). Sur un écran étroit, le libellé du bouton passe sur deux lignes plutôt que de chevaucher la cloche.
3. **Le titre** « Bienvenue dans l'annuaire ProCom », centré, en taille modérée (v54), avec le pays seul sur la seconde ligne, « du Cameroun » (v55). Il suit le pays choisi. Sur les écrans étroits, la taille se réduit légèrement pour que la première ligne ne se coupe pas.
4. **La barre de recherche**, précédée du drapeau du pays, jamais plus haut que la barre (38 pixels au plus, v123). La toucher ouvre l'annuaire ProCom sur toutes les catégories, champ de recherche actif et clavier ouvert : la saisie filtre directement la liste, en plein écran (v93). Le champ de l'accueil sert donc d'entrée vers l'annuaire. Le drapeau est rond et remplit tout le cercle, sans fond blanc (v76) ; les drapeaux de la liste des pays sont ronds eux aussi (v81) ; avec suggestions dès la première lettre ; chaque suggestion montre le nom, le secteur et le numéro PRO officiel (v76). La recherche et les catégories descendent sur la photo pour réduire le vide au milieu de l'écran (v76) ; l'espace libre se répartit pour deux tiers sous le titre et pour un tiers au-dessus des services, avec un écart minimal garanti sous le titre (v80). La recherche ignore la casse et les accents : « hopital » trouve « hôpital ».
5. **« Ou / Choisir une catégorie »**, puis les catégories en une rangée qui défile horizontalement : les neuf mises en avant d'abord, les autres ensuite, « Autre » en dernier. La grille dépliable des versions précédentes a disparu. Les icônes des catégories comme des services sont grandes : quatre au plus tiennent sur la largeur de l'écran, le bord de la cinquième signale le défilement, et les libellés peuvent tenir sur trois lignes (v78).
6. **« Nos services gratuits »**, aperçu en rangée défilante (voir la section dédiée), calé en bas de l'écran (v74).

Sous la photo ne reste que le bloc de démonstration : le raccourci « Mon espace client », qui rappelait le numéro PRO actif, a été retiré (v92) ; l'espace client s'ouvre depuis le menu. Le bouton « Voir tout l'annuaire » a été retiré (v54) : la liste complète s'ouvre par la loupe de la recherche laissée vide, ou depuis une catégorie en retirant son filtre.

**Dix-huit catégories**, « Autre » toujours en dernier, chacune avec ses sous-secteurs. Les catégories affichées sont celles qui ont des fiches : une tuile menant à une liste vide est une impasse.

**L'écran annuaire** affiche la catégorie choisie en puce orange, qu'on touche pour en changer ou dont la croix retire le filtre. Une seconde puce bleue apparaît pour le sous-secteur.

**Les informations de l'annuaire** sont regroupées derrière un bouton « i », à droite du nombre d'organisations, qui ouvre une fenêtre « L'annuaire ProCom » (v64). Elle réunit quatre points : l'appel vers un numéro PRO est gratuit depuis n'importe quel pays ; chaque fiche est vérifiée par l'opérateur qui la publie ; MyApp ouvre le service numérique de l'organisation ; seules les organisations disposant d'un numéro PRO officiel sont publiées, la publication étant comprise dans l'offre Business. Ces mêmes points apparaissent dans « À propos de Mobinawa », sous le titre « L'annuaire ProCom ». Une seule liste, `INFOS_PROCOM`, alimente les deux. Ils figuraient auparavant en bas de la liste.

**Tri.** La liste des organisations et les suggestions de la recherche sont triées par ordre alphabétique du nom (v80), en attendant un tri par pertinence ou par fréquentation.

**Le numéro de la fiche** est un lien d'appel complet, préfixe international compris : un appui ouvre le composeur du téléphone sur `+237…`, un appui long sélectionne le numéro entier (v80). Une ligne précise que cet appel passe par le réseau mobile et qu'il est facturé par l'opérateur, et renvoie vers « Appeler gratuitement » pour l'appel gratuit.

**Ordre de la fiche** : un premier bloc réunit l'identité (logo, nom, secteur, sous-secteur) et, sous un trait, les « Activités » (v101) ; un second bloc présente le numéro en cartouche, sur le modèle des numéros de service (v109) : dans un même contour vert, arrondi comme le bouton « Communiquer gratuitement » (v110), un bloc vert plein « Numéro PRO officiel » avec une icône de téléphone, puis le numéro en vert sur fond blanc ; seule la partie du numéro lance l'appel GSM, le bloc « Numéro PRO officiel » n'étant pas cliquable (v116), et sur un écran étroit le libellé passe sur deux lignes ; la mention sur le tarif est centrée dessous (v110) ; l'encart « Fiche publiée par [opérateur] dans l'annuaire ProCom [pays] » a été retiré (v112) ; l'e-mail de l'organisation, quand elle en a un, s'affiche sous les activités et ouvre la messagerie (v114), suivi de son site web, qui s'ouvre dans un nouvel onglet (v116) ; avec la mention « Toucher le numéro pour un appel au tarif de votre opérateur mobile » (v102) ; puis les boutons. Le bouton principal s'appelle **« Communiquer gratuitement »** et non plus « Appeler gratuitement », puisqu'on peut aussi écrire à l'organisation ; la fenêtre qu'il ouvre est titrée « Pour communiquer gratuitement avec [organisation] depuis votre application Mobinawa : », enchaîne directement sur les quatre étapes et se termine par « Vous pourrez alors l'appeler ou lui envoyer un message sans dévoiler votre numéro mobile personnel » ; l'encart « composer directement le numéro » a été retiré (v104). La rangée de titre de la fiche affiche « Annuaire ProCom » suivi du petit drapeau rond du pays (v104).

**La liste des organisations** affiche pour chacune le logo, le nom, le secteur et le numéro PRO officiel, en vert sous le secteur (v60), avec à droite, le cas échéant, la pastille MyApp. L'icône d'appel a été retirée de la liste (v61) : l'appel se lance depuis la fiche.

**MyApp** est signalé partout par la même icône (v123) : dans la liste de l'annuaire, une pastille avec l'icône seule, sans le mot « MyApp », qui ouvre une fenêtre explicative « Accès aux services numériques » (accès sécurisé, numéro déjà reconnu, sans compte ni mot de passe, badge « Bientôt disponible », bouton « Voir la fiche ») plutôt que la fiche (v124) ; dans la fenêtre « i » et « À propos » ; sur le bouton « Accéder à nos services » de la fiche ( une icône unique où une grosse clé de sécurité plonge en diagonale dans le nuage, son anneau en haut à droite hors du nuage, sa pointe vers le bas et le milieu du nuage, composant `NuageCle`, v117 à v121), pour le service en ligne de l'organisation (v59). Elle remplace le bouclier des premières versions, qui évoquait la sécurité. Dans la liste de l'annuaire, l'icône est accompagnée du mot « MyApp » ; sur la fiche, elle précède le bouton « Accéder à nos services » (v103), suivi du badge « Bientôt disponible ».

**La fiche** porte le logo, le secteur et le sous-secteur, le numéro PRO officiel surmonté d'une pastille verte « Numéro PRO officiel » avec coche, qui remplace le badge « Numéro vérifié » placé autrefois sous le nom (v62), la description des activités, les boutons d'action et l'opérateur qui publie.

**L'appel gratuit n'est pas direct.** Il passe par la liste de contacts : il faut ajouter l'organisation, attendre l'acceptation de l'invitation, puis appeler depuis « Membres ». Le bouton de la fiche ouvre une modale qui explique ces quatre étapes et rappelle qu'un appel composé directement serait facturé par l'opérateur mobile.

Le jeu de démonstration compte 36 organisations camerounaises fictives, deux par catégorie, dont huit avec MyApp actif, plus la fiche de GTS-Infotel Cameroon (`+237 242 232 000`) et celle de l'association REPTIC (`+237 242 233 000`, v77), qui reprennent des organisations réelles. En production, ces fiches viennent de ProcomCRM.

## Navigation

**Le menu** s'ouvre depuis l'accueil. Il porte le logo Mobinawa en titre (v84), puis : Mon compte Mobinawa, Services gratuits & pratiques, Grille tarifaire, Notifications, Historique des recharges et Mes factures pour un compte PRO actif uniquement (retirées pour un compte Mobinawa-Business, y compris après migration, v99), À propos de Mobinawa, Langue (v94), le bouton « Souscrire un compte ProCom » (contour orange, sans fond plein, v85), une ligne de séparation (v86) et Se déconnecter. Toutes les lignes ont la même couleur d'icône, y compris Numéros d'urgence (v85). La ligne « Accueil » a été retirée (v84), puisque le menu ne s'ouvre que depuis l'accueil. La ligne « Numéros d'urgence », ajoutée en v84, a été retirée en v94 : le service reste accessible par les services gratuits.

**Langue.** La ligne « Langue » du menu a pour icône le drapeau de la langue choisie et affiche son nom à droite. Le français est la langue par défaut dans les pays francophones (drapeau français) ; l'écran « Langue » permet de choisir l'anglais (drapeau britannique, liste `LANGUES`) (v94). Le choix vaut pour la session ; en anglais, toute l'app est traduite (v95, voir « Traduction »).

## Traduction

L'interface est écrite en français. Quand l'anglais est choisi, chaque texte affiché est traduit au moment de l'affichage (v95). Une directive en tête du fichier (`@jsx creerElement`) fait passer tous les éléments par la fonction `creerElement`, qui traduit les textes et les attributs `placeholder`, `aria-label`, `title` et `alt` via `tr()`. Les traductions sont dans `TRADUCTIONS_EN` (texte français exact, espaces multiples réduits à un seul → texte anglais) ; les phrases qui contiennent une valeur variable (montant, opérateur, date…) sont dans `PATRONS_EN`, où `{}` marque chaque valeur. Les noms propres (organisations, marques, opérateurs), montants et références ne sont pas traduits.

**Règle pour toute évolution :** chaque nouveau texte français affiché reçoit sa traduction anglaise dans `TRADUCTIONS_EN` ou `PATRONS_EN`, dans la même version. En anglais, un texte sans traduction reste en français et s'inscrit dans `window.__mobinawaManquants` : ce relevé doit être vide avant chaque livraison. Attention à ne jamais écrire « @jsx » suivi d'un mot dans un commentaire : l'outil de compilation le prendrait pour la directive (c'est arrivé deux fois).

**Filet de sécurité (v98).** Certains aperçus, comme celui des fichiers `.jsx` dans Claude, compilent le fichier sans tenir compte de la directive : `creerElement` n'est alors jamais appelé et la traduction ne se faisait pas. En anglais, un observateur (`traduirePage`, `MutationObserver`) traduit donc aussi les textes et attributs directement dans la page, à chaque changement d'affichage. Changer de langue reconstruit l'affichage (clé `langue` sur le conteneur de l'app), pour que le retour au français soit complet. L'app est ainsi traduite quel que soit l'outil qui la compile.

La recherche dans l'annuaire suit la langue choisie (v97, fonction `correspond`) : en français, la saisie est comparée au secteur, au sous-secteur et à la description en français ; en anglais, à leur traduction anglaise. « hospital » trouve ainsi la Clinique du Djoungolo en anglais, « hôpital » en français. Le nom d'une organisation, qui ne se traduit pas, est comparé tel quel dans les deux langues. Comme la recherche porte sur des morceaux de mots, « hospital » remonte aussi l'hôtellerie (« Hospitality »).

**Champs de saisie.** Tous les champs ont un texte d'au moins 16 pixels, pour que Safari sur iPhone ne zoome pas quand on touche une barre de recherche (v84).

**Aucun écran n'a de bandeau d'en-tête** (v52). L'accueil porte sa rangée du haut sur la photo ; toutes les autres pages ouvrent sur leur titre, précédé d'une **flèche de retour** puis de l'**icône de l'écran** (sans fond depuis la v115 ; celle de son onglet dans le menu quand il en a un, sinon celle de son thème ; pour la langue, le drapeau de la langue active, v111 ; pour l'annuaire et la fiche d'une organisation, un livre ouvert, v113), et suivi, à droite, du **logo Mobinawa**, qui ramène à l'accueil à tout moment (v65). Cette rangée reste figée en haut de l'écran pendant le défilement (v79). Pour que cela tienne sur téléphone, l'app occupe la hauteur réellement visible de l'écran (`100dvh`, classe `hauteur-ecran`) et non `100vh`, qui ignore la barre d'adresse des navigateurs mobiles et laissait glisser la page entière (v82). Le menu et les notifications ne sont accessibles que depuis l'accueil.

La flèche ramène à l'écran d'où l'on vient, et non systématiquement à l'accueil : l'app tient un historique de navigation. Trois règles l'encadrent. Revenir à l'accueil vide l'historique. L'envoi d'un formulaire de souscription le vide aussi, pour que la flèche de l'accusé de réception mène à l'accueil plutôt qu'au formulaire déjà envoyé. Sur la fiche d'une organisation, la flèche ramène à la liste de l'annuaire. Chaque écran s'ouvre en haut de page.

## Les services gratuits

Des services d'utilité publique, accessibles à tous les utilisateurs, y compris Basic. Une seule liste, `SERVICES_GRATUITS`, alimente l'aperçu de l'accueil et l'écran « Services » ; son ordre est celui de l'aperçu.

| Service | État |
| --- | --- |
| Numéros d'urgence | **Disponible** (v84) |
| Pharmacies de garde | Bientôt disponible |
| Horoscope | Bientôt disponible |
| Résultats sportifs | Bientôt disponible |
| Citations du jour | Bientôt disponible |
| Suivi des travaux | Bientôt disponible |
| Convertisseur de devises | Bientôt disponible |
| Calcul de TVA | Bientôt disponible |

« Numéros d'urgence » a pris la deuxième place, à la place de « Suivi des travaux » (v84), puis la première, devant « Pharmacies de garde » (v85). C'est le premier service disponible : il ouvre un écran qui liste, pour le pays de l'annuaire consulté, les numéros d'urgence, chacun avec un bouton d'appel direct. Pour le Cameroun : Police secours 117, Gendarmerie nationale 113, Sapeurs-pompiers 118, SAMU 119 (liste `NUMEROS_URGENCE`). On y accède par l'aperçu de l'accueil, l'écran « Services » et le menu. Les autres services ne sont pas encore branchés : un appui ouvre l'écran « Services », où ils portent le badge « Bientôt disponible ».

## Identité visuelle

La couleur de marque est le **vert du logo, `#3D752F`**, relevé sur le logo officiel (v49). Il remplace le bleu des versions précédentes : en-têtes, boutons principaux, tuiles d'icônes, cartes sélectionnées. Il est décliné en vert profond `#1F3D19` (accent Business), vert clair `#5A9447` et fond pâle `#EDF5E9`. Les gris de fond sont légèrement teintés de vert.

L'**orange `#E85D04`**, seconde couleur du logo, reste l'accent d'action et de PRO. Le vert de statut `#2FA36B` (en ligne, succès), les couleurs des drapeaux et celles des logos de démonstration sont indépendants de la marque.

Dans le code, les clés de la palette `C` s'appellent toujours `blue`, `blueDark`, `blueLight` et `blueSoft` : elles désignent désormais la couleur de marque, verte. Les renommer toucherait environ 140 usages ; un commentaire en tête de palette le rappelle.

## Ce que l'app ne fait pas

Cette frontière a été tracée progressivement et plusieurs écrans ont été supprimés en conséquence. La retenir évite de les réintroduire par accident.

| Fonction | Où elle vit |
| --- | --- |
| Collecte des informations de déploiement Business | Espace de configuration, sur PC |
| Ajout, modification, retrait des collaborateurs | Espace Manager, sur PC |
| Configuration du SVI, statistiques d'appel, reporting | Espace Manager |
| Facturation entreprise, factures, TVA | Espace Manager |
| Annuaire interne de l'entreprise | Espace Manager |
| Attribution des numéros PRO, validation des dossiers | ProcomCRM, par un humain |
| Provisionnement des comptes | CIRPACK et SIPPY-Softswitch |

**Les deux espaces web ne se confondent pas.** L'espace de configuration s'ouvre avant validation, pour collecter ce qui la rend possible. L'espace Manager s'ouvre après déploiement, pour piloter au quotidien. Ils font l'objet de deux e-mails distincts.

L'app conserve, côté Business, la seule **vue collaborateur** : la fiche Basic de l'usager, sans option de migration. L'espace client est réservé au titulaire d'un numéro PRO ; côté Business il appartient au Manager, sur le web.

Après dépôt d'une demande, aucun bandeau ne signale le dossier sur l'accueil. Le seul signal est le libellé du bouton de l'en-tête, qui devient « Ma demande en cours » (v50) ; le détail vit dans les notifications et dans l'écran d'accusé de réception.

## Points ouverts

- [ ] **Préfixes mobiles du Congo et du Nigéria** : valeurs provisoires dans le code, à confirmer avant ouverture.
- [ ] **Devise nigériane** : déclarée `NGN` mais absente de `DEVISES` et de `TAUX_XAF`. Ouvrir le pays sans l'ajouter afficherait la grille dans la mauvaise devise.
- [x] **Minimum de transfert** : tranché. Pas de minimum ; les paliers sont rendus contigus et fixés par le solde total du crédit d'appel après transfert (v42).
- [x] **Crédit prépayé Business** : tranché. Commande depuis l'espace Manager ou par bon de commande traité dans ProcomCRM ; l'app l'explique sans proposer de commande (v43).
- [x] **Trois noms pour un interlocuteur** : tranché. Le nom dépend de l'opérateur et c'est celui de la signature e-mail : « GTS-Infotel Cameroon », « GTS Africa » (v44).
- [ ] **Paragraphe dupliqué** dans l'e-mail de l'espace de configuration, dont la seconde occurrence est amputée de son début.
- [ ] **Noms des organisations de démonstration** : inventés, à vérifier contre les enseignes réelles avant toute présentation externe.
- [ ] **Catégories mises en avant** sur l'accueil : choisies à l'intuition, à remplacer par les plus consultées une fois l'usage mesuré.
- [ ] **Catégorie Sport** : traitée pour l'instant en sous-secteurs sous Association et ONG et sous Services aux particuliers. À promouvoir en catégorie si le sport devient une cible commerciale.
- [ ] **Tarifs Sippy** : les montants de la grille sont codés en dur, à brancher sur les tarifs en direct.
- [x] **Numéro PRO de GTS-Infotel Cameroon** : tranché. La fiche de l'opérateur porte `+237 242 232 000` (v76).
- [x] **Fiche de l'association REPTIC** : tranché. Ajoutée au jeu de démonstration (Association et ONG, Organisation professionnelle, `+237 242 233 000`), d'après la présentation de reptic.cm fournie par l'équipe (v77), avec l'option MyApp (v80).
- [ ] **Numéro PRO attribué** : codé en dur à `+237 233 47 12 08`, à brancher sur CIRPACK.
- [ ] **Consommation non simulée** : le crédit d'appel ne baisse jamais, les compteurs d'appels et les statistiques de « Ma conso » sont des données de démonstration, à brancher sur SIPPY-Softswitch.
- [ ] **Photos de fond de l'accueil** : le Cameroun a la sienne, le monument de la Réunification à Yaoundé (constante `FOND_CAMEROUN`, v53). Chaque nouveau pays ouvert devra en recevoir une, droits d'usage vérifiés. La photo du Cameroun ne fait que 400 pixels de large : une version plus grande serait plus nette sur les écrans haute définition.
- [ ] **E-mails et sites des fiches de démonstration** : simulés (`contact@<nom>.cm`, v114 ; `www.<nom>.cm`, v116), y compris pour GTS-Infotel Cameroon et REPTIC (dont le site réel est reptic.cm) ; à remplacer par les vraies adresses.
- [ ] **Numéros d'urgence du Cameroun** : liste proposée (117, 113, 118, 119), à faire valider auprès de sources officielles avant toute mise en production.
- [ ] **Services gratuits** : seuls les numéros d'urgence sont branchés. Définir pour chacun la source des données ; préciser en particulier ce que couvre « Suivi des travaux ».
- [x] **Couleur de marque** : tranché. Le vert du logo remplace le bleu (v49).
- [ ] **Accès aux notifications hors de l'accueil** : sans en-tête, la cloche n'est visible que sur l'accueil. À reconsidérer si les notifications doivent rester accessibles partout.
- [x] **Nom du service d'accès à l'application de l'organisation** : tranché. « MyApp » remplace « Click2WebApp » et « WebApp » partout dans l'app, y compris dans la ligne de la grille Business « Compte API Mobinawa d'accès sécurisé MyApp à l'application de l'entreprise » (v61). Dans le code, le champ des fiches s'appelle toujours `webapp`. La plateforme interne « WebApp-Mobinawa » est une autre chose et garde son nom.
- [x] **Traduction anglaise** : tranché. Toute l'interface est traduite (v95).
- [ ] **Langue par défaut selon le pays** : le français est la langue par défaut ; à décider pour le Nigéria, anglophone, à son ouverture.
- [x] **En-tête** : tranché. Supprimé sur tous les écrans ; flèche de retour à côté du titre de chaque page (v51, v52).
- [x] **Accès à la souscription depuis l'accueil** : tranché. Bouton « Souscrire un compte ProCom » dans l'en-tête, libellé selon l'état du compte (v50).

## Le prototype

**Le fichier.** `Mobinawa_v124.jsx`, un composant React d'environ 5 500 lignes, sans dépendance hors `react` et `lucide-react`. Il est abondamment commenté : chaque règle produit non évidente porte l'explication de son existence. C'est le support de reprise le plus complet.

**Convention de version.** Le numéro du fichier est incrémenté à chaque itération. Une constante `VERSION_PROTO` en tête du fichier porte le même numéro et s'affiche en pied de l'écran « À propos ». Les deux ne doivent jamais diverger.

**Toujours en clair (v106).** Certains navigateurs, comme Samsung Internet ou Chrome avec le mode sombre automatique, assombrissent d'office les sites qui ne déclarent rien. L'app déclare un thème clair uniquement : balises `color-scheme` et `supported-color-schemes` dans `index.html`, `color-scheme: only light` et une règle `prefers-color-scheme: dark` qui garde les couleurs claires dans le style de l'app. Si un usager a forcé le mode sombre pour tous les sites dans les réglages de son navigateur, il peut rester à le désactiver de son côté.

**Icône du site.** L'onglet du navigateur affiche le logo Mobinawa (`index.html` du dépôt : icône PNG intégrée, et icône d'écran d'accueil sur fond blanc pour iPhone). La page d'aperçu publiée dans Claude ne peut afficher qu'un emoji comme icône d'onglet.

**Aperçu dans la conversation.** Depuis la v67, chaque version est aussi publiée comme page web autonome (un seul fichier HTML, construit à partir du `.jsx`), qui s'ouvre directement dans la conversation sans avoir à cliquer sur le fichier. Cette page sert à la relecture ; le dépôt GitHub reste alimenté par le `.jsx`.

**Mise en ligne.** Le prototype est hébergé sur Vercel à partir d'un dépôt GitHub privé. Le dépôt est volontairement « à plat », sans sous-dossier, parce que le dépôt de fichiers par glisser-déposer sur GitHub perd les dossiers : `index.html`, `main.jsx`, `index.css`, `package.json`, les fichiers de configuration (Vite, Tailwind, PostCSS) et les fichiers de l'application sont tous à la racine.

Depuis la v74, les fichiers de l'application gardent leur numéro de version dans le dépôt (`Mobinawa_v74.jsx`, `Mobinawa_v75.jsx`…). `main.jsx` charge automatiquement celui dont le numéro est le plus grand ; seul celui-ci est téléchargé par l'usager. Pour publier une nouvelle version, il suffit de déposer le nouveau fichier dans le dépôt, sans rien renommer : Vercel redéploie seul. Les anciennes versions peuvent rester dans le dépôt comme historique ou être supprimées. Le numéro du fichier et la constante `VERSION_PROTO` doivent toujours correspondre.

**Blocs de démonstration**, en pointillés et étiquetés comme tels, à retirer avant toute mise en production.

| Où | Ce qu'il simule |
| --- | --- |
| Bas de l'accueil | Bascule entre les deux opérateurs ; remet le compte à zéro |
| Écran d'accusé de réception | Validation du dossier par les équipes, retrait de la demande |
| Bas du compte PRO | Prélèvement mensuel de l'abonnement |

**Pour reprendre sur un autre compte Claude.** Il n'existe pas de transfert automatique entre deux comptes personnels, et les données exportées ne sont pas réimportables. Dépose dans une nouvelle conversation le fichier `.jsx` (ou celui du dépôt GitHub, `Mobinawa.jsx`), ce mémo, l'offre commerciale Business et la procédure d'onboarding. La migration complète n'existe que d'un compte personnel vers un espace Team ou Enterprise.

**Première chose à faire en reprenant** : parcourir les points ouverts ci-dessus et trancher ceux qui bloquent.

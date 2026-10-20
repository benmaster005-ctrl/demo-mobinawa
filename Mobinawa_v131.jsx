/** @jsxRuntime classic */
/** @jsx creerElement */
/** @jsxFrag FragmentTraduit */
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { Room, RoomEvent, Track } from "livekit-client";
import {
  UserCircle2, Menu as MenuIcon, Search, Phone, Video,
  MessageCircle, ChevronRight, ChevronLeft, X, Check, Clock, Briefcase, Home,
  Building2, ShieldCheck, Globe2, CreditCard, FileText, LogOut,
  Smartphone, Users2, Sparkles, PhoneCall,
  PhoneIncoming, PhoneMissed, Circle, Pill,
  Calculator, Sun, Quote, Siren, Camera, BadgeCheck, PlusCircle,
  Wheat, Landmark, HardHat, ShoppingCart, GraduationCap, Leaf, UtensilsCrossed,
  Ship, Factory, Clapperboard, HeartPulse, Laptop, Truck, LayoutGrid,
  Banknote, HeartHandshake, Scissors,
  Hourglass, Lock, Receipt, Wallet, KeyRound,
  History, Coins, Bell, Megaphone, Wrench, Info, Trash2, ArrowUpRight,
  Construction, Trophy, Cloud, Ambulance, Flame, Shield, BarChart3, PhoneOutgoing, Timer,
  BookUser, BookOpen, Mail, Mic, MicOff, Volume2, VolumeX, PhoneOff, Hash,
  Plus, Calendar, Grid3X3, Wifi, Battery, Delete
} from "lucide-react";

/* ================================================================== */
/*  TRADUCTION (v95)                                                    */
/*  L'interface est écrite en français. Quand l'anglais est choisi      */
/*  (menu > Langue), chaque texte affiché est traduit au moment du      */
/*  rendu : la fonction creerElement, qui remplace React.createElement pour tout   */
/*  ce fichier (directive placée en tête du fichier), passe les textes et les attributs */
/*  placeholder, aria-label, title et alt par tr().                     */
/*                                                                      */
/*  RÈGLE POUR TOUTE ÉVOLUTION : chaque nouveau texte français affiché  */
/*  doit recevoir sa traduction dans TRADUCTIONS_EN (texte exact, espaces */
/*  multiples réduits à un seul) ou, s'il contient une valeur variable, */
/*  dans PATRONS_EN. En anglais, les textes sans traduction restent en  */
/*  français et sont listés dans window.__mobinawaManquants.            */
/* ================================================================== */
let langueUI = "fr";
const FragmentTraduit = React.Fragment;

const TRADUCTIONS_EN = {
  "% vs mois dernier": "% vs last month",
  ") sur le crédit du compte.": ") from the account credit.",
  "), aux comptes identifiés par un numéro mobile de leur pays. Votre compte relevant de": "), to accounts identified by a mobile number from their country. As your account belongs to",
  ", conçue par": ", designed by",
  ", Mobinawa-Business hors taxes": ", Mobinawa-Business excluding taxes",
  ", seule l'offre Mobinawa-PRO vous est accessible.": ", only the Mobinawa-PRO offer is available to you.",
  ", votre opérateur, libellée en": ", your operator, in",
  ". La durée de la phase pilote sera précisée en cours de route, et vous serez prévenu avant toute mise en facturation de votre numéro.": ". The length of the pilot phase will be specified along the way, and you will be notified before your number becomes chargeable.",
  ". Mobinawa-PRO est affiché toutes taxes comprises": ". Mobinawa-PRO is shown including all taxes",
  ". Tout le monde entre par la même porte : un compte activé par WhatsApp en deux minutes. Chacun fait ensuite évoluer son compte, PRO pour un numéro professionnel, Business pour équiper une entreprise.": ". Everyone comes in through the same door: an account activated by WhatsApp in two minutes. Each person then upgrades their account, PRO for a professional number, Business to equip a company.",
  ". Vous l'appelez alors gratuitement depuis l'application, sans consommer de crédit d'appel et sans transmettre votre numéro mobile personnel.": ". You can then call it for free from the app, without using call credit and without sharing your personal mobile number.",
  ". Vous l'appelez ou lui écrivez alors gratuitement depuis l'application, sans consommer de crédit d'appel et sans transmettre votre numéro mobile personnel.": ". You can then call or message it for free from the app, without using call credit and without sharing your personal mobile number.",
  ". Vous pourrez alors l'appeler ou lui envoyer un message sans dévoiler votre numéro mobile personnel.": ". You can then call or message it without revealing your personal mobile number.",
  ". Vous échangez alors gratuitement par appel audio/vidéo ou par messagerie, chacun gardant confidentiel son numéro mobile personnel.": ". You can then talk for free by audio/video call or messaging, each keeping their personal mobile number private.",
  "/ min": "/ min",
  ": il n'existe pas de retour de Business à PRO.": ": there is no way back from Business to PRO.",
  ": on ne redescend pas de Business à PRO.": ": you cannot go back from Business to PRO.",
  "Abonnement mensuel du numéro": "Monthly number subscription",
  "Abonnement mensuel prélevé": "Monthly subscription charged",
  "Abonnements": "Subscriptions",
  "Abonnements facturés à l'organisation, appels et SMS sur un crédit prépayé commun": "Subscriptions billed to the organization, calls and SMS on shared prepaid credit",
  "Accès aux services numériques": "Access to digital services",
  "accès direct": "direct access",
  "Accéder au service": "Open the service",
  "Accéder à nos services": "Access our services",
  "Activer le micro": "Unmute",
  "Achat, conditionnement et exportation de cacao et de café. Relation avec les coopératives de producteurs.": "Purchase, packaging and export of cocoa and coffee. Relations with producer cooperatives.",
  "Action sociale et humanitaire": "Social and humanitarian action",
  "Activité professionnelle": "Professional activity",
  "Activités": "Activities",
  "Actualité": "News",
  "ACTUALITÉ": "NEWS",
  "actuel": "current",
  "administrateur": "administrator",
  "Administration centrale": "Central government",
  "Administration multi-utilisateurs": "Multi-user administration",
  "Administration publique": "Public administration",
  "Adresse de site invalide": "Invalid website address",
  "Adresse e-mail": "E-mail address",
  "Affiché sur la fiche de votre entreprise dans l'annuaire ProCom.": "Shown on your company's listing in the ProCom directory.",
  "Affiché à vos correspondants et dans l'annuaire ProCom.": "Shown to your contacts and in the ProCom directory.",
  "Agence de communication": "Communication agency",
  "Agence de voyage": "Travel agency",
  "Agression, vol, trouble à l'ordre public": "Assault, theft, public disorder",
  "Agroalimentaire": "Agrifood",
  "Aide aux familles vulnérables, bourses scolaires et distribution de matériel médical.": "Support for vulnerable families, school grants and distribution of medical equipment.",
  "Ajouter un contact": "Add a contact",
  "Alimentation générale, électroménager et produits d'entretien. Commandes par téléphone et livraison à domicile.": "Groceries, household appliances and cleaning products. Phone orders and home delivery.",
  "an": "year",
  "Anglais": "English",
  "Annuaire": "Directory",
  "Annuaire ProCom": "ProCom directory",
  "Annuaire téléphonique de l'entreprise": "Company phone directory",
  "apparaît dans vos": "appears in your",
  "Appel WebRTC sécurisé via réseau ProCom / LiveKit SIP": "Secure WebRTC call via ProCom / LiveKit SIP network",
  "Appel local à": "Local call at",
  "Appel terminé": "Call ended",
  "Appel vers tout numéro de téléphone local": "Calls to any local phone number",
  "Appel vers tout numéro mobile ou fixe local": "Calls to any local mobile or landline number",
  "Appeler (WebRTC SIP)": "Call (WebRTC SIP)",
  "Appeler gratuitement": "Call for free",
  "Appeler par le réseau mobile": "Call over the mobile network",
  "Appels au crédit prépayé": "Calls on prepaid credit",
  "Appels au crédit prépayé, rechargé dans l'app": "Calls on prepaid credit, topped up in the app",
  "Appels ce mois": "Calls this month",
  "Appels et dépenses": "Calls and spending",
  "Appels manqués": "Missed calls",
  "Appels reçus": "Received calls",
  "Appels sortants : débités de votre crédit prépayé": "Outgoing calls: deducted from your prepaid credit",
  "appels ·": "calls ·",
  "Appels émis": "Outgoing calls",
  "appels émis": "outgoing calls",
  "Appels émis par les collaborateurs": "Calls made by employees",
  "Appels, visioconférence, messagerie et transfert d'appel entre collaborateurs, ainsi qu'avec les contacts Mobinawa externes.": "Calls, video conferencing, messaging and call transfer between employees, as well as with external Mobinawa contacts.",
  "Appels, visioconférences, messages et transferts d'appel entre collaborateurs, et avec vos contacts Mobinawa extérieurs.": "Calls, video conferences, messages and call transfers between employees, and with your external Mobinawa contacts.",
  "Après examen de votre fiche de souscription, un membre de nos équipes vous adressera un e-mail contenant le lien d'accès à votre espace de configuration depuis un PC. Il nous permettra de collecter les informations nécessaires à la validation de votre demande et au déploiement de la solution adaptée à votre organisation.": "After reviewing your subscription form, a member of our team will send you an e-mail with the access link to your configuration area from a PC. It will let us collect the information needed to approve your request and deploy the solution suited to your organization.",
  "Après transfert, votre crédit d'appel sera de": "After the transfer, your call credit will be",
  "Après validation de votre demande, vous recevrez sous 2 jours un e-mail contenant le lien d'accès web à votre compte depuis un PC.": "Once your request is approved, you will receive within 2 days an e-mail with the web access link to your account from a PC.",
  "Architecture et ingénierie": "Architecture and engineering",
  "Artisanat et réparation à domicile": "Crafts and home repairs",
  "Arts et spectacle": "Arts and performance",
  "Assistance en ligne du Manager": "Online support for the Manager",
  "Association de quartier": "Neighbourhood association",
  "Association et ONG": "Associations and NGOs",
  "Assurance automobile, habitation, santé et responsabilité civile. Déclaration de sinistre et suivi des dossiers.": "Car, home, health and liability insurance. Claims reporting and file follow-up.",
  "Attribué, suspendu, récupéré : chaque numéro suit un cycle de vie maîtrisé, du stock opérateur jusqu'au client, et retour.": "Assigned, suspended, recovered: each number follows a controlled life cycle, from operator stock to the customer, and back.",
  "au Cameroun": "in Cameroon",
  "au Congo": "in Congo",
  "au Nigéria": "in Nigeria",
  "Aucun abonnement pour l'instant : le premier apparaîtra en début de mois.": "No subscription yet: the first one will appear at the beginning of the month.",
  "Aucun appel dans cette catégorie.": "No calls in this category.",
  "Aucun document pour l'instant. Vos recharges et les prélèvements de l'abonnement de votre numéro apparaîtront ici.": "No documents yet. Your top-ups and your number's subscription charges will appear here.",
  "Aucun numéro mobile personnel n'est exposé à vos interlocuteurs : sur Mobinawa, vous êtes identifié par votre nom, votre fonction et votre organisation.": "No personal mobile number is shown to the people you talk to: on Mobinawa, you are identified by your name, your position and your organization.",
  "aucun prélèvement": "no charge",
  "Aucun prélèvement ce mois-ci : votre premier mois d'abonnement est offert. Le prochain": "No charge this month: your first month of subscription is free. The next",
  "Aucune catégorie ne correspond à votre recherche.": "No category matches your search.",
  "Aucune organisation n'est encore publiée dans cet annuaire.": "No organization has been published in this directory yet.",
  "Aucune organisation ne correspond dans l'annuaire": "No organization matches in the directory",
  "Aucune organisation ne correspond à votre recherche dans l'annuaire": "No organization matches your search in the directory",
  "Aucune recharge pour l'instant. Votre première recharge apparaîtra ici avec son reçu.": "No top-ups yet. Your first top-up will appear here with its receipt.",
  "Autre": "Other",
  "Banque, assurance et microfinance": "Banking, insurance and microfinance",
  "Bientôt disponible": "Coming soon",
  "Bienvenue dans l'annuaire ProCom": "Welcome to the ProCom directory",
  "Blanchisserie et pressing": "Laundry and dry cleaning",
  "BTP et immobilier": "Construction and real estate",
  "C'est à cette adresse que sera envoyé le lien d'accès web à votre compte.": "The web access link to your account will be sent to this address.",
  "Cabinet dentaire": "Dental practice",
  "Cabinet dentaire : consultations bucco-dentaires, soins dentaires, détartrage, blanchiment, chirurgie dentaire et urgences.": "Dental practice: oral consultations, dental care, scaling, whitening, dental surgery and emergencies.",
  "Cabinet médical": "Medical practice",
  "Calcul de TVA": "VAT calculator",
  "Cameroun": "Cameroon",
  "Cameroun et sa diaspora": "Cameroon and its diaspora",
  "Carte Visa": "Visa card",
  "Ce changement ne se défait pas": "This change cannot be undone",
  "Ce fil est alimenté depuis le back-office Mobinawa. Les messages critiques comme une maintenance ou un incident réseau sont également poussés en notification système.": "This feed is fed from the Mobinawa back office. Critical messages such as maintenance or a network incident are also pushed as system notifications.",
  "Ce mois-ci": "This month",
  "Ce niveau vous donne accès à": "This level gives you access to",
  "Ce passage est définitif : on ne revient pas de Business à PRO.": "This change is final: there is no going back from Business to PRO.",
  "Ce que la migration change": "What the migration changes",
  "Ce que vous obtenez": "What you get",
  "Centre médical polyvalent à Yaoundé : consultations générales et spécialisées, laboratoire d'analyses, imagerie et urgences 24h/24.": "Multi-specialty medical centre in Yaoundé: general and specialist consultations, medical laboratory, imaging and 24/7 emergencies.",
  "Ces statistiques portent sur les appels téléphoniques de votre numéro PRO. Les appels et messages entre comptes Mobinawa sont gratuits et n'y figurent pas.": "These statistics cover the phone calls of your PRO number. Calls and messages between Mobinawa accounts are free and are not included.",
  "Cette grille est celle de": "This price list is that of",
  "Cette icône signale une organisation qui vous donne accès à ses services numériques directement depuis Mobinawa.": "This icon marks an organization that gives you access to its digital services directly from Mobinawa.",
  "Champ requis": "Required field",
  "Champs obligatoires manquants :": "Missing required fields:",
  "Change de devises et cotations du jour. Vérification des taux et disponibilité par téléphone.": "Currency exchange and daily rates. Rates and availability can be checked by phone.",
  "Changer de pays": "Change country",
  "Chaque collaborateur reçoit son compte Mobinawa professionnel. Il l'active en quelques instants, par le lien reçu par e-mail ou par un code reçu par WhatsApp ou SMS.": "Each employee receives their professional Mobinawa account. They activate it in moments, with the link received by e-mail or a code received by WhatsApp or SMS.",
  "Chaque collaborateur reçoit une ligne entreprise. Il active son compte par le lien reçu par e-mail, ou depuis l'application avec le code OTP reçu par WhatsApp ou SMS.": "Each employee receives a company line. They activate their account with the link received by e-mail, or from the app with the OTP code received by WhatsApp or SMS.",
  "Chaque fiche est vérifiée par l'opérateur ProCom qui la publie.": "Each listing is verified by the ProCom operator that publishes it.",
  "Chaque recharge est désormais tracée avec son moyen de paiement, son horodatage et sa référence de transaction. Le crédit de bienvenue y apparaît également.": "Each top-up is now recorded with its payment method, timestamp and transaction reference. The welcome credit also appears there.",
  "Chaudronnerie, charpente métallique et pièces sur mesure. Devis et interventions sur site.": "Boilermaking, steel framing and custom parts. Quotes and on-site work.",
  "Chef de projet GTS Africa : coordination technique, suivi des projets et assistance au déploiement.": "GTS Africa Project Manager: technical coordination, project monitoring and deployment support.",
  "Chef de projet GTS Africa : pilotage et déploiement des services Mobinawa et solutions ProCom.": "GTS Africa Project Manager: steering and deployment of Mobinawa services and ProCom solutions.",
  "Chiffré de bout en bout": "End-to-end encrypted",
  "Chimie et pharmacie": "Chemicals and pharmaceuticals",
  "Choisir une catégorie": "Choose a category",
  "Citations du jour": "Quotes of the day",
  "Clavier SVI": "Keypad",
  "Clinique et hôpital": "Clinic and hospital",
  "Cliquer sur": "Tap",
  "Club sportif et de loisirs": "Sports and leisure club",
  "CNI, passeport ou titre de séjour, utilisés uniquement pour la vérification.": "National ID card, passport or residence permit, used only for verification.",
  "Coiffure et esthétique": "Hairdressing and beauty",
  "Collaborateur": "Employee",
  "Collaboration interne": "Internal collaboration",
  "Collecte des déchets, nettoyage industriel et dératisation. Contrats pour entreprises et copropriétés.": "Waste collection, industrial cleaning and pest control. Contracts for companies and residential buildings.",
  "Collectivité locale": "Local authority",
  "Comment communiquer gratuitement sur Mobinawa ?": "How to communicate for free on Mobinawa?",
  "Comment ça se passe": "How it works",
  "Commerce de détail": "Retail trade",
  "Commerce de gros": "Wholesale trade",
  "Commerce en ligne": "E-commerce",
  "Commerce et distribution": "Retail and distribution",
  "Communications et services": "Communications and services",
  "Communiquer gratuitement": "Communicate for free",
  "Communiquer gratuitement avec": "Communicate for free with",
  "Communiquer gratuitement sur Mobinawa": "Communicate for free on Mobinawa",
  "Comparer les deux offres": "Compare the two offers",
  "Comptabilité": "Accounting",
  "Compte activé ·": "Account activated ·",
  "Compte API Mobinawa d'accès sécurisé MyApp à l'application de l'entreprise": "Mobinawa API account for secure MyApp access to the company's application",
  "Compte Collaborateur CU sur smartphone (utilisateur Mobinawa-Basic)": "CU Employee account on smartphone (Mobinawa-Basic user)",
  "Compte Collaborateur CU/Tel au nom de la société sur PC": "CU/Tel Employee account in the company's name on PC",
  "Compte Collaborateur CU/Tel sur PC": "CU/Tel Employee account on PC",
  "Compte Collaborateur CU/Tel sur PC et smartphone": "CU/Tel Employee account on PC and smartphone",
  "Compte Collaborateur CU/Tel sur smartphone": "CU/Tel Employee account on smartphone",
  "Compte Extranet de reporting et crédit d'appel des numéros PRO attribués": "Extranet account for reporting and call credit of assigned PRO numbers",
  "Compte Manager CU/Tel sur PC et smartphone": "CU/Tel Manager account on PC and smartphone",
  "Compte Mobinawa-Business : voir l'application en tant que": "Mobinawa-Business account: view the app as",
  "Compte Mobinawa-Business actif": "Mobinawa-Business account active",
  "compte web depuis un PC.": "web account from a PC.",
  "Comptes collaborateurs": "Employee accounts",
  "Conception d'applications mobiles et web sur mesure. Maintenance applicative et intégration d'API.": "Custom mobile and web application design. Application maintenance and API integration.",
  "Conditions commerciales": "Terms of sale",
  "Configuration personnalisée du SVI": "Custom IVR configuration",
  "Confirmée": "Confirmed",
  "Congo": "Congo",
  "Conseil en gestion et stratégie": "Management and strategy consulting",
  "Conseil et services aux entreprises": "Consulting and business services",
  "Conseil juridique": "Legal advice",
  "Conseil juridique, rédaction d'actes et contentieux commercial. Consultations sur rendez-vous.": "Legal advice, drafting of deeds and commercial litigation. Consultations by appointment.",
  "Connexion au serveur LiveKit...": "Connecting to LiveKit server...",
  "conservés": "kept",
  "Construction et travaux publics": "Construction and public works",
  "Consulter": "Open",
  "Couper le micro": "Mute",
  "Consulter la grille tarifaire": "See the price list",
  "Consultez le tarif de chaque destination avant d'appeler, depuis le menu ou votre compte PRO. Les tarifs affichés font foi au moment de l'appel.": "Check the rate for each destination before calling, from the menu or your PRO account. The rates shown apply at the time of the call.",
  "contact@entreprise.cm": "contact@company.cm",
  "Contacts": "Contacts",
  "Contrôle de l'entreprise et du demandeur sous 2 jours.": "Company and applicant check within 2 days.",
  "Contrôle de l'entreprise et du représentant sous 2 jours.": "Company and representative check within 2 days.",
  "Convertisseur de devises": "Currency converter",
  "Coursier et livraison": "Courier and delivery",
  "Courtage et représentation": "Brokerage and representation",
  "Crédit d'appel": "Call credit",
  "Crédit d'appel de l'entreprise": "Company call credit",
  "Crédit d'appel offert": "Call credit offered",
  "Crédit d'appel restant": "Remaining call credit",
  "crédit du compte": "account credit",
  "Crédit du compte": "Account credit",
  "Crédit du compte disponible ·": "Available account credit ·",
  "Crédit prépayé commun à tous les collaborateurs. Il se commande depuis l'espace Manager, sur ordinateur, ou par bon de commande.": "Prepaid credit shared by all employees. It is ordered from the Manager area, on a computer, or by purchase order.",
  "Crédit épuisé": "Credit used up",
  "Créer un compte entreprise": "Create a business account",
  "CU : services de communications unifiées. Tel : services de standard téléphonique.": "CU: unified communications services. Tel: telephone switchboard services.",
  "Cuisine camerounaise et plats du jour. Réservations, traiteur et livraison sur le centre-ville.": "Cameroonian cuisine and daily specials. Bookings, catering and delivery in the city centre.",
  "Culte et communauté": "Faith and community",
  "Côté Business : au contrat": "Business side: under contract",
  "dans ce délai": "within this time",
  "dans l'annuaire ProCom": "in the ProCom directory",
  "dans l'onglet « Contacts »": "in the “Contacts” tab",
  "dans l'onglet « Contacts » ou dans l'annuaire ProCom du Cameroun": "in the “Contacts” tab or in the ProCom directory of Cameroon",
  "Dans les deux cas, une revue humaine": "In both cases, a human review",
  "Dans quel pays souhaitez-vous votre numéro PRO ?": "In which country would you like your PRO number?",
  "de": "from",
  "Demande de migration retirée": "Migration request withdrawn",
  "Demande enregistrée !": "Request registered!",
  "Demande Mobinawa-PRO": "Mobinawa-PRO request",
  "Demander un numéro PRO": "Request a PRO number",
  "depuis votre application Mobinawa :": "from your Mobinawa app:",
  "depuis votre téléphone : l'appel est alors facturé par votre opérateur mobile.": "directly from your phone: the call is then charged by your mobile operator.",
  "Des comptes pour vos collaborateurs, gérés par un responsable depuis un espace web": "Accounts for your employees, managed by a supervisor from a web area",
  "Des services d'utilité publique accessibles à tous les utilisateurs Mobinawa, gratuitement.": "Public interest services available to all Mobinawa users, free of charge.",
  "Description de vos activités": "Description of your activities",
  "directement": "directly",
  "Direction Générale de GTS Africa : opérateur de services de télécommunications et communications unifiées pour l'Afrique et sa diaspora.": "General Management of GTS Africa: telecommunications operator and unified communications for Africa and its diaspora.",
  "Distribution alimentaire": "Food distribution",
  "Données et intelligence artificielle": "Data and artificial intelligence",
  "Dont offert": "Of which free",
  "du Cameroun": "of Cameroon",
  "du compte entreprise et vos collaborateurs y sont rattachés.": "of the business account and your employees are attached to it.",
  "du compte entreprise et vos collaborateurs y sont rattachés. Votre numéro PRO continue de fonctionner pendant l'examen du dossier.": "of the business account and your employees are attached to it. Your PRO number keeps working while the file is reviewed.",
  "du Congo": "of Congo",
  "du Nigéria": "of Nigeria",
  "Durée moyenne d'un appel émis": "Average length of an outgoing call",
  "Découvrir la migration": "Discover the migration",
  "Décrivez brièvement ce que fait votre entreprise...": "Briefly describe what your company does...",
  "Décrivez brièvement votre activité...": "Briefly describe your activity...",
  "Défense des intérêts des riverains, médiation locale et organisation des réunions de quartier.": "Defending residents' interests, local mediation and organizing neighbourhood meetings.",
  "Démonstration": "Demo",
  "Dépensé ce mois": "Spent this month",
  "Dépensé en appels": "Spent on calls",
  "Déposée": "Submitted",
  "Développement d'applications, hébergement et infogérance pour les entreprises et les administrations.": "Application development, hosting and managed IT services for companies and public administrations.",
  "Développement logiciel": "Software development",
  "E-mail de l'entreprise": "Company e-mail",
  "E-mail du demandeur": "Applicant's e-mail",
  "E-mail du représentant": "Representative's e-mail",
  "Eau et assainissement": "Water and sanitation",
  "Effacer la recherche": "Clear search",
  "Email": "E-mail",
  "Email invalide": "Invalid e-mail",
  "En choisissant Business, cette ligne ne pourra pas porter de rattachement PRO.": "By choosing Business, this line will not be able to carry a PRO attachment.",
  "En communication": "In call",
  "en créant votre base de contacts": "by building your contact list",
  "en partenariat avec": "in partnership with",
  "En production, cette étape repasse par l'activation CIRPACK.": "In production, this step goes through CIRPACK activation again.",
  "En savoir plus": "Learn more",
  "Enseignement primaire et secondaire": "Primary and secondary education",
  "Enseignement supérieur": "Higher education",
  "Ensuite, les communications sont facturées à l'organisation : plus de recharge.": "After that, communications are billed to the organization: no more top-ups.",
  "Envoi SMS vers tout numéro mobile local": "SMS to any local mobile number",
  "Envoyer la fiche entreprise": "Send the company form",
  "Envoyer ma demande": "Send my request",
  "et basculent sur l'offre Business, où la facturation passe à la société.": "and move to the Business offer, where billing goes to the company.",
  "et l'appel local passera à": "and a local call will cost",
  "euros": "euros",
  "Ex : Cabinet Ekani & Associés": "E.g.: Ekani & Associates",
  "Ex : Couturier, Avocat, Commerçant...": "E.g.: Tailor, Lawyer, Trader...",
  "Ex : Gérant, DAF, DRH": "E.g.: Manager, CFO, HR Director",
  "Expertise comptable et audit": "Accounting and audit",
  "Expertise comptable, conseil fiscal et accompagnement à la création d'entreprise pour les PME et les professions libérales.": "Chartered accounting, tax advice and support with business creation for SMEs and the liberal professions.",
  "Facturation à l'entreprise": "Billing to the company",
  "Facultatif. Affiché sur la fiche de votre entreprise dans l'annuaire ProCom.": "Optional. Shown on your company's listing in the ProCom directory.",
  "Facultatif. Affiché à vos correspondants et dans l'annuaire ProCom.": "Optional. Shown to your contacts and in the ProCom directory.",
  "Facultatif. CNI, passeport ou titre de séjour, utilisés uniquement pour la vérification.": "Optional. National ID card, passport or residence permit, used only for verification.",
  "Facultatif. Registre de commerce ou attestation d'immatriculation.": "Optional. Trade register or certificate of incorporation.",
  "Faire évoluer mon compte": "Upgrade my account",
  "Fermer": "Close",
  "Fiche entreprise": "Company form",
  "Fiche publiée par": "Listing published by",
  "Filature, tissage et confection. Commandes en gros pour uniformes et tenues professionnelles.": "Spinning, weaving and garment making. Bulk orders for uniforms and workwear.",
  "Fixes": "Landline",
  "flottes mobiles": "mobile fleets",
  "fois": "one-off",
  "Fonction": "Position",
  "Football, athlétisme et handball. Inscriptions des jeunes, horaires d'entraînement et location du terrain.": "Football, athletics and handball. Youth registration, training times and pitch rental.",
  "Formation au permis de conduire, code de la route et conduite accompagnée. Inscriptions et plannings de leçons.": "Driving lessons, highway code and supervised driving. Registration and lesson schedules.",
  "Formation professionnelle": "Vocational training",
  "Formations supérieures en génie civil, informatique et gestion. Admissions, scolarité et stages en entreprise.": "Higher education in civil engineering, computer science and management. Admissions, studies and company internships.",
  "Formulaire Mobinawa‑Business": "Mobinawa‑Business form",
  "Formulaire Mobinawa‑PRO": "Mobinawa‑PRO form",
  "Français": "French",
  "Garage et entretien automobile": "Garage and car maintenance",
  "Garde d'enfants et aide à domicile": "Childcare and home help",
  "Gardez de quoi couvrir l'abonnement mensuel de votre numéro : il est prélevé automatiquement sur le crédit du compte en début de mois.": "Keep enough to cover your number's monthly subscription: it is charged automatically from the account credit at the beginning of the month.",
  "Gendarmerie nationale": "National Gendarmerie",
  "Gestion des déchets": "Waste management",
  "Grande distribution": "Supermarkets and hypermarkets",
  "Gratuit": "Free",
  "Gratuit pendant la phase pilote": "Free during the pilot phase",
  "Gratuit · phase pilote": "Free · pilot phase",
  "Glisser vers la droite pour appeler": "Slide to the right to call",
  "Grille": "Price list of",
  "Grille tarifaire": "Price list",
  "Gros œuvre, voirie et réseaux divers. Chantiers publics et privés dans le Littoral et le Centre.": "Structural work, roads and utility networks. Public and private sites in the Littoral and Centre regions.",
  "Groupe de réception d'appel ou borne d'information vocale": "Call reception group or voice information kiosk",
  "Historique": "History",
  "Historique des appels": "Call history",
  "Historique des appels émis, reçus et manqués, coût de chaque appel émis, solde à jour en permanence.": "History of outgoing, received and missed calls, cost of each outgoing call, balance always up to date.",
  "Historique des recharges": "Top-up history",
  "Horoscope": "Horoscope",
  "HT": "excl. tax",
  "Haut-parleur": "Speaker",
  "Hôtel d'affaires à Douala : réservations, salles de réunion, restauration et navette aéroport.": "Business hotel in Douala: bookings, meeting rooms, restaurant and airport shuttle.",
  "Hôtellerie": "Hotels",
  "Hôtellerie, restauration et tourisme": "Hospitality, catering and tourism",
  "Identité Mobinawa vérifiée": "Mobinawa identity verified",
  "Il alimente votre crédit d'appel par transfert et règle l'abonnement mensuel de votre numéro, prélevé automatiquement en début de mois.": "It funds your call credit by transfer and pays your number's monthly subscription, charged automatically at the beginning of the month.",
  "Il précise votre activité sur votre fiche de l'annuaire ProCom.": "It describes your activity on your ProCom directory listing.",
  "Import-export et négoce": "Import-export and trading",
  "Importation de pièces détachées et d'équipements. Suivi des commandes et dédouanement.": "Import of spare parts and equipment. Order tracking and customs clearance.",
  "Incendie, accident, secours aux personnes": "Fire, accident, rescue",
  "Industrie et fabrication": "Industry and manufacturing",
  "Industrie manufacturière": "Manufacturing",
  "Informations sur l'annuaire ProCom": "About the ProCom directory",
  "Installation de panneaux solaires et de systèmes de secours pour particuliers, commerces et dispensaires.": "Installation of solar panels and backup systems for households, shops and clinics.",
  "Instruction des dossiers d'urbanisme, plans d'occupation des sols et conformité des constructions.": "Processing of planning applications, land use plans and building compliance.",
  "International": "International",
  "Interruption programmée dans la nuit du 20 au 21 août": "Scheduled interruption on the night of 20 to 21 August",
  "Inviter": "Invite",
  "jusqu'à votre prochain transfert.": "until your next transfer.",
  "Justice et sécurité": "Justice and security",
  "Justificatif d'entreprise": "Company document",
  "L'accès est sécurisé : votre numéro est déjà reconnu, sans compte à créer ni mot de passe à saisir.": "Access is secure: your number is already recognized, with no account to create and no password to enter.",
  "L'administrateur de votre entreprise vous a retiré du compte. Votre ligne de flotte est revenue à l'entreprise.": "Your company's administrator has removed you from the account. Your fleet line has gone back to the company.",
  "L'annuaire": "The directory",
  "L'annuaire ProCom": "The ProCom directory",
  "L'appel gratuit se passe depuis votre liste de contacts Mobinawa. Ajoutez d'abord l'organisation, en quatre étapes :": "Free calls are made from your Mobinawa contact list. First add the organization, in four steps:",
  "L'appel vers un numéro PRO est gratuit, depuis n'importe quel pays.": "Calls to a PRO number are free, from any country.",
  "L'attribution du numéro PRO reste offerte pendant toute la durée du pilote. Seules les communications sont facturées. La durée du pilote sera précisée en cours de route.": "The PRO number remains free for the whole pilot period. Only communications are charged. The length of the pilot will be specified along the way.",
  "L'authentification passe par le canal que nos clients utilisent déjà chaque jour, avec le SMS en filet de sécurité. Elle est assurée par notre partenaire CIRPACK en amont de l'application.": "Authentication goes through the channel our customers already use every day, with SMS as a safety net. It is provided by our partner CIRPACK upstream of the app.",
  "L'entreprise": "The company",
  "L'inverse n'existe pas": "The reverse is not possible",
  "La configuration du standard, des numéros et des collaborateurs se fait depuis l'espace Manager, sur ordinateur.": "The switchboard, numbers and employees are set up from the Manager area, on a computer.",
  "La grille tarifaire de": "The price list of",
  "La grille tarifaire est disponible dans l'app": "The price list is available in the app",
  "La porte d'entrée vers Mobinawa-PRO": "The gateway to Mobinawa-PRO",
  "La porte d'entrée vers PRO et Business": "The gateway to PRO and Business",
  "La progression va dans un seul sens. Depuis Mobinawa-PRO, vous pourrez migrer vers Mobinawa-Business plus tard, en gardant votre numéro et votre crédit.": "Progress goes one way only. From Mobinawa-PRO, you can migrate to Mobinawa-Business later, keeping your number and your credit.",
  "La suppression ne fait pas redescendre au niveau Mobinawa-Basic : elle efface le compte. Il faut vous réinscrire depuis le début, avec votre numéro de téléphone, pour retrouver un profil Mobinawa-Basic. Vous pourrez ensuite redemander un numéro PRO si vous le souhaitez.": "Deletion does not take you back to the Mobinawa-Basic level: it erases the account. You need to sign up again from the start, with your phone number, to get a Mobinawa-Basic profile back. You can then request a PRO number again if you wish.",
  "Laboratoire d'analyses": "Medical laboratory",
  "Language: English": "Language: English",
  "Langue": "Language",
  "Langue : Français": "Langue : Français",
  "Langue par défaut": "Default language",
  "Le crédit du compte et les recharges arrivent avec votre numéro PRO. En tant que collaborateur d'une entreprise, rien n'est à votre charge : c'est elle qui commande le crédit, depuis l'espace Manager ou par bon de commande auprès de nos équipes commerciales.": "Account credit and top-ups come with your PRO number. As an employee of a company, nothing is charged to you: the company orders the credit, from the Manager area or by purchase order with our sales teams.",
  "Le crédit prépayé se commande depuis l'espace Manager, sur ordinateur, ou par bon de commande adressé à nos équipes commerciales.": "Prepaid credit is ordered from the Manager area, on a computer, or by purchase order sent to our sales teams.",
  "Le demandeur": "The applicant",
  "Le demandeur désigne un Manager, qui pilote le standard, les comptes collaborateurs et l'annuaire de l'entreprise depuis son espace Manager, sur ordinateur.": "The applicant appoints a Manager, who runs the switchboard, the employee accounts and the company directory from their Manager area, on a computer.",
  "Le lien est valable 7 jours et ne peut être utilisé qu'une seule fois.": "The link is valid for 7 days and can only be used once.",
  "Le numéro est gratuit pendant la phase pilote": "The number is free during the pilot phase",
  "Le numéro, un actif géré": "The number, a managed asset",
  "Le représentant": "The representative",
  "Le REPTIC rassemble entreprises et professionnels des télécoms, des TIC et du numérique pour bâtir un écosystème digital souverain et compétitif. Il regroupe opérateurs télécoms, fournisseurs d'infrastructure, éditeurs, prestataires IT, agences digitales, cabinets-conseils et organismes de formation.": "REPTIC brings together companies and professionals in telecoms, ICT and digital to build a sovereign and competitive digital ecosystem. Its members include telecom operators, infrastructure providers, software publishers, IT service providers, digital agencies, consulting firms and training organizations.",
  "Le responsable que vous désignez, le Manager, reçoit par e-mail l'accès à son espace web, sur ordinateur, pour configurer le standard et ajouter les collaborateurs.": "The person you appoint, the Manager, receives by e-mail access to their web area, on a computer, to set up the switchboard and add employees.",
  "Le retour de Business à PRO n'existe pas.": "There is no way back from Business to PRO.",
  "Les abonnements des numéros et des comptes collaborateurs sont facturés à l'entreprise. Les appels et les SMS, eux, sont décomptés du crédit prépayé commandé par l'entreprise, comme sur une ligne PRO. Ce crédit se commande depuis l'espace Manager, ou par bon de commande adressé à nos équipes commerciales.": "Subscriptions for numbers and employee accounts are billed to the company. Calls and SMS are deducted from the prepaid credit ordered by the company, as on a PRO line. This credit is ordered from the Manager area, or by purchase order sent to our sales teams.",
  "Les abonnements des numéros et des comptes sont facturés à l'organisation. Les appels et SMS sont décomptés d'un crédit prépayé commun, que le Manager commande depuis son espace web ou par bon de commande. Vos collaborateurs n'ont jamais à recharger.": "Subscriptions for numbers and accounts are billed to the organization. Calls and SMS are deducted from shared prepaid credit, which the Manager orders from their web area or by purchase order. Your employees never have to top up.",
  "Les appels et messages gratuits entre contacts Mobinawa": "Free calls and messages between Mobinawa contacts",
  "Les appels et messages gratuits se passent depuis votre liste de contacts Mobinawa. Ajoutez d'abord l'organisation, en quatre étapes :": "Free calls and messages go through your Mobinawa contact list. First add the organization, in four steps:",
  "Les communications suivantes sont facturées à l'entreprise, sans recharge.": "Further communications are billed to the company, with no top-ups.",
  "Les frais d'abonnement annuel des numéros PRO et de configuration personnalisée du SVI sont payables à réception de facture.": "Annual subscription fees for PRO numbers and custom IVR configuration are payable upon receipt of invoice.",
  "Les frais d'abonnement mensuel sont facturés trimestriellement, conformément à la fiche de configuration de la solution et à vos besoins évolutifs.": "Monthly subscription fees are billed quarterly, according to the solution's configuration sheet and your changing needs.",
  "Les frais d'appel téléphonique et d'envoi de SMS sont facturés en mode prépayé, sur un crédit commandé d'un montant minimum de 100 000 F HT.": "Phone call and SMS charges are billed on a prepaid basis, from ordered credit of at least 100,000 F excl. tax.",
  "Les numéros d'urgence": "Emergency numbers",
  "Les principes qui tiennent tout": "The principles behind it all",
  "Les recharges créditent le compte, l'abonnement mensuel du numéro en est prélevé en début de mois. Les communications, elles, sont décomptées du crédit d'appel et figurent dans vos appels et dépenses.": "Top-ups credit the account, and the number's monthly subscription is charged from it at the beginning of the month. Communications are deducted from the call credit and appear in your calls and spending.",
  "Liaisons interurbaines quotidiennes. Réservation de places, bagages et affrètement de cars.": "Daily intercity routes. Seat booking, luggage and coach charter.",
  "Logistique et entreposage": "Logistics and warehousing",
  "Logo de l'entreprise": "Company logo",
  "Loisirs et événementiel": "Leisure and events",
  "Ma conso": "My usage",
  "Ma demande": "My request",
  "Ma demande en cours": "My pending request",
  "Maintenance": "Maintenance",
  "Maintenance industrielle": "Industrial maintenance",
  "Manager": "Manager",
  "Manager ·": "Manager ·",
  "Manqués": "Missed",
  "Marketing et publicité": "Marketing and advertising",
  "Matériaux de construction": "Building materials",
  "Me réinscrire": "Sign up again",
  "Membres": "Members",
  "Menu": "Menu",
  "Mes factures": "My invoices",
  "Mes recharges": "My top-ups",
  "Migration effectuée · numéro et crédit conservés": "Migration completed · number and credit kept",
  "Migrer vers Mobinawa-Business": "Migrate to Mobinawa-Business",
  "min d'appels émis ·": "min of outgoing calls ·",
  "min reçus": "min received",
  "Minutes émises par semaine": "Outgoing minutes per week",
  "Mise à jour": "Update",
  "MISE À JOUR": "UPDATE",
  "Mobile Money : Orange Money rejoint les moyens de paiement": "Mobile Money: Orange Money joins the payment methods",
  "Mobiles": "Mobile",
  "Mobinawa est une application de communication pour le": "Mobinawa is a communication app for",
  "Mobinawa-Business est proposé par les opérateurs de couverture locale": "Mobinawa-Business is offered by local coverage operators",
  "Mobinawa-Business équipe une organisation, entreprise, administration ou association, d'un numéro officiel et de comptes professionnels pour ses collaborateurs.": "Mobinawa-Business equips an organization, whether a company, an administration or an association, with an official number and professional accounts for its employees.",
  "mois": "month",
  "Mois d'abonnement offert": "Free month of subscription",
  "Mois dernier": "Last month",
  "Mois offert appliqué · aucun prélèvement": "Free month applied · no charge",
  "Mon compte": "My account",
  "Mon compte Mobinawa": "My Mobinawa account",
  "Mon compte ProCom": "My ProCom account",
  "Mon espace client": "My customer area",
  "Mon espace Manager": "My Manager area",
  "Mon niveau de compte": "My account level",
  "MON NUMÉRO PRO": "MY PRO NUMBER",
  "Montant · minimum": "Amount · minimum",
  "Montant à transférer": "Amount to transfer",
  "Moyen de paiement": "Payment method",
  "Musculation, cours collectifs et coaching individuel. Abonnements, horaires et séances d'essai.": "Weight training, group classes and personal coaching. Memberships, opening hours and trial sessions.",
  "MyApp ouvre le service numérique de l'organisation, votre numéro déjà reconnu.": "MyApp opens the organization's digital service, with your number already recognized.",
  "Média, culture et communication": "Media, culture and communication",
  "Métallurgie et mécanique": "Metalworking and mechanics",
  "Métier / Profession": "Trade / Profession",
  "n'est pas encore publiée dans l'application.": "is not yet published in the app.",
  "ne comporte pas encore d'organisation publiée.": "does not have any published organization yet.",
  "ne fournit pas de numéro local. Votre numéro PRO sera un numéro fixe virtuel d'un pays couvert par le réseau ProCom, joignable localement depuis ce pays.": "does not provide local numbers. Your PRO number will be a virtual landline number from a country covered by the ProCom network, reachable locally from that country.",
  "ne sont pas encore disponibles.": "are not available yet.",
  "Nettoyage à sec, repassage et entretien du linge. Collecte et livraison à domicile sur Douala.": "Dry cleaning, ironing and laundry care. Pick-up and home delivery in Douala.",
  "Nigéria": "Nigeria",
  "Nom": "Last name",
  "Nom du demandeur": "Applicant's last name",
  "Nom du représentant": "Representative's last name",
  "Non facturé": "Not charged",
  "Nos services gratuits": "Our free services",
  "Nos équipes ont supprimé ce compte. Votre numéro et votre historique ne sont plus rattachés à Mobinawa.": "Our team has deleted this account. Your number and your history are no longer linked to Mobinawa.",
  "Nos équipes vérifient l'organisation et le demandeur, sous 2 jours.": "Our team checks the organization and the applicant, within 2 days.",
  "Nos équipes vérifient l'organisation et son représentant, sous 2 jours.": "Our team checks the organization and its representative, within 2 days.",
  "Notifications": "Notifications",
  "Nouveauté": "New feature",
  "NOUVEAUTÉ": "NEW FEATURE",
  "Nouvelle recharge": "New top-up",
  "Numérotation SIP en cours...": "SIP dialing in progress...",
  "Numéro inconnu": "Unknown number",
  "Numéro mobile WhatsApp": "WhatsApp mobile number",
  "Numéro officiel": "Official number",
  "Numéro officiel · standard": "Official number · switchboard",
  "Numéro PRO": "PRO number",
  "Numéro PRO d'appel sur l'appli Mobinawa mobile ou PC": "PRO calling number on the Mobinawa mobile or PC app",
  "Numéro PRO dédié à un collaborateur": "PRO number dedicated to an employee",
  "Numéro PRO dédié à un service spécifique": "PRO number dedicated to a specific department",
  "Numéro PRO officiel": "Official PRO number",
  "Numéro PRO officiel sur le SVI de l'entreprise": "Official PRO number on the company's IVR",
  "numéro professionnel": "professional number",
  "Numéro vérifié à votre inscription. Il identifie votre compte et ne peut pas être modifié ici.": "Number verified at sign-up. It identifies your account and cannot be changed here.",
  "Numéros d'urgence": "Emergency numbers",
  "Numéros entreprise pour la flotte": "Company numbers for the fleet",
  "Numéros les plus appelés": "Most called numbers",
  "Numéros PRO": "PRO numbers",
  "Numéros PRO de l'entreprise": "Company PRO numbers",
  "Négoce de matières premières": "Commodity trading",
  "Offert": "Free",
  "Officine de garde, préparation d'ordonnances et conseil. Vérification de disponibilité par téléphone.": "On-duty pharmacy, prescription preparation and advice. Availability can be checked by phone.",
  "Offre Mobinawa-Business": "Mobinawa-Business offer",
  "ONG et humanitaire": "NGO and humanitarian",
  "Option accueil vocal personnalisé": "Custom voice greeting option",
  "Opérateur ProCom au Cameroun : numéros PRO, Mobinawa-PRO et Mobinawa-Business. Assistance aux usagers et suivi des demandes de souscription.": "ProCom operator in Cameroon: PRO numbers, Mobinawa-PRO and Mobinawa-Business. User support and follow-up of subscription requests.",
  "opération": "transaction",
  "organisation": "organization",
  "Organisation d'obsèques, chambre funéraire et rapatriement de corps. Permanence téléphonique jour et nuit.": "Funeral arrangements, funeral home and repatriation of remains. Phone line open day and night.",
  "Organisation professionnelle": "Professional organization",
  "Ou": "Or",
  "Outillage, plomberie, électricité et matériaux. Devis et préparation de commande pour les artisans.": "Tools, plumbing, electrical supplies and materials. Quotes and order preparation for tradespeople.",
  "Ouvrir l'onglet": "Go to",
  "Pas de recharge pour les collaborateurs : les abonnements sont facturés à l'entreprise, et les appels décomptés du crédit prépayé qu'elle a commandé. Le Manager commande ce crédit depuis son espace Manager, ou par bon de commande adressé à nos équipes commerciales, et y suit la consommation.": "No top-ups for employees: subscriptions are billed to the company, and calls are deducted from the prepaid credit it has ordered. The Manager orders this credit from their Manager area, or by purchase order sent to our sales teams, and tracks usage there.",
  "Passer à Mobinawa-Business": "Switch to Mobinawa-Business",
  "Payer": "Pay",
  "Pays du numéro PRO": "Country of the PRO number",
  "Pharmacies de garde": "On-duty pharmacies",
  "Phase pilote : le numéro reste gratuit": "Pilot phase: the number stays free",
  "Pièce d'identité": "ID document",
  "Police secours": "Police emergency",
  "Pompes funèbres": "Funeral services",
  "Possible dès maintenant, sans passer par Mobinawa-PRO": "Available now, without going through Mobinawa-PRO",
  "Pour communiquer gratuitement avec": "To communicate for free with",
  "Pour revenir sur Mobinawa": "To come back to Mobinawa",
  "Pour une organisation et ses collaborateurs": "For an organization and its employees",
  "pour être joint sous votre identité de professionnel.": "to be reached under your professional identity.",
  "Prendre une photo ou choisir un fichier": "Take a photo or choose a file",
  "Presse et édition": "Press and publishing",
  "PRO et Business": "PRO and Business",
  "PRO et Business sont activés après revue humaine de chaque dossier. C'est notre contrôle qualité et notre première barrière anti-fraude.": "PRO and Business are activated after a human review of each file. It is our quality check and our first anti-fraud barrier.",
  "PRO. Votre crédit de compte étant insuffisant, il affiche désormais": "PRO. As your account credit was insufficient, it now shows",
  "Production agricole": "Agricultural production",
  "Production audiovisuelle": "Audiovisual production",
  "Production et distribution d'énergie": "Energy production and distribution",
  "Production et distribution de boissons sur l'ensemble du territoire. Service commercial, réseau de dépositaires et service après-vente.": "Production and distribution of beverages nationwide. Sales department, dealer network and after-sales service.",
  "Professionnels de la diaspora": "Diaspora professionals",
  "Professionnels locaux": "Local professionals",
  "Promotion de logements, location et gestion locative. Visites sur rendez-vous et états des lieux.": "Housing development, rental and property management. Viewings by appointment and inventory checks.",
  "Promotion et gestion immobilière": "Property development and management",
  "Prototype Mobinawa": "Mobinawa prototype",
  "Prénom": "First name",
  "Prénom du demandeur": "Applicant's first name",
  "Prénom du représentant": "Representative's first name",
  "Publication dans l'annuaire ProCom": "Listing in the ProCom directory",
  "qu'un mois d'abonnement gratuit. Un e-mail vous a été adressé avec le lien d'accès à votre": "as well as one free month of subscription. An e-mail has been sent to you with the access link to your",
  "Qui paie quoi": "Who pays for what",
  "Raccrocher": "Hang up",
  "Radio et télévision": "Radio and television",
  "Raison sociale": "Company name",
  "Recharge directement dans l'app, quand vous voulez": "Top up directly in the app, whenever you want",
  "Recharger": "Top up",
  "Recharger mon crédit": "Top up my credit",
  "Recharges": "Top-ups",
  "Rechercher": "Search",
  "Rechercher une catégorie": "Search for a category",
  "Rechercher une organisation ou votre interlocuteur": "Search for an organization or the person you want to reach",
  "Registre de commerce ou attestation d'immatriculation.": "Trade register or certificate of incorporation.",
  "Reporting et crédit d'appel sur l'appli mobile": "Reporting and call credit on the mobile app",
  "Reporting et crédit d'appel sur l'appli mobile Mobinawa du collaborateur": "Reporting and call credit on the employee's Mobinawa mobile app",
  "Ressources humaines et recrutement": "Human resources and recruitment",
  "Retirer ce filtre": "Remove this filter",
  "Retirer ma demande": "Withdraw my request",
  "Retour": "Back",
  "Retour à l'accueil": "Back to home",
  "Retour à l'accueil Mobinawa": "Back to Mobinawa home",
  "Revenez à l'écran précédent pour choisir le pays de votre numéro.": "Go back to the previous screen to choose your number's country.",
  "Reçus": "Received",
  "Rien dans cette catégorie pour l'instant.": "Nothing in this category yet.",
  "Réception d'appels : gratuite, où que vous soyez": "Receiving calls: free, wherever you are",
  "Réception SMS sur l'appli mobile": "SMS reception on the mobile app",
  "Réception SMS sur l'appli mobile Mobinawa": "SMS reception on the Mobinawa mobile app",
  "Réf.": "Ref.",
  "Répartition par destination": "Breakdown by destination",
  "Réponse de nos équipes sous 2 jours.": "Answer from our team within 2 days.",
  "Réservé au responsable de l'organisation. Après validation, vous devenez": "Reserved for the organization's head. Once approved, you become",
  "Résultats sportifs": "Sports results",
  "s'ajoutera à ce découvert.": "will be added to this overdraft.",
  "Saisissez un montant": "Enter an amount",
  "sans exposer votre numéro": "without revealing your number",
  "Santé et action sociale": "Health and social services",
  "Sapeurs-pompiers": "Fire brigade",
  "Se déconnecter": "Log out",
  "Secteur d'activité": "Business sector",
  "Selon le solde du crédit d'appel après transfert": "Depending on the call credit balance after transfer",
  "Sem.": "Wk",
  "Serveur vocal interactif": "Interactive voice response",
  "Service commercial": "Sales department",
  "Service déconcentré": "Decentralized service",
  "Services aux particuliers": "Personal services",
  "Services en ligne": "Online services",
  "Services gratuits & pratiques": "Free & practical services",
  "Services informatiques et infogérance": "IT services and managed services",
  "Seules les organisations disposant d'un numéro PRO officiel y sont publiées. La publication est comprise dans l'offre Mobinawa-Business ; un numéro Mobinawa-PRO individuel n'y figure pas.": "Only organizations with an official PRO number are listed. Listing is included in the Mobinawa-Business offer; an individual Mobinawa-PRO number is not listed.",
  "Si vous passez de Mobinawa-PRO à Business": "If you move from Mobinawa-PRO to Business",
  "Simuler la suppression par l'opérateur": "Simulate deletion by the operator",
  "Simuler la validation par nos équipes": "Simulate approval by our team",
  "Simuler le prélèvement automatique de l'abonnement mensuel de votre numéro (": "Simulate the automatic charge of your number's monthly subscription (",
  "Simuler le prélèvement du mois": "Simulate this month's charge",
  "Simuler une session ouverte chez l'un ou l'autre opérateur. Le numéro change, et avec lui les offres accessibles et la devise. Le compte en cours est remis à zéro.": "Simulate a session opened with one operator or the other. The number changes, and with it the available offers and currency. The current account is reset.",
  "Site web de l'entreprise": "Company website",
  "Soit environ": "That is about",
  "solde": "balance",
  "Sous-secteur d'activité": "Business sub-sector",
  "Souscrire un compte ProCom": "Subscribe to a ProCom account",
  "Souscrire à Mobinawa-Business": "Subscribe to Mobinawa-Business",
  "Souscrire à Mobinawa-PRO": "Subscribe to Mobinawa-PRO",
  "Soutien scolaire et cours particuliers": "Tutoring and private lessons",
  "Sport et bien-être": "Sport and wellness",
  "Station généraliste : information, débats et musique. Régie publicitaire et annonces d'intérêt public.": "General-interest station: news, debates and music. Advertising sales and public service announcements.",
  "Stratégie de marque, production de contenus et achat d'espace. Accompagnement des PME et des institutions.": "Brand strategy, content production and media buying. Support for SMEs and institutions.",
  "Suivi de consommation et d'activité": "Usage and activity tracking",
  "Suivi de votre consommation et de votre activité": "Tracking of your usage and activity",
  "Suivi des travaux": "Roadworks tracking",
  "Sélectionner puis cliquer sur": "Select, then tap",
  "Sélectionnez…": "Select…",
  "Taper le nom d'une entreprise": "Type a company name",
  "Technologies et numérique": "Technology and digital",
  "Textile et habillement": "Textiles and clothing",
  "Total rechargé ·": "Total topped up ·",
  "Toucher le numéro pour un appel au tarif de votre opérateur mobile": "Tap the number to call at your mobile operator's rate",
  "Touchez le numéro pour l'appeler par le réseau mobile : l'appel est facturé par votre opérateur. Pour appeler ou écrire gratuitement, utilisez « Communiquer gratuitement ».": "Tap the number to call it over the mobile network: the call is charged by your operator. To call or message for free, use “Communicate for free”.",
  "Touchez le numéro pour l'appeler par le réseau mobile : l'appel est facturé par votre opérateur. Pour un appel gratuit, utilisez « Appeler gratuitement ».": "Tap the number to call it over the mobile network: the call is charged by your operator. For a free call, use “Call for free”.",
  "Touchez un numéro pour l'appeler directement. En cas de danger immédiat, appelez sans attendre.": "Tap a number to call it directly. In case of immediate danger, call without waiting.",
  "Tous les numéros": "All numbers",
  "Tous les sous-secteurs": "All sub-sectors",
  "Tout": "All",
  "Toutes les catégories": "All categories",
  "Transfert d'argent et paiement": "Money transfer and payment",
  "Transformation alimentaire": "Food processing",
  "Transférer": "Transfer",
  "Transférer vers mon crédit d'appel": "Transfer to my call credit",
  "Transit et dédouanement": "Freight forwarding and customs clearance",
  "Transport de marchandises": "Freight transport",
  "Transport de marchandises, entreposage et dédouanement. Suivi des expéditions entre Douala, Yaoundé et les pays de la CEMAC.": "Freight transport, warehousing and customs clearance. Shipment tracking between Douala, Yaoundé and CEMAC countries.",
  "Transport de personnes": "Passenger transport",
  "Transport et logistique": "Transport and logistics",
  "Travailler ensemble": "Working together",
  "TTC": "incl. tax",
  "Télécommunications": "Telecommunications",
  "un compte entreprise sans passer par Mobinawa-PRO.": "a business account without going through Mobinawa-PRO.",
  "Un compte pour chaque collaborateur": "An account for each employee",
  "Un crédit de bienvenue est offert à l'activation. Une fois épuisé, vous rechargez dans l'app. Sans crédit, pas d'appel sortant : le compte reste actif et vos appels entrants arrivent toujours.": "A welcome credit is offered on activation. Once used up, you top up in the app. Without credit, no outgoing calls: the account stays active and incoming calls still come through.",
  "Un formulaire court. Votre dossier est ensuite revu par nos équipes, puis votre numéro professionnel vous est attribué.": "A short form. Your file is then reviewed by our team, and your professional number is assigned to you.",
  "Un indépendant, un commerçant": "A freelancer, a trader",
  "Un numéro officiel avec standard téléphonique, et des numéros dédiés à vos services ou collaborateurs": "An official number with a phone switchboard, and numbers dedicated to your departments or employees",
  "Un numéro officiel pour votre organisation": "An official number for your organization",
  "Un numéro professionnel dédié": "A dedicated professional number",
  "Une entreprise équipe et administre son équipe. Pensé d'abord pour les": "A company equips and manages its team. Designed first for",
  "une fois": "one-off",
  "Une fois l'invitation acceptée,": "Once the invitation is accepted,",
  "Une fois l'invitation acceptée, le contact apparaît dans vos": "Once the invitation is accepted, the contact appears in your",
  "Une identité Mobinawa vérifiée par votre numéro": "A Mobinawa identity verified by your number",
  "Une intervention technique est prévue entre 01h00 et 03h00. Les appels et messages pourront être perturbés pendant cette fenêtre.": "Technical work is planned between 01:00 and 03:00. Calls and messages may be disrupted during this window.",
  "Une revue humaine": "A human review",
  "Urgence médicale, transport sanitaire": "Medical emergency, ambulance transport",
  "Urgences sécuritaires, notamment hors des villes": "Security emergencies, especially outside cities",
  "Validation par nos équipes": "Approval by our team",
  "Version 2.3 : historique des recharges": "Version 2.3: top-up history",
  "Voir la fiche": "View listing",
  "Voir la grille tarifaire": "See the price list",
  "Voir tout l'historique (": "See full history (",
  "Vos clients vous trouvent dans l'annuaire de l'application et vous appellent gratuitement.": "Your customers find you in the app's directory and call you for free.",
  "Vos collaborateurs activent leur compte et communiquent.": "Your employees activate their account and start communicating.",
  "Votre activité devient une entreprise et vous équipez une équipe. Vous gardez votre numéro et le crédit qui reste dessus. Le changement est définitif : on ne revient pas de Business à PRO.": "Your activity becomes a company and you equip a team. You keep your number and the credit left on it. The change is final: there is no going back from Business to PRO.",
  "Votre compte": "Your",
  "Votre compte a été supprimé": "Your account has been deleted",
  "Votre compte est déjà passé sur Mobinawa-Business. Une ligne porte un seul rattachement : pour ouvrir un numéro PRO, il vous faut une seconde ligne mobile.": "Your account has already moved to Mobinawa-Business. A line carries only one attachment: to open a PRO number, you need a second mobile line.",
  "Votre compte est passé sur Mobinawa-Business : le crédit restant est consommé, puis le relais est pris par le crédit prépayé de l'entreprise. Plus aucune recharge n'est nécessaire.": "Your account has moved to Mobinawa-Business: the remaining credit is used first, then the company's prepaid credit takes over. No more top-ups are needed.",
  "Votre compte est à découvert : l'abonnement mensuel a été prélevé malgré un crédit insuffisant. Rechargez pour régulariser, le prélèvement du mois prochain s'y ajoutera.": "Your account is overdrawn: the monthly subscription was charged despite insufficient credit. Top up to settle it; next month's charge will be added.",
  "Votre compte reste actif et votre numéro vous appartient toujours. Vous recevez vos appels ; les appels sortants reprennent dès qu'un transfert alimente votre crédit d'appel.": "Your account stays active and your number still belongs to you. You receive your calls; outgoing calls resume as soon as a transfer funds your call credit.",
  "Votre crédit de compte est à découvert": "Your account credit is overdrawn",
  "Votre crédit de compte est épuisé. Rechargez-le par carte Visa avant de transférer.": "Your account credit is used up. Top it up by Visa card before transferring.",
  "Votre crédit restant est conservé et utilisé en premier.": "Your remaining credit is kept and used first.",
  "Votre crédit restant suit le numéro : il est consommé avant toute facturation.": "Your remaining credit follows the number: it is used before any billing.",
  "Votre demande a été validée et le numéro +237 233 47 12 08 vous est attribué.": "Your request has been approved and the number +237 233 47 12 08 is assigned to you.",
  "Votre demande a été validée et votre instance est déployée. Le Manager de l'instance a reçu un e-mail contenant le lien d'accès à son compte web depuis un PC, et chaque collaborateur identifié par une adresse e-mail a reçu le sien. Les collaborateurs identifiés par un numéro mobile activent leur compte depuis l'application avec le code OTP reçu par WhatsApp ou SMS.": "Your request has been approved and your instance is deployed. The instance Manager has received an e-mail with the access link to their web account from a PC, and each employee identified by an e-mail address has received theirs. Employees identified by a mobile number activate their account from the app with the OTP code received by WhatsApp or SMS.",
  "Votre demande a été validée. Votre numéro PRO devient le numéro officiel de votre organisation et votre crédit est conservé. Le Manager de l'instance a reçu un e-mail contenant le lien d'accès à son compte web depuis un PC.": "Your request has been approved. Your PRO number becomes your organization's official number and your credit is kept. The instance Manager has received an e-mail with the access link to their web account from a PC.",
  "Votre dossier est examiné par un membre de nos équipes avant l'attribution du numéro. Réponse sous 2 jours.": "Your file is reviewed by a member of our team before the number is assigned. Answer within 2 days.",
  "Votre mois d'abonnement offert a été appliqué": "Your free month of subscription has been applied",
  "Votre mois offert couvrira ce premier prélèvement.": "Your free month will cover this first charge.",
  "Votre numéro Mobinawa-PRO est actif": "Your Mobinawa-PRO number is active",
  "Votre numéro PRO devient votre identité professionnelle. Vos interlocuteurs ne voient jamais votre numéro mobile personnel. Gratuit pendant la phase pilote.": "Your PRO number becomes your professional identity. The people you talk to never see your personal mobile number. Free during the pilot phase.",
  "Votre numéro PRO est conservé et bascule sur l'offre Business.": "Your PRO number is kept and moves to the Business offer.",
  "Votre organisation dans l'annuaire ProCom": "Your organization in the ProCom directory",
  "Votre organisation dans l'annuaire ProCom, où l'on vous appelle gratuitement. Réservé à Business : un numéro PRO individuel n'y figure pas": "Your organization in the ProCom directory, where people call you for free. Business only: an individual PRO number is not listed",
  "Votre organisation est joignable sur un numéro PRO officiel, avec un standard téléphonique qui oriente les appels. Vous pouvez ajouter des numéros dédiés à un service ou à un collaborateur.": "Your organization can be reached on an official PRO number, with a phone switchboard that routes calls. You can add numbers dedicated to a department or an employee.",
  "Votre solution Mobinawa-Business est déployée": "Your Mobinawa-Business solution is deployed",
  "Vous gardez votre numéro PRO : il devient le numéro de votre organisation.": "You keep your PRO number: it becomes your organization's number.",
  "vous identifie en tant que consommateur et vous permet de communiquer gratuitement avec vos contacts Mobinawa,": "account identifies you as a consumer and lets you communicate for free with your Mobinawa contacts,",
  "Vous migrez depuis Mobinawa-PRO. Votre numéro et votre crédit restant sont": "You are migrating from Mobinawa-PRO. Your number and remaining credit are",
  "Vous ne pouvez pas transférer plus que votre crédit de compte.": "You cannot transfer more than your account credit.",
  "Vous pouvez aussi composer directement le": "You can also dial",
  "Vous pouvez maintenant recharger votre crédit PRO par Orange Money, en plus de MTN Mobile Money et de la carte bancaire.": "You can now top up your PRO credit with Orange Money, in addition to MTN Mobile Money and bank card.",
  "Vous remplissez la fiche entreprise depuis l'application.": "You fill in the company form from the app.",
  "Vous êtes au niveau Mobinawa-Basic. Deux chemins s'ouvrent : prendre un numéro professionnel, ou ouvrir": "You are at the Mobinawa-Basic level. Two paths are open: get a professional number, or open",
  "Vous êtes au niveau Mobinawa-Basic. Vous pouvez prendre un": "You are at the Mobinawa-Basic level. You can get a",
  "vous@exemple.com": "you@example.com",
  "Vue collaborateur": "Employee view",
  "Vue Manager": "Manager view",
  "WhatsApp comme clé": "WhatsApp as the key",
  "www.entreprise.cm": "www.company.cm",
  "· appels gratuits depuis tout téléphone": "· free calls from any phone",
  "· crédit du compte": "· account credit",
  "à": "to",
  "à l'instant": "just now",
  "À partir de 50 000 F": "From 50,000 F",
  "À propos de Mobinawa": "About Mobinawa",
  "Éducation et formation": "Education and training",
  "Élevage de volailles et production d'œufs. Vente en gros aux revendeurs et livraison sur Yaoundé et sa périphérie.": "Poultry farming and egg production. Wholesale to retailers and delivery to Yaoundé and its outskirts.",
  "Élevage et pêche": "Livestock and fishing",
  "Émis": "Outgoing",
  "Énergie et environnement": "Energy and environment",
  "Énergies renouvelables": "Renewable energy",
  "Épargne, microcrédit et transfert d'argent. Agences à Douala, Bafoussam et Limbé.": "Savings, microcredit and money transfer. Branches in Douala, Bafoussam and Limbé.",
  "Établissement public": "Public institution",
  "Établissement secondaire bilingue. Inscriptions, scolarité et relations avec les familles.": "Bilingual secondary school. Enrolment, school life and relations with families.",
  "État civil, actes de naissance et de mariage, permis de bâtir et taxes communales. Accueil du public et prise de rendez-vous.": "Civil registry, birth and marriage certificates, building permits and municipal taxes. Public reception and appointments."
};

/* Textes contenant une valeur variable : {} marque chaque valeur, qui est
   elle-même traduite si elle figure au dictionnaire. */
const PATRONS_EN = [
  ["Votre demande a été validée et le numéro +237 233 47 12 08 vous est attribué. {} de crédit d'appel vous sont offerts, ainsi qu'un mois d'abonnement gratuit. Un e-mail vous a été adressé avec le lien d'accès à votre compte web depuis un PC.", "Your request has been approved and the number +237 233 47 12 08 is assigned to you. {} of call credit are offered to you, as well as one free month of subscription. An e-mail has been sent to you with the access link to your web account from a PC."],
  ["Aucun prélèvement ce mois-ci : votre premier mois d'abonnement est offert. Le prochain prélèvement de {} interviendra au début du mois suivant.", "No charge this month: your first month of subscription is free. The next charge of {} will take place at the beginning of next month."],
  ["{} ont été prélevés au titre de l'abonnement mensuel de votre numéro PRO. Votre crédit de compte étant insuffisant, il affiche désormais {}. Rechargez-le pour le régulariser : le prélèvement du mois prochain s'ajoutera à ce découvert.", "{} have been charged for your PRO number's monthly subscription. As your account credit was insufficient, it now shows {}. Top it up to settle it: next month's charge will be added to this overdraft."],
  ["{} ont été prélevés sur le crédit de votre compte au titre de l'abonnement mensuel de votre numéro PRO. Il vous reste {}.", "{} have been charged to your account credit for your PRO number's monthly subscription. You have {} left."],
  ["Votre demande de souscription à {} a bien été enregistrée. {} Si vous ne recevez pas cet e-mail{}, contactez-nous directement depuis votre application Mobinawa en recherchant « {} »{}.{}", "Your subscription request for {} has been registered. {} If you do not receive this e-mail{}, contact us directly from your Mobinawa app by searching for “{}”{}.{}"],
  ["Si vous ne recevez pas cet e-mail{}, contactez-nous directement depuis votre application Mobinawa en recherchant « {} »{}.{}", "If you do not receive this e-mail{}, contact us directly from your Mobinawa app by searching for “{}”{}.{}"],
  ["Notifications · {} non lues", "Notifications · {} unread"],
  ["Si vous ne recevez pas cet e-mail{}, contactez-nous directement depuis", "If you do not receive this e-mail{}, contact us directly from"],
  ["votre application Mobinawa en recherchant « {} »", "your Mobinawa app by searching for “{}”"],
  ["Votre demande de souscription à {} a bien été enregistrée.", "Your subscription request for {} has been registered."],
  ["Demande {} enregistrée", "{} request registered"],
  ["{} de crédit d'appel vous sont offerts, ainsi", "{} of call credit are offered to you,"],
  ["Numéro PRO attribué · {} d'appel et un mois offerts", "PRO number assigned · {} of calls and one month free"],
  ["Session {}", "Session {}"],
  ["Recharge de {} effectuée", "Top-up of {} completed"],
  ["prélèvement de {} interviendra au début du mois suivant.", "charge of {} will take place at the beginning of next month."],
  ["{} ont été prélevés au titre de l'abonnement mensuel de votre numéro", "{} have been charged for your number's monthly subscription"],
  ["{}. Rechargez-le pour le régulariser : le prélèvement du mois prochain", "{}. Top it up to settle it: next month's charge"],
  ["Abonnement prélevé · compte à {}", "Subscription charged · account at {}"],
  ["{} ont été prélevés sur le crédit de votre compte au titre de", "{} have been charged to your account credit for"],
  ["l'abonnement mensuel de votre numéro PRO. Il vous reste {}.", "your PRO number's monthly subscription. You have {} left."],
  ["Abonnement de {} prélevé", "Subscription of {} charged"],
  ["{} transférés vers votre crédit d'appel", "{} transferred to your call credit"],
  ["· {} non lues", "· {} unread"],
  ["Je suis un professionnel et j'ai besoin d'un numéro PRO {}", "I am a professional and I need a PRO number {}"],
  ["Je représente une entreprise {}", "I represent a company {}"],
  ["Transférer {}", "Transfer {}"],
  ["Demander un numéro PRO {}", "Request a PRO number {}"],
  ["jusqu'à {} {}", "up to {} {}"],
  ["de {} à {} {}", "from {} to {} {}"],
  ["à partir de {} {}", "from {} {}"],
  ["Aujourd'hui, {}", "Today, {}"],
  ["Hier, {}", "Yesterday, {}"],
  ["Avant-hier, {}", "2 days ago, {}"]
].map(([fr, en]) => ({
  re: new RegExp("^" + fr.split("{}").map((x) => x.replace(/[.*+?^$()|[\]\\]/g, "\\$&")).join("(.*?)") + "$"),
  en,
}));

const manquants = typeof window !== "undefined" ? (window.__mobinawaManquants = window.__mobinawaManquants || new Set()) : new Set();

/* Textes déjà en anglais (un texte peut passer deux fois par tr quand il
   transite par un composant) et textes qui ne se traduisent pas : noms
   propres, marques, montants, références. */
const DEJA_ANGLAIS = new Set(Object.values(TRADUCTIONS_EN));
let nomsPropres = null;
function estInvariable(cle) {
  if (DEJA_ANGLAIS.has(cle)) return true;
  if (/^[-+]?[\d\s.,]+\s*(FCFA|F|€|%|min)?$/.test(cle)) return true; // montants, durées
  if (/^\d+ min( \d+)?$/.test(cle) || /^v\d+$/.test(cle)) return true;
  if (/^[A-Z0-9][A-Z0-9\s\-·+./]*$/.test(cle) && !/[À-ÿ]/.test(cle)) return true; // sigles, références
  if (cle.length < 2) return true; // terminaisons comme le « s » du pluriel
  if (/^\S+@\S+\.\S+$/.test(cle)) return true; // adresses e-mail (v114)
  if (/^(https?:\/\/|www\.)\S+$/.test(cle)) return true; // adresses de sites (v116)
  if (/^[A-ZÀ-Ý]{2,3}$/.test(cle)) return true; // initiales accentuées des logos (v100)
  if (/^(Mobinawa|MyApp|ProCom|GTS|CIRPACK|SIPPY|WhatsApp|Visa|Koffi|Basic|Business|min$)/.test(cle)) return true;
  if (!nomsPropres)
    nomsPropres = new Set([
      ...Object.values(ANNUAIRE_PROCOM).flat().map((o) => o.nom),
      ...MANAGER_DEMO.appels.map((a) => a.collaborateur), // collaborateurs de démonstration (v131)
      "Cabinet Ekani & Associés",
    ]);
  return nomsPropres.has(cle);
}

function tr(texte) {
  if (langueUI !== "en" || typeof texte !== "string") return texte;
  const cle = texte.replace(/\s+/g, " ").trim();
  if (!cle || !/[A-Za-zÀ-ÿ]/.test(cle)) return texte;
  const debut = texte.match(/^\s*/)[0];
  const fin = texte.match(/\s*$/)[0];
  if (TRADUCTIONS_EN[cle] !== undefined) return debut + TRADUCTIONS_EN[cle] + fin;
  for (const p of PATRONS_EN) {
    const m = cle.match(p.re);
    if (m) {
      let k = 1;
      const resultat = p.en.replace(/\{\}/g, () => tr(m[k++] || ""));
      DEJA_ANGLAIS.add(resultat.replace(/\s+/g, " ").trim());
      return debut + resultat + fin;
    }
  }
  /* Liste de libellés séparés par des virgules (champs manquants…) */
  if (cle.includes(", ")) {
    const morceaux = cle.split(", ");
    if (morceaux.every((x) => TRADUCTIONS_EN[x] !== undefined || estInvariable(x))) {
      return debut + morceaux.map((x) => TRADUCTIONS_EN[x] || x).join(", ") + fin;
    }
  }
  if (!estInvariable(cle)) manquants.add(cle);
  return texte;
}

/* Filet de sécurité (v98) : certains aperçus compilent le fichier sans
   tenir compte de la directive de compilation placée en tête ; creerElement n'est
   alors jamais appelé. En anglais, un observateur traduit donc aussi les
   textes directement dans la page, à chaque changement d'affichage. */
const BALISES_IGNOREES = new Set(["STYLE", "SCRIPT", "TEXTAREA"]);
function traduirePage(racine) {
  if (langueUI !== "en" || !racine) return;
  const parcours = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = parcours.nextNode())) {
    if (n.parentNode && BALISES_IGNOREES.has(n.parentNode.nodeName)) continue;
    const v = n.nodeValue;
    const t = tr(v);
    if (t !== v) n.nodeValue = t;
  }
  racine.querySelectorAll("[placeholder],[aria-label],[title],[alt]").forEach((el) => {
    for (const a of ATTRIBUTS_TRADUITS) {
      const v = el.getAttribute(a);
      if (v) {
        const t = tr(v);
        if (t !== v) el.setAttribute(a, t);
      }
    }
  });
}

function trEnfant(c) {
  if (typeof c === "string") return tr(c);
  if (Array.isArray(c)) return c.map(trEnfant);
  return c;
}

const ATTRIBUTS_TRADUITS = ["placeholder", "aria-label", "title", "alt"];

function creerElement(type, props, ...enfants) {
  if (langueUI === "en" && type !== "style") {
    enfants = enfants.map(trEnfant);
    if (props && typeof type === "string") {
      for (const a of ATTRIBUTS_TRADUITS) {
        if (typeof props[a] === "string") props = { ...props, [a]: tr(props[a]) };
      }
    }
  }
  return React.createElement(type, props, ...enfants);
}


/* ==================================================================== */
/*  MOBINAWA : Application mobile (PWA)                                  */
/*  v2.3, alignée sur le document « Parcours clients v0.1 »             */
/*                                                                       */
/*  Règles produit appliquées dans ce fichier :                          */
/*   1. Entrée commune : gérée en amont par CIRPACK (numéro = identité,  */
/*      OTP par WhatsApp ou SMS). L'app démarre sur un compte déjà  */
/*      activé : voir SESSION_CIRPACK.                                   */
/*   2. Tout le monde démarre Mobinawa-Basic, puis fait évoluer son      */
/*      compte vers PRO, puis éventuellement vers Business.              */
/*      PRO OU Business. Les deux ne se cumulent jamais sur une même     */
/*      ligne mobile.                                                    */
/*   3. PRO et Business sont activés après validation humaine            */
/*      (sous 2 jours), état « en attente » explicite dans l'app.        */
/*   4. Le numéro est gratuit en phase pilote, les communications sont   */
/*      payantes : PRO = crédit prépayé, Business = facturé à            */
/*      l'entreprise par les équipes Mobinawa.                           */
/*   5. La progression va dans un seul sens : Basic vers PRO, puis PRO   */
/*      vers Business. Il n'existe pas de retour de Business à PRO.      */
/*   6. Un compte PRO ou Business supprimé ne redescend pas au niveau    */
/*      Basic : il faut se réinscrire depuis le début.                   */
/*      entreprise active par défaut.                                    */
/* ==================================================================== */

/* ------------------------------------------------------------------ */
/*  DESIGN TOKENS                                                      */
/* ------------------------------------------------------------------ */
const C = {
  /* v49 : la couleur principale passe du bleu au vert du logo Mobinawa
     (#3D752F, relevé sur le logo officiel). Les noms des clés « blue* »
     sont conservés pour ne pas toucher aux ~140 usages dans le fichier :
     ils désignent désormais la couleur de marque, verte. L'orange du logo
     reste l'accent d'action et de PRO. */
  blue: "#3D752F",       // couleur de marque : vert du logo (en-têtes, boutons principaux)
  blueDark: "#1F3D19",   // vert profond : tuiles d'icônes, accent Business
  blueLight: "#5A9447",  // vert clair : icônes et liens secondaires
  blueSoft: "#EDF5E9",   // fond des cartes sélectionnées et cartes d'information
  orange: "#E85D04",     // primary CTA orange (from live app), accent PRO
  orangeSoft: "#FDEAE0",
  green: "#2FA36B",      // status/semantic use only (online, success)
  greenSoft: "#E7F5EE",
  bg: "#F2F5F0",         // neutres légèrement teintés de vert (étaient bleutés)
  card: "#FFFFFF",
  cardSoft: "#F9FBF8",
  text: "#18221A",
  muted: "#5F7262",
  border: "#E2E9DF",
  soonBg: "#EEF1F5",
  soonText: "#8A93A0",
  alertBg: "#FFF5F5",
  alertText: "#C0392B",
  alertBorder: "#F7D6D6",
  waitBg: "#FFF8EA",     // « en attente de validation » (contrôle humain)
  waitText: "#B26A00",
  waitBorder: "#F3DFB6",
};

/* Official Mobinawa logo, embedded as a data URI so the artifact has no
   external file dependency. Tap it anywhere in the app to return home. */
const LOGO_SRC =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArcAAAKICAYAAABqsdIPAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYTFjZDEyZjQxLCAyMDI0LzExLzA4LTE2OjA5OjIwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjYuNCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjUtMDUtMTRUMTI6MDg6NTIrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTA1LTE0VDEyOjEwOjQxKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI1LTA1LTE0VDEyOjEwOjQxKzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiM2NhMzE3OC04NDBhLTQ2MTMtYTRhZS1lOWU2ODUzMDk4YzUiIHhtcE1NOkRvY3VtZW50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";

const FONT_HEAD = "'Plus Jakarta Sans', 'Segoe UI', sans-serif";
const FONT_BODY = "'Inter', 'Segoe UI', sans-serif";

function fcfa(n) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

/* Montant exprimé dans la devise de l'opérateur de l'utilisateur. */
function somme(n, operateur) {
  const suffixe = operateur && operateur.devise === "EUR" ? " €" : " FCFA";
  return (n || 0).toLocaleString("fr-FR") + suffixe;
}

/* Session ouverte par la plateforme CIRPACK.
   L'entrée commune (saisie du numéro, OTP délivré par WhatsApp ou SMS selon le numéro) est
   gérée en amont par notre partenaire : l'app reçoit un compte déjà activé et
   une identité vérifiée. Remplacer cet objet par la session réelle au câblage. */
/* Version du prototype, alignée sur le nom du fichier livré. */
const VERSION_PROTO = "v131";

const SESSION_CIRPACK = {
  msisdn: "+237 6 55 12 34 78",
  paysCode: "CM",
  nom: "Koffi Mensah",
  verifieLe: "12/08/2026",
};



/* ------------------------------------------------------------------ */
/*  MOCK DATA                                                          */
/* ------------------------------------------------------------------ */
/* Historique des appels téléphoniques passés et reçus sur le numéro PRO.
   Les appels et messages entre comptes Mobinawa n'y figurent pas : ils sont
   gratuits, illimités, et ne relèvent pas de la téléphonie facturée. */
const HISTORIQUE_APPELS = [
  { id: 1, name: "+237 6 99 04 11 27", direction: "sortant", date: "Aujourd'hui, 08:55", duration: "3 min 40", cost: 160 },
  { id: 2, name: "+237 6 55 90 12 04", direction: "entrant", date: "Aujourd'hui, 08:12", duration: "5 min 21", cost: 0 },
  { id: 3, name: "Numéro inconnu", direction: "manqué", date: "Hier, 19:05", duration: "0 min", cost: 0 },
  { id: 4, name: "+237 2 33 42 18 05", direction: "sortant", date: "Hier, 11:36", duration: "1 min 12", cost: 80 },
  { id: 5, name: "+237 6 78 22 90 41", direction: "sortant", date: "Hier, 09:20", duration: "4 min 10", cost: 200 },
  { id: 6, name: "+33 6 12 44 08 91", direction: "entrant", date: "Avant-hier, 17:48", duration: "8 min 03", cost: 0 },
];


/* CU  = accès aux services de communications unifiées.
   Tel = accès aux services de standard téléphonique.
   Le choix de formule se fait dans l'espace Manager ; l'app n'affiche que la
   légende, dans la grille tarifaire. */
const LEGENDE_CU_TEL =
  "CU : services de communications unifiées. Tel : services de standard téléphonique.";

/* Tarifs communs à la flotte, grille Business (HT) */
const PRIX_MINUTE_LOCALE = 40;


/* Fil d'actualité de l'app : nouveautés produit, mises à jour, maintenance,
   informations de service. Alimenté depuis le back-office. */
const NOTIFICATIONS_SEED = [
  {
    id: 1,
    categorie: "Nouveauté",
    titre: "La grille tarifaire est disponible dans l'app",
    texte:
      "Consultez le tarif de chaque destination avant d'appeler, depuis le menu ou votre compte PRO. Les tarifs affichés font foi au moment de l'appel.",
    date: "14/08/2026",
    lu: false,
  },
  {
    id: 2,
    categorie: "Mise à jour",
    titre: "Version 2.3 : historique des recharges",
    texte:
      "Chaque recharge est désormais tracée avec son moyen de paiement, son horodatage et sa référence de transaction. Le crédit de bienvenue y apparaît également.",
    date: "14/08/2026",
    lu: false,
  },
  {
    id: 3,
    categorie: "Actualité",
    titre: "Phase pilote : le numéro reste gratuit",
    texte:
      "L'attribution du numéro PRO reste offerte pendant toute la durée du pilote. Seules les communications sont facturées. La durée du pilote sera précisée en cours de route.",
    date: "09/08/2026",
    lu: true,
  },
  {
    id: 4,
    categorie: "Maintenance",
    titre: "Interruption programmée dans la nuit du 20 au 21 août",
    texte:
      "Une intervention technique est prévue entre 01h00 et 03h00. Les appels et messages pourront être perturbés pendant cette fenêtre.",
    date: "07/08/2026",
    lu: true,
  },
  {
    id: 5,
    categorie: "Actualité",
    titre: "Mobile Money : Orange Money rejoint les moyens de paiement",
    texte:
      "Vous pouvez maintenant recharger votre crédit PRO par Orange Money, en plus de MTN Mobile Money et de la carte bancaire.",
    date: "28/07/2026",
    lu: true,
  },
];

const CATEGORIES_NOTIF = {
  Actualité: { icon: Megaphone, color: C.blue, bg: C.blueSoft },
  Nouveauté: { icon: Sparkles, color: C.orange, bg: C.orangeSoft },
  "Mise à jour": { icon: Info, color: C.green, bg: C.greenSoft },
  Maintenance: { icon: Wrench, color: C.waitText, bg: C.waitBg },
};

/* ==================================================================== */
/*  GRILLES TARIFAIRES OFFICIELLES                                       */
/*  Source : GTS-Infotel Cameroon / GTS Africa. Mobinawa-PRO est         */
/*  affiché TTC, Mobinawa-Business HT.                                   */
/* ==================================================================== */


/* Taux de conversion : 1 unité de devise vaut X FCFA.
   La parité euro est fixe (ancrage du franc CFA). */
const TAUX_XAF = { XAF: 1, EUR: 655.957 };

const DEVISES = [
  { id: "XAF", code: "cm", label: "FCFA", symbole: "FCFA" },
  { id: "EUR", code: "fr", label: "Euro", symbole: "€" },
];

/* ---- Les opérateurs de la plateforme ----
   Un opérateur de couverture exploite Mobinawa dans un pays : il y attribue les
   numéros PRO locaux, publie sa grille tarifaire et tient l'annuaire ProCom de
   ce pays. Un utilisateur relève de la couverture dont son numéro mobile porte
   l'indicatif — il ne la choisit jamais.

   Les numéros qui ne correspondent à aucune couverture ouverte relèvent de
   l'opérateur diaspora : PRO uniquement, en euros, avec accès aux annuaires
   ProCom de tous les pays couverts.

   Ouvrir un nouveau pays est une entrée de plus dans COUVERTURES. Penser à
   ajouter sa devise dans DEVISES et son taux dans TAUX_XAF si elle n'y est pas,
   et son drapeau dans le composant Flag. */
/* Photos de fond de l'accueil, intégrées pour que le fichier reste autonome.
   Cameroun : monument de la Réunification, Yaoundé (v53). JPEG compressé. */
const FOND_CAMEROUN =
  "data:image/jpeg;base64,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";

const COUVERTURES = [
  {
    id: "cm",
    /* Un seul nom par opérateur, celui qui signe ses e-mails
       (« L'équipe Mobinawa de Nom_Opérateur ») : nom et contact sont
       identiques. À respecter pour chaque pays ouvert. */
    nom: "GTS-Infotel Cameroon",
    contact: "GTS-Infotel Cameroon",
    /* L'opérateur se trouve dans les contacts, ou par sa fiche dans
       l'annuaire ProCom de son pays (voir ANNUAIRE_PROCOM). */
    ouChercherContact: "dans l'onglet « Contacts »", // « ou dans l'annuaire… » retiré (v130)
    pays: "Cameroun",
    locatif: "au Cameroun",
    genitif: "du Cameroun",
    drapeau: "cm",
    /* Photo de fond de l'accueil pour ce pays (v50). Accepte une adresse
       https ou une image intégrée en data URI. Laisser à null affiche le
       fond de repli aux couleurs de la marque. Une photo par pays ouvert. */
    fondAccueil: FOND_CAMEROUN,
    prefixes: ["+2376"],
    devise: "XAF",
    offres: ["pro", "business"],
    ouvert: true,
    demoMsisdn: "+237 6 55 12 34 78",
    creditAppelOffert: 500,
    rechargeMin: 10000,
    montantsRecharge: [10000, 20000, 50000, 100000],
  },
  {
    id: "cg",
    nom: "GTS-Infotel Congo",
    contact: "GTS-Infotel Congo",
    pays: "Congo",
    locatif: "au Congo",
    genitif: "du Congo",
    drapeau: "cg",
    fondAccueil: null,
    prefixes: ["+2420", "+2421"], // à confirmer à l'ouverture
    devise: "XAF",
    offres: ["pro"],
    ouvert: false,
    demoMsisdn: "+242 06 12 34 56",
    creditAppelOffert: 500,
    rechargeMin: 10000,
    montantsRecharge: [10000, 20000, 50000, 100000],
  },
  {
    id: "ng",
    nom: "GTS-Infotel Nigéria",
    contact: "GTS-Infotel Nigeria", // à aligner sur la signature e-mail à l'ouverture
    pays: "Nigéria",
    locatif: "au Nigéria",
    genitif: "du Nigéria",
    drapeau: "ng",
    fondAccueil: null,
    prefixes: ["+2347", "+2348", "+2349"], // à confirmer à l'ouverture
    devise: "NGN", // taux à ajouter dans TAUX_XAF avant ouverture
    offres: ["pro"],
    ouvert: false,
    demoMsisdn: "+234 802 123 4567",
    creditAppelOffert: 500,
    rechargeMin: 10000,
    montantsRecharge: [10000, 20000, 50000, 100000],
  },
];

/* Opérateur de repli : aucun pays propre, donc aucun numéro local à attribuer
   au-delà de PRO, et un annuaire ProCom à choisir parmi les pays couverts. */
const DIASPORA = {
  id: "diaspora",
  nom: "GTS Africa",
  contact: "GTS Africa",
  /* GTS Africa n'a pas d'annuaire ProCom propre : on le trouve en le
     recherchant dans l'onglet « Contacts » de l'app. */
  ouChercherContact: "dans l'onglet « Contacts »",
  pays: null,
  drapeau: "fr",
  prefixes: [],
  devise: "EUR",
  offres: ["pro"],
  ouvert: true,
  demoMsisdn: "+33 6 12 34 56 78",
  creditAppelOffert: 1,
  rechargeMin: 15,
  montantsRecharge: [15, 30, 50, 100],
};

const OPERATEURS_DEMO = [...COUVERTURES.filter((c) => c.ouvert), DIASPORA];

function niveauxDe(operateur) {
  return NIVEAUX.filter((n) => n.id === "basic" || operateur.offres.includes(n.id));
}

function operateurDe(msisdn) {
  const compact = (msisdn || "").replace(/[^0-9+]/g, "");
  const locale = COUVERTURES.find((c) => c.ouvert && c.prefixes.some((prefixe) => compact.startsWith(prefixe)));
  return locale || DIASPORA;
}

/* Tous les annuaires ouverts sont consultables, quel que soit l'opérateur de
   l'utilisateur : un annuaire est un service de recherche, pas un périmètre
   commercial. */
function annuairesOuverts() {
  return COUVERTURES.filter((c) => c.ouvert);
}

/* Annuaire présenté d'emblée : le sien s'il relève d'une couverture locale,
   le Cameroun sinon. */
function annuaireParDefaut(operateur) {
  const ouverts = annuairesOuverts();
  return ouverts.find((a) => a.id === operateur.id) || ouverts.find((a) => a.id === "cm") || ouverts[0];
}

/* Convertit un prix exprimé dans sa devise contractuelle vers la devise
   d'affichage choisie par l'utilisateur. */
function convertir(prix, deviseSource, deviseCible) {
  const enFcfa = prix * TAUX_XAF[deviseSource];
  const valeur = enFcfa / TAUX_XAF[deviseCible.id];
  const decimales = deviseCible.id === "XAF" ? 0 : 2;
  return valeur.toLocaleString("fr-FR", {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  });
}

/* ---- Mobinawa-PRO : deux offres distinctes, locale et diaspora ----
   Attention : l'offre diaspora n'est pas une conversion de l'offre locale,
   c'est un tarif contractuel propre, libellé en euros. */
const TARIFS_PRO = [
  {
    titre: "Professionnels locaux",
    operateur: "cm",
    drapeau: "cm",
    devise: "XAF",
    taxe: "TTC",
    lignes: [
      {
        label: "Numéro PRO d'appel sur l'appli Mobinawa mobile ou PC",
        prix: 2000,
        unite: "mois",
        pilote: true,
        inclus: [
          "Reporting et crédit d'appel sur l'appli mobile",
          "Réception SMS sur l'appli mobile",
        ],
      },
      { label: "Option accueil vocal personnalisé", prix: 10000, unite: "une fois" },
      {
        label: "Appel vers tout numéro mobile ou fixe local",
        unite: "min",
        /* Tarif dégressif : plus le crédit d'appel est élevé, plus la minute
           est basse. Le palier est fixé à chaque transfert par le solde total
           du crédit d'appel après transfert, et s'applique jusqu'au transfert
           suivant : les appels qui font baisser le solde ne le font pas
           remonter. Les paliers sont contigus : tout solde a un tarif, il n'y
           a donc pas de minimum de transfert. */
        paliers: [
          { de: 0, a: 49999, prix: 50 },
          { de: 50000, a: 99999, prix: 45 },
          { de: 100000, prix: 40 },
        ],
      },
    ],
  },
  {
    titre: "Professionnels de la diaspora",
    operateur: "diaspora",
    drapeau: "fr",
    devise: "EUR",
    taxe: "TTC",
    lignes: [
      {
        label: "Numéro PRO d'appel sur l'appli Mobinawa mobile ou PC",
        prix: 5,
        unite: "mois",
        pilote: true,
        inclus: [
          "Reporting et crédit d'appel sur l'appli mobile",
          "Réception SMS sur l'appli mobile",
        ],
      },
      { label: "Appel vers tout numéro mobile ou fixe local", prix: 0.1, unite: "min" },
    ],
  },
];

/* ---- Mobinawa-Business : offre commerciale SaaS GTS-Infotel Cameroon,
   applicable à compter de septembre 2026. Tarifs en FCFA hors taxes. ---- */
const TARIFS_BUSINESS = [
  {
    titre: "Numéros PRO",
    lignes: [
      {
        label: "Numéro PRO officiel sur le SVI de l'entreprise",
        prix: 100000,
        unite: "an",
        pilote: true,
        inclus: [
          "Compte Extranet de reporting et crédit d'appel des numéros PRO attribués",
          "Compte Collaborateur CU/Tel au nom de la société sur PC",
          "Publication dans l'annuaire ProCom",
          "Compte API Mobinawa d'accès sécurisé MyApp à l'application de l'entreprise",
        ],
      },
      { label: "Numéro PRO dédié à un service spécifique", prix: 50000, unite: "an", pilote: true },
      {
        label: "Numéro PRO dédié à un collaborateur",
        prix: 30000,
        unite: "an",
        pilote: true,
        inclus: [
          "Reporting et crédit d'appel sur l'appli mobile Mobinawa du collaborateur",
          "Réception SMS sur l'appli mobile Mobinawa",
        ],
      },
    ],
  },
  {
    titre: "Serveur vocal interactif",
    lignes: [{ label: "Configuration personnalisée du SVI", surDevis: "À partir de 50 000 F" }],
  },
  {
    titre: "Comptes collaborateurs",
    lignes: [
      { label: "Compte Collaborateur CU sur smartphone (utilisateur Mobinawa-Basic)", gratuit: true },
      { label: "Compte Collaborateur CU/Tel sur smartphone", prix: 2000, unite: "mois" },
      { label: "Compte Collaborateur CU/Tel sur PC", prix: 2000, unite: "mois" },
      { label: "Compte Collaborateur CU/Tel sur PC et smartphone", prix: 2000, unite: "mois" },
      { label: "Compte Manager CU/Tel sur PC et smartphone", prix: 5000, unite: "mois" },
      { label: "Annuaire téléphonique de l'entreprise", gratuit: true },
    ],
    legende: LEGENDE_CU_TEL,
  },
  {
    titre: "Communications et services",
    lignes: [
      { label: "Groupe de réception d'appel ou borne d'information vocale", gratuit: true },
      { label: "Appel vers tout numéro de téléphone local", prix: 40, unite: "min" },
      { label: "Envoi SMS vers tout numéro mobile local", prix: 8, unite: "SMS" },
      { label: "Assistance en ligne du Manager", gratuit: true },
    ],
  },
];

/* Conditions commerciales attachées à l'offre Business */
const CONDITIONS_BUSINESS = [
  "Les frais d'abonnement annuel des numéros PRO et de configuration personnalisée du SVI sont payables à réception de facture.",
  "Les frais d'abonnement mensuel sont facturés trimestriellement, conformément à la fiche de configuration de la solution et à vos besoins évolutifs.",
  "Les frais d'appel téléphonique et d'envoi de SMS sont facturés en mode prépayé, sur un crédit commandé d'un montant minimum de 100 000 F HT.",
  /* La commande se passe hors de l'app (règle du mémo) : l'app indique
     seulement où la passer. Le bon de commande est traité dans ProcomCRM,
     nom interne qui n'est pas montré à l'usager. */
  "Le crédit prépayé se commande depuis l'espace Manager, sur ordinateur, ou par bon de commande adressé à nos équipes commerciales.",
];

/* Horodatage d'une opération de recharge */
/* Abonnement mensuel du numéro PRO, tel que publié par l'opérateur. */
function abonnementMensuelDe(operateur) {
  const bloc = TARIFS_PRO.find((b) => b.operateur === operateur.id);
  const ligne = bloc && bloc.lignes.find((l) => l.unite === "mois");
  return ligne ? ligne.prix : 0;
}

/* Prix de la minute locale pour un solde de crédit d'appel donné. Appelé au
   moment où ce solde est constitué (activation, transfert), jamais à l'appel :
   le palier reste celui du dernier transfert. */
function prixMinuteDe(operateur, soldeAppel) {
  const bloc = TARIFS_PRO.find((b) => b.operateur === operateur.id);
  const ligne = bloc && bloc.lignes.find((l) => l.unite === "min");
  if (!ligne) return null;
  if (!ligne.paliers) return ligne.prix;
  const palier = ligne.paliers.find((p) => soldeAppel >= p.de && (p.a == null || soldeAppel <= p.a));
  return palier ? palier.prix : ligne.paliers[0].prix;
}

/* Textes de l'accusé de réception, partagés par l'écran d'attente et la
   notification déposée dans le fil. Une seule source pour les deux. */
function accuseReception(type, operateur) {
  const pro = type === "pro";
  const offreLabel = pro ? "Mobinawa-PRO" : "Mobinawa-Business";
  const suite = pro
    ? "Après validation de votre demande, vous recevrez sous 2 jours un e-mail contenant le lien d'accès web à votre compte depuis un PC."
    : "Après examen de votre fiche de souscription, un membre de nos équipes vous adressera un e-mail contenant le lien d'accès à votre espace de configuration depuis un PC. Il nous permettra de collecter les informations nécessaires à la validation de votre demande et au déploiement de la solution adaptée à votre organisation.";
  const relance =
    `Si vous ne recevez pas cet e-mail${pro ? " dans ce délai" : ""}, contactez-nous directement depuis ` +
    `votre application Mobinawa en recherchant « ${operateur.contact} »` +
    (operateur.ouChercherContact ? ` ${operateur.ouChercherContact}` : "") +
    "."; // phrase sur la validité du lien retirée (v130)
  return {
    offreLabel,
    intro: `Votre demande de souscription à ${offreLabel} a bien été enregistrée.`,
    suite,
    relance,
  };
}

function horodatage() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()} · ${p(d.getHours())}:${p(d.getMinutes())}`;
}

/* Liste fermée des secteurs : alimente le ciblage et l'annuaire ProCom */
const SECTEURS = [
  "Administration publique",
  "Agroalimentaire",
  "Association et ONG",
  "Banque, assurance et microfinance",
  "BTP et immobilier",
  "Commerce et distribution",
  "Conseil et services aux entreprises",
  "Éducation et formation",
  "Énergie et environnement",
  "Hôtellerie, restauration et tourisme",
  "Import-export et négoce",
  "Industrie et fabrication",
  "Média, culture et communication",
  "Santé et action sociale",
  "Services aux particuliers",
  "Technologies et numérique",
  "Transport et logistique",
  "Autre",
];

/* La recharge du crédit du compte se fait par carte Visa. */
/* Icône de chaque secteur, pour la grille de catégories de l'accueil. */
const SECTEUR_ICONES = {
  "Administration publique": Landmark,
  "Agroalimentaire": Wheat,
  "Association et ONG": HeartHandshake,
  "Banque, assurance et microfinance": Banknote,
  "BTP et immobilier": HardHat,
  "Commerce et distribution": ShoppingCart,
  "Conseil et services aux entreprises": Briefcase,
  "Éducation et formation": GraduationCap,
  "Énergie et environnement": Leaf,
  "Hôtellerie, restauration et tourisme": UtensilsCrossed,
  "Import-export et négoce": Ship,
  "Industrie et fabrication": Factory,
  "Média, culture et communication": Clapperboard,
  "Santé et action sociale": HeartPulse,
  "Services aux particuliers": Scissors,
  "Technologies et numérique": Laptop,
  "Transport et logistique": Truck,
  "Autre": LayoutGrid,
};

/* Sous-secteurs, dépendants du secteur choisi. Ils affinent le ciblage et la
   recherche dans l'annuaire ProCom. */
const SOUS_SECTEURS = {
  "Administration publique": [
    "Administration centrale",
    "Collectivité locale",
    "Établissement public",
    "Service déconcentré",
    "Justice et sécurité",
  ],
  "Association et ONG": [
    "Association de quartier",
    "Club sportif et de loisirs",
    "Fondation",
    "ONG et humanitaire",
    "Organisation professionnelle",
    "Culte et communauté",
  ],
  "Agroalimentaire": [
    "Production agricole",
    "Élevage et pêche",
    "Transformation alimentaire",
    "Boissons",
    "Distribution alimentaire",
  ],
  "Banque, assurance et microfinance": [
    "Banque",
    "Microfinance",
    "Assurance",
    "Transfert d'argent et paiement",
  ],
  "BTP et immobilier": [
    "Construction et travaux publics",
    "Architecture et ingénierie",
    "Matériaux de construction",
    "Promotion et gestion immobilière",
  ],
  "Commerce et distribution": [
    "Commerce de détail",
    "Commerce de gros",
    "Grande distribution",
    "Commerce en ligne",
  ],
  "Conseil et services aux entreprises": [
    "Expertise comptable et audit",
    "Conseil juridique",
    "Conseil en gestion et stratégie",
    "Ressources humaines et recrutement",
    "Marketing et publicité",
  ],
  "Éducation et formation": [
    "Enseignement primaire et secondaire",
    "Enseignement supérieur",
    "Formation professionnelle",
    "Soutien scolaire et cours particuliers",
  ],
  "Énergie et environnement": [
    "Production et distribution d'énergie",
    "Énergies renouvelables",
    "Eau et assainissement",
    "Gestion des déchets",
  ],
  "Hôtellerie, restauration et tourisme": [
    "Hôtellerie",
    "Restauration",
    "Agence de voyage",
    "Loisirs et événementiel",
  ],
  "Import-export et négoce": [
    "Import",
    "Export",
    "Négoce de matières premières",
    "Courtage et représentation",
  ],
  "Industrie et fabrication": [
    "Industrie manufacturière",
    "Textile et habillement",
    "Chimie et pharmacie",
    "Métallurgie et mécanique",
    "Maintenance industrielle",
  ],
  "Média, culture et communication": [
    "Presse et édition",
    "Radio et télévision",
    "Production audiovisuelle",
    "Agence de communication",
    "Arts et spectacle",
  ],
  "Santé et action sociale": [
    "Cabinet médical",
    "Cabinet dentaire",
    "Clinique et hôpital",
    "Pharmacie",
    "Laboratoire d'analyses",
    "Action sociale et humanitaire",
  ],
  "Services aux particuliers": [
    "Coiffure et esthétique",
    "Sport et bien-être",
    "Garage et entretien automobile",
    "Artisanat et réparation à domicile",
    "Blanchisserie et pressing",
    "Garde d'enfants et aide à domicile",
    "Pompes funèbres",
  ],
  "Technologies et numérique": [
    "Développement logiciel",
    "Services informatiques et infogérance",
    "Télécommunications",
    "Données et intelligence artificielle",
    "Services en ligne",
  ],
  "Transport et logistique": [
    "Transport de marchandises",
    "Transport de personnes",
    "Logistique et entreposage",
    "Transit et dédouanement",
    "Coursier et livraison",
  ],
  "Autre": [],
};

/* Options d'un secteur, « Autre » toujours en fin de liste. */
function sousSecteursDe(secteur) {
  return [...(SOUS_SECTEURS[secteur] || []), "Autre"];
}

/* ---- Annuaire ProCom, par pays de couverture ----
   N'y figurent que les organisations disposant d'un Numéro PRO officiel,
   c'est-à-dire les clients Mobinawa-Business : la publication est une ligne de
   leur offre. Un indépendant Mobinawa-PRO n'y est pas publié.
   Jeu de démonstration : en production, ces fiches viennent de ProcomCRM. */
const ANNUAIRE_PROCOM = {
  cm: [
    /* Fiche de l'opérateur lui-même : l'accusé de réception renvoie
       l'usager vers elle. Numéro fourni en v76. */
    {
      id: 39,
      nom: "GTS-Infotel Cameroon",
      sousSecteur: "Télécommunications",
      secteur: "Technologies et numérique",
      numero: "+237 242 232 000",
      email: "contact@gtsinfotelcameroon.cm", // simulé (v114)
      site: "www.gtsinfotelcameroon.cm", // simulé (v116)
      couleur: "#1F5FA8",
      description:
        "Opérateur ProCom au Cameroun : numéros PRO, Mobinawa-PRO et Mobinawa-Business. Assistance aux usagers et suivi des demandes de souscription.",
      webapp: false,
    },
    /* Fiche de l'association REPTIC (v77), d'après la présentation de
       reptic.cm fournie par l'équipe. Numéro fourni par l'équipe. */
    {
      id: 40,
      nom: "REPTIC",
      sousSecteur: "Organisation professionnelle",
      secteur: "Association et ONG",
      numero: "+237 242 233 000",
      email: "contact@reptic.cm", // simulé (v114)
      site: "www.reptic.cm", // simulé (v116)
      couleur: "#1E6F8C",
      description:
        "Le REPTIC rassemble entreprises et professionnels des télécoms, des TIC et du numérique pour bâtir un écosystème digital souverain et compétitif. Il regroupe opérateurs télécoms, fournisseurs d'infrastructure, éditeurs, prestataires IT, agences digitales, cabinets-conseils et organismes de formation.",
      webapp: true, // option MyApp (v80)
    },
    {
      id: 37,
      nom: "Salle de Sport Energy Bonapriso",
      sousSecteur: "Sport et bien-être",
      secteur: "Services aux particuliers",
      numero: "+237 233 42 47 13",
      email: "contact@sallesportenergy.cm", // simulé (v114)
      site: "www.sallesportenergy.cm", // simulé (v116)
      couleur: "#C85A2F",
      description:
        "Musculation, cours collectifs et coaching individuel. Abonnements, horaires et séances d'essai.",
      webapp: false,
    },
    {
      id: 38,
      nom: "Bureau de Change Akwa",
      sousSecteur: "Autre",
      secteur: "Autre",
      numero: "+237 233 42 08 95",
      email: "contact@bureauchangeakwa.cm", // simulé (v114)
      site: "www.bureauchangeakwa.cm", // simulé (v116)
      couleur: "#6B6B4F",
      description:
        "Change de devises et cotations du jour. Vérification des taux et disponibilité par téléphone.",
      webapp: false,
    },
    {
      id: 35,
      nom: "Auto-École du Carrefour",
      sousSecteur: "Autre",
      secteur: "Autre",
      numero: "+237 233 22 65 84",
      email: "contact@autoecolecarrefour.cm", // simulé (v114)
      site: "www.autoecolecarrefour.cm", // simulé (v116)
      couleur: "#7A6B4F",
      description:
        "Formation au permis de conduire, code de la route et conduite accompagnée. Inscriptions et plannings de leçons.",
      webapp: false,
    },
    {
      id: 36,
      nom: "Club Sportif de Bépanda",
      sousSecteur: "Club sportif et de loisirs",
      secteur: "Association et ONG",
      numero: "+237 233 43 90 26",
      email: "contact@clubsportifbepanda.cm", // simulé (v114)
      site: "www.clubsportifbepanda.cm", // simulé (v116)
      couleur: "#2F7A5A",
      description:
        "Football, athlétisme et handball. Inscriptions des jeunes, horaires d'entraînement et location du terrain.",
      webapp: false,
    },
    {
      id: 33,
      nom: "Centre Funéraire Mémoria",
      sousSecteur: "Pompes funèbres",
      secteur: "Services aux particuliers",
      numero: "+237 233 44 81 09",
      email: "contact@centrefunerairememoria.cm", // simulé (v114)
      site: "www.centrefunerairememoria.cm", // simulé (v116)
      couleur: "#5A5A6B",
      description:
        "Organisation d'obsèques, chambre funéraire et rapatriement de corps. Permanence téléphonique jour et nuit.",
      webapp: false,
    },
    {
      id: 34,
      nom: "Pressing Éclat du Jour",
      sousSecteur: "Blanchisserie et pressing",
      secteur: "Services aux particuliers",
      numero: "+237 233 42 19 47",
      email: "contact@pressingeclatjour.cm", // simulé (v114)
      site: "www.pressingeclatjour.cm", // simulé (v116)
      couleur: "#3F7A8A",
      description:
        "Nettoyage à sec, repassage et entretien du linge. Collecte et livraison à domicile sur Douala.",
      webapp: false,
    },
    {
      id: 31,
      nom: "Mairie de Douala 5e",
      sousSecteur: "Collectivité locale",
      secteur: "Administration publique",
      numero: "+237 233 42 05 60",
      email: "contact@mairiedouala5e.cm", // simulé (v114)
      site: "www.mairiedouala5e.cm", // simulé (v116)
      couleur: "#2F5D7C",
      description:
        "État civil, actes de naissance et de mariage, permis de bâtir et taxes communales. Accueil du public et prise de rendez-vous.",
      webapp: true,
    },
    {
      id: 32,
      nom: "Agence Régionale de l'Urbanisme",
      sousSecteur: "Établissement public",
      secteur: "Administration publique",
      numero: "+237 233 22 48 31",
      email: "contact@agenceregionaleurbanisme.cm", // simulé (v114)
      site: "www.agenceregionaleurbanisme.cm", // simulé (v116)
      couleur: "#4F6B5A",
      description:
        "Instruction des dossiers d'urbanisme, plans d'occupation des sols et conformité des constructions.",
      webapp: false,
    },
    {
      id: 1,
      nom: "Brasseries du Mungo",
      sousSecteur: "Boissons",
      secteur: "Agroalimentaire",
      numero: "+237 233 42 18 05",
      email: "contact@brasseriesmungo.cm", // simulé (v114)
      site: "www.brasseriesmungo.cm", // simulé (v116)
      couleur: "#C8622F",
      description:
        "Production et distribution de boissons sur l'ensemble du territoire. Service commercial, réseau de dépositaires et service après-vente.",
      webapp: false,
    },
    {
      id: 2,
      nom: "Ferme Avicole de Mbalmayo",
      sousSecteur: "Élevage et pêche",
      secteur: "Agroalimentaire",
      numero: "+237 233 28 64 10",
      email: "contact@fermeavicolembalmayo.cm", // simulé (v114)
      site: "www.fermeavicolembalmayo.cm", // simulé (v116)
      couleur: "#8A9B3F",
      description:
        "Élevage de volailles et production d'œufs. Vente en gros aux revendeurs et livraison sur Yaoundé et sa périphérie.",
      webapp: false,
    },
    {
      id: 3,
      nom: "Mutuelle d'Épargne du Wouri",
      sousSecteur: "Microfinance",
      secteur: "Banque, assurance et microfinance",
      numero: "+237 233 42 90 31",
      email: "contact@mutuelleepargnewouri.cm", // simulé (v114)
      site: "www.mutuelleepargnewouri.cm", // simulé (v116)
      couleur: "#8A6D1F",
      description:
        "Épargne, microcrédit et transfert d'argent. Agences à Douala, Bafoussam et Limbé.",
      webapp: false,
    },
    {
      id: 4,
      nom: "Assurances Atlantique Cameroun",
      sousSecteur: "Assurance",
      secteur: "Banque, assurance et microfinance",
      numero: "+237 233 43 11 72",
      email: "contact@assurancesatlantiquecameroun.cm", // simulé (v114)
      site: "www.assurancesatlantiquecameroun.cm", // simulé (v116)
      couleur: "#2F5D7C",
      description:
        "Assurance automobile, habitation, santé et responsabilité civile. Déclaration de sinistre et suivi des dossiers.",
      webapp: true,
    },
    {
      id: 5,
      nom: "Entreprise Bâtir Cameroun",
      sousSecteur: "Construction et travaux publics",
      secteur: "BTP et immobilier",
      numero: "+237 233 44 27 08",
      email: "contact@entreprisebatircameroun.cm", // simulé (v114)
      site: "www.entreprisebatircameroun.cm", // simulé (v116)
      couleur: "#7A6A4F",
      description:
        "Gros œuvre, voirie et réseaux divers. Chantiers publics et privés dans le Littoral et le Centre.",
      webapp: false,
    },
    {
      id: 6,
      nom: "Résidences du Lac Promotion",
      sousSecteur: "Promotion et gestion immobilière",
      secteur: "BTP et immobilier",
      numero: "+237 233 45 60 19",
      email: "contact@residenceslacpromotion.cm", // simulé (v114)
      site: "www.residenceslacpromotion.cm", // simulé (v116)
      couleur: "#5A7A6A",
      description:
        "Promotion de logements, location et gestion locative. Visites sur rendez-vous et états des lieux.",
      webapp: false,
    },
    {
      id: 7,
      nom: "Supermarché Mahima Bonanjo",
      sousSecteur: "Grande distribution",
      secteur: "Commerce et distribution",
      numero: "+237 233 42 77 55",
      email: "contact@supermarchemahimabonanjo.cm", // simulé (v114)
      site: "www.supermarchemahimabonanjo.cm", // simulé (v116)
      couleur: "#B5442F",
      description:
        "Alimentation générale, électroménager et produits d'entretien. Commandes par téléphone et livraison à domicile.",
      webapp: true,
    },
    {
      id: 8,
      nom: "Quincaillerie Centrale Yaoundé",
      sousSecteur: "Commerce de détail",
      secteur: "Commerce et distribution",
      numero: "+237 233 22 31 46",
      email: "contact@quincailleriecentraleyaounde.cm", // simulé (v114)
      site: "www.quincailleriecentraleyaounde.cm", // simulé (v116)
      couleur: "#6B5A3F",
      description:
        "Outillage, plomberie, électricité et matériaux. Devis et préparation de commande pour les artisans.",
      webapp: false,
    },
    {
      id: 9,
      nom: "Cabinet Ngo & Associés",
      sousSecteur: "Expertise comptable et audit",
      secteur: "Conseil et services aux entreprises",
      numero: "+237 233 47 12 40",
      email: "contact@cabinetngoassocies.cm", // simulé (v114)
      site: "www.cabinetngoassocies.cm", // simulé (v116)
      couleur: "#2E5C8A",
      description:
        "Expertise comptable, conseil fiscal et accompagnement à la création d'entreprise pour les PME et les professions libérales.",
      webapp: false,
    },
    {
      id: 10,
      nom: "Étude Maître Essomba",
      sousSecteur: "Conseil juridique",
      secteur: "Conseil et services aux entreprises",
      numero: "+237 233 22 58 90",
      email: "contact@etudemaitreessomba.cm", // simulé (v114)
      site: "www.etudemaitreessomba.cm", // simulé (v116)
      couleur: "#3F4C6B",
      description:
        "Conseil juridique, rédaction d'actes et contentieux commercial. Consultations sur rendez-vous.",
      webapp: false,
    },
    {
      id: 11,
      nom: "Lycée Bilingue de Bonabéri",
      sousSecteur: "Enseignement primaire et secondaire",
      secteur: "Éducation et formation",
      numero: "+237 233 40 22 68",
      email: "contact@lyceebilinguebonaberi.cm", // simulé (v114)
      site: "www.lyceebilinguebonaberi.cm", // simulé (v116)
      couleur: "#2F7D7D",
      description:
        "Établissement secondaire bilingue. Inscriptions, scolarité et relations avec les familles.",
      webapp: false,
    },
    {
      id: 12,
      nom: "Institut Polytechnique du Mfoundi",
      sousSecteur: "Enseignement supérieur",
      secteur: "Éducation et formation",
      numero: "+237 233 22 94 03",
      email: "contact@institutpolytechniquemfoundi.cm", // simulé (v114)
      site: "www.institutpolytechniquemfoundi.cm", // simulé (v116)
      couleur: "#1F6E8C",
      description:
        "Formations supérieures en génie civil, informatique et gestion. Admissions, scolarité et stages en entreprise.",
      webapp: true,
    },
    {
      id: 13,
      nom: "Solaire Sahel Cameroun",
      sousSecteur: "Énergies renouvelables",
      secteur: "Énergie et environnement",
      numero: "+237 233 46 70 24",
      email: "contact@solairesahelcameroun.cm", // simulé (v114)
      site: "www.solairesahelcameroun.cm", // simulé (v116)
      couleur: "#C79A2B",
      description:
        "Installation de panneaux solaires et de systèmes de secours pour particuliers, commerces et dispensaires.",
      webapp: false,
    },
    {
      id: 14,
      nom: "HygièneVille Douala",
      sousSecteur: "Gestion des déchets",
      secteur: "Énergie et environnement",
      numero: "+237 233 43 85 61",
      email: "contact@hygienevilledouala.cm", // simulé (v114)
      site: "www.hygienevilledouala.cm", // simulé (v116)
      couleur: "#3F7A4F",
      description:
        "Collecte des déchets, nettoyage industriel et dératisation. Contrats pour entreprises et copropriétés.",
      webapp: false,
    },
    {
      id: 15,
      nom: "Hôtel Sawa Résidence",
      sousSecteur: "Hôtellerie",
      secteur: "Hôtellerie, restauration et tourisme",
      numero: "+237 233 42 60 14",
      email: "contact@hotelsawaresidence.cm", // simulé (v114)
      site: "www.hotelsawaresidence.cm", // simulé (v116)
      couleur: "#B04A6A",
      description:
        "Hôtel d'affaires à Douala : réservations, salles de réunion, restauration et navette aéroport.",
      webapp: false,
    },
    {
      id: 16,
      nom: "Restaurant Le Ndolè d'Or",
      sousSecteur: "Restauration",
      secteur: "Hôtellerie, restauration et tourisme",
      numero: "+237 233 42 33 07",
      email: "contact@restaurantndoleor.cm", // simulé (v114)
      site: "www.restaurantndoleor.cm", // simulé (v116)
      couleur: "#A8502F",
      description:
        "Cuisine camerounaise et plats du jour. Réservations, traiteur et livraison sur le centre-ville.",
      webapp: true,
    },
    {
      id: 17,
      nom: "Négoce Cacao Sanaga",
      sousSecteur: "Négoce de matières premières",
      secteur: "Import-export et négoce",
      numero: "+237 233 46 12 88",
      email: "contact@negocecacaosanaga.cm", // simulé (v114)
      site: "www.negocecacaosanaga.cm", // simulé (v116)
      couleur: "#6B4A2F",
      description:
        "Achat, conditionnement et exportation de cacao et de café. Relation avec les coopératives de producteurs.",
      webapp: false,
    },
    {
      id: 18,
      nom: "Afric'Import Douala",
      sousSecteur: "Import",
      secteur: "Import-export et négoce",
      numero: "+237 233 43 29 50",
      email: "contact@africimportdouala.cm", // simulé (v114)
      site: "www.africimportdouala.cm", // simulé (v116)
      couleur: "#4F6B8A",
      description:
        "Importation de pièces détachées et d'équipements. Suivi des commandes et dédouanement.",
      webapp: false,
    },
    {
      id: 19,
      nom: "Ateliers Métalliques du Wouri",
      sousSecteur: "Métallurgie et mécanique",
      secteur: "Industrie et fabrication",
      numero: "+237 233 43 04 17",
      email: "contact@ateliersmetalliqueswouri.cm", // simulé (v114)
      site: "www.ateliersmetalliqueswouri.cm", // simulé (v116)
      couleur: "#5F6B75",
      description:
        "Chaudronnerie, charpente métallique et pièces sur mesure. Devis et interventions sur site.",
      webapp: false,
    },
    {
      id: 20,
      nom: "Textiles de Garoua",
      sousSecteur: "Textile et habillement",
      secteur: "Industrie et fabrication",
      numero: "+237 233 27 41 62",
      email: "contact@textilesgaroua.cm", // simulé (v114)
      site: "www.textilesgaroua.cm", // simulé (v116)
      couleur: "#8A4F6B",
      description:
        "Filature, tissage et confection. Commandes en gros pour uniformes et tenues professionnelles.",
      webapp: false,
    },
    {
      id: 21,
      nom: "Radio Horizon Yaoundé",
      sousSecteur: "Radio et télévision",
      secteur: "Média, culture et communication",
      numero: "+237 233 22 07 39",
      email: "contact@radiohorizonyaounde.cm", // simulé (v114)
      site: "www.radiohorizonyaounde.cm", // simulé (v116)
      couleur: "#7A4FA8",
      description:
        "Station généraliste : information, débats et musique. Régie publicitaire et annonces d'intérêt public.",
      webapp: false,
    },
    {
      id: 22,
      nom: "Agence Baobab Communication",
      sousSecteur: "Agence de communication",
      secteur: "Média, culture et communication",
      numero: "+237 233 42 51 28",
      email: "contact@agencebaobabcommunication.cm", // simulé (v114)
      site: "www.agencebaobabcommunication.cm", // simulé (v116)
      couleur: "#5B4B9A",
      description:
        "Stratégie de marque, production de contenus et achat d'espace. Accompagnement des PME et des institutions.",
      webapp: true,
    },
    {
      id: 23,
      nom: "Clinique du Djoungolo",
      sousSecteur: "Clinique et hôpital",
      secteur: "Santé et action sociale",
      numero: "+237 233 47 01 12",
      email: "contact@cliniquedjoungolo.cm", // simulé (v114)
      site: "www.cliniquedjoungolo.cm", // simulé (v116)
      couleur: "#3E72BE",
      description:
        "Centre médical polyvalent à Yaoundé : consultations générales et spécialisées, laboratoire d'analyses, imagerie et urgences 24h/24.",
      webapp: true,
    },
    {
      id: 24,
      nom: "Pharmacie du Marché Central",
      sousSecteur: "Pharmacie",
      secteur: "Santé et action sociale",
      numero: "+237 233 22 16 74",
      email: "contact@pharmaciemarchecentral.cm", // simulé (v114)
      site: "www.pharmaciemarchecentral.cm", // simulé (v116)
      couleur: "#2F8A6B",
      description:
        "Officine de garde, préparation d'ordonnances et conseil. Vérification de disponibilité par téléphone.",
      webapp: false,
    },
    {
      id: 41,
      nom: "Cabinet Chérif",
      sousSecteur: "Cabinet dentaire",
      secteur: "Santé et action sociale",
      numero: "+237 6 72 80 34 95",
      email: "contact@cabinetcherif.cm", // simulé (v114)
      site: "www.cabinetcherif.cm", // simulé (v116)
      couleur: "#0D9488",
      description:
        "Cabinet dentaire : consultations bucco-dentaires, soins dentaires, détartrage, blanchiment, chirurgie dentaire et urgences.",
      webapp: false,
    },
    {
      id: 42,
      nom: "GTS Africa — Project Manager",
      sousSecteur: "Télécommunications",
      secteur: "Technologies et numérique",
      numero: "+33 6 31 23 74 96",
      email: "project.manager1@gtsafrica.fr", // simulé (v114)
      site: "www.gtsafrica.fr", // simulé (v116)
      couleur: "#1F5FA8",
      description:
        "Chef de projet GTS Africa : pilotage et déploiement des services Mobinawa et solutions ProCom.",
      webapp: false,
    },
    {
      id: 43,
      nom: "GTS Africa — Directeur Général",
      sousSecteur: "Télécommunications",
      secteur: "Technologies et numérique",
      numero: "+237 96 61 35 69",
      email: "dg@gtsafrica.fr", // simulé (v114)
      site: "www.gtsafrica.fr", // simulé (v116)
      couleur: "#1F5FA8",
      description:
        "Direction Générale de GTS Africa : opérateur de services de télécommunications et communications unifiées pour l'Afrique et sa diaspora.",
      webapp: false,
    },
    {
      id: 44,
      nom: "GTS Africa — Project Manager",
      sousSecteur: "Télécommunications",
      secteur: "Technologies et numérique",
      numero: "+33 7 51 59 73 96",
      email: "project.manager2@gtsafrica.fr", // simulé (v114)
      site: "www.gtsafrica.fr", // simulé (v116)
      couleur: "#1F5FA8",
      description:
        "Chef de projet GTS Africa : coordination technique, suivi des projets et assistance au déploiement.",
      webapp: false,
    },
    {
      id: 25,
      nom: "Douala Digital Services",
      sousSecteur: "Services informatiques et infogérance",
      secteur: "Technologies et numérique",
      numero: "+237 233 41 08 77",
      email: "contact@doualadigitalservices.cm", // simulé (v114)
      site: "www.doualadigitalservices.cm", // simulé (v116)
      couleur: "#5B4B9A",
      description:
        "Développement d'applications, hébergement et infogérance pour les entreprises et les administrations.",
      webapp: true,
    },
    {
      id: 26,
      nom: "Kola Software Factory",
      sousSecteur: "Développement logiciel",
      secteur: "Technologies et numérique",
      numero: "+237 233 41 55 30",
      email: "contact@kolasoftwarefactory.cm", // simulé (v114)
      site: "www.kolasoftwarefactory.cm", // simulé (v116)
      couleur: "#2F6B8A",
      description:
        "Conception d'applications mobiles et web sur mesure. Maintenance applicative et intégration d'API.",
      webapp: true,
    },
    {
      id: 27,
      nom: "Camtrans Logistique",
      sousSecteur: "Transit et dédouanement",
      secteur: "Transport et logistique",
      numero: "+237 233 43 55 20",
      email: "contact@camtranslogistique.cm", // simulé (v114)
      site: "www.camtranslogistique.cm", // simulé (v116)
      couleur: "#1E7A56",
      description:
        "Transport de marchandises, entreposage et dédouanement. Suivi des expéditions entre Douala, Yaoundé et les pays de la CEMAC.",
      webapp: true,
    },
    {
      id: 28,
      nom: "Express Voyageurs Littoral",
      sousSecteur: "Transport de personnes",
      secteur: "Transport et logistique",
      numero: "+237 233 43 66 91",
      email: "contact@expressvoyageurslittoral.cm", // simulé (v114)
      site: "www.expressvoyageurslittoral.cm", // simulé (v116)
      couleur: "#4F7A3F",
      description:
        "Liaisons interurbaines quotidiennes. Réservation de places, bagages et affrètement de cars.",
      webapp: false,
    },
    {
      id: 29,
      nom: "Fondation Ewondo Solidarité",
      sousSecteur: "Fondation",
      secteur: "Association et ONG",
      numero: "+237 233 22 73 15",
      email: "contact@fondationewondosolidarite.cm", // simulé (v114)
      site: "www.fondationewondosolidarite.cm", // simulé (v116)
      couleur: "#8A6B5A",
      description:
        "Aide aux familles vulnérables, bourses scolaires et distribution de matériel médical.",
      webapp: false,
    },
    {
      id: 30,
      nom: "Association des Riverains du Nkam",
      sousSecteur: "Association de quartier",
      secteur: "Association et ONG",
      numero: "+237 233 45 18 02",
      email: "contact@associationriverainsnkam.cm", // simulé (v114)
      site: "www.associationriverainsnkam.cm", // simulé (v116)
      couleur: "#6B7A5A",
      description:
        "Défense des intérêts des riverains, médiation locale et organisation des réunions de quartier.",
      webapp: false,
    },
  ],
};

/* Numéros d'urgence par pays (v84). Cameroun : numéros nationaux courts,
   gratuits depuis tout téléphone. Liste proposée, à faire valider avant
   mise en production. */
const NUMEROS_URGENCE = {
  cm: [
    { icon: Shield, nom: "Police secours", detail: "Agression, vol, trouble à l'ordre public", numero: "117" },
    { icon: Siren, nom: "Gendarmerie nationale", detail: "Urgences sécuritaires, notamment hors des villes", numero: "113" },
    { icon: Flame, nom: "Sapeurs-pompiers", detail: "Incendie, accident, secours aux personnes", numero: "118" },
    { icon: Ambulance, nom: "SAMU", detail: "Urgence médicale, transport sanitaire", numero: "119" },
  ],
};

/* Langues de l'interface (v94). Le français est la langue par défaut dans
   les pays francophones ; l'anglais peut être choisi depuis le menu. */
const LANGUES = [
  { id: "fr", nom: "Français", drapeau: "fr", detail: "Langue par défaut" },
  { id: "en", nom: "English", drapeau: "gb", detail: "Anglais" },
];

/* Services gratuits, communs à l'accueil (aperçu) et à l'écran « Services ».
   L'ordre est celui de l'aperçu sur l'accueil. Aucun n'est encore branché. */
const SERVICES_GRATUITS = [
  { id: "urgences", icon: Siren, label: "Numéros d'urgence", color: "#E4432F", bg: "#FCEAE7", route: "urgences" }, // disponible (v84), en tête (v85)
  { id: "pharmacies", icon: Pill, label: "Pharmacies de garde", color: C.green, bg: C.greenSoft },
  { id: "horoscope", icon: Sun, label: "Horoscope", color: C.orange, bg: C.orangeSoft },
  { id: "sport", icon: Trophy, label: "Résultats sportifs", color: C.blueLight, bg: C.blueSoft },
  { id: "citations", icon: Quote, label: "Citations du jour", color: C.blueLight, bg: C.blueSoft },
  { id: "travaux", icon: Construction, label: "Suivi des travaux", color: C.orange, bg: C.orangeSoft },
  { id: "devises", icon: Coins, label: "Convertisseur de devises", color: C.green, bg: C.greenSoft },
  { id: "tva", icon: Calculator, label: "Calcul de TVA", color: C.blueLight, bg: C.blueSoft },
];

/* Catégories mises en avant sur l'accueil, dans cet ordre. Les autres restent
   accessibles d'un geste. À remplacer par les plus consultées quand l'usage
   réel sera mesuré. */
const CATEGORIES_MISES_EN_AVANT = [
  "Administration publique",
  "Santé et action sociale",
  "Commerce et distribution",
  "Banque, assurance et microfinance",
  "Services aux particuliers",
  "Hôtellerie, restauration et tourisme",
  "Transport et logistique",
  "Éducation et formation",
  "Technologies et numérique",
];

/* Tri des catégories : alphabétique, « Autre » rejeté en fin de liste. */
function triSecteurs(a, b) {
  if (a === "Autre") return 1;
  if (b === "Autre") return -1;
  return a.localeCompare(b, "fr");
}

/* Comparaison souple : sans casse ni accents, pour que « hopital » trouve
   « hôpital » et « Evenement » trouve « Événement ». */
/* Recherche selon la langue choisie (v97) : en français, la saisie est
   comparée au texte français ; en anglais, à sa traduction anglaise
   (« hospital » trouve « Clinique et hôpital »). Un texte sans traduction,
   comme le nom d'une organisation, est comparé tel quel. */
function correspond(texte, q) {
  if (!texte) return false;
  const cible = langueUI === "en" ? TRADUCTIONS_EN[texte.replace(/\s+/g, " ").trim()] || texte : texte;
  const normCible = normaliser(cible);
  const normQ = normaliser(q);
  if (normCible.includes(normQ)) return true;
  if (normQ.includes("cabinait") && normCible.includes(normQ.replace(/cabinait/g, "cabinet"))) return true;
  const numCible = normCible.replace(/[^\d]/g, "");
  const numQ = normQ.replace(/[^\d]/g, "");
  if (numQ.length >= 4 && numCible.includes(numQ)) return true;
  return false;
}

function normaliser(texte) {
  return (texte || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/* Initiales servant de logo tant que la fiche n'en porte pas. */
function initiales(nom) {
  return nom
    .replace(/[^A-Za-zÀ-ÿ ]/g, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((m) => m[0].toUpperCase())
    .join("");
}

const MOYENS_PAIEMENT = [{ id: "visa", label: "Carte Visa", icon: CreditCard }];

/* ------------------------------------------------------------------ */
/*  SMALL UI PRIMITIVES                                                */
/* ------------------------------------------------------------------ */
function SoonBadge({ children = "Bientôt disponible" }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold"
      style={{ background: C.soonBg, color: C.soonText, fontFamily: FONT_BODY }}
    >
      <Clock size={11} /> {children}
    </span>
  );
}

function PilotBadge() {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-bold"
      style={{ background: C.greenSoft, color: C.green, fontSize: 10, fontFamily: FONT_HEAD }}
    >
      Gratuit · phase pilote
    </span>
  );
}

/* Badge d'offre : reflète le niveau réellement actif sur la ligne. Un dossier
   en cours d'examen ne le modifie pas — l'accusé de réception porte déjà
   cette information. */
function OffreBadge({ offre, cliquable }) {
  const map = {
    basic: { label: "Mobinawa-Basic", color: C.blueLight, bg: C.blueSoft },
    pro: { label: "Mobinawa-PRO", color: C.orange, bg: C.orangeSoft },
    business: { label: "Mobinawa-Business", color: C.blueDark, bg: C.blueSoft },
  };
  const m = map[offre] || map.basic;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-bold ${cliquable ? "px-3 py-1" : "px-3 py-1 text-xs"}`}
      style={{ background: m.bg, color: m.color, fontFamily: FONT_HEAD, whiteSpace: "nowrap", fontSize: cliquable ? 13 : undefined }}
    >
      <Circle size={7} fill={m.color} color={m.color} />
      {m.label}
      {/* Badge cliquable un peu réduit (v126) */}
      {cliquable && <ChevronRight size={13} className="-mr-1" />}
    </span>
  );
}

function Avatar({ name, color, size = 44 }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      className="flex items-center justify-center rounded-full font-bold shrink-0"
      style={{
        width: size,
        height: size,
        background: color + "22",
        color,
        fontFamily: FONT_HEAD,
        fontSize: size * 0.36,
      }}
    >
      {initials}
    </div>
  );
}

function IconTile({ icon, color, bg, size = 44 }) {
  return (
    <div
      className="flex items-center justify-center rounded-2xl shrink-0"
      style={{ width: size, height: size, background: bg, color }}
    >
      {icon}
    </div>
  );
}

/* Dessins des drapeaux, partagés par Flag (rectangle) et DrapeauRond. */
function DessinDrapeau({ code }) {
  const dessins = {
    /* Cameroun : vert, rouge, jaune, étoile jaune centrée */
    cm: (
      <>
        <rect width="7.34" height="16" fill="#007A5E" />
        <rect x="7.34" width="7.33" height="16" fill="#CE1126" />
        <rect x="14.67" width="7.33" height="16" fill="#FCD116" />
        <polygon
          fill="#FCD116"
          points="11,5 11.9,7.6 14.6,7.6 12.4,9.2 13.3,11.8 11,10.2 8.7,11.8 9.6,9.2 7.4,7.6 10.1,7.6"
        />
      </>
    ),
    /* France : bleu, blanc, rouge */
    fr: (
      <>
        <rect width="7.34" height="16" fill="#002395" />
        <rect x="7.34" width="7.33" height="16" fill="#FFFFFF" />
        <rect x="14.67" width="7.33" height="16" fill="#ED2939" />
      </>
    ),
    /* Royaume-Uni (v94) : sert de drapeau à la langue anglaise */
    gb: (
      <>
        <rect width="22" height="16" fill="#012169" />
        <path d="M0,0 L22,16 M22,0 L0,16" stroke="#FFFFFF" strokeWidth="3.2" />
        <path d="M0,0 L22,16 M22,0 L0,16" stroke="#C8102E" strokeWidth="1.2" />
        <path d="M11,0 V16 M0,8 H22" stroke="#FFFFFF" strokeWidth="5" />
        <path d="M11,0 V16 M0,8 H22" stroke="#C8102E" strokeWidth="3" />
      </>
    ),
    /* Congo : bande jaune en diagonale, vert au guindant, rouge au battant */
    cg: (
      <>
        <polygon fill="#009543" points="0,0 14,0 0,16" />
        <polygon fill="#FBDE4A" points="14,0 22,0 8,16 0,16" />
        <polygon fill="#DC241F" points="22,0 22,16 8,16" />
      </>
    ),
    /* Nigéria : vert, blanc, vert */
    ng: (
      <>
        <rect width="7.34" height="16" fill="#008751" />
        <rect x="7.34" width="7.33" height="16" fill="#FFFFFF" />
        <rect x="14.67" width="7.33" height="16" fill="#008751" />
      </>
    ),
  };  return dessins[code] || <rect width="22" height="16" fill={C.border} />;
}

function Flag({ code, size = 22 }) {
  const h = Math.round((size * 16) / 22);
  const cadre = {
    borderRadius: 3,
    border: `1px solid rgba(0,0,0,0.10)`,
    display: "block",
  };

  if (code === "cemac" || code === "monde") {
    return (
      <span className="shrink-0" style={{ lineHeight: 0, color: code === "cemac" ? C.green : C.blueLight }}>
        <Globe2 size={size - 3} />
      </span>
    );
  }



  return (
    <span className="shrink-0" style={{ lineHeight: 0 }}>
      <svg width={size} height={h} viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg" style={cadre}>
        <DessinDrapeau code={code} />
      </svg>
    </span>
  );
}

/* Drapeau découpé en rond, qui remplit tout le cercle (sélecteur de pays,
   v76). Le dessin est recadré au centre : l'étoile camerounaise reste au
   milieu. */
function DrapeauRond({ code, size = 42 }) {
  const dessin = { cm: true, fr: true, gb: true, cg: true, ng: true }[code];
  if (!dessin) return <Flag code={code} size={typeof size === "number" ? size - 12 : 22} />;
  return (
    <span className="block rounded-full overflow-hidden shrink-0" style={{ width: size, height: size, lineHeight: 0 }}>
      <svg width={size} height={size} viewBox="0 0 22 16" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <DessinDrapeau code={code} />
      </svg>
    </span>
  );
}

/* Les trois niveaux, dans l'ordre où on les gravit. Le compte ne redescend
   jamais : Basic vers PRO, puis PRO vers Business. */
const NIVEAUX = [
  { id: "basic", court: "Basic", accent: C.blueLight },
  { id: "pro", court: "PRO", accent: C.orange },
  { id: "business", court: "Business", accent: C.blueDark },
];

/* niveaux : les paliers réellement distribués par l'opérateur de l'utilisateur. */
function Progression({ courante, fond = C.card, niveaux = NIVEAUX }) {
  const rang = niveaux.findIndex((n) => n.id === courante);
  /* Depuis Basic, Business s'atteint aussi sans passer par PRO. */
  const raccourci = courante === "basic" && niveaux.length > 2;

  return (
    <div>
      <div className="flex items-center">
        {niveaux.map((n, i) => {
          const atteint = i <= rang;
          const actuel = i === rang;
          return (
            <React.Fragment key={n.id}>
              <div className="flex flex-col items-center" style={{ minWidth: 58 }}>
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 26,
                    height: 26,
                    background: atteint ? n.accent : "transparent",
                    border: `2px solid ${atteint ? n.accent : C.border}`,
                  }}
                >
                  {atteint && <Check size={13} color="#fff" />}
                </div>
                <span
                  className="mt-1 font-bold"
                  style={{
                    fontSize: 10,
                    color: actuel ? n.accent : atteint ? C.text : C.muted,
                    fontFamily: FONT_HEAD,
                  }}
                >
                  {n.court}
                </span>
                {actuel && <span style={{ fontSize: 9, color: C.muted }}>actuel</span>}
              </div>
              {i < niveaux.length - 1 && (
                <div className="flex-1 flex items-center" style={{ marginBottom: 18 }}>
                  <div
                    className="flex-1 rounded-full"
                    style={{ height: 2, background: i < rang ? niveaux[i + 1].accent : C.border }}
                  />
                  <ChevronRight
                    size={14}
                    color={i < rang ? niveaux[i + 1].accent : C.border}
                    style={{ marginLeft: -4 }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {raccourci && (
        <div className="relative" style={{ height: 22, marginTop: 2 }}>
          <div
            style={{
              position: "absolute",
              left: 13,
              right: 13,
              top: 9,
              borderTop: `1.5px dashed ${C.blueDark}55`,
            }}
          />
          <div style={{ position: "absolute", left: 12, top: 4, width: 2, height: 6, background: `${C.blueDark}55` }} />
          <div style={{ position: "absolute", right: 12, top: 4, color: `${C.blueDark}99`, lineHeight: 0 }}>
            <ChevronRight size={13} />
          </div>
          <span
            className="absolute font-bold"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              top: 1,
              fontSize: 9,
              color: C.blueDark,
              background: fond,
              padding: "0 6px",
              fontFamily: FONT_HEAD,
            }}
          >
            accès direct
          </span>
        </div>
      )}
    </div>
  );
}

function Card({ children, className = "", style = {}, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-4 ${className}`}
      style={{ background: C.card, border: `1px solid ${C.border}`, ...style }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <span className="text-xs font-bold uppercase tracking-wide" style={{ color: C.muted, fontFamily: FONT_BODY }}>
      {children}
    </span>
  );
}

function PrimaryButton({ children, onClick, color = C.blue, className = "", type = "button", disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-xl py-3 font-bold text-white text-sm active:scale-[0.98] transition-transform ${className}`}
      style={{ background: disabled ? "#B4C0AF" : color, fontFamily: FONT_HEAD }}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, onClick, color = C.blue, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl py-3 font-bold text-sm active:scale-[0.98] transition-transform ${className}`}
      style={{ background: color + "14", color, fontFamily: FONT_HEAD }}
    >
      {children}
    </button>
  );
}

function TextField({ label, value, onChange, placeholder, type = "text", required, error, hint }) {
  return (
    <label className="block mb-3">
      <span className="text-xs font-semibold mb-1 block" style={{ color: C.muted, fontFamily: FONT_BODY }}>
        {label} {required && <span style={{ color: C.orange }}>*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
        style={{
          border: `1.5px solid ${error ? C.orange : C.border}`,
          fontFamily: FONT_BODY,
          color: C.text,
          background: "#FAFBFC",
        }}
      />
      {hint && !error && (
        <span className="text-xs mt-1 block" style={{ color: C.muted }}>
          {hint}
        </span>
      )}
      {error && (
        <span className="text-xs mt-1 block" style={{ color: C.orange }}>
          {error}
        </span>
      )}
    </label>
  );
}

function TextArea({ label, value, onChange, placeholder, required, error, rows = 3 }) {
  return (
    <label className="block mb-3">
      <span className="text-xs font-semibold mb-1 block" style={{ color: C.muted, fontFamily: FONT_BODY }}>
        {label} {required && <span style={{ color: C.orange }}>*</span>}
      </span>
      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl px-3 py-2.5 text-sm outline-none resize-none"
        style={{
          border: `1.5px solid ${error ? C.orange : C.border}`,
          fontFamily: FONT_BODY,
          color: C.text,
          background: "#FAFBFC",
        }}
      />
      {error && (
        <span className="text-xs mt-1 block" style={{ color: C.orange }}>
          {error}
        </span>
      )}
    </label>
  );
}

/* Liste fermée : évite les libellés libres non exploitables côté back-office */
function SelectField({ label, value, onChange, options, placeholder = "Sélectionnez…", required, error, hint }) {
  return (
    <label className="block mb-3">
      <span className="text-xs font-semibold mb-1 block" style={{ color: C.muted, fontFamily: FONT_BODY }}>
        {label} {required && <span style={{ color: C.orange }}>*</span>}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
        style={{
          border: `1.5px solid ${error ? C.orange : C.border}`,
          fontFamily: FONT_BODY,
          color: value ? C.text : C.muted,
          background: "#FAFBFC",
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {hint && !error && (
        <span className="text-xs mt-1 block" style={{ color: C.muted }}>
          {hint}
        </span>
      )}
      {error && (
        <span className="text-xs mt-1 block" style={{ color: C.orange }}>
          {error}
        </span>
      )}
    </label>
  );
}

/* Donnée déjà vérifiée à l'onboarding CIRPACK : affichée, jamais ressaisie. */
function LockedField({ label, value, hint }) {
  return (
    <div className="mb-3">
      <span className="text-xs font-semibold mb-1 block" style={{ color: C.muted, fontFamily: FONT_BODY }}>
        {label}
      </span>
      <div
        className="w-full flex items-center gap-2 rounded-xl px-3 py-2.5"
        style={{ border: `1.5px solid ${C.border}`, background: C.soonBg }}
      >
        <span className="text-sm font-semibold flex-1" style={{ color: C.text, fontFamily: FONT_BODY }}>
          {value}
        </span>
        <Lock size={14} color={C.muted} />
      </div>
      {hint && (
        <span className="text-xs mt-1 block" style={{ color: C.muted }}>
          {hint}
        </span>
      )}
    </div>
  );
}

/* Pièce jointe simulée : la validation humaine s'appuie sur ce dépôt */
function FileField({ label, value, onChange, required, error, hint, accent = C.orange, fileName = "piece_identite.jpg" }) {
  return (
    <div className="mb-3">
      <span className="text-xs font-semibold mb-1 block" style={{ color: C.muted, fontFamily: FONT_BODY }}>
        {label} {required && <span style={{ color: C.orange }}>*</span>}
      </span>
      <button
        type="button"
        onClick={() => onChange(value ? "" : fileName)}
        className="w-full flex items-center gap-3 rounded-xl px-3 py-3 text-left"
        style={{
          border: `1.5px dashed ${error ? C.orange : value ? accent : C.border}`,
          background: value ? accent + "0F" : "#FAFBFC",
        }}
      >
        <IconTile
          icon={value ? <Check size={17} /> : <Camera size={17} />}
          color={value ? accent : C.muted}
          bg={value ? accent + "1A" : "#EEF1F5"}
          size={38}
        />
        <span className="text-sm font-semibold flex-1" style={{ color: value ? C.text : C.muted, fontFamily: FONT_BODY }}>
          {value ? value : "Prendre une photo ou choisir un fichier"}
        </span>
        {value && <X size={16} color={C.muted} />}
      </button>
      {hint && !error && (
        <span className="text-xs mt-1 block" style={{ color: C.muted }}>
          {hint}
        </span>
      )}
      {error && (
        <span className="text-xs mt-1 block" style={{ color: C.orange }}>
          {error}
        </span>
      )}
    </div>
  );
}

function AlertBanner({ missing }) {
  if (!missing || missing.length === 0) return null;
  return (
    <div
      className="flex items-start gap-2 rounded-xl px-3 py-2.5 mb-3"
      style={{ background: C.alertBg, border: `1px solid ${C.alertBorder}` }}
    >
      <Siren size={15} color={C.alertText} className="mt-0.5 shrink-0" />
      <span className="text-xs font-medium" style={{ color: C.alertText, fontFamily: FONT_BODY }}>
        Champs obligatoires manquants : {missing.join(", ")}.
      </span>
    </div>
  );
}

/* Encart « la règle » : rappelle le rattachement unique par ligne */
function RuleCallout({ children, icon = <Lock size={14} /> }) {
  return (
    <div className="flex items-start gap-2 rounded-xl px-3 py-2.5" style={{ background: C.blueSoft }}>
      <span style={{ color: C.blue }} className="mt-0.5 shrink-0">
        {icon}
      </span>
      <span className="text-xs leading-relaxed" style={{ color: C.blueDark, fontFamily: FONT_BODY }}>
        {children}
      </span>
    </div>
  );
}

function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-[80] px-4 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg flex items-center gap-2"
      style={{ background: C.blue, bottom: 40, fontFamily: FONT_BODY }}
    >
      <Check size={15} /> {toast}
    </div>
  );
}



/* ==================================================================== */
/*  APP : machine à états du parcours                                    */
/*                                                                       */
/*  offre   : null | "pro" | "business"   (une seule active à la fois)   */
/*  statut  : "aucune" | "en_attente" | "active"                         */
/*  lignes  : [{ id, msisdn, rattachement, numero, soldeCompte,          */
/*              soldeAppel, statut }]                                    */
/*            rattachement ∈ { "perso", "pro", "business" }              */
/*            → une ligne porte UN SEUL rattachement                     */
/* ==================================================================== */
export default function MobinawaApp() {
  /* --- session ouverte en amont : l'entrée commune (numéro + OTP WhatsApp ou SMS)
     est assurée par la plateforme CIRPACK. L'app démarre sur un compte déjà
     activé et récupère l'identité vérifiée. --- */
  const [compte, setCompte] = useState(SESSION_CIRPACK);
  /* Déduit du préfixe du numéro : conditionne les offres et la devise. */
  const operateur = operateurDe(compte.msisdn);

  /* --- offre souscrite --- */
  const [offre, setOffre] = useState(null);
  const [statut, setStatut] = useState("aucune");
  const [demande, setDemande] = useState(null); // dossier déposé, en attente de revue humaine
  const [entreprise, setEntreprise] = useState(null);

  /* --- lignes mobiles --- */
  const [lignes, setLignes] = useState([
    { id: 1, msisdn: SESSION_CIRPACK.msisdn, rattachement: "perso", numero: null, soldeCompte: null, soldeAppel: null, statut: "active" },
  ]);

  /* --- journal des recharges : crédit de bienvenue puis rechargements --- */
  const [recharges, setRecharges] = useState([]);
  /* Prélèvements de l'abonnement mensuel du numéro, sur le crédit du compte. */
  const [prelevements, setPrelevements] = useState([]);

  /* --- fil d'actualité de l'app --- */
  const [notifications, setNotifications] = useState(NOTIFICATIONS_SEED);
  const nonLues = notifications.filter((n) => !n.lu).length;

  /* --- navigation & UI --- */
  const [screen, setScreen] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [rechargeTarget, setRechargeTarget] = useState(null);
  const [transfertTarget, setTransfertTarget] = useState(null);
  /* Pays d'obtention du numéro PRO. Imposé pour une couverture locale, choisi
     par l'utilisateur diaspora avant d'entrer dans le parcours. */
  const [paysPro, setPaysPro] = useState(null);
  /* Annuaire ProCom consulté, partagé par l'accueil et l'écran ProCom. */
  const [paysProcom, setPaysProcom] = useState(null);
  const [procomFiltre, setProcomFiltre] = useState({ secteur: "", recherche: "" });
  const annuaireActif = paysProcom || annuaireParDefaut(operateur);
  const [compteSupprime, setCompteSupprime] = useState(null);
  const [welcomeOpen, setWelcomeOpen] = useState(true);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  /* Accueil (v51) : plus de bandeau d'en-tête. La rangée du haut (menu,
     bouton de souscription centré, notifications, logo) est posée sur la
     photo du pays et défile avec elle. Sa hauteur est mesurée pour que la
     photo passe dessous. Les autres écrans n'ont plus d'en-tête (v52). */
  const headerRef = useRef(null);
  const [hauteurHeader, setHauteurHeader] = useState(64);
  /* Chaque écran s'ouvre en haut de page, sur son titre et sa flèche. */
  const cadreRef = useRef(null);
  useLayoutEffect(() => {
    if (cadreRef.current) cadreRef.current.scrollTop = 0;
  }, [screen]);
  useLayoutEffect(() => {
    const mesurer = () => headerRef.current && setHauteurHeader(headerRef.current.offsetHeight);
    mesurer();
    window.addEventListener("resize", mesurer);
    return () => window.removeEventListener("resize", mesurer);
  });

  const ligneActive = lignes[0] || null;
  /* L'offre effective dépend de la ligne active : une ligne PRO et une ligne
     de flotte Business cohabitent sur le compte, mais jamais sur la même ligne. */
  const offreActive = ligneActive && ligneActive.rattachement !== "perso" ? ligneActive.rattachement : offre;
  const offreAffichee = statut === "active" ? offreActive || "basic" : "basic";

  function showToast(msg) {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  }

  /* Historique de navigation pour la flèche de retour. Revenir à l'accueil
     le vide ; l'envoi d'un formulaire le vide aussi, pour que la flèche de
     l'accusé de réception ne rouvre pas le formulaire déjà envoyé. */
  const [historique, setHistorique] = useState([]);
  /* Onglet demandé à l'ouverture de la grille tarifaire (null : par défaut). */
  const [tarifsOffre, setTarifsOffre] = useState(null);
  const [paramsEcran, setParamsEcran] = useState(null);
  const [langue, setLangue] = useState("fr"); // langue de l'interface (v94)
  /* Compte Mobinawa-Business : vue de démonstration (v131), collaborateur
     (fiche Basic) ou Manager (crédit d'appel et reporting des numéros PRO). */
  const [vueBusiness, setVueBusiness] = useState("collaborateur");
  langueUI = langue; // lue par creerElement() et tr() pendant le rendu (v95)
  /* Traduction directe de la page en anglais (filet de sécurité, v98). */
  const appRef = useRef(null);
  useLayoutEffect(() => {
    if (langue !== "en" || !appRef.current || typeof MutationObserver === "undefined") return;
    const racine = appRef.current;
    traduirePage(racine);
    let enCours = false;
    const obs = new MutationObserver(() => {
      if (enCours) return;
      enCours = true;
      traduirePage(racine);
      obs.takeRecords();
      enCours = false;
    });
    obs.observe(racine, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRIBUTS_TRADUITS });
    return () => obs.disconnect();
  }, [langue]);

  /* params : réglage passé à l'écran ouvert, par exemple le filtre de
     l'historique complet (v91). */
  function goTo(s, params = null) {
    setParamsEcran(params);
    if (s === "home" || (s === "attente" && (screen === "subscribePro" || screen === "subscribeBusiness"))) {
      setHistorique([]);
    } else if (s !== screen) {
      setHistorique((h) => [...h, screen]);
    }
    setScreen(s);
    setTarifsOffre(null);
    setMenuOpen(false);
    if (s === "notifications") setNotifications((prev) => prev.map((n) => ({ ...n, lu: true })));
  }

  function retour() {
    const precedent = historique[historique.length - 1] || "home";
    setHistorique((h) => h.slice(0, -1));
    setScreen(precedent);
  }

  /* Ouvre l'annuaire sur une catégorie ou une recherche venue de l'accueil. */
  function ouvrirProcom(filtre) {
    setProcomFiltre({ secteur: "", recherche: "", ficheId: null, ...filtre });
    goTo("procom");
  }

  /* --- dépôt d'un dossier : rien n'est activé avant la revue humaine ---
     La montée de niveau va dans un seul sens : Basic vers PRO, puis PRO vers
     Business. Une migration depuis un compte PRO déjà actif laisse le numéro
     PRO fonctionner pendant l'examen du dossier. --- */
  /* Ajoute une entrée en tête du fil de notifications. */
  function notifier(categorie, titre, texte) {
    setNotifications((prev) => [
      {
        id: Math.max(0, ...prev.map((n) => n.id)) + 1,
        categorie,
        titre,
        texte,
        date: horodatage().split(" · ")[0],
        lu: false,
      },
      ...prev,
    ]);
  }

  function deposerDemande(type, data) {
    const migration = type === "business" && offre === "pro" && statut === "active";
    setDemande({ type, data, depose: "à l'instant", migration });
    if (type === "business") setEntreprise({ nom: data.entreprise, secteur: data.secteur });
    if (!migration) {
      setOffre(type);
      setStatut("en_attente");
    }
    /* Le même accusé de réception est archivé dans le fil, pour que
       l'utilisateur le retrouve après avoir quitté l'écran. */
    const texte = accuseReception(type, operateur);
    notifier(
      "Actualité",
      `Demande ${texte.offreLabel} enregistrée`,
      `${texte.intro} ${texte.suite} ${texte.relance}`
    );
    goTo("attente");
  }

  /* --- validation par les équipes Mobinawa (simulée en démo) --- */
  function validerDemande() {
    const migration = demande && demande.migration;

    if (!migration && offre === "pro") {
      setLignes((prev) =>
        prev.map((l) =>
          l.id === 1
            ? {
                ...l,
                rattachement: "pro",
                numero: "+237 233 47 12 08",
                soldeCompte: 0,
                soldeAppel: operateur.creditAppelOffert,
                prixMinute: prixMinuteDe(operateur, operateur.creditAppelOffert),
                moisOffert: true,
              }
            : l
        )
      );
      setStatut("active");
      setRecharges([
        {
          id: 1,
          montant: operateur.creditAppelOffert,
          moyen: "Crédit d'appel offert",
          date: horodatage(),
          reference: "MOB-OFFERT-0001",
          statut: "Offert",
        },
      ]);
      setDemande(null);
      notifier(
        "Mise à jour",
        "Votre numéro Mobinawa-PRO est actif",
        `Votre demande a été validée et le numéro +237 233 47 12 08 vous est attribué. ` +
          `${somme(operateur.creditAppelOffert, operateur)} de crédit d'appel vous sont offerts, ainsi ` +
          `qu'un mois d'abonnement gratuit. Un e-mail vous a été adressé avec le lien d'accès à votre ` +
          `compte web depuis un PC.`
      );
      showToast(
        `Numéro PRO attribué · ${somme(operateur.creditAppelOffert, operateur)} d'appel et un mois offerts`
      );
      goTo("home");
      return;
    }

    /* Business, par création directe ou par migration depuis PRO.
       En migration, le numéro PRO est conservé et bascule sur l'offre
       Business avec son crédit : rien n'est perdu, rien n'est réattribué. */
    setLignes((prev) =>
      prev.map((l) =>
        l.id === 1
          ? {
              ...l,
              rattachement: "business",
              numero: migration ? l.numero : "+237 233 50 88 04",
              soldeCompte: migration ? l.soldeCompte : null,
              soldeAppel: migration ? l.soldeAppel : null,
              moisOffert: migration ? l.moisOffert : false,
            }
          : l
      )
    );
    setOffre("business");
    setStatut("active");
    setDemande(null);
    notifier(
      "Mise à jour",
      "Votre solution Mobinawa-Business est déployée",
      migration
        ? "Votre demande a été validée. Votre numéro PRO devient le numéro officiel de votre organisation et votre crédit est conservé. Le Manager de l'instance a reçu un e-mail contenant le lien d'accès à son compte web depuis un PC."
        : "Votre demande a été validée et votre instance est déployée. Le Manager de l'instance a reçu un e-mail contenant le lien d'accès à son compte web depuis un PC, et chaque collaborateur identifié par une adresse e-mail a reçu le sien. Les collaborateurs identifiés par un numéro mobile activent leur compte depuis l'application avec le code OTP reçu par WhatsApp ou SMS."
    );
    showToast(
      migration
        ? "Migration effectuée · numéro et crédit conservés"
        : "Compte Mobinawa-Business actif"
    );
    /* L'app n'a plus d'écran d'équipe : la gestion de l'instance se fait
       dans l'espace Manager, sur le web. On revient donc à l'accueil. */
    goTo("home");
  }

  function annulerDemande() {
    const migration = demande && demande.migration;
    setDemande(null);
    if (migration) {
      /* Le compte PRO reprend sa place, rien n'a changé */
      setEntreprise(null);
      showToast("Demande de migration retirée");
    } else {
      setOffre(null);
      setStatut("aucune");
      setEntreprise(null);
    }
    goTo("home");
  }

  /* --- suppression du compte par l'opérateur ---
     Un compte PRO ou Business supprimé ne redescend pas au niveau Basic :
     il disparaît. Retrouver un profil Mobinawa-Basic suppose une nouvelle
     inscription depuis le début. --- */
  function simulerSuppression(motif) {
    setCompteSupprime(motif);
    setMenuOpen(false);
  }

  /* --- démonstration : changer d'opérateur ---
     L'opérateur découle du numéro. Le basculer revient donc à ouvrir une autre
     session, d'où la remise à zéro complète du compte. --- */
  function changerOperateur(id) {
    const cible = OPERATEURS_DEMO.find((o) => o.id === id);
    if (!cible || cible.id === operateur.id) return;
    const msisdn = cible.demoMsisdn;
    setCompte((c) => ({ ...c, msisdn }));
    setCompteSupprime(null);
    setOffre(null);
    setStatut("aucune");
    setDemande(null);
    setEntreprise(null);
    setRecharges([]);
    setPrelevements([]);
    setPaysPro(null);
    setPaysProcom(null);
    setLignes([{ id: 1, msisdn, rattachement: "perso", numero: null, soldeCompte: null, soldeAppel: null, statut: "active" }]);
    setScreen("home");
    setHistorique([]);
    showToast(`Session ${cible.nom}`);
  }

  function reinscrire() {
    setCompteSupprime(null);
    setOffre(null);
    setStatut("aucune");
    setDemande(null);
    setEntreprise(null);
    setRecharges([]);
    setPrelevements([]);
    setLignes([
      { id: 1, msisdn: compte.msisdn, rattachement: "perso", numero: null, soldeCompte: null, soldeAppel: null, statut: "active" },
    ]);
    setScreen("home");
    setHistorique([]);
    setWelcomeOpen(true);
  }

  /* --- une session = une ligne ---
     Deux lignes ne cohabitent pas dans une même session Mobinawa : la ligne
     est l'identifiant du compte. Pour utiliser une seconde ligne (typiquement
     la ligne de flotte fournie par l'employeur), l'utilisateur ouvre un compte
     distinct avec ce numéro comme identifiant. --- */

  /* La recharge alimente le crédit du compte. Le crédit d'appel, détenu par
     SIPPY, s'alimente ensuite par transfert depuis ce crédit de compte. */
  function recharger(ligneId, montant, moyen) {
    setLignes((prev) =>
      prev.map((l) => (l.id === ligneId ? { ...l, soldeCompte: (l.soldeCompte || 0) + montant } : l))
    );
    setRecharges((prev) => [
      {
        id: Math.max(0, ...prev.map((r) => r.id)) + 1,
        montant,
        moyen,
        date: horodatage(),
        reference: "MOB-" + String(Date.now()).slice(-8),
        statut: "Confirmée",
      },
      ...prev,
    ]);
    setRechargeTarget(null);
    showToast(`Recharge de ${somme(montant, operateur)} effectuée`);
  }

  /* Prélèvement de l'abonnement mensuel du numéro sur le crédit du compte,
     en début de mois. Simulé à la demande dans le prototype. */
  function prelever(ligneId) {
    const ligne = lignes.find((l) => l.id === ligneId);
    if (!ligne) return;
    const montant = abonnementMensuelDe(operateur);
    const dispo = ligne.soldeCompte || 0;
    /* Le mois offert à l'activation absorbe le premier prélèvement. */
    if (ligne.moisOffert) {
      setLignes((prev) => prev.map((l) => (l.id === ligneId ? { ...l, moisOffert: false } : l)));
      /* Le mois offert figure aussi dans l'historique, à 0, pour que
         l'usager le retrouve (v88). */
      setPrelevements((prev) => [
        {
          id: prev.length + 1,
          date: horodatage(),
          montant: 0,
          reste: dispo,
          offert: true,
          reference: `MOB-ABO-${String(prev.length + 1).padStart(4, "0")}`,
          numero: ligne.numero,
        },
        ...prev,
      ]);
      notifier(
        "Mise à jour",
        "Votre mois d'abonnement offert a été appliqué",
        `Aucun prélèvement ce mois-ci : votre premier mois d'abonnement est offert. Le prochain ` +
          `prélèvement de ${somme(montant, operateur)} interviendra au début du mois suivant.`
      );
      showToast("Mois offert appliqué · aucun prélèvement");
      return;
    }
    /* L'abonnement est reconduit chaque mois quoi qu'il arrive : si le crédit
       du compte ne suffit pas, il passe en négatif et reste à régulariser. */
    const reste = dispo - montant;
    setLignes((prev) => prev.map((l) => (l.id === ligneId ? { ...l, soldeCompte: reste } : l)));
    setPrelevements((prev) => [
      {
        id: prev.length + 1,
        date: horodatage(),
        montant,
        reste,
        reference: `MOB-ABO-${String(prev.length + 1).padStart(4, "0")}`,
        numero: ligne.numero,
      },
      ...prev,
    ]);
    if (reste < 0) {
      notifier(
        "Maintenance",
        "Votre crédit de compte est à découvert",
        `${somme(montant, operateur)} ont été prélevés au titre de l'abonnement mensuel de votre numéro ` +
          `PRO. Votre crédit de compte étant insuffisant, il affiche désormais ` +
          `${somme(reste, operateur)}. Rechargez-le pour le régulariser : le prélèvement du mois prochain ` +
          `s'ajoutera à ce découvert.`
      );
      showToast(`Abonnement prélevé · compte à ${somme(reste, operateur)}`);
      return;
    }
    notifier(
      "Mise à jour",
      "Abonnement mensuel prélevé",
      `${somme(montant, operateur)} ont été prélevés sur le crédit de votre compte au titre de ` +
        `l'abonnement mensuel de votre numéro PRO. Il vous reste ${somme(reste, operateur)}.`
    );
    showToast(`Abonnement de ${somme(montant, operateur)} prélevé`);
  }

  /* Transfert du crédit du compte vers le crédit d'appel prépayé. */
  function transferer(ligneId, montant) {
    setLignes((prev) =>
      prev.map((l) =>
        l.id === ligneId
          ? {
              ...l,
              soldeCompte: Math.max(0, (l.soldeCompte || 0) - montant),
              soldeAppel: (l.soldeAppel || 0) + montant,
              /* Le palier se recalcule sur le solde total après transfert. */
              prixMinute: prixMinuteDe(operateur, (l.soldeAppel || 0) + montant),
            }
          : l
      )
    );
    setTransfertTarget(null);
    showToast(`${somme(montant, operateur)} transférés vers votre crédit d'appel`);
    /* Le toast ne mentionne pas le palier : la modale l'a annoncé avant confirmation. */
  }

  const attente = statut === "en_attente";

  /* Un compte supprimé ne revient pas : il faut repasser par l'inscription */
  if (compteSupprime) {
    return <CompteSupprimeScreen motif={compteSupprime} onReinscrire={reinscrire} />;
  }

  return (
    <div
      ref={appRef}
      key={langue /* changer de langue reconstruit l'affichage (v98) */}
      className="w-full flex items-start justify-center hauteur-ecran"
      style={{ overflow: "hidden", background: "#DDE5D9", fontFamily: FONT_BODY }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        /* Hauteur de l'écran visible (v82) : 100dvh suit la barre d'adresse
           des navigateurs mobiles, que 100vh ignore. Avec 100vh, la page
           entière pouvait glisser et emporter la ligne de titre figée. */
        .hauteur-ecran { height: 100vh; height: 100dvh; }
        ::-webkit-scrollbar { display: none; }
        .text-white\\/60 { color: rgba(255,255,255,0.6); }
        .text-white\\/70 { color: rgba(255,255,255,0.7); }
        .text-white\\/85 { color: rgba(255,255,255,0.85); }
        .bg-white\\/10 { background-color: rgba(255,255,255,0.10); }
        .bg-black\\/40 { background-color: rgba(0,0,0,0.40); }
        .bg-black\\/5 { background-color: rgba(0,0,0,0.05); }
        .z-\\[80\\] { z-index: 80; }
        .active\\:bg-white\\/10:active { background-color: rgba(255,255,255,0.10); }
        .active\\:bg-black\\/5:active { background-color: rgba(0,0,0,0.05); }
        .hero-plein { min-height: 100vh; min-height: 100dvh; }
        /* Toujours en clair (v106) : certains navigateurs, comme Samsung
           Internet ou Chrome avec le mode sombre automatique, assombrissent
           d'office les sites qui ne déclarent rien. On déclare un thème clair
           uniquement, et la règle sombre ci-dessous garde les couleurs claires
           pour signaler que le site gère lui-même le mode sombre. */
        :root { color-scheme: only light; }
        @media (prefers-color-scheme: dark) {
          :root, html, body { color-scheme: only light; background: #DDE5D9; color: #18221A; }
        }
        /* Pas de zoom automatique sur iPhone quand un champ prend le focus
           (v84) : Safari zoome sous 16 px de taille de texte. */
        input, textarea, select { font-size: 16px !important; }
        /* Accueil ajusté à la hauteur de l'écran (v83) : écarts, tuiles et
           textes rétrécissent sur les écrans bas pour que la photo et son
           contenu tiennent exactement dans l'écran visible. */
        .hero-plein {
          --ecart: clamp(3px, 1.6dvh, 16px);
          --tuile: clamp(34px, 6.6dvh, 60px);
          --libelle: clamp(10px, 1.45dvh, 12px);
          --titre-section: clamp(14px, 2.2dvh, 18px);
          --recherche: clamp(36px, 5.4dvh, 46px);
        }
        .tuile-icone svg { width: 52%; height: 52%; }
        /* Rangée flèche + titre + logo : figée en haut au défilement (v79),
           pour revenir en arrière ou à l'accueil à tout moment. */
        .rangee-titre {
          position: sticky; top: 0; z-index: 25;
          margin: -16px -16px 0; padding: 16px 16px 8px;
          background: ${C.bg};
        }
        .active\\:scale-\\[0\\.98\\]:active { transform: scale(0.98); }
        .active\\:scale-\\[0\\.99\\]:active { transform: scale(0.99); }
      `}</style>

      {/* Le cadre est le conteneur de défilement : c'est ce qui permet au
          header de rester collé en haut pendant le scroll. */}
      <div
        ref={cadreRef}
        className="relative w-full hauteur-ecran"
        style={{
          maxWidth: 430,
          overflowY: "auto",
          overflowX: "hidden",
          background: C.bg,
          boxShadow: "0 0 40px rgba(0,0,0,0.15)",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* ---------- RANGÉE DU HAUT DE L'ACCUEIL ----------
            Seul l'accueil l'affiche, posée sur la photo du pays. Les autres
            écrans n'ont plus d'en-tête : leur titre porte la flèche de retour. */}
        {screen === "home" && (
        <div ref={headerRef} className="relative z-30 px-4 pt-4 pb-3">
          {/* Trois colonnes, les deux côtés de même largeur : la colonne
              centrale reste centrée sur l'écran. Sur un écran étroit, le
              libellé du bouton passe sur deux lignes plutôt que de déborder. */}
          <div className="grid items-center gap-1" style={{ gridTemplateColumns: "74px minmax(0, 1fr) 74px" }}>
            <div className="flex justify-start">
              <button onClick={() => setMenuOpen(true)} aria-label="Menu" className="p-1.5 -ml-1.5 rounded-full active:bg-white/10 shrink-0">
                <MenuIcon size={22} color="#fff" />
              </button>
            </div>

            <div className="min-w-0 flex justify-center">
              {/* Le badge du niveau de compte remplace le bouton de souscription
                  (v125) et en reprend le rôle : Basic ouvre « Faire évoluer mon
                  compte », un compte actif (PRO ou collaborateur Business)
                  ouvre son compte, une demande en cours son accusé. */}
              <button
                onClick={() => goTo(statut === "active" ? "account" : statut === "en_attente" ? "attente" : "evolution")}
                aria-label="Mon niveau de compte"
                className="active:scale-[0.97] transition-transform"
                style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.25)", borderRadius: 999 }}
              >
                <OffreBadge offre={offreAffichee} cliquable />
              </button>
            </div>

            <div className="flex items-center justify-end gap-1.5">
            <button
              onClick={() => goTo("notifications")}
              aria-label={`Notifications${nonLues ? ` · ${nonLues} non lues` : ""}`}
              className="relative p-1.5 rounded-full active:bg-white/10 shrink-0"
            >
              <Bell size={20} color="#fff" />
              {nonLues > 0 && (
                <span
                  className="absolute flex items-center justify-center rounded-full font-bold"
                  style={{
                    top: 1,
                    right: 0,
                    minWidth: 15,
                    height: 15,
                    padding: "0 3px",
                    background: C.orange,
                    color: "#fff",
                    fontSize: 9,
                    fontFamily: FONT_HEAD,
                    border: "1.5px solid #fff",
                  }}
                >
                  {nonLues}
                </span>
              )}
            </button>

            <button
              onClick={() => goTo("home")}
              aria-label="Retour à l'accueil Mobinawa"
              className="p-1 -mr-1 rounded-xl active:scale-95 transition-transform shrink-0"
            >
              {/* Logo sans fond blanc (v76) : son fond est transparent */}
              <img src={LOGO_SRC} alt="Mobinawa" style={{ width: 32, height: 30, display: "block" }} />
            </button>
            </div>
          </div>

          {/* Le badge est monté dans la rangée du haut (v125) */}
        </div>
        )}

        {/* ---------- SCREEN CONTENT ---------- */}
        <RetourContext.Provider value={retour}>
        <AccueilContext.Provider value={() => goTo("home")}>
        <div className="px-4 pt-4 pb-8">
          {screen === "home" && (
            <HomeScreen
              goTo={goTo}
              operateur={operateur}
              onChangerOperateur={changerOperateur}
              statut={statut}
              lignes={lignes}
              ligneActive={ligneActive}
              annuaire={annuaireActif}
              onChangerPays={setPaysProcom}
              onOuvrirProcom={ouvrirProcom}
              secteurActif={procomFiltre.secteur}
              hauteurHeader={hauteurHeader}
              businessActif={statut === "active" && ligneActive && ligneActive.rattachement === "business"}
              vueBusiness={vueBusiness}
              onVueBusiness={(v) => {
                setVueBusiness(v);
                showToast(v === "manager" ? "Vue Manager" : "Vue collaborateur");
              }}
            />
          )}
          {screen === "evolution" && <EvolutionScreen goTo={goTo} operateur={operateur} />}
          {screen === "attente" && (
            <AttenteScreen
              demande={demande}
              goTo={goTo}
              operateur={operateur}
              onValider={validerDemande}
              onAnnuler={annulerDemande}
            />
          )}
          {screen === "account" && (
            <AccountScreen
              compte={compte}
              offre={offre}
              statut={statut}
              lignes={lignes}
              ligneActive={ligneActive}
              goTo={goTo}
              operateur={operateur}
              showToast={showToast}
              onRecharge={(id) => setRechargeTarget(id)}
              onTransferer={(id) => setTransfertTarget(id)}
              onPrelever={prelever}
              onOpenWelcome={() => setWelcomeOpen(true)}
              prelevements={prelevements}
              vueBusiness={vueBusiness}
              entreprise={entreprise}
            />
          )}
          {screen === "factures" && (
            <FacturesScreen
              recharges={recharges}
              prelevements={prelevements}
              operateur={operateur}
              goTo={goTo}
            />
          )}
          {screen === "recharges" && (
            <RechargesScreen
              recharges={recharges}
              lignes={lignes}
              onRecharge={(id) => setRechargeTarget(id)}
              goTo={goTo}
              operateur={operateur}
            />
          )}
          {screen === "tarifs" && (
            <TarifsScreen lignes={lignes} statut={statut} operateur={operateur} offreInitiale={tarifsOffre} />
          )}
          {screen === "notifications" && <NotificationsScreen notifications={notifications} />}
          {screen === "about" && <AboutScreen />}
          {screen === "services" && <ServicesScreen goTo={goTo} />}
          {screen === "urgences" && <UrgencesScreen pays={annuaireActif} />}
          {screen === "categories" && (
            <CategoriesScreen annuaire={annuaireActif} onChoisir={(secteur) => ouvrirProcom({ secteur })} />
          )}
          {screen === "conso" && <ConsoScreen lignes={lignes} operateur={operateur} />}
          {screen === "langue" && (
            <LangueScreen
              langue={langue}
              onChoisir={(id) => {
                setLangue(id);
                showToast(id === "en" ? "Language: English" : "Langue : Français");
              }}
            />
          )}
          {screen === "historique" && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 rangee-titre">
                <BoutonRetour />
                <IconeEcran icon={History} />
                <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                  Historique
                </h2>
                <LogoAccueil />
              </div>
              <AppelsEtDepenses
                goTo={goTo}
                facture={true}
                prelevements={prelevements}
                operateur={operateur}
                complet={true}
                filtreInitial={paramsEcran && paramsEcran.filtre}
              />
            </div>
          )}
          {screen === "procom" && (
            <ProcomScreen
              pays={annuaireActif}
              onChangerPays={setPaysProcom}
              filtreInitial={procomFiltre}
              onFiltreChange={setProcomFiltre}
            />
          )}
          {screen === "subscribePro" && (
            <SubscribeProForm
              onSubmit={(data) => deposerDemande("pro", data)}
              msisdn={compte.msisdn}
              operateur={operateur}
              paysPro={paysPro}
            />
          )}
          {screen === "subscribeBusiness" && (
            <SubscribeBusinessForm
              onSubmit={(data) => deposerDemande("business", data)}
              migration={offre === "pro" && statut === "active"}
              msisdn={compte.msisdn}
            />
          )}
          {screen === "moreInfoPro" && (
            <MoreInfoProScreen
              goTo={goTo}
              operateur={operateur}
              paysPro={paysPro}
              onChoisirPays={setPaysPro}
              bloque={offre === "business" && statut !== "aucune"}
            />
          )}
          {screen === "infoPro" && (
            <MoreInfoProScreen
              mode="info"
              goTo={goTo}
              operateur={operateur}
              paysPro={paysPro}
              onChoisirPays={setPaysPro}
              bloque={offre === "business" && statut !== "aucune"}
            />
          )}
          {screen === "moreInfoBusiness" && (
            <MoreInfoBusinessScreen
              goTo={goTo}
              migrationPossible={offre === "pro" && statut === "active"}
              operateur={operateur}
              onTarifs={() => {
                goTo("tarifs");
                setTarifsOffre("business");
              }}
            />
          )}
        </div>
        </AccueilContext.Provider>
        </RetourContext.Provider>

        {/* ---------- OVERLAYS ---------- */}
        {menuOpen && (
          <SideMenu
            onClose={() => setMenuOpen(false)}
            goTo={goTo}
            statut={statut}
            lignes={lignes}
            ligneActive={ligneActive}
            onSupprimer={simulerSuppression}
            langue={langue}
          />
        )}
        {welcomeOpen && <WelcomeModal onClose={() => setWelcomeOpen(false)} />}
        {transfertTarget !== null && (
          <TransfertModal
            operateur={operateur}
            ligne={lignes.find((l) => l.id === transfertTarget)}
            onClose={() => setTransfertTarget(null)}
            onConfirm={(montant) => transferer(transfertTarget, montant)}
          />
        )}
        {rechargeTarget !== null && (
          <RechargeModal
            operateur={operateur}
            ligne={lignes.find((l) => l.id === rechargeTarget)}
            onClose={() => setRechargeTarget(null)}
            onConfirm={(montant, moyen) => recharger(rechargeTarget, montant, moyen)}
          />
        )}

        <Toast toast={toast} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SIDE MENU (drawer)                                                  */
/* ------------------------------------------------------------------ */
function SideMenu({ onClose, goTo, statut, lignes, ligneActive, onSupprimer, langue = "fr" }) {
  /* L'espace client est celui du titulaire d'un numéro PRO. Sur un compte
     Business, il relève du Manager, sur la plateforme web. */
  const espaceClient =
    statut === "active" && ligneActive && ligneActive.rattachement === "pro";
  const rows = [
    /* « Accueil » retiré (v84) : le menu ne s'ouvre que depuis l'accueil. */
    {
      icon: UserCircle2,
      label: espaceClient ? "Mon espace client" : "Mon compte Mobinawa",
      action: () => goTo("account"),
    },
    /* « Numéros d'urgence » retiré du menu (v94) : il reste dans les
       services gratuits de l'accueil et de l'écran Services. */
    { icon: LayoutGrid, label: "Services gratuits & pratiques", action: () => goTo("services") }, // icône distincte des urgences (v84)
    { icon: Coins, label: "Grille tarifaire", action: () => goTo("tarifs") },
    { icon: Bell, label: "Notifications", action: () => goTo("notifications") },
  ];

  /* Historique des recharges et factures : réservés au titulaire d'un
     numéro PRO (v99). Sur un compte Mobinawa-Business, la facturation
     relève de l'entreprise et de son Manager : ces lignes disparaissent,
     y compris après une migration depuis PRO. */
  if (espaceClient && ligneActive.soldeCompte !== null && ligneActive.soldeCompte !== undefined) {
    rows.push({ icon: History, label: "Historique des recharges", action: () => goTo("recharges"), accent: C.orange });
    rows.push({ icon: Receipt, label: "Mes factures", action: () => goTo("factures"), accent: C.blue });
  }

  /* La souscription est aussi proposée en bas du menu, au-dessus de « Se
     déconnecter » (v56) : texte et icône orange, sans fond plein (v57). Même libellé et même cible que le bouton de
     l'accueil, selon l'état du compte. */
  const souscription = cibleSouscription(statut);
  rows.push({ icon: Sparkles, label: "À propos de Mobinawa", action: () => goTo("about") });
  /* Langue (v94) : l'icône est le drapeau de la langue choisie, français
     par défaut. */
  const langueActive = LANGUES.find((l) => l.id === langue) || LANGUES[0];
  rows.push({ drapeau: langueActive.drapeau, label: "Langue", valeur: langueActive.nom, action: () => goTo("langue") });

  return (
    <div className="fixed inset-0 z-40 flex">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative h-full p-4 overflow-y-auto" style={{ width: "78%", maxWidth: 320, background: C.card }}>
        <div className="flex items-center justify-between mb-5">
          {/* Logo à la place du titre « Menu Mobinawa » (v84) */}
          <img src={LOGO_SRC} alt="Mobinawa" style={{ width: 40, height: 37, display: "block" }} />
          <button onClick={onClose} className="p-1 rounded-full active:bg-black/5">
            <X size={20} color={C.muted} />
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {rows.map((r, i) => (
            <button
              key={i}
              onClick={() => {
                r.action();
                onClose();
              }}
              className="flex items-center gap-3 py-3 px-2 rounded-xl active:bg-black/5 text-left"
            >
              {r.drapeau ? (
                <span className="flex items-center justify-center rounded-2xl shrink-0" style={{ width: 44, height: 44, background: C.blue + "14" }}>
                  <DrapeauRond code={r.drapeau} size={24} />
                </span>
              ) : (
                <IconTile icon={<r.icon size={19} />} color={r.accent || C.blue} bg={(r.accent || C.blue) + "14"} />
              )}
              <span className="text-sm font-semibold" style={{ color: C.text, fontFamily: FONT_BODY }}>
                {r.label}
              </span>
              {r.valeur && (
                <span className="ml-auto text-xs" style={{ color: C.muted }}>
                  {r.valeur}
                </span>
              )}
              <ChevronRight size={16} color={C.muted} className={r.valeur ? "" : "ml-auto"} />
            </button>
          ))}
          <button
            onClick={() => {
              goTo(souscription.route);
              onClose();
            }}
            /* Un vrai bouton (v85) : contour orange, sans fond plein (v57). */
            className="flex items-center justify-center gap-2 rounded-xl py-3 px-3 mt-3 mb-1 active:scale-[0.98] transition-transform"
            style={{ border: `1.5px solid ${C.orange}`, background: "transparent" }}
          >
            <Briefcase size={17} color={C.orange} />
            <span className="text-sm font-bold" style={{ color: C.orange, fontFamily: FONT_HEAD }}>
              {souscription.label}
            </span>
          </button>

          {/* Séparation entre la souscription et la déconnexion (v86) */}
          <div aria-hidden="true" className="my-2" style={{ height: 1, background: C.border }} />

          <button className="flex items-center gap-3 py-3 px-2 rounded-xl active:bg-black/5 text-left">
            <IconTile icon={<LogOut size={19} />} color={C.muted} bg="#F1F3F6" />
            <span className="text-sm font-semibold" style={{ color: C.muted, fontFamily: FONT_BODY }}>
              Se déconnecter
            </span>
          </button>

          {/* En production, la suppression est déclenchée depuis le back-office
              opérateur. Ce raccourci sert uniquement à montrer l'état résultant. */}
          {statut === "active" && (
            <button
              onClick={() => onSupprimer("operateur")}
              className="flex items-center gap-3 py-3 px-2 rounded-xl active:bg-black/5 text-left"
              style={{ borderTop: `1px dashed ${C.border}`, marginTop: 6, paddingTop: 14 }}
            >
              <IconTile icon={<Trash2 size={19} />} color={C.alertText} bg={C.alertBg} />
              <span className="text-sm font-semibold" style={{ color: C.alertText, fontFamily: FONT_BODY }}>
                Simuler la suppression par l'opérateur
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  WELCOME MODAL : « Communiquer gratuitement »                        */
/* ------------------------------------------------------------------ */
function WelcomeModal({ onClose }) {
  const steps = [
    /* Même présentation que la modale d'appel gratuit : libellés
       d'interface en gras, sans guillemets. */
    { n: 1, label: <>Ouvrir l'onglet <b>Contacts</b></> },
    { n: 2, label: <>Cliquer sur <b>Ajouter un contact</b> ➕</> },
    { n: 3, label: "Rechercher une organisation ou votre interlocuteur" },
    { n: 4, label: <>Sélectionner puis cliquer sur <b>Inviter</b></> },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full rounded-t-3xl p-5 pb-6" style={{ background: C.card, maxWidth: 430, margin: "0 auto" }}>
        <div className="flex items-start justify-between mb-1">
          <div className="flex items-center gap-2">
            <IconTile icon={<MessageCircle size={19} />} color={C.blueLight} bg={C.blueSoft} />
            <span className="font-extrabold text-sm" style={{ color: C.text, fontFamily: FONT_HEAD }}>
              Communiquer gratuitement sur Mobinawa
            </span>
          </div>
          <button onClick={onClose} aria-label="Fermer" className="p-1.5 -mt-1 -mr-1 rounded-full active:bg-black/5 shrink-0">
            <X size={18} color={C.muted} />
          </button>
        </div>
        <p className="text-xs mb-3" style={{ color: C.muted, marginLeft: 52 }}>
          en créant votre base de contacts
        </p>

        <div className="flex flex-col gap-2.5">
          {steps.map((s) => (
            <div key={s.n} className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-full font-bold text-xs shrink-0"
                style={{ width: 24, height: 24, background: C.blueSoft, color: C.blue, fontFamily: FONT_HEAD }}
              >
                {s.n}
              </div>
              <span className="text-sm" style={{ color: C.text, fontFamily: FONT_BODY }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs mt-3" style={{ color: C.muted }}>
          Une fois l'invitation acceptée, le contact apparaît dans vos <b>Membres</b>. Vous échangez alors
          gratuitement par appel audio/vidéo ou par messagerie, chacun gardant confidentiel son numéro
          mobile personnel.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HOME SCREEN                                                         */
/* ------------------------------------------------------------------ */
/* Sélecteur de pays : le drapeau ouvre la liste des annuaires ProCom. */
function SelecteurPays({ pays, onChanger, ouvert, onBasculer }) {
  const annuaires = annuairesOuverts();
  const aVenir = COUVERTURES.filter((c) => !c.ouvert);
  /* Drapeaux ronds aussi dans la liste déroulante (v81). */
  return (
    <div className="relative shrink-0">
      <button
        onClick={onBasculer}
        aria-label="Changer de pays"
        className="flex items-center justify-center rounded-full"
        style={{
          /* Jamais plus haut que la barre de recherche (v123) : 38 px, ou la
             hauteur de la barre de l'accueil si elle est plus petite. */
          width: "min(38px, var(--recherche, 38px))",
          height: "min(38px, var(--recherche, 38px))",
          boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        }}
      >
        {/* Drapeau rond qui remplit tout le cercle, sans fond blanc (v76) */}
        <DrapeauRond code={pays.drapeau} size="100%" />
      </button>
      {ouvert && (
        <>
          <div className="fixed inset-0 z-40" onClick={onBasculer} />
          <div
            className="absolute left-0 top-12 z-50 rounded-2xl overflow-hidden"
            style={{ background: C.card, border: `1px solid ${C.border}`, minWidth: 190, boxShadow: "0 12px 28px rgba(16,36,64,0.18)" }}
          >
            {annuaires.map((a) => (
              <button
                key={a.id}
                onClick={() => {
                  onChanger(a);
                  onBasculer();
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 text-left"
                style={{ background: a.id === pays.id ? C.blueSoft : "transparent" }}
              >
                <DrapeauRond code={a.drapeau} size={24} />
                <span
                  className="text-sm font-extrabold flex-1"
                  style={{ color: a.id === pays.id ? C.blueDark : C.text, fontFamily: FONT_HEAD }}
                >
                  {a.pays}
                </span>
              </button>
            ))}
            {aVenir.map((a) => (
              <div
                key={a.id}
                className="w-full flex items-center gap-2.5 px-3 py-2.5"
                style={{ opacity: 0.45, borderTop: `1px solid ${C.border}` }}
              >
                <DrapeauRond code={a.drapeau} size={24} />
                <span className="text-sm font-extrabold flex-1" style={{ color: C.muted, fontFamily: FONT_HEAD }}>
                  {a.pays}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  RETOUR (v52)                                                        */
/*  Plus aucun écran n'a de bandeau d'en-tête. Chaque page ouvre sur    */
/*  son titre, précédé d'une flèche de retour qui ramène à l'écran      */
/*  d'où l'on vient (historique tenu par l'app, voir goTo et retour).   */
/* ------------------------------------------------------------------ */
const RetourContext = React.createContext(() => {});
/* Le logo, à droite du titre de chaque page, ramène à l'accueil (v65). */
const AccueilContext = React.createContext(() => {});

function LogoAccueil() {
  const accueil = React.useContext(AccueilContext);
  return (
    <button
      onClick={accueil}
      aria-label="Retour à l'accueil Mobinawa"
      className="ml-auto p-1 rounded-xl shrink-0 active:scale-95 transition-transform"
    >
      <img src={LOGO_SRC} alt="Mobinawa" style={{ width: 32, height: 30, display: "block" }} />
    </button>
  );
}

/* Icône de l'écran, entre la flèche de retour et le titre (v111) : celle
   de l'onglet du menu quand l'écran en a un, sinon celle de son thème. Pour
   la langue, le drapeau de la langue active. */
function IconeEcran({ icon: Icone, color = C.blue, bg = C.blueSoft, drapeau }) {
  return (
    <span
      className="flex items-center justify-center shrink-0"
      style={{ width: 28, height: 36 /* sans fond (v115) */ }}
    >
      {drapeau ? <DrapeauRond code={drapeau} size={22} /> : <Icone size={20} color={color} />}
    </span>
  );
}

/* Nuage avec une clé de sécurité (v117) : accès sécurisé aux services en
   ligne de l'organisation (MyApp). */
/* Variante pour les tuiles d'icônes (IconTile, fond C.blueSoft) (v123). */
function NuageCleTuile(props) {
  return <NuageCle {...props} fond={C.blueSoft} />;
}

function NuageCle({ size = 17, color = "currentColor", fond = C.bg }) {
  /* v125 : un cadenas remplace la clé, posé en bas à droite du nuage. Le
     contour et le remplissage de la couleur du fond (fond) le détachent du
     tracé du nuage. Le nom du composant est conservé. */
  const cadenas = (
    <>
      {/* En haut à droite du nuage et un peu plus gros (v126) */}
      <rect x="14.5" y="7.6" width="8.4" height="6.9" rx="1.5" />
      <path d="M16.7 7.6v-1.7a2 2 0 0 1 4 0v1.7" />
      <path d="M18.7 10.3v1.4" />
    </>
  );
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden="true"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" stroke={color} strokeWidth="2" />
      <g stroke={fond} strokeWidth="3.4" fill={fond}>{cadenas}</g>
      <g stroke={color} strokeWidth="1.9" fill={fond}>{cadenas}</g>
    </svg>
  );
}

function BoutonRetour({ onClick }) {
  const retour = React.useContext(RetourContext);
  return (
    <button
      onClick={onClick || retour}
      aria-label="Retour"
      className="flex items-center justify-center rounded-full shrink-0 active:scale-95 transition-transform"
      style={{ width: 38, height: 38, background: C.card, border: `1px solid ${C.border}`, boxShadow: "0 2px 6px rgba(20,40,16,0.06)" }}
    >
      <ChevronLeft size={21} color={C.text} />
    </button>
  );
}

/* Bouton de souscription de l'en-tête de l'accueil (v50). Son libellé suit
   l'état du compte, pour ne jamais proposer de souscrire à qui a déjà une
   demande en cours ou un compte actif. */
/* Cible commune au bouton de l'accueil et à celui du menu (v56). */
function cibleSouscription(statut) {
  return statut === "en_attente"
    ? { label: "Ma demande en cours", route: "attente" }
    : statut === "active"
    ? { label: "Mon compte ProCom", route: "account" }
    : { label: "Souscrire un compte ProCom", route: "evolution" };
}

function BoutonSouscrire({ statut, goTo }) {
  const cible = cibleSouscription(statut);
  return (
    <button
      onClick={() => goTo(cible.route)}
      className="relative overflow-hidden rounded-xl pl-5 pr-2.5 py-2 max-w-full active:scale-[0.98] transition-transform"
      style={{ background: C.blue, border: "1.5px solid rgba(255,255,255,0.9)", boxShadow: "0 4px 14px rgba(0,0,0,0.25)" }}
    >
      {/* Bandeau PRO en coin, comme sur le modèle */}
      <span
        aria-hidden="true"
        className="absolute text-center font-extrabold"
        style={{
          top: 5,
          left: -15,
          width: 48,
          transform: "rotate(-45deg)",
          background: C.orange,
          color: "#fff",
          fontSize: 7.5,
          lineHeight: "11px",
          letterSpacing: 0.3,
          fontFamily: FONT_HEAD,
        }}
      >
        PRO
      </span>
      <span className="block text-white font-bold text-center leading-tight" style={{ fontSize: 12, fontFamily: FONT_HEAD }}>
        {cible.label}
      </span>
    </button>
  );
}

/* Titre de section posé sur la photo, souligné d'orange. */
function TitreSurPhoto({ children, onClick }) {
  /* Cliquable quand onClick est fourni (v127) : un chevron le signale. */
  const Balise = onClick ? "button" : "div";
  return (
    <Balise onClick={onClick} className="flex flex-col items-center active:opacity-80">
      <span
        className="font-extrabold text-white inline-flex items-center gap-1"
        style={{ fontSize: "var(--titre-section, 18px)", fontFamily: FONT_HEAD, textShadow: "0 1px 6px rgba(0,0,0,0.45)" }}
      >
        {children}
        {onClick && <ChevronRight size={18} strokeWidth={2.6} style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.45))" }} />}
      </span>
      <div className="rounded-full mt-1" style={{ width: 120, height: 2.5, background: C.orange }} />
    </Balise>
  );
}

/* Rangée défilante d'icônes posées sur la photo (catégories, services). */
/* v78 : icônes agrandies, quatre visibles au plus sur la largeur de
   l'écran ; le bord de la cinquième dépasse pour signaler le défilement. */
function RangeeIcones({ elements, couleurIcone, onChoisir }) {
  return (
    <div
      className="flex overflow-x-auto"
      style={{ marginLeft: -16, marginRight: -16, paddingLeft: 12, paddingRight: 12, scrollSnapType: "x proximity" }}
    >
      {elements.map((el) => (
        <button
          key={el.key}
          onClick={() => onChoisir(el)}
          className="flex flex-col items-center shrink-0 rounded-xl py-1 px-0.5 active:bg-white/10"
          style={{ width: "23%", scrollSnapAlign: "start", gap: "calc(var(--ecart, 8px) * 0.6)" }}
        >
          <span
            className="flex items-center justify-center rounded-2xl tuile-icone"
            style={{ width: "var(--tuile, 60px)", height: "var(--tuile, 60px)", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" }}
          >
            <el.icon size={30} color={couleurIcone} strokeWidth={1.8} />
          </span>
          <span
            className="text-center leading-tight text-white"
            style={{
              fontSize: "min(var(--libelle, 12px), 3.1vw)",
              fontWeight: 600,
              fontFamily: FONT_BODY,
              textShadow: "0 1px 4px rgba(0,0,0,0.5)",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {el.label}
          </span>
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HOME SCREEN : l'annuaire ProCom d'abord                             */
/*  L'app sert avant tout un consommateur qui cherche à joindre une     */
/*  organisation. Depuis la v50, l'accueil reprend le modèle de l'app   */
/*  en production : photo du pays en fond, sans bandeau d'en-tête      */
/*  (v51), bouton « Souscrire un compte ProCom » centré, recherche,     */
/*  rangée de                                                           */
/*  catégories, puis aperçu des services gratuits.                      */
/* ------------------------------------------------------------------ */
function HomeScreen({ goTo, statut, lignes, ligneActive, operateur, onChangerOperateur, annuaire, onChangerPays, onOuvrirProcom, secteurActif, hauteurHeader = 64, businessActif, vueBusiness, onVueBusiness }) {
  const proLine = lignes.find((l) => l.rattachement === "pro");
  const [recherche, setRecherche] = useState("");
  const [paysOuvert, setPaysOuvert] = useState(false);

  /* Seules les catégories qui ont des fiches dans ce pays sont proposées :
     une tuile qui mène à une liste vide est une impasse. Les catégories mises
     en avant ouvrent la rangée, les autres suivent, « Autre » en dernier. */
  const organisations = ANNUAIRE_PROCOM[annuaire.id] || [];
  const categories = Array.from(new Set(organisations.map((o) => o.secteur))).sort(triSecteurs);
  const misesEnAvant = CATEGORIES_MISES_EN_AVANT.filter((c) => categories.includes(c));
  const rangee = [...misesEnAvant, ...categories.filter((c) => !misesEnAvant.includes(c))];

  /* Suggestions au fil de la frappe : le nom d'abord, puis le secteur et le
     sous-secteur, pour qu'une recherche métier aboutisse aussi. */
  const q = normaliser(recherche);
  const suggestions = q
    ? organisations
        .filter(
          (o) =>
            correspond(o.nom, q) ||
            correspond(o.secteur, q) ||
            correspond(o.sousSecteur, q) ||
            correspond(o.numero, q)
        )
        .sort((a, b) => a.nom.localeCompare(b.nom, "fr", { sensitivity: "base" }))
        .slice(0, 6)
    : [];

  /* Le fond passe sous l'en-tête : on remonte de la hauteur de celui-ci
     et du padding haut du contenu (16 px). */
  const remontee = hauteurHeader + 16;

  return (
    <div className="flex flex-col gap-4">
      {/* La photo occupe tout l'écran du téléphone à l'ouverture (v74) ; le
          reste de l'accueil vient en dessous, au défilement. */}
      <div className="relative flex flex-col hero-plein" style={{ marginLeft: -16, marginRight: -16, marginTop: -remontee }}>
        {/* Calques de fond, découpés seuls pour ne pas rogner les listes
            déroulantes de la recherche et du choix de pays. */}
        {/* Bords droits, sans arrondi (v75). */}
        <div className="absolute inset-0 overflow-hidden">
          {annuaire.fondAccueil ? (
            <img
              src={annuaire.fondAccueil}
              alt=""
              className="absolute inset-0 w-full h-full"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
          ) : (
            /* Fond de repli tant que le pays n'a pas de photo */
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 85% 18%, rgba(232,93,4,0.45), transparent 42%),
                  radial-gradient(circle at 10% 70%, rgba(90,148,71,0.55), transparent 50%),
                  linear-gradient(160deg, ${C.blue} 0%, ${C.blueDark} 70%)`,
              }}
            />
          )}
          {/* Voile sombre : garde le texte blanc lisible sur toute photo.
              Un peu plus dense en haut (titre sur le ciel) et en bas
              (libellés des rangées d'icônes). */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.66) 100%)" }}
          />
        </div>

        <div
          className="relative flex-1 px-4 flex flex-col"
          style={{ paddingTop: `calc(${remontee}px + var(--ecart))`, paddingBottom: "calc(var(--ecart) * 1.5)", gap: "var(--ecart)" }}
        >
          <h1
            className="text-center text-white font-extrabold leading-tight"
            style={{ fontSize: "clamp(15px, min(5.2vw, 2.5dvh), 20px)", fontFamily: FONT_HEAD, textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            {/* Le pays toujours seul sur la seconde ligne (v55) */}
            <span className="block" style={{ whiteSpace: "nowrap" }}>Bienvenue dans l'annuaire ProCom</span>
            <span className="block">{annuaire.genitif}</span>
          </h1>

          {/* Recherche, précédée du drapeau qui sert de sélecteur de pays */}
          {/* Espace libre partagé (v76) : deux tiers au-dessus de la recherche,
              un tiers au-dessus des services, avec un écart minimal sous le
              titre (v80). */}
          <div aria-hidden="true" style={{ flex: "2 1 24px", minHeight: 0 }} />
          <div className="flex items-center gap-2 relative z-20">
            <SelecteurPays
              pays={annuaire}
              onChanger={onChangerPays}
              ouvert={paysOuvert}
              onBasculer={() => setPaysOuvert((v) => !v)}
            />
            <div className="flex-1 min-w-0 relative">
              <div
                className="flex items-center gap-2 rounded-full px-4"
                style={{ height: "var(--recherche)", background: "#fff", boxShadow: "0 6px 18px rgba(0,0,0,0.25)" }}
              >
                {/* Toucher le champ ouvre l'annuaire sur toutes les catégories,
                    clavier ouvert : la saisie et les résultats se font
                    là-bas, en plein écran (v93). */}
                <input
                  value={recherche}
                  onFocus={() => onOuvrirProcom({ recherche, focus: true })}
                  onChange={(e) => setRecherche(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && onOuvrirProcom({ recherche })}
                  placeholder="Taper le nom d'une entreprise"
                  className="flex-1 min-w-0 text-sm outline-none bg-transparent"
                  style={{ fontFamily: FONT_BODY, color: C.text }}
                />
                {recherche ? (
                  <button onClick={() => setRecherche("")} aria-label="Effacer la recherche">
                    <X size={16} color={C.muted} />
                  </button>
                ) : (
                  <button onClick={() => onOuvrirProcom({ recherche })} aria-label="Rechercher">
                    <Search size={18} color={C.muted} />
                  </button>
                )}
              </div>

              {/* Résultats au fil de la frappe : un clic ouvre la fiche. */}
              {q && (
                <div
                  className="absolute left-0 right-0 top-12 z-40 rounded-2xl overflow-hidden"
                  style={{ background: C.card, border: `1px solid ${C.border}`, boxShadow: "0 12px 28px rgba(16,36,64,0.18)" }}
                >
                  {suggestions.length === 0 ? (
                    <div className="px-3 py-3 text-xs" style={{ color: C.muted }}>
                      Aucune organisation ne correspond dans l'annuaire {annuaire.pays}.
                    </div>
                  ) : (
                    suggestions.map((o, i) => (
                      <button
                        key={o.id}
                        onClick={() => onOuvrirProcom({ ficheId: o.id })}
                        className="w-full flex items-center gap-2.5 px-3 py-2.5 text-left"
                        style={{ borderTop: i === 0 ? "none" : `1px solid ${C.border}` }}
                      >
                        <LogoOrg org={o} size={32} />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-extrabold truncate" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                            {o.nom}
                          </div>
                          <div className="text-xs truncate" style={{ color: C.muted }}>
                            {o.sousSecteur || o.secteur}
                          </div>
                          {/* Numéro PRO officiel dans les résultats (v76) */}
                          <div
                            className="text-xs font-bold truncate"
                            style={{ color: C.blue, fontFamily: FONT_HEAD, fontVariantNumeric: "tabular-nums" }}
                          >
                            {o.numero}
                          </div>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Choix d'une catégorie */}
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-sm text-white/85" style={{ fontFamily: FONT_BODY }}>
              Ou
            </span>
            <TitreSurPhoto onClick={() => goTo("categories")}>Choisir une catégorie</TitreSurPhoto>
          </div>

          {rangee.length === 0 ? (
            <p className="text-sm text-center text-white/85">
              L'annuaire {annuaire.pays} ne comporte pas encore d'organisation publiée.
            </p>
          ) : (
            <RangeeIcones
              elements={rangee.map((cat) => ({ key: cat, label: cat, icon: SECTEUR_ICONES[cat] || LayoutGrid }))}
              couleurIcone="#fff"
              onChoisir={(el) => onOuvrirProcom({ secteur: el.key })}
            />
          )}

          {/* Aperçu des services gratuits : un geste ouvre l'écran complet.
              Calé en bas de l'écran quand la photo le remplit (v74). */}
          <div aria-hidden="true" style={{ flex: "1 1 0px", minHeight: 0 }} />
          <div className="flex flex-col" style={{ gap: "var(--ecart)" }}>
            <TitreSurPhoto onClick={() => goTo("services")}>Nos services gratuits</TitreSurPhoto>
            <RangeeIcones
              elements={SERVICES_GRATUITS.map((sv) => ({ key: sv.id, label: sv.label, icon: sv.icon }))}
              couleurIcone={C.orange}
              onChoisir={(el) => {
                const sv = SERVICES_GRATUITS.find((x) => x.id === el.key);
                goTo(sv && sv.route ? sv.route : "services");
              }}
            />
          </div>
        </div>
      </div>

      {/* Le raccourci « Mon espace client » a été retiré de l'accueil (v92) :
          l'espace client s'ouvre depuis le menu. */}

      {/* En production, l'opérateur découle du numéro de la session CIRPACK et
          n'est jamais présenté à l'utilisateur. Ce bloc sert uniquement à la
          démonstration des deux parcours. */}
      <Card style={{ background: C.cardSoft, borderStyle: "dashed" }}>
        <span className="text-xs font-bold uppercase tracking-wide block mb-1" style={{ color: C.muted }}>
          Démonstration
        </span>
        <p className="text-xs leading-relaxed mb-2" style={{ color: C.muted }}>
          Simuler une session ouverte chez l'un ou l'autre opérateur. Le numéro change, et avec lui les
          offres accessibles et la devise. Le compte en cours est remis à zéro.
        </p>
        <div className="flex flex-col gap-2">
          {OPERATEURS_DEMO.map((op) => {
            const actif = op.id === operateur.id;
            return (
              <button
                key={op.id}
                onClick={() => onChangerOperateur(op.id)}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left"
                style={{
                  background: actif ? C.card : "transparent",
                  border: `1.5px solid ${actif ? C.blue : C.border}`,
                }}
              >
                <Flag code={op.drapeau} size={20} />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-extrabold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                    {op.nom}
                  </div>
                  <div className="text-xs" style={{ color: C.muted }}>
                    {op.demoMsisdn} · {op.offres.map((o) => (o === "pro" ? "PRO" : "Business")).join(" et ")} ·{" "}
                    {op.devise === "XAF" ? "FCFA" : op.devise === "EUR" ? "€" : op.devise}
                  </div>
                </div>
                {actif && <Check size={15} color={C.blue} />}
              </button>
            );
          })}
        </div>
        {/* Compte Business actif : choisir la vue (v131) */}
        {businessActif && (
          <div className="mt-3 pt-3" style={{ borderTop: `1px dashed ${C.border}` }}>
            <p className="text-xs leading-relaxed mb-2" style={{ color: C.muted }}>
              Compte Mobinawa-Business : voir l'application en tant que
            </p>
            <div className="flex gap-2">
              {[
                { id: "collaborateur", label: "Collaborateur" },
                { id: "manager", label: "Manager" },
              ].map((v) => {
                const actif = vueBusiness === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => onVueBusiness(v.id)}
                    className="flex-1 rounded-xl py-2 text-xs font-bold"
                    style={{
                      background: actif ? C.blueDark : C.card,
                      color: actif ? "#fff" : C.muted,
                      border: `1.5px solid ${actif ? C.blueDark : C.border}`,
                      fontFamily: FONT_HEAD,
                    }}
                  >
                    {v.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CHOIX DE LA VOIE : PRO OU Business, jamais les deux                 */
/* ------------------------------------------------------------------ */
function EvolutionScreen({ goTo, operateur }) {
  const etapes = [
    {
      key: "pro",
      titre: "Mobinawa-PRO",
      pour: "Un indépendant, un commerçant",
      accent: C.orange,
      soft: C.orangeSoft,
      icon: Briefcase,
      points: [
        "Un numéro professionnel dédié",
        "Appels au crédit prépayé, rechargé dans l'app",
        "Suivi de votre consommation et de votre activité",
      ],
      cta: "Souscrire à Mobinawa-PRO", // libellé v115
      /* Diaspora : la demande passe d'abord par le choix du pays, comme la
         carte Mobinawa-PRO de « Mon compte » (v68). « En savoir plus » ouvre
         la présentation, identique à celle d'un usager local. */
      route: "subscribePro",
      infos: "infoPro",
    },
    {
      key: "business",
      titre: "Mobinawa-Business",
      pour: "Pour une organisation et ses collaborateurs",
      accent: C.blueDark,
      soft: C.blueSoft,
      icon: Building2,
      /* Reformulés en v73 : ce que l'organisation obtient, dans des mots
         d'usager. L'annuaire est un avantage réservé à Business (v63). */
      points: [
        "Un numéro officiel avec standard téléphonique, et des numéros dédiés à vos services ou collaborateurs",
        "Des comptes pour vos collaborateurs, gérés par un responsable depuis un espace web",
        "Votre organisation dans l'annuaire ProCom, où l'on vous appelle gratuitement. Réservé à Business : un numéro PRO individuel n'y figure pas",
        "Abonnements facturés à l'organisation, appels et SMS sur un crédit prépayé commun",
      ],
      cta: "Souscrire à Mobinawa-Business", // libellé v115
      route: "subscribeBusiness",
      infos: "moreInfoBusiness",
      direct: "Possible dès maintenant, sans passer par Mobinawa-PRO",
    },
  ];

  /* L'écran ne présente que ce que distribue l'opérateur de l'utilisateur. */
  const niveaux = niveauxDe(operateur);
  const visibles = etapes.filter((e) => operateur.offres.includes(e.key));
  const avecBusiness = operateur.offres.includes("business");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={ArrowUpRight} color={C.orange} bg={C.orangeSoft} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Faire évoluer mon compte
        </h2>
        <LogoAccueil />
      </div>

      <Card>
        <Progression courante="basic" fond={C.card} niveaux={niveaux} />
        <p className="text-sm mt-3" style={{ color: C.muted }}>
          {avecBusiness ? (
            <>
              Vous êtes au niveau Mobinawa-Basic. Deux chemins s'ouvrent : prendre un numéro professionnel,
              ou ouvrir <b>directement</b> un compte entreprise sans passer par Mobinawa-PRO.
            </>
          ) : (
            <>
              Vous êtes au niveau Mobinawa-Basic. Vous pouvez prendre un <b>numéro professionnel</b> pour
              être joint sous votre identité de professionnel.
            </>
          )}
        </p>
      </Card>

      {visibles.map((e) => (
        <Card key={e.key} style={{ borderColor: e.accent + "55" }}>
          <div className="flex items-center gap-2 mb-2">
            <IconTile icon={<e.icon size={19} />} color={e.accent} bg={e.soft} />
            <div>
              <div className="font-extrabold text-sm" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                {e.titre}
              </div>
              <div className="text-xs" style={{ color: C.muted }}>
                {e.pour}
              </div>
            </div>
          </div>
          <ul className="flex flex-col gap-1.5 mb-3">
            {e.points.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: C.muted }}>
                <Check size={14} color={e.accent} className="mt-0.5 shrink-0" /> {p}
              </li>
            ))}
          </ul>
          {e.direct && (
            <div className="flex items-start gap-2 rounded-xl px-3 py-2 mb-3" style={{ background: e.soft }}>
              <ArrowUpRight size={13} color={e.accent} className="mt-0.5 shrink-0" />
              <span className="text-xs" style={{ color: e.accent }}>
                {e.direct}
              </span>
            </div>
          )}
          <PrimaryButton
            color={e.accent}
            onClick={() => goTo(e.key === "pro" && !operateur.pays ? "moreInfoPro" : e.route)}
          >
            {e.cta}
          </PrimaryButton>
          {/* Pas de « En savoir plus » pour la diaspora (v72) : sa demande
              passe par le choix du pays, qui présente déjà l'offre. */}
          {operateur.pays && (
            <GhostButton color={e.accent} className="mt-2" onClick={() => goTo(e.infos)}>
              En savoir plus
            </GhostButton>
          )}
        </Card>
      ))}

      {/* L'encart « La progression va dans un seul sens… » a été retiré
          (v105) : la règle figure dans la présentation de la migration. */}
      <Card style={{ background: C.cardSoft }}>
        <div className="flex items-center gap-2 mb-1">
          <Hourglass size={15} color={C.waitText} />
          <span className="text-sm font-extrabold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
            {avecBusiness ? "Dans les deux cas, une revue humaine" : "Une revue humaine"}
          </span>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
          Votre dossier est examiné par un membre de nos équipes avant l'attribution du numéro. Réponse
          sous 2 jours.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ACCUSÉ DE RÉCEPTION : contrôle humain, réponse sous 2 jours         */
/* ------------------------------------------------------------------ */
function AttenteScreen({ demande, goTo, operateur, onValider, onAnnuler }) {
  if (!demande) return null;
  const pro = demande.type === "pro";
  const accent = pro ? C.orange : C.blueDark;
  const texte = accuseReception(demande.type, operateur);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={Hourglass} color={C.waitText} bg={C.waitBg} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Ma demande
        </h2>
        <LogoAccueil />
      </div>

      {/* Accusé de réception : le dossier est déposé, rien n'est encore activé */}
      <div className="rounded-2xl p-4" style={{ background: C.greenSoft, border: `1px solid ${C.green}40` }}>
        <div className="flex items-center gap-2">
          <IconTile icon={<BadgeCheck size={19} />} color={C.green} bg="#fff" size={42} />
          <div>
            <div className="font-extrabold text-base" style={{ color: C.text, fontFamily: FONT_HEAD }}>
              Demande enregistrée !
            </div>
            <div className="text-xs" style={{ color: C.muted }}>
              Déposée {demande.depose}
            </div>
          </div>
        </div>
      </div>

      <Card style={{ borderColor: accent + "40" }}>
        <p className="text-sm leading-relaxed" style={{ color: C.text }}>
          {texte.intro}
        </p>
      </Card>

      <Card>
        <div className="flex items-start gap-2.5">
          <IconTile icon={<FileText size={17} />} color={accent} bg={pro ? C.orangeSoft : C.blueSoft} />
          <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
            {texte.suite}
          </p>
        </div>
      </Card>

      <Card style={{ background: C.cardSoft }}>
        <div className="flex items-start gap-2.5">
          <IconTile icon={<Search size={17} />} color={C.blue} bg="#fff" />
          <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
            {texte.relance}
          </p>
        </div>
      </Card>

      <PrimaryButton color={C.blue} onClick={() => goTo("home")}>
        Retour à l'accueil
      </PrimaryButton>

      {/* En production, la validation et le retrait sont pilotés depuis le
          back-office opérateur. Ce bloc sert uniquement à la démonstration. */}
      <Card style={{ background: C.cardSoft, borderStyle: "dashed" }}>
        <span className="text-xs font-bold uppercase tracking-wide block mb-2" style={{ color: C.muted }}>
          Démonstration
        </span>
        <PrimaryButton color={accent} onClick={onValider}>
          Simuler la validation par nos équipes
        </PrimaryButton>
        <GhostButton color={C.muted} className="mt-2" onClick={onAnnuler}>
          Retirer ma demande
        </GhostButton>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MON COMPTE                                                          */
/* ------------------------------------------------------------------ */
function AccountScreen({ compte, offre, statut, lignes, ligneActive, goTo, showToast, onRecharge, onTransferer, onPrelever, operateur, onOpenWelcome, prelevements, vueBusiness, entreprise }) {
  const rattachement = ligneActive ? ligneActive.rattachement : "perso";
  /* L'écran devient « Mon espace client » pour un titulaire Mobinawa-PRO.
     Sur un compte Business, l'espace client appartient au Manager et se
     consulte sur la plateforme web : l'app n'en montre rien. */
  const espaceClient = statut === "active" && rattachement === "pro";
  /* Manager d'un compte Business (v131) : il retrouve le crédit d'appel de
     l'entreprise et le reporting des numéros PRO attribués. */
  const manager = statut === "active" && rattachement === "business" && vueBusiness === "manager";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={UserCircle2} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          {espaceClient ? "Mon espace client" : manager ? "Mon espace Manager" : "Mon compte"}
        </h2>
        <LogoAccueil />
      </div>

      <OffreBadge offre={statut === "active" ? rattachement : "basic"} />

      {/* Un collaborateur Business retrouve ici sa fiche Mobinawa-Basic :
          les informations du compte entreprise appartiennent au Manager. */}
      {manager && <ManagerAccount compte={compte} entreprise={entreprise} operateur={operateur} />}
      {!manager && (statut !== "active" || rattachement !== "pro") && (
        <BasicAccount compte={compte} goTo={goTo} statut={statut} operateur={operateur} onOpenWelcome={onOpenWelcome} />
      )}
      {statut === "active" && rattachement === "pro" && (
        <ProAccount
          ligne={ligneActive}
          onRecharge={onRecharge}
          onTransferer={onTransferer}
          onPrelever={onPrelever}
          goTo={goTo}
          operateur={operateur}
          prelevements={prelevements}
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ESPACE MANAGER (v131)                                               */
/*  Le Manager d'un compte Mobinawa-Business, désigné dans l'espace de  */
/*  configuration et identifié par son numéro, retrouve dans l'app :    */
/*  le crédit d'appel prépayé de l'entreprise (pas de crédit de compte) */
/*  et le reporting des appels émis par les collaborateurs, par numéro  */
/*  PRO attribué à l'entreprise. Données de démonstration.              */
/* ------------------------------------------------------------------ */
const MANAGER_DEMO = {
  creditAppel: 184500,
  numeros: [
    { id: "std", numero: "+237 233 50 20 00", libelle: "Numéro officiel · standard" },
    { id: "com", numero: "+237 233 50 20 11", libelle: "Service commercial" },
    { id: "cpt", numero: "+237 233 50 20 12", libelle: "Comptabilité" },
  ],
  appels: [
    { num: "com", collaborateur: "Aïcha Mbarga", vers: "+237 6 99 04 11 27", date: "Aujourd'hui, 10:12", duree: 245, cout: 205 },
    { num: "std", collaborateur: "Jean-Paul Essomba", vers: "+237 2 33 42 18 05", date: "Aujourd'hui, 09:40", duree: 132, cout: 110 },
    { num: "com", collaborateur: "Aïcha Mbarga", vers: "+237 6 78 22 90 41", date: "Aujourd'hui, 08:55", duree: 418, cout: 350 },
    { num: "cpt", collaborateur: "Mireille Ngo Bayiha", vers: "+237 6 55 90 12 04", date: "Hier, 16:20", duree: 96, cout: 80 },
    { num: "std", collaborateur: "Jean-Paul Essomba", vers: "+33 6 12 34 56 78", date: "Hier, 14:05", duree: 300, cout: 750 },
    { num: "com", collaborateur: "Boris Tchoumi", vers: "+237 6 91 33 08 72", date: "Hier, 11:30", duree: 61, cout: 55 },
    { num: "cpt", collaborateur: "Mireille Ngo Bayiha", vers: "+237 2 22 21 45 60", date: "Avant-hier, 15:48", duree: 512, cout: 430 },
    { num: "com", collaborateur: "Boris Tchoumi", vers: "+237 6 70 18 44 09", date: "Avant-hier, 10:02", duree: 183, cout: 155 },
  ],
};

function dureeMin(sec) {
  return `${Math.floor(sec / 60)} min ${String(sec % 60).padStart(2, "0")}`;
}

function ManagerAccount({ compte, entreprise, operateur }) {
  const [numero, setNumero] = useState("tous");
  /* Raison sociale saisie dans le formulaire, sinon un nom de démonstration */
  const nomEntreprise = (entreprise && entreprise.nom) || "Cabinet Ekani & Associés";
  const appels = numero === "tous" ? MANAGER_DEMO.appels : MANAGER_DEMO.appels.filter((a) => a.num === numero);
  const total = appels.reduce((t, a) => t + a.cout, 0);
  const minutes = Math.round(appels.reduce((t, a) => t + a.duree, 0) / 60);
  const libelleDe = (id) => (MANAGER_DEMO.numeros.find((n) => n.id === id) || {}).libelle;
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <div className="flex items-center gap-3">
          <IconTile icon={<Building2 size={19} />} color={C.blueDark} bg={C.blueSoft} />
          <div className="min-w-0">
            <div className="text-sm font-extrabold truncate" style={{ color: C.text, fontFamily: FONT_HEAD }}>
              {nomEntreprise}
            </div>
            <div className="text-xs" style={{ color: C.muted }}>
              Manager · {compte.msisdn}
            </div>
          </div>
        </div>
      </Card>

      {/* Crédit d'appel de l'entreprise : pas de crédit de compte */}
      <div className="rounded-3xl p-4" style={{ background: `linear-gradient(135deg, ${C.blueDark}, ${C.blue})` }}>
        <div className="text-xs text-white/75">Crédit d'appel de l'entreprise</div>
        <div className="text-2xl font-extrabold text-white mt-0.5" style={{ fontFamily: FONT_HEAD }}>
          {somme(MANAGER_DEMO.creditAppel, operateur)}
        </div>
        <p className="text-xs text-white/85 leading-relaxed mt-2">
          Crédit prépayé commun à tous les collaborateurs. Il se commande depuis l'espace Manager, sur ordinateur, ou
          par bon de commande.
        </p>
      </div>

      <div>
        <SectionTitle>Numéros PRO de l'entreprise</SectionTitle>
        <div className="flex flex-col gap-2 mt-2">
          {MANAGER_DEMO.numeros.map((n) => {
            const liste = MANAGER_DEMO.appels.filter((a) => a.num === n.id);
            const dep = liste.reduce((t, a) => t + a.cout, 0);
            return (
              <Card key={n.id} className="flex items-center gap-3">
                <IconTile icon={<Phone size={17} />} color={C.blueDark} bg={C.blueSoft} size={38} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-extrabold" style={{ color: C.text, fontFamily: FONT_HEAD, fontVariantNumeric: "tabular-nums" }}>
                    {n.numero}
                  </div>
                  <div className="text-xs truncate" style={{ color: C.muted }}>
                    {n.libelle}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-sm font-extrabold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                    {somme(dep, operateur)}
                  </div>
                  <div style={{ fontSize: 11, color: C.muted }}>
                    {liste.length} appels émis
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div>
        <SectionTitle>Appels émis par les collaborateurs</SectionTitle>
        <div className="flex gap-2 overflow-x-auto mt-2 pb-0.5" style={{ marginLeft: -16, marginRight: -16, paddingLeft: 16, paddingRight: 16 }}>
          {[{ id: "tous", libelle: "Tous les numéros" }, ...MANAGER_DEMO.numeros].map((n) => {
            const actif = numero === n.id;
            return (
              <button
                key={n.id}
                onClick={() => setNumero(n.id)}
                className="shrink-0 rounded-full px-3 py-1.5 text-xs font-bold"
                style={{
                  background: actif ? C.blue : C.card,
                  color: actif ? "#fff" : C.muted,
                  border: `1.5px solid ${actif ? C.blue : C.border}`,
                  fontFamily: FONT_HEAD,
                }}
              >
                {n.id === "tous" ? n.libelle : n.libelle.replace(" · standard", "")}
              </button>
            );
          })}
        </div>
        <div className="flex items-center justify-between text-xs mt-3 mb-2" style={{ color: C.muted }}>
          <span>
            {appels.length} appels · {minutes} min
          </span>
          <span className="font-extrabold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
            {somme(total, operateur)}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {appels.map((a, i) => (
            <Card key={i} className="flex items-center gap-3">
              <IconTile icon={<PhoneOutgoing size={16} />} color={C.blue} bg={C.blueSoft} size={36} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold truncate" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                  {a.collaborateur}
                </div>
                <div className="text-xs truncate" style={{ color: C.muted }}>
                  {a.vers}
                </div>
                <div style={{ fontSize: 11, color: C.muted }}>
                  {a.date} · {libelleDe(a.num)}
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs font-bold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                  {dureeMin(a.duree)}
                </div>
                <div className="text-xs font-bold" style={{ color: C.orange, fontFamily: FONT_HEAD }}>
                  -{somme(a.cout, operateur)}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
        La configuration du standard, des numéros et des collaborateurs se fait depuis l'espace Manager, sur ordinateur.
      </p>
    </div>
  );
}

/* --- Appels et dépenses associées --- */
/* Historique téléphonique du numéro attribué. Sans numéro, il n'y a rien à
   montrer : un compte Mobinawa-Basic n'a pas d'historique d'appels. */
/* Au-delà de LIMITE_HISTORIQUE éléments, l'espace client n'affiche que les
   plus récents et propose « Voir tout l'historique », qui ouvre l'écran
   complet avec le même filtre (v91). */
const LIMITE_HISTORIQUE = 6;

function AppelsEtDepenses({ goTo, facture, prelevements = [], operateur, complet = false, filtreInitial }) {
  const total = HISTORIQUE_APPELS.reduce((somme, c) => somme + c.cost, 0);
  /* L'abonnement du numéro n'est pas un appel, mais c'est une dépense : il a
     sa place dans ce relevé, en tête puisqu'il est le plus récent. */
  const abonnements = facture ? prelevements : [];
  const emis = HISTORIQUE_APPELS.filter((c) => c.direction === "sortant").length;
  const recus = HISTORIQUE_APPELS.filter((c) => c.direction === "entrant").length;
  const manques = HISTORIQUE_APPELS.filter((c) => c.direction === "manqué").length;

  /* Filtre de l'historique (v90) : par sens d'appel, et, dans l'espace
     client, sur les seuls abonnements. */
  const [filtre, setFiltre] = useState(filtreInitial || "tout");
  const filtres = [
    { id: "tout", label: "Tout", n: HISTORIQUE_APPELS.length + abonnements.length },
    { id: "sortant", label: "Émis", n: emis },
    { id: "entrant", label: "Reçus", n: recus },
    { id: "manqué", label: "Manqués", n: manques },
    ...(facture ? [{ id: "abonnement", label: "Abonnements", n: abonnements.length }] : []),
  ];
  const abosFiltres = filtre === "tout" || filtre === "abonnement" ? abonnements : [];
  const appelsFiltres =
    filtre === "tout" ? HISTORIQUE_APPELS : filtre === "abonnement" ? [] : HISTORIQUE_APPELS.filter((c) => c.direction === filtre);
  /* Les abonnements, plus récents, passent en tête ; la limite porte sur
     l'ensemble. */
  const totalFiltre = abosFiltres.length + appelsFiltres.length;
  const tronque = !complet && totalFiltre > LIMITE_HISTORIQUE;
  const abosVisibles = tronque ? abosFiltres.slice(0, LIMITE_HISTORIQUE) : abosFiltres;
  const appelsVisibles = tronque
    ? appelsFiltres.slice(0, Math.max(0, LIMITE_HISTORIQUE - abosVisibles.length))
    : appelsFiltres;

  return (
    <div>
      <SectionTitle>{facture ? "Appels et dépenses" : "Historique des appels"}</SectionTitle>

      <Card className="mt-2">
        <div className="grid grid-cols-3 gap-2">
          {(facture
            ? [
                { v: fcfa(total), l: "Dépensé ce mois", c: C.orange },
                { v: emis, l: "Appels émis", c: C.text },
                { v: recus, l: "Appels reçus", c: C.green },
              ]
            : [
                { v: emis, l: "Appels émis", c: C.text },
                { v: recus, l: "Appels reçus", c: C.green },
                { v: manques, l: "Appels manqués", c: C.muted },
              ]
          ).map((st, i) => (
            <div key={i} className="text-center">
              <div className="text-base font-extrabold" style={{ color: st.c, fontFamily: FONT_HEAD }}>
                {st.v}
              </div>
              <div style={{ color: C.muted, fontSize: 11 }}>{st.l}</div>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex gap-2 overflow-x-auto mt-3 pb-0.5" style={{ marginLeft: -16, marginRight: -16, paddingLeft: 16, paddingRight: 16 }}>
        {filtres.map((f) => {
          const actif = filtre === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setFiltre(f.id)}
              className="shrink-0 rounded-full px-3 py-1.5 text-xs font-bold"
              style={{
                background: actif ? C.blue : C.card,
                color: actif ? "#fff" : C.muted,
                border: `1.5px solid ${actif ? C.blue : C.border}`,
                fontFamily: FONT_HEAD,
              }}
            >
              {f.label} <span style={{ opacity: 0.75 }}>{f.n}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 mt-2">
        {abosVisibles.length + appelsVisibles.length === 0 && (
          <Card style={{ background: C.cardSoft }}>
            <p className="text-sm" style={{ color: C.muted }}>
              {filtre === "abonnement"
                ? "Aucun abonnement pour l'instant : le premier apparaîtra en début de mois."
                : "Aucun appel dans cette catégorie."}
            </p>
          </Card>
        )}
        {abosVisibles.map((p) => (
          <Card key={`abo-${p.id}`} className="flex items-center gap-3">
            <IconTile icon={<Receipt size={17} />} color={C.blueDark} bg={C.blueSoft} />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold truncate" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                {p.offert ? "Mois d'abonnement offert" : "Abonnement mensuel du numéro"}
              </div>
              <div className="text-xs" style={{ color: C.muted }}>
                {p.date} · {p.offert ? "aucun prélèvement" : "crédit du compte"}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div style={{ fontSize: 11, color: p.offert ? C.green : C.text, fontWeight: 800, fontFamily: FONT_HEAD }}>
                {p.offert ? "Offert" : `-${somme(p.montant, operateur)}`}
              </div>
              <div style={{ fontSize: 10, color: p.reste < 0 ? C.alertText : C.muted }}>
                solde {somme(p.reste, operateur)}
              </div>
            </div>
          </Card>
        ))}
        {appelsVisibles.map((h) => {
          const manque = h.direction === "manqué";
          return (
            <Card key={h.id} className="flex items-center gap-3">
              <IconTile
                icon={manque ? <PhoneMissed size={17} /> : h.direction === "entrant" ? <PhoneIncoming size={17} /> : <PhoneCall size={17} />}
                color={manque ? "#E4432F" : C.blueLight}
                bg={manque ? "#FCEAE7" : C.blueSoft}
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold truncate" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                  {h.name}
                </div>
                <div className="text-xs" style={{ color: C.muted }}>
                  {h.date}
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs font-semibold" style={{ color: C.muted }}>
                  {h.duration}
                </div>
                {facture && (
                  <div style={{ fontSize: 10, color: h.cost > 0 ? C.orange : C.green, fontWeight: 700 }}>
                    {h.cost > 0 ? `-${fcfa(h.cost)}` : manque ? "Non facturé" : "Gratuit"}
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {tronque && (
        <div className="mt-2">
          <GhostButton color={C.blue} onClick={() => goTo("historique", { filtre })}>
            Voir tout l'historique ({totalFiltre})
          </GhostButton>
        </div>
      )}
      {/* « Voir la grille tarifaire » retiré de l'espace client (v89) :
          la grille reste dans le menu. */}
    </div>
  );
}

/* --- Mobinawa-Basic : le socle, profil minimal --- */
function BasicAccount({ compte, goTo, statut, operateur, onOpenWelcome }) {
  return (
    <>
      <Card className="flex items-center gap-3">
        <Avatar name={SESSION_CIRPACK.nom} color={C.blueLight} size={52} />
        <div>
          <div className="font-extrabold text-sm" style={{ color: C.text, fontFamily: FONT_HEAD }}>
            {SESSION_CIRPACK.nom}
          </div>
          <div className="text-xs" style={{ color: C.muted }}>
            Compte activé · {compte.msisdn}
          </div>
          <div className="text-xs mt-0.5 flex items-center gap-1" style={{ color: C.green }}>
            <ShieldCheck size={12} /> Identité Mobinawa vérifiée
          </div>
        </div>
      </Card>

      <Card>
        <span className="text-sm font-extrabold block mb-2" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Ce niveau vous donne accès à
        </span>
        <ul className="flex flex-col gap-2">
          {[
            "Une identité Mobinawa vérifiée par votre numéro",
            "Les appels et messages gratuits entre contacts Mobinawa",
            statut === "aucune"
              ? operateur.offres.includes("business")
                ? "La porte d'entrée vers PRO et Business"
                : "La porte d'entrée vers Mobinawa-PRO"
              : null,
          ]
            .filter(Boolean)
            .map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: C.muted }}>
                <Check size={15} color={C.green} className="mt-0.5 shrink-0" /> {t}
              </li>
            ))}
        </ul>
      </Card>

      {/* Rouvre la modale de bienvenue : elle explique comment communiquer
          gratuitement entre comptes Mobinawa. Ce bouton était sur l'accueil. */}
      <button
        onClick={onOpenWelcome}
        className="flex items-center gap-2 rounded-2xl px-4 py-3 active:scale-[0.99] transition-transform"
        style={{ background: C.card, border: `1px solid ${C.border}` }}
      >
        <IconTile icon={<MessageCircle size={17} />} color={C.blueLight} bg={C.blueSoft} />
        <span className="text-sm font-semibold flex-1 text-left" style={{ color: C.text, fontFamily: FONT_BODY }}>
          Comment communiquer gratuitement sur Mobinawa ?
        </span>
        <ChevronRight size={16} color={C.muted} />
      </button>

      {/* Ce que dit le niveau Basic. Ce texte était sur l'accueil, qui est
          désormais consacré à l'annuaire. */}
      {statut === "aucune" && (
        <div className="flex items-start gap-3 rounded-2xl px-4 py-3" style={{ background: C.blueSoft }}>
          <IconTile icon={<ShieldCheck size={18} />} color={C.blueLight} bg="#fff" size={38} />
          <p className="text-sm leading-relaxed" style={{ color: C.blueDark, fontFamily: FONT_BODY }}>
            Votre compte <b>Mobinawa-Basic</b> vous identifie en tant que consommateur et vous permet de
            communiquer gratuitement avec vos contacts Mobinawa, <b>sans exposer votre numéro</b>.
          </p>
        </div>
      )}

      {/* L'évolution du compte a quitté l'accueil, désormais consacré à
          l'annuaire : c'est ici qu'on devient PRO ou Business. */}
      {statut === "aucune" && (
        <Card style={{ borderColor: C.orange + "55" }}>
          <div className="flex items-center gap-2 mb-3">
            <IconTile icon={<ArrowUpRight size={19} />} color={C.orange} bg={C.orangeSoft} />
            <span className="font-extrabold text-sm" style={{ color: C.text, fontFamily: FONT_HEAD }}>
              Faire évoluer mon compte
            </span>
          </div>
          <Progression courante="basic" niveaux={niveauxDe(operateur)} />
          <div style={{ height: 12 }} />

          <div className="flex flex-col gap-2">
            {[
              {
                id: "pro",
                accent: C.orange,
                soft: C.orangeSoft,
                icon: Briefcase,
                titre: "Mobinawa-PRO",
                /* Le pays n'apparaît que pour une couverture locale : un
                   utilisateur diaspora choisit le sien dans le formulaire. */
                pour: `Je suis un professionnel et j'ai besoin d'un numéro PRO ${operateur.locatif || ""}`.trim(),
                route: "moreInfoPro",
              },
              {
                id: "business",
                accent: C.blueDark,
                soft: C.blueSoft,
                icon: Building2,
                titre: "Mobinawa-Business",
                pour: `Je représente une entreprise ${operateur.locatif || ""}`.trim(),
                route: "moreInfoBusiness",
              },
            ]
              /* GTS Africa ne distribue pas Mobinawa-Business */
              .filter((o) => operateur.offres.includes(o.id))
              .map((o) => (
                <button
                  key={o.titre}
                  onClick={() => goTo(o.route)}
                  className="flex items-center gap-3 rounded-2xl p-3 text-left active:scale-[0.99] transition-transform"
                  style={{ border: `1.5px solid ${o.accent}44`, background: o.soft + "66" }}
                >
                  <IconTile icon={<o.icon size={18} />} color={o.accent} bg={o.soft} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-extrabold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                      {o.titre}
                    </div>
                    <div className="text-xs" style={{ color: C.muted }}>
                      {o.pour}
                    </div>
                  </div>
                  <ChevronRight size={16} color={o.accent} />
                </button>
              ))}
          </div>

          {/* Rien à comparer quand l'opérateur ne distribue qu'une offre :
              un usager GTS Africa n'a accès qu'à Mobinawa-PRO (v66). */}
          {operateur.offres.length > 1 && (
            <GhostButton color={C.orange} className="mt-2" onClick={() => goTo("evolution")}>
              Comparer les deux offres
            </GhostButton>
          )}
        </Card>
      )}
    </>
  );
}

/* --- PRO : prépayé, le crédit commande tout --- */
function ProAccount({ ligne, onRecharge, onTransferer, onPrelever, goTo, operateur, prelevements }) {
  /* Deux soldes distincts : le crédit du compte, rechargé par carte Visa, et
     le crédit d'appel détenu par SIPPY, alimenté par transfert depuis le
     premier et consommé par les communications. */
  const soldeCompte = ligne.soldeCompte || 0;
  const soldeAppel = ligne.soldeAppel || 0;
  const decouvert = soldeCompte < 0;
  const sansCredit = soldeAppel <= 0;
  const manques = HISTORIQUE_APPELS.filter((c) => c.direction === "manqué").length;

  return (
    <>
      <div className="relative rounded-3xl p-4 overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.blueDark}, ${C.blue})` }}>
        <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full" style={{ background: "rgba(232,93,4,0.18)" }} />
        {/* Ordre de lecture : le numéro, puis le crédit qui alimente tout,
            puis le crédit réellement consommé par les appels. */}
        <div className="flex items-center justify-between">
          <span className="text-white/60 text-xs font-semibold" style={{ fontFamily: FONT_BODY }}>
            MON NUMÉRO PRO
          </span>
          <PilotBadge />
        </div>
        <div className="text-white text-xl font-extrabold mt-0.5 truncate" style={{ fontFamily: FONT_HEAD }}>
          {ligne.numero}
        </div>

        <div className="rounded-xl px-3 py-2.5 mt-3" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="text-white/60" style={{ fontSize: 11 }}>
                Crédit du compte
              </div>
              <div
                className="font-extrabold text-lg"
                style={{ color: decouvert ? "#FFD3BC" : "#fff", fontFamily: FONT_HEAD }}
              >
                {somme(soldeCompte, operateur)}
              </div>
            </div>
            <button
              onClick={() => onRecharge(ligne.id)}
              className="flex items-center gap-1.5 shrink-0 rounded-full px-3 py-2 text-xs font-bold text-white"
              style={{ background: C.orange, fontFamily: FONT_HEAD }}
            >
              <CreditCard size={13} /> Recharger
            </button>
          </div>
          <div className="text-white/60 mt-1.5" style={{ fontSize: 10, lineHeight: 1.4 }}>
            {decouvert
              ? "Votre compte est à découvert : l'abonnement mensuel a été prélevé malgré un crédit insuffisant. Rechargez pour régulariser, le prélèvement du mois prochain s'y ajoutera."
              : "Il alimente votre crédit d'appel par transfert et règle l'abonnement mensuel de votre numéro, prélevé automatiquement en début de mois."}
          </div>
        </div>

        <div className="rounded-xl px-3 py-2.5 mt-2" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="text-white/60" style={{ fontSize: 11 }}>
                Crédit d'appel
              </div>
              <div className="text-white font-extrabold text-lg" style={{ fontFamily: FONT_HEAD }}>
                {somme(soldeAppel, operateur)}
              </div>
              {ligne.prixMinute != null && (
                <div className="text-white/60" style={{ fontSize: 10 }}>
                  Appel local à {somme(ligne.prixMinute, operateur)} / min
                </div>
              )}
            </div>
            <button
              onClick={() => onTransferer(ligne.id)}
              disabled={soldeCompte <= 0}
              className="flex items-center gap-1.5 shrink-0 rounded-full px-3 py-2 text-xs font-bold text-white"
              style={{ background: "rgba(255,255,255,0.18)", fontFamily: FONT_HEAD, opacity: soldeCompte <= 0 ? 0.5 : 1 }}
            >
              <Coins size={13} /> Transférer
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-3">
          <div className="rounded-xl px-2.5 py-2" style={{ background: "rgba(255,255,255,0.1)" }}>
            <div className="text-white font-bold text-sm" style={{ fontFamily: FONT_HEAD }}>
              {HISTORIQUE_APPELS.length - manques}
            </div>
            <div className="text-white/60" style={{ fontSize: 11 }}>
              Appels ce mois
            </div>
          </div>
          <div className="rounded-xl px-2.5 py-2" style={{ background: "rgba(255,255,255,0.1)" }}>
            <div className="text-white font-bold text-sm" style={{ fontFamily: FONT_HEAD }}>
              {manques}
            </div>
            <div className="text-white/60" style={{ fontSize: 11 }}>
              Appels manqués
            </div>
          </div>
        </div>
      </div>

      {sansCredit && (
        <div className="rounded-2xl p-3.5" style={{ background: C.waitBg, border: `1px solid ${C.waitBorder}` }}>
          <div className="flex items-center gap-2 mb-1">
            <Siren size={15} color={C.waitText} />
            <span className="text-sm font-extrabold" style={{ color: C.waitText, fontFamily: FONT_HEAD }}>
              Crédit épuisé
            </span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: C.waitText, opacity: 0.9 }}>
            Votre compte reste actif et votre numéro vous appartient toujours. Vous recevez vos appels ;
            les appels sortants reprennent dès qu'un transfert alimente votre crédit d'appel.
          </p>
        </div>
      )}

      <Card>
        <span className="text-sm font-extrabold block mb-2" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Qui paie quoi
        </span>
        <div className="flex flex-col gap-2">
          {[
            { icon: BadgeCheck, t: "Le numéro est gratuit pendant la phase pilote", c: C.green },
            { icon: PhoneIncoming, t: "Réception d'appels : gratuite, où que vous soyez", c: C.green },
            { icon: PhoneCall, t: "Appels sortants : débités de votre crédit prépayé", c: C.orange },
            { icon: Wallet, t: "Recharge directement dans l'app, quand vous voulez", c: C.orange },
          ].map((r, i) => (
            <div key={i} className="flex items-start gap-2">
              <r.icon size={14} color={r.c} className="shrink-0 mt-0.5" />
              <span className="text-xs" style={{ color: C.muted }}>
                {r.t}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <AppelsEtDepenses goTo={goTo} facture={true} prelevements={prelevements} operateur={operateur} />

      <div className="grid grid-cols-2 gap-2">
        <GhostButton color={C.orange} onClick={() => goTo("recharges")}>
          Mes recharges
        </GhostButton>
        {/* « Ma conso » remplace « Grille tarifaire » (v89) */}
        <GhostButton color={C.blue} onClick={() => goTo("conso")}>
          Ma conso
        </GhostButton>
      </div>
      {/* La montée vers Business est possible, le retour ne l'est pas.
          GTS Africa ne distribuant pas Business, la carte disparaît. */}
      {operateur.offres.includes("business") && (
      <Card style={{ borderColor: C.blueDark + "40" }}>
        <div className="flex items-center gap-2 mb-3">
          <IconTile icon={<ArrowUpRight size={19} />} color={C.blueDark} bg={C.blueSoft} />
          <span className="font-extrabold text-sm" style={{ color: C.text, fontFamily: FONT_HEAD }}>
            Passer à Mobinawa-Business
          </span>
        </div>
        <Progression courante="pro" niveaux={niveauxDe(operateur)} />
        <div style={{ height: 12 }} />
        <p className="text-sm mb-3" style={{ color: C.muted }}>
          Votre activité devient une entreprise et vous équipez une équipe. Vous gardez votre numéro et le
          crédit qui reste dessus. Le changement est définitif : on ne revient pas de Business à PRO.
        </p>
        <PrimaryButton color={C.blueDark} onClick={() => goTo("moreInfoBusiness")}>
          Découvrir la migration
        </PrimaryButton>
      </Card>
      )}

      {/* En production, le prélèvement se déclenche seul en début de mois.
          Ce bouton ne sert qu'à le montrer dans le prototype. */}
      <Card style={{ background: C.cardSoft, borderStyle: "dashed" }}>
        <span className="text-xs font-bold uppercase tracking-wide block mb-1" style={{ color: C.muted }}>
          Démonstration
        </span>
        <p className="text-xs leading-relaxed mb-2" style={{ color: C.muted }}>
          Simuler le prélèvement automatique de l'abonnement mensuel de votre numéro
          ({somme(abonnementMensuelDe(operateur), operateur)}) sur le crédit du compte.
          {ligne.moisOffert && " Votre mois offert couvrira ce premier prélèvement."}
        </p>
        <GhostButton color={C.muted} onClick={() => onPrelever(ligne.id)}>
          Simuler le prélèvement du mois
        </GhostButton>
      </Card>
    </>
  );
}

/* --- Business : facturé, jamais de recharge côté collaborateur --- */
/* L'app ne porte que la vue collaborateur : l'administration du compte
   entreprise se fait sur l'espace Manager, sur le web. */

/* ------------------------------------------------------------------ */
/*  MES FACTURES : abonnements prélevés et recharges du compte          */
/* ------------------------------------------------------------------ */
function FacturesScreen({ recharges, prelevements, operateur, goTo }) {
  const [filtre, setFiltre] = useState("tout");

  const lignes = [
    ...prelevements.map((p) => ({
      cle: `abo-${p.id}`,
      type: "abonnement",
      titre: p.offert ? "Mois d'abonnement offert" : "Abonnement mensuel du numéro",
      detail: p.numero,
      date: p.date,
      reference: p.reference,
      montant: -p.montant,
      offert: p.offert, // mois offert à l'activation (v88)
    })),
    ...recharges.map((r) => ({
      cle: `rec-${r.id}`,
      type: "recharge",
      titre: r.moyen,
      detail: r.statut,
      date: r.date,
      reference: r.reference,
      montant: r.montant,
    })),
  ];
  const visibles = filtre === "tout" ? lignes : lignes.filter((l) => l.type === filtre);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={Receipt} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Mes factures
        </h2>
        <LogoAccueil />
      </div>

      <div className="flex gap-2">
        {[
          { id: "tout", label: "Tout" },
          { id: "abonnement", label: "Abonnements" },
          { id: "recharge", label: "Recharges" },
        ].map((f) => {
          const actif = filtre === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setFiltre(f.id)}
              className="flex-1 rounded-xl py-2 text-xs font-bold"
              style={{
                background: actif ? C.blue : C.card,
                color: actif ? "#fff" : C.muted,
                border: `1.5px solid ${actif ? C.blue : C.border}`,
                fontFamily: FONT_HEAD,
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {visibles.length === 0 ? (
        <Card style={{ background: C.cardSoft }}>
          <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
            Aucun document pour l'instant. Vos recharges et les prélèvements de l'abonnement de votre
            numéro apparaîtront ici.
          </p>
        </Card>
      ) : (
        <div className="flex flex-col gap-2">
          {visibles.map((l) => {
            const debit = l.montant < 0;
            return (
              <Card key={l.cle} className="flex items-center gap-3">
                <IconTile
                  icon={debit || l.offert ? <Receipt size={17} /> : <Wallet size={17} />}
                  color={l.offert ? C.green : debit ? C.blueDark : C.green}
                  bg={l.offert ? C.greenSoft : debit ? C.blueSoft : C.greenSoft}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold truncate" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                    {l.titre}
                  </div>
                  <div className="text-xs truncate" style={{ color: C.muted }}>
                    {l.date} · {l.reference}
                  </div>
                </div>
                <div className="text-sm font-extrabold shrink-0" style={{ color: debit ? C.text : C.green, fontFamily: FONT_HEAD }}>
                  {l.offert ? "Offert" : `${debit ? "-" : "+"}${somme(Math.abs(l.montant), operateur)}`}
                </div>
              </Card>
            );
          })}
        </div>
      )}

      <Card style={{ background: C.cardSoft }}>
        <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
          Les recharges créditent le compte, l'abonnement mensuel du numéro en est prélevé en début de
          mois. Les communications, elles, sont décomptées du crédit d'appel et figurent dans vos appels et
          dépenses.
        </p>
      </Card>

      <GhostButton color={C.orange} onClick={() => goTo("recharges")}>
        Historique des recharges
      </GhostButton>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HISTORIQUE DES RECHARGES : ligne PRO uniquement                     */
/* ------------------------------------------------------------------ */
function RechargesScreen({ recharges, lignes, onRecharge, goTo, operateur }) {
  const proLine = lignes.find((l) => l.soldeCompte !== null && l.soldeCompte !== undefined && l.rattachement !== "perso");
  const migre = proLine && proLine.rattachement === "business";
  const total = recharges.reduce((somme, r) => somme + r.montant, 0);
  const offert = recharges.filter((r) => r.statut === "Offert").reduce((somme, r) => somme + r.montant, 0);

  /* Une ligne entreprise est facturée : elle n'a pas de recharges. */
  if (!proLine) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 rangee-titre">
          <BoutonRetour />
          <IconeEcran icon={History} />
          <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
            Historique des recharges
          </h2>
          <LogoAccueil />
        </div>
        <Card>
          <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
            Le crédit du compte et les recharges arrivent avec votre numéro PRO. En tant que collaborateur
            d'une entreprise, rien n'est à votre charge : c'est elle qui commande le crédit, depuis l'espace
            Manager ou par bon de commande auprès de nos équipes commerciales.
          </p>
        </Card>
        <GhostButton color={C.blue} onClick={() => goTo("tarifs")}>
          Voir la grille tarifaire
        </GhostButton>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={History} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Historique des recharges
        </h2>
        <LogoAccueil />
      </div>

      <div className="relative rounded-3xl p-4 overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.blueDark}, ${C.blue})` }}>
        <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full" style={{ background: "rgba(232,93,4,0.18)" }} />
        <span className="text-white/60 text-xs font-semibold" style={{ fontFamily: FONT_BODY }}>
          Total rechargé · {proLine.numero || proLine.msisdn}
        </span>
        <div className="text-white text-2xl font-extrabold mt-1" style={{ fontFamily: FONT_HEAD }}>
          {somme(total, operateur)}
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <div className="rounded-xl px-2.5 py-2" style={{ background: "rgba(255,255,255,0.1)" }}>
            <div className="text-white font-bold text-sm" style={{ fontFamily: FONT_HEAD }}>
              {somme(proLine.soldeCompte || 0, operateur)}
            </div>
            <div className="text-white/60" style={{ fontSize: 11 }}>
              Crédit du compte
            </div>
          </div>
          <div className="rounded-xl px-2.5 py-2" style={{ background: "rgba(255,255,255,0.1)" }}>
            <div className="text-white font-bold text-sm" style={{ fontFamily: FONT_HEAD }}>
              {somme(offert, operateur)}
            </div>
            <div className="text-white/60" style={{ fontSize: 11 }}>
              Dont offert
            </div>
          </div>
        </div>
        {migre ? (
          <p className="text-white/60 text-xs mt-3 leading-relaxed" style={{ fontFamily: FONT_BODY }}>
            Votre compte est passé sur Mobinawa-Business : le crédit restant est consommé, puis le relais
            est pris par le crédit prépayé de l'entreprise. Plus aucune recharge n'est nécessaire.
          </p>
        ) : (
          <button
            onClick={() => onRecharge(proLine.id)}
            className="w-full flex items-center justify-center gap-1.5 rounded-xl py-2.5 mt-3 text-xs font-bold text-white"
            style={{ background: C.orange, fontFamily: FONT_HEAD }}
          >
            <PlusCircle size={14} /> Nouvelle recharge
          </button>
        )}
      </div>

      {recharges.length === 0 ? (
        <Card className="text-center">
          <IconTile icon={<Wallet size={19} />} color={C.orange} bg={C.orangeSoft} />
          <p className="text-sm mt-3" style={{ color: C.muted }}>
            Aucune recharge pour l'instant. Votre première recharge apparaîtra ici avec son reçu.
          </p>
        </Card>
      ) : (
        <div>
          <SectionTitle>{recharges.length} opération{recharges.length > 1 ? "s" : ""}</SectionTitle>
          <div className="flex flex-col gap-2 mt-2">
            {recharges.map((r) => {
              const cadeau = r.statut === "Offert";
              return (
                <Card key={r.id} className="flex items-center gap-3">
                  <IconTile
                    icon={cadeau ? <BadgeCheck size={17} /> : <Wallet size={17} />}
                    color={cadeau ? C.green : C.orange}
                    bg={cadeau ? C.greenSoft : C.orangeSoft}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold truncate" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                      {r.moyen}
                    </div>
                    <div className="text-xs" style={{ color: C.muted }}>
                      {r.date}
                    </div>
                    <div className="text-xs" style={{ color: C.muted, opacity: 0.75 }}>
                      Réf. {r.reference}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm font-extrabold" style={{ color: cadeau ? C.green : C.text, fontFamily: FONT_HEAD }}>
                      +{somme(r.montant, operateur)}
                    </div>
                    <span
                      className="inline-block rounded-full px-1.5 py-0.5 font-bold mt-0.5"
                      style={{
                        background: cadeau ? C.greenSoft : C.blueSoft,
                        color: cadeau ? C.green : C.blue,
                        fontSize: 9,
                        fontFamily: FONT_HEAD,
                      }}
                    >
                      {r.statut}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      <GhostButton color={C.blue} onClick={() => goTo("tarifs")}>
        Voir la grille tarifaire
      </GhostButton>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  DEMANDE PRO : formulaire court + pièce d'identité                   */
/* ------------------------------------------------------------------ */
function SubscribeProForm({ onSubmit, msisdn, operateur, paysPro }) {
  /* Le pays est déjà arrêté avant d'arriver ici : celui de la couverture pour
     un utilisateur local, celui choisi à l'écran précédent pour la diaspora.
     Le formulaire l'affiche, il ne le redemande pas. */
  const paysDispo = annuairesOuverts();
  const paysImpose =
    paysDispo.find((c) => c.id === operateur.id) || paysDispo.find((c) => c.id === paysPro);
  const [f, setF] = useState({
    prenom: "",
    nom: "",
    email: "",
    pays: paysImpose ? paysImpose.pays : "",
    metier: "",
    activite: "",
    piece: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const LABELS = {
    prenom: "Prénom",
    nom: "Nom",
    email: "Adresse e-mail",
    pays: "Pays du numéro PRO",
    metier: "Métier / Profession",
    activite: "Activité professionnelle",
  };

  function submit() {
    setSubmitted(true);
    /* La pièce d'identité reste facultative : elle n'empêche pas le dépôt. */
    const req = ["prenom", "nom", "email", "pays", "metier", "activite"];
    const errs = {};
    req.forEach((k) => {
      if (!f[k].trim()) errs[k] = "Champ requis";
    });
    /* L'e-mail porte le lien d'accès web envoyé après validation : il doit être exploitable. */
    if (f.email && !f.email.match(/^\S+@\S+\.\S+$/)) errs.email = "Email invalide";
    setErrors(errs);
    if (Object.keys(errs).length === 0) onSubmit(f);
  }

  const set = (k) => (v) => setF({ ...f, [k]: v });
  const missing = submitted ? Object.keys(errors).filter((k) => errors[k] === "Champ requis").map((k) => LABELS[k]) : [];

  return (
    <div className="flex flex-col gap-4">
      <AlertBanner missing={missing} />
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={Briefcase} color={C.orange} bg={C.orangeSoft} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          {/* trait d'union insécable : le titre ne se coupe pas au tiret (v115) */}
          Formulaire Mobinawa‑PRO
        </h2>
        <LogoAccueil />
      </div>

      <Card style={{ borderColor: C.orange + "40" }}>
        <p className="text-sm leading-relaxed" style={{ color: C.text }}>
          Un formulaire court. Votre dossier est ensuite revu par nos équipes, puis votre numéro
          professionnel vous est attribué.
        </p>
      </Card>

      <div>
        <div className="grid grid-cols-2 gap-x-3">
          <TextField label="Prénom" required value={f.prenom} onChange={set("prenom")} error={errors.prenom} />
          <TextField label="Nom" required value={f.nom} onChange={set("nom")} error={errors.nom} />
        </div>
        <TextField
          label="Adresse e-mail"
          required
          type="email"
          value={f.email}
          onChange={set("email")}
          error={errors.email}
          placeholder="vous@exemple.com"
          hint="C'est à cette adresse que sera envoyé le lien d'accès web à votre compte."
        />
        <LockedField
          label="Numéro mobile WhatsApp"
          value={msisdn}
          hint="Numéro vérifié à votre inscription. Il identifie votre compte et ne peut pas être modifié ici."
        />
        <LockedField
          label="Pays du numéro PRO"
          value={paysImpose ? paysImpose.pays : "—"}
          hint={paysImpose ? undefined : "Revenez à l'écran précédent pour choisir le pays de votre numéro."}
        />
        <TextField
          label="Métier / Profession"
          required
          value={f.metier}
          onChange={set("metier")}
          error={errors.metier}
          placeholder="Ex : Couturier, Avocat, Commerçant..."
        />
        <TextArea
          label="Activité professionnelle"
          required
          value={f.activite}
          onChange={set("activite")}
          error={errors.activite}
          placeholder="Décrivez brièvement votre activité..."
        />
        <FileField
          label="Pièce d'identité"
          value={f.piece}
          onChange={set("piece")}
          hint="CNI, passeport ou titre de séjour, utilisés uniquement pour la vérification."
        />

        <PrimaryButton onClick={submit} color={C.orange} className="mt-2">
          Envoyer ma demande
        </PrimaryButton>
        <p className="text-xs text-center mt-3" style={{ color: C.muted }}>
          Réponse de nos équipes sous 2 jours.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FICHE ENTREPRISE : demande Business                                 */
/* ------------------------------------------------------------------ */
function SubscribeBusinessForm({ onSubmit, migration, msisdn }) {
  const [f, setF] = useState({
    entreprise: "",
    secteur: "",
    sousSecteur: "",
    logo: "",
    description: "",
    prenomResp: "",
    nomResp: "",
    fonctionResp: "",
    email: "",
    emailEntreprise: "", // facultatif, affiché sur la fiche de l'annuaire (v114)
    site: "", // facultatif, affiché sur la fiche de l'annuaire (v116)
    justificatif: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const LABELS = {
    entreprise: "Raison sociale",
    secteur: "Secteur d'activité",
    sousSecteur: "Sous-secteur d'activité",
    description: "Description de vos activités",
    prenomResp: "Prénom du représentant",
    nomResp: "Nom du représentant",
    fonctionResp: "Fonction",
    email: "E-mail du représentant",
  };

  function submit() {
    setSubmitted(true);
    /* Logo et justificatif restent facultatifs : ils n'empêchent pas le dépôt. */
    const req = ["entreprise", "secteur", "description", "prenomResp", "nomResp", "fonctionResp", "email"];
    const errs = {};
    req.forEach((k) => {
      if (!f[k].trim()) errs[k] = "Champ requis";
    });
    /* Le sous-secteur n'est exigible qu'une fois le secteur choisi. */
    if (f.secteur && !f.sousSecteur.trim()) errs.sousSecteur = "Champ requis";
    if (f.email && !f.email.match(/^\S+@\S+\.\S+$/)) errs.email = "Email invalide";
    if (f.emailEntreprise && !f.emailEntreprise.match(/^\S+@\S+\.\S+$/)) errs.emailEntreprise = "Email invalide";
    if (f.site && !f.site.match(/^(https?:\/\/)?[^\s.]+\.[^\s]{2,}$/)) errs.site = "Adresse de site invalide";
    setErrors(errs);
    if (Object.keys(errs).length === 0) onSubmit(f);
  }

  const set = (k) => (v) => setF({ ...f, [k]: v });
  const missing = submitted ? Object.keys(errors).filter((k) => errors[k] === "Champ requis").map((k) => LABELS[k]) : [];

  return (
    <div className="flex flex-col gap-4">
      <AlertBanner missing={missing} />
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={Building2} color={C.blueDark} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Formulaire Mobinawa‑Business
        </h2>
        <LogoAccueil />
      </div>

      <Card style={{ borderColor: C.blueDark + "40" }}>
        <p className="text-sm leading-relaxed" style={{ color: C.text }}>
          Réservé au responsable de l'organisation. Après validation, vous devenez <b>administrateur</b> du
          compte entreprise et vos collaborateurs y sont rattachés.
          {/* Phrase sur le numéro PRO pendant l'examen retirée (v122) */}
        </p>
      </Card>

      {/* L'encart « En choisissant Business… » a été retiré (v115) */}
      {migration && (
        <RuleCallout icon={<Lock size={14} />}>
          Vous migrez depuis Mobinawa-PRO. Votre numéro et votre crédit restant sont <b>conservés</b> et
          basculent sur l'offre Business, où la facturation passe à la société. <b>Ce changement ne se
          défait pas</b> : il n'existe pas de retour de Business à PRO.
        </RuleCallout>
      )}

      {/* Deux parties distinctes (v114) : l'entreprise, puis le représentant (terme v129). */}
      <Card>
        <div className="flex items-center gap-2 mb-3 pb-3" style={{ borderBottom: `1px solid ${C.border}` }}>
          <Building2 size={19} color={C.blueDark} className="shrink-0" />
          <span className="font-extrabold text-sm" style={{ color: C.text, fontFamily: FONT_HEAD }}>
            L'entreprise
          </span>
        </div>
        <TextField
          label="Raison sociale"
          required
          value={f.entreprise}
          onChange={set("entreprise")}
          error={errors.entreprise}
          placeholder="Ex : Cabinet Ekani & Associés"
        />
        <SelectField
          label="Secteur d'activité"
          required
          value={f.secteur}
          onChange={(v) => setF({ ...f, secteur: v, sousSecteur: "" })}
          error={errors.secteur}
          options={SECTEURS}
        />
        {/* Liste dépendante : elle n'a de sens qu'une fois le secteur choisi. */}
        {f.secteur && (
          <SelectField
            label="Sous-secteur d'activité"
            required
            value={f.sousSecteur}
            onChange={set("sousSecteur")}
            error={errors.sousSecteur}
            options={sousSecteursDe(f.secteur)}
            hint="Il précise votre activité sur votre fiche de l'annuaire ProCom."
          />
        )}
        <TextArea
          label="Description de vos activités"
          required
          value={f.description}
          onChange={set("description")}
          error={errors.description}
          placeholder="Décrivez brièvement ce que fait votre entreprise..."
        />
        <TextField
          label="E-mail de l'entreprise"
          type="email"
          value={f.emailEntreprise}
          onChange={set("emailEntreprise")}
          error={errors.emailEntreprise}
          placeholder="contact@entreprise.cm"
          hint="Affiché sur la fiche de votre entreprise dans l'annuaire ProCom."
        />
        <TextField
          label="Site web de l'entreprise"
          value={f.site}
          onChange={set("site")}
          error={errors.site}
          placeholder="www.entreprise.cm"
          hint="Affiché sur la fiche de votre entreprise dans l'annuaire ProCom."
        />
        <FileField
          label="Logo de l'entreprise"
          accent={C.blueDark}
          value={f.logo}
          onChange={set("logo")}
          fileName="logo_entreprise.png"
          hint="Affiché à vos correspondants et dans l'annuaire ProCom."
        />
        <FileField
          label="Justificatif d'entreprise"
          accent={C.blueDark}
          value={f.justificatif}
          onChange={set("justificatif")}
          fileName="justificatif_entreprise.jpg"
          hint="Registre de commerce ou attestation d'immatriculation."
        />
      </Card>

      <Card>
        <div className="flex items-center gap-2 mb-3 pb-3" style={{ borderBottom: `1px solid ${C.border}` }}>
          <UserCircle2 size={19} color={C.blueDark} className="shrink-0" />
          <span className="font-extrabold text-sm" style={{ color: C.text, fontFamily: FONT_HEAD }}>
            Le représentant
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-3">
          <TextField label="Prénom du représentant" required value={f.prenomResp} onChange={set("prenomResp")} error={errors.prenomResp} />
          <TextField label="Nom du représentant" required value={f.nomResp} onChange={set("nomResp")} error={errors.nomResp} />
        </div>
        <TextField
          label="Fonction"
          required
          value={f.fonctionResp}
          onChange={set("fonctionResp")}
          error={errors.fonctionResp}
          placeholder="Ex : Gérant, DAF, DRH"
        />
        <TextField label="E-mail du représentant" required type="email" value={f.email} onChange={set("email")} error={errors.email} />
        <LockedField
          label="Numéro mobile WhatsApp"
          value={msisdn}
          hint="Numéro vérifié à votre inscription. Il identifie votre compte et ne peut pas être modifié ici."
        />
      </Card>

      <div>
        <PrimaryButton onClick={submit} color={C.blueDark} className="mt-2">
          Envoyer ma demande
        </PrimaryButton>
        <p className="text-xs text-center mt-3" style={{ color: C.muted }}>
          Contrôle de l'entreprise et du représentant sous 2 jours.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  RECHARGE : PRO uniquement, jamais pour une ligne entreprise         */
/* ------------------------------------------------------------------ */
/* Transfert du crédit du compte vers le crédit d'appel détenu par SIPPY. */
function TransfertModal({ ligne, onClose, onConfirm, operateur }) {
  const dispo = (ligne && ligne.soldeCompte) || 0;
  /* Montant libre, plafonné par le crédit du compte disponible. */
  const [saisie, setSaisie] = useState("");
  if (!ligne) return null;

  const montant = Number(String(saisie).replace(",", ".")) || 0;
  const trop = montant > dispo;
  const valide = montant > 0 && !trop;
  const pas = operateur.devise === "EUR" ? "0.5" : "500";

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full rounded-t-3xl p-5 pb-6" style={{ background: C.card, maxWidth: 430, margin: "0 auto" }}>
        <div className="w-10 h-1.5 rounded-full mx-auto mb-4" style={{ background: C.border }} />
        <div className="flex items-center gap-2 mb-1">
          <IconTile icon={<Coins size={18} />} color={C.blue} bg={C.blueSoft} size={38} />
          <div>
            <div className="font-extrabold text-sm" style={{ color: C.text, fontFamily: FONT_HEAD }}>
              Transférer vers mon crédit d'appel
            </div>
            <div className="text-xs" style={{ color: C.muted }}>
              Crédit du compte disponible · {somme(dispo, operateur)}
            </div>
          </div>
        </div>

        {dispo <= 0 ? (
          <p className="text-sm leading-relaxed mt-4" style={{ color: C.muted }}>
            Votre crédit de compte est épuisé. Rechargez-le par carte Visa avant de transférer.
          </p>
        ) : (
          <>
            <label className="block mt-4">
              <span className="text-xs font-semibold mb-1 block" style={{ color: C.muted, fontFamily: FONT_BODY }}>
                Montant à transférer
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  max={dispo}
                  step={pas}
                  value={saisie}
                  onChange={(e) => setSaisie(e.target.value)}
                  placeholder="0"
                  className="flex-1 min-w-0 rounded-xl px-3 py-2.5 text-sm outline-none"
                  style={{
                    border: `1.5px solid ${trop ? C.orange : C.border}`,
                    fontFamily: FONT_BODY,
                    color: C.text,
                    background: "#FAFBFC",
                  }}
                />
                <button
                  onClick={() => setSaisie(String(dispo))}
                  className="shrink-0 rounded-xl px-3 py-2.5 text-xs font-bold"
                  style={{ background: C.blueSoft, color: C.blueDark, fontFamily: FONT_HEAD }}
                >
                  Tout
                </button>
              </div>
              {trop && (
                <span className="text-xs mt-1 block" style={{ color: C.orange }}>
                  Vous ne pouvez pas transférer plus que votre crédit de compte.
                </span>
              )}
            </label>

            {valide && (
              <div className="rounded-xl px-3 py-2 mt-3 text-xs leading-relaxed" style={{ background: C.blueSoft, color: C.blueDark }}>
                Après transfert, votre crédit d'appel sera de{" "}
                <b>{somme((ligne.soldeAppel || 0) + montant, operateur)}</b> et l'appel local passera à{" "}
                <b>{somme(prixMinuteDe(operateur, (ligne.soldeAppel || 0) + montant), operateur)} / min</b>
                {" "}jusqu'à votre prochain transfert.
              </div>
            )}
            <p className="text-xs leading-relaxed mt-3" style={{ color: C.muted }}>
              Gardez de quoi couvrir l'abonnement mensuel de votre numéro : il est prélevé
              automatiquement sur le crédit du compte en début de mois.
            </p>
            <PrimaryButton
              color={C.blue}
              className="mt-3"
              disabled={!valide}
              onClick={() => onConfirm(montant)}
            >
              {valide ? `Transférer ${somme(montant, operateur)}` : "Saisissez un montant"}
            </PrimaryButton>
          </>
        )}
      </div>
    </div>
  );
}

function RechargeModal({ ligne, onClose, onConfirm, operateur }) {
  /* Montants et minimum fixés par l'opérateur, dans sa devise. */
  const montants = operateur.montantsRecharge;
  const [montant, setMontant] = useState(operateur.rechargeMin);
  const [moyen, setMoyen] = useState(MOYENS_PAIEMENT[0].id);
  if (!ligne) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full rounded-t-3xl p-5 pb-6" style={{ background: C.card, maxWidth: 430, margin: "0 auto" }}>
        <div className="w-10 h-1.5 rounded-full mx-auto mb-4" style={{ background: C.border }} />
        <div className="flex items-center gap-2 mb-1">
          <IconTile icon={<Wallet size={18} />} color={C.orange} bg={C.orangeSoft} size={38} />
          <div>
            <div className="font-extrabold text-sm" style={{ color: C.text, fontFamily: FONT_HEAD }}>
              Recharger mon crédit
            </div>
            <div className="text-xs" style={{ color: C.muted }}>
              {ligne.numero || ligne.msisdn} · crédit du compte {somme(ligne.soldeCompte || 0, operateur)}
            </div>
          </div>
        </div>

        <span className="text-xs font-semibold block mt-4 mb-2" style={{ color: C.muted }}>
          Montant · minimum {somme(operateur.rechargeMin, operateur)}
        </span>
        <div className="grid grid-cols-2 gap-2">
          {montants.map((m) => (
            <button
              key={m}
              onClick={() => setMontant(m)}
              className="rounded-xl py-2.5 text-sm font-bold"
              style={{
                border: `1.5px solid ${montant === m ? C.orange : C.border}`,
                background: montant === m ? C.orangeSoft : "#FAFBFC",
                color: montant === m ? C.orange : C.text,
                fontFamily: FONT_HEAD,
              }}
            >
              {m.toLocaleString("fr-FR")}
            </button>
          ))}
        </div>

        <span className="text-xs font-semibold block mt-4 mb-2" style={{ color: C.muted }}>
          Moyen de paiement
        </span>
        <div className="flex flex-col gap-2">
          {MOYENS_PAIEMENT.map((p) => (
            <button
              key={p.id}
              onClick={() => setMoyen(p.id)}
              className="flex items-center gap-3 p-2.5 rounded-2xl text-left"
              style={{
                border: `1.5px solid ${moyen === p.id ? C.orange : C.border}`,
                background: moyen === p.id ? C.orangeSoft : "transparent",
              }}
            >
              <IconTile icon={<p.icon size={17} />} color={C.orange} bg="#fff" size={36} />
              <span className="text-sm font-semibold flex-1" style={{ color: C.text, fontFamily: FONT_BODY }}>
                {p.label}
              </span>
              {moyen === p.id && <Check size={17} color={C.orange} />}
            </button>
          ))}
        </div>

        <PrimaryButton
          color={C.orange}
          className="mt-4"
          onClick={() => onConfirm(montant, (MOYENS_PAIEMENT.find((p) => p.id === moyen) || {}).label)}
        >
          Payer {somme(montant, operateur)}
        </PrimaryButton>
      </div>
    </div>
  );
}


/* ------------------------------------------------------------------ */
/*  À PROPOS                                                            */
/* ------------------------------------------------------------------ */
function AboutScreen() {
  const principes = [
    {
      icon: KeyRound,
      titre: "WhatsApp comme clé",
      texte:
        "L'authentification passe par le canal que nos clients utilisent déjà chaque jour, avec le SMS en filet de sécurité. Elle est assurée par notre partenaire CIRPACK en amont de l'application.",
    },
    {
      icon: ShieldCheck,
      titre: "Validation par nos équipes",
      texte:
        "PRO et Business sont activés après revue humaine de chaque dossier. C'est notre contrôle qualité et notre première barrière anti-fraude.",
    },
    {
      icon: Smartphone,
      titre: "Le numéro, un actif géré",
      texte:
        "Attribué, suspendu, récupéré : chaque numéro suit un cycle de vie maîtrisé, du stock opérateur jusqu'au client, et retour.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={Sparkles} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          À propos de Mobinawa
        </h2>
        <LogoAccueil />
      </div>
      <Card>
        <p className="text-sm leading-relaxed" style={{ color: C.text, fontFamily: FONT_BODY }}>
          Mobinawa est une application de communication pour le <b>Cameroun et sa diaspora</b>, conçue par{" "}
          <b>GTS Africa</b> en partenariat avec <b>CIRPACK</b>. Tout le monde entre par la même porte : un
          compte activé par WhatsApp en deux minutes. Chacun fait ensuite évoluer son compte, PRO pour un numéro
          professionnel, Business pour équiper une entreprise.
        </p>
      </Card>

      <div>
        <SectionTitle>Les principes qui tiennent tout</SectionTitle>
        <div className="flex flex-col gap-2 mt-2">
          {principes.map((p, i) => (
            <Card key={i}>
              <div className="flex items-center gap-2 mb-2">
                <IconTile icon={<p.icon size={17} />} color={C.blue} bg={C.blueSoft} />
                <span className="text-sm font-extrabold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                  {p.titre}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                {p.texte}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle>L'annuaire ProCom</SectionTitle>
        <Card className="mt-2">
          <ListeInfosProcom />
        </Card>
      </div>

      <Card style={{ background: C.blueSoft, border: "none" }}>
        <p className="text-sm leading-relaxed" style={{ color: C.blueDark }}>
          Aucun numéro mobile personnel n'est exposé à vos interlocuteurs : sur Mobinawa, vous êtes
          identifié par votre nom, votre fonction et votre organisation.
        </p>
      </Card>

      <p className="text-center text-xs py-1" style={{ color: C.muted, fontFamily: FONT_BODY }}>
        Prototype Mobinawa {VERSION_PROTO}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  EN SAVOIR PLUS : Mobinawa-PRO                                       */
/* ------------------------------------------------------------------ */
/* Deux modes (v68) :
   - « choix » (écran moreInfoPro) : pour la diaspora, le choix du pays vient
     d'abord ; l'offre et les boutons n'apparaissent qu'une fois le pays choisi.
   - « info » (écran infoPro, ouvert par « En savoir plus ») : la présentation
     de l'offre, la même que pour un usager local. Pour la diaspora, « Demander
     un numéro PRO » y mène au choix du pays. */
function MoreInfoProScreen({ goTo, bloque, operateur, paysPro, onChoisirPays, mode = "choix" }) {
  /* GTS Africa ne fournit pas de numéros : son utilisateur choisit d'abord le
     pays africain où il veut être joignable. Une couverture locale impose le
     sien, le choix ne se pose pas. */
  const couvertureLocale = annuairesOuverts().find((c) => c.id === operateur.id);
  const paysChoisi = couvertureLocale || (paysPro ? annuairesOuverts().find((c) => c.id === paysPro) : null);
  const modeInfo = mode === "info";
  const doitChoisir = !modeInfo && !couvertureLocale && !paysChoisi;
  const features = [
    {
      icon: Phone,
      title: "Un numéro professionnel dédié",
      text: "Votre numéro PRO devient votre identité professionnelle. Vos interlocuteurs ne voient jamais votre numéro mobile personnel. Gratuit pendant la phase pilote.",
    },
    {
      icon: Wallet,
      title: "Appels au crédit prépayé",
      text: "Un crédit de bienvenue est offert à l'activation. Une fois épuisé, vous rechargez dans l'app. Sans crédit, pas d'appel sortant : le compte reste actif et vos appels entrants arrivent toujours.",
    },
    {
      icon: FileText,
      title: "Suivi de consommation et d'activité",
      text: "Historique des appels émis, reçus et manqués, coût de chaque appel émis, solde à jour en permanence.",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={Briefcase} color={C.orange} bg={C.orangeSoft} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Mobinawa-PRO
        </h2>
        <LogoAccueil />
      </div>
      {/* Étape préalable pour la diaspora : où obtenir le numéro */}
      {!couvertureLocale && !modeInfo && (
        <Card style={{ borderColor: C.orange + "40" }}>
          <div className="flex items-center gap-2 mb-1">
            <IconTile icon={<Globe2 size={17} />} color={C.orange} bg={C.orangeSoft} />
            <span className="text-sm font-extrabold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
              Dans quel pays souhaitez-vous votre numéro PRO ?
            </span>
          </div>
          <p className="text-xs leading-relaxed mb-3" style={{ color: C.muted }}>
            {operateur.nom} ne fournit pas de numéro local. Votre numéro PRO sera un numéro fixe virtuel
            d'un pays couvert par le réseau ProCom, joignable localement depuis ce pays.
          </p>
          <div className="flex flex-col gap-2">
            {annuairesOuverts().map((c) => {
              const actif = paysChoisi && c.id === paysChoisi.id;
              return (
                <button
                  key={c.id}
                  onClick={() => onChoisirPays(c.id)}
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left"
                  style={{
                    background: actif ? C.orangeSoft : "transparent",
                    border: `1.5px solid ${actif ? C.orange : C.border}`,
                  }}
                >
                  <Flag code={c.drapeau} size={20} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-extrabold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                      {c.pays}
                    </div>
                    <div className="text-xs" style={{ color: C.muted }}>
                      {c.nom}
                    </div>
                  </div>
                  {actif && <Check size={15} color={C.orange} />}
                </button>
              );
            })}
          </div>
        </Card>
      )}
      {/* Le détail de l'offre ne s'affiche qu'une fois le pays arrêté. */}
      {!doitChoisir && (
        <>
          <div className="flex flex-col gap-2">
            {features.map((f, i) => (
              <Card key={i}>
                <div className="flex items-center gap-2 mb-2">
                  <IconTile icon={<f.icon size={17} />} color={C.orange} bg={C.orangeSoft} />
                  <span className="text-sm font-extrabold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                    {f.title}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {f.text}
                </p>
              </Card>
            ))}
          </div>
        </>
      )}
      {doitChoisir ? null : bloque ? (
        <RuleCallout>
          Votre compte est déjà passé sur Mobinawa-Business. Une ligne porte un seul rattachement : pour
          ouvrir un numéro PRO, il vous faut une seconde ligne mobile.
        </RuleCallout>
      ) : (
        /* La grille tarifaire passe toujours avant la demande, pour tous les
           usagers et dans les deux modes (v67, v69, v70). */
        <div className="flex flex-col-reverse gap-2">
          <PrimaryButton
            color={C.orange}
            onClick={() => goTo(modeInfo && !couvertureLocale ? "moreInfoPro" : "subscribePro")}
          >
            {/* Libellé unique (v115) */}
            Souscrire à Mobinawa-PRO
          </PrimaryButton>
          <GhostButton color={C.blue} onClick={() => goTo("tarifs")}>
            Consulter la grille tarifaire
          </GhostButton>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  EN SAVOIR PLUS : Mobinawa-Business                                  */
/* ------------------------------------------------------------------ */
function MoreInfoBusinessScreen({ goTo, migrationPossible, operateur, onTarifs }) {
  /* Présentation réécrite en v105 pour être plus claire : pour qui, ce que
     l'organisation obtient, comment se passe la mise en place, qui paie
     quoi. Sans jargon interne (ni « flotte », ni « SVI »). */
  const avantages = [
    {
      icon: Building2,
      title: "Un numéro officiel pour votre organisation",
      text: "Votre organisation est joignable sur un numéro PRO officiel, avec un standard téléphonique qui oriente les appels. Vous pouvez ajouter des numéros dédiés à un service ou à un collaborateur.",
    },
    {
      icon: Users2,
      title: "Un compte pour chaque collaborateur",
      text: "Chaque collaborateur reçoit son compte Mobinawa professionnel. Il l'active en quelques instants, par le lien reçu par e-mail ou par un code reçu par WhatsApp ou SMS.",
    },
    {
      icon: Video,
      title: "Travailler ensemble",
      text: "Appels, visioconférences, messages et transferts d'appel entre collaborateurs, et avec vos contacts Mobinawa extérieurs.",
    },
    {
      icon: Search,
      title: "Votre organisation dans l'annuaire ProCom",
      text: "Vos clients vous trouvent dans l'annuaire de l'application et vous appellent gratuitement.",
    },
  ];
  const etapes = [
    "Vous remplissez la fiche entreprise depuis l'application.",
    "Nos équipes vérifient l'organisation et son représentant, sous 2 jours.",
    "Le responsable que vous désignez, le Manager, reçoit par e-mail l'accès à son espace web, sur ordinateur, pour configurer le standard et ajouter les collaborateurs.",
    "Vos collaborateurs activent leur compte et communiquent.",
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={Building2} color={C.blueDark} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Mobinawa-Business
        </h2>
        <LogoAccueil />
      </div>

      <Card style={{ borderColor: C.blueDark + "40" }}>
        <p className="text-sm leading-relaxed" style={{ color: C.text }}>
          Mobinawa-Business équipe une organisation, entreprise, administration ou association, d'un numéro
          officiel et de comptes professionnels pour ses collaborateurs.
        </p>
      </Card>

      <SectionTitle>Ce que vous obtenez</SectionTitle>
      <div className="flex flex-col gap-2 -mt-2">
        {avantages.map((f, i) => (
          <Card key={i}>
            <div className="flex items-center gap-2 mb-2">
              <IconTile icon={<f.icon size={17} />} color={C.blueDark} bg={C.blueSoft} />
              <span className="text-sm font-extrabold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                {f.title}
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
              {f.text}
            </p>
          </Card>
        ))}
      </div>

      <SectionTitle>Comment ça se passe</SectionTitle>
      <Card className="-mt-2">
        <div className="flex flex-col gap-3">
          {etapes.map((t, i) => (
            <div key={i} className="flex items-start gap-3">
              <span
                className="flex items-center justify-center rounded-full font-bold text-xs shrink-0"
                style={{ width: 24, height: 24, background: C.blueSoft, color: C.blueDark, fontFamily: FONT_HEAD }}
              >
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed" style={{ color: C.text }}>
                {t}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <SectionTitle>Qui paie quoi</SectionTitle>
      <Card className="-mt-2">
        <div className="flex items-start gap-3">
          <IconTile icon={<Receipt size={17} />} color={C.blueDark} bg={C.blueSoft} />
          <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
            Les abonnements des numéros et des comptes sont facturés à l'organisation. Les appels et SMS sont
            décomptés d'un crédit prépayé commun, que le Manager commande depuis son espace web ou par bon de
            commande. Vos collaborateurs n'ont jamais à recharger.
          </p>
        </div>
      </Card>

      {migrationPossible && (
        <Card style={{ borderColor: C.waitBorder, background: C.waitBg }}>
          <div className="flex items-center gap-2 mb-2">
            <IconTile icon={<Lock size={18} />} color={C.waitText} bg="#FBEFD6" size={38} />
            <span className="font-extrabold text-sm" style={{ color: C.waitText, fontFamily: FONT_HEAD }}>
              Si vous passez de Mobinawa-PRO à Business
            </span>
          </div>
          <ul className="flex flex-col gap-1.5">
            {[
              "Vous gardez votre numéro PRO : il devient le numéro de votre organisation.",
              "Votre crédit restant est conservé et utilisé en premier.",
              "Ensuite, les communications sont facturées à l'organisation : plus de recharge.",
              "Ce passage est définitif : on ne revient pas de Business à PRO.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-xs" style={{ color: C.waitText, opacity: 0.9 }}>
                <Check size={13} className="mt-0.5 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Mobinawa-Business n'est distribué que par les opérateurs de couverture
          locale ; la diaspora n'y a pas accès. */}
      {operateur.offres.includes("business") ? (
        /* Comme pour PRO, la grille tarifaire passe avant la demande (v71).
           Elle s'ouvre directement sur l'onglet Mobinawa-Business. */
        <div className="flex flex-col gap-2">
          <GhostButton color={C.blue} onClick={onTarifs}>
            Consulter la grille tarifaire
          </GhostButton>
          <PrimaryButton color={C.blueDark} onClick={() => goTo("subscribeBusiness")}>
            {migrationPossible ? "Migrer vers Mobinawa-Business" : "Souscrire à Mobinawa-Business"}
          </PrimaryButton>
        </div>
      ) : (
        <RuleCallout>
          Mobinawa-Business est proposé par les opérateurs de couverture locale
          {" "}({COUVERTURES.filter((c) => c.ouvert && c.offres.includes("business")).map((c) => c.nom).join(", ")}),
          aux comptes identifiés par un numéro mobile de leur pays. Votre compte relevant de{" "}
          {operateur.nom}, seule l'offre Mobinawa-PRO vous est accessible.
        </RuleCallout>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SERVICES GRATUITS                                                   */
/* ------------------------------------------------------------------ */
function ServicesScreen({ goTo }) {
  const services = SERVICES_GRATUITS;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={LayoutGrid} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Services gratuits & pratiques
        </h2>
        <LogoAccueil />
      </div>
      <p className="text-sm" style={{ color: C.muted }}>
        Des services d'utilité publique accessibles à tous les utilisateurs Mobinawa, gratuitement.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {services.map((s, i) => (
          <Card
            key={i}
            className="flex flex-col gap-2"
            onClick={s.route ? () => goTo(s.route) : undefined}
            style={s.route ? { cursor: "pointer" } : undefined}
          >
            <IconTile icon={<s.icon size={18} />} color={s.color} bg={s.bg} />
            <span className="text-sm font-semibold" style={{ color: C.text, fontFamily: FONT_BODY }}>
              {s.label}
            </span>
            {s.route ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold" style={{ color: s.color }}>
                Consulter <ChevronRight size={13} />
              </span>
            ) : (
              <SoonBadge />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  LANGUE (v94)                                                        */
/*  Choix de la langue de l'interface ; l'anglais traduit tous les      */
/*  écrans (v95, voir TRADUCTION en tête de fichier).                   */
/* ------------------------------------------------------------------ */
function LangueScreen({ langue, onChoisir }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran drapeau={(LANGUES.find((l) => l.id === langue) || LANGUES[0]).drapeau} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Langue
        </h2>
        <LogoAccueil />
      </div>
      <div className="flex flex-col gap-2">
        {LANGUES.map((l) => {
          const actif = l.id === langue;
          return (
            <button
              key={l.id}
              onClick={() => onChoisir(l.id)}
              className="flex items-center gap-3 rounded-2xl px-3.5 py-3 text-left"
              style={{ background: actif ? C.blueSoft : C.card, border: `1.5px solid ${actif ? C.blue : C.border}` }}
            >
              <DrapeauRond code={l.drapeau} size={32} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-extrabold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                  {l.nom}
                </div>
                <div className="text-xs" style={{ color: C.muted }}>
                  {l.detail}
                </div>
              </div>
              <span
                className="flex items-center justify-center rounded-full shrink-0"
                style={{ width: 22, height: 22, background: actif ? C.blue : "transparent", border: `1.5px solid ${actif ? C.blue : C.border}` }}
              >
                {actif && <Check size={13} color="#fff" />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MA CONSO (v89) : statistiques d'appels du numéro PRO                */
/*  Ouvert depuis l'espace client. Données de démonstration : en        */
/*  production, elles viennent de SIPPY-Softswitch. Montants en FCFA,   */
/*  convertis pour un usager en euros. Les appels et messages entre     */
/*  comptes Mobinawa, gratuits, n'y figurent pas.                       */
/* ------------------------------------------------------------------ */
const CONSO_DEMO = {
  courant: {
    label: "Ce mois-ci",
    emis: 38, recus: 52, manques: 6, minutesEmises: 124, minutesRecues: 171, depense: 5820,
    semaines: [32, 41, 28, 23],
    destinations: [
      { label: "Mobiles", minutes: 86, cout: 4040 },
      { label: "Fixes", minutes: 30, cout: 1400 },
      { label: "International", minutes: 8, cout: 380 },
    ],
    top: [
      { numero: "+237 6 99 04 11 27", appels: 9, minutes: 31 },
      { numero: "+237 6 78 22 90 41", appels: 6, minutes: 22 },
      { numero: "+237 2 33 42 18 05", appels: 4, minutes: 9 },
    ],
  },
  precedent: {
    label: "Mois dernier",
    emis: 44, recus: 61, manques: 9, minutesEmises: 152, minutesRecues: 203, depense: 7150,
    semaines: [35, 44, 39, 34],
    destinations: [
      { label: "Mobiles", minutes: 101, cout: 4750 },
      { label: "Fixes", minutes: 41, cout: 1920 },
      { label: "International", minutes: 10, cout: 480 },
    ],
    top: [
      { numero: "+237 6 99 04 11 27", appels: 11, minutes: 40 },
      { numero: "+237 6 55 90 12 04", appels: 8, minutes: 27 },
      { numero: "+237 6 78 22 90 41", appels: 5, minutes: 18 },
    ],
  },
};

function ConsoScreen({ lignes, operateur }) {
  const ligne = lignes.find((l) => l.rattachement === "pro") || lignes[0];
  const [periode, setPeriode] = useState("courant");
  const d = CONSO_DEMO[periode];
  const autre = CONSO_DEMO[periode === "courant" ? "precedent" : "courant"];
  /* Montants de démonstration en FCFA, convertis pour un compte en euros. */
  const montant = (fcfa) =>
    operateur.devise === "EUR"
      ? somme(Math.round((fcfa / TAUX_XAF.EUR) * 100) / 100, operateur)
      : somme(fcfa, operateur);
  const soldeAppel = (ligne && ligne.soldeAppel) || 0;
  const prix = ligne && ligne.prixMinute;
  const minutesRestantes = prix ? Math.floor(soldeAppel / prix) : null;
  const maxSemaine = Math.max(...d.semaines);
  const dureeMoyenne = d.emis ? d.minutesEmises / d.emis : 0;
  const ecart = periode === "courant" ? Math.round(((d.depense - autre.depense) / autre.depense) * 100) : null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={BarChart3} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Ma conso
        </h2>
        <LogoAccueil />
      </div>

      {ligne && ligne.numero && (
        <div className="text-xs" style={{ color: C.muted }}>
          Numéro PRO <b style={{ color: C.text }}>{ligne.numero}</b>
        </div>
      )}

      {/* Période */}
      <div className="flex gap-2">
        {["courant", "precedent"].map((k) => {
          const actif = periode === k;
          return (
            <button
              key={k}
              onClick={() => setPeriode(k)}
              className="flex-1 rounded-xl py-2 text-xs font-bold"
              style={{
                background: actif ? C.blue : C.card,
                color: actif ? "#fff" : C.muted,
                border: `1.5px solid ${actif ? C.blue : C.border}`,
                fontFamily: FONT_HEAD,
              }}
            >
              {CONSO_DEMO[k].label}
            </button>
          );
        })}
      </div>

      {/* Synthèse */}
      <div className="relative rounded-3xl p-4 overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.blueDark}, ${C.blue})` }}>
        <div className="text-xs text-white/70">Dépensé en appels</div>
        <div className="flex items-end gap-2">
          <span className="text-2xl font-extrabold text-white" style={{ fontFamily: FONT_HEAD }}>
            {montant(d.depense)}
          </span>
          {ecart !== null && (
            <span
              className="text-xs font-bold rounded-full px-2 py-0.5 mb-1"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
            >
              {ecart > 0 ? "+" : ""}
              {ecart} % vs mois dernier
            </span>
          )}
        </div>
        <div className="text-xs text-white/85 mt-1">
          {d.minutesEmises} min d'appels émis · {d.minutesRecues} min reçus
        </div>
        {periode === "courant" && (
          <div className="mt-3 pt-3 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
            <div>
              <div className="text-xs text-white/70">Crédit d'appel restant</div>
              <div className="text-base font-extrabold text-white" style={{ fontFamily: FONT_HEAD }}>
                {somme(soldeAppel, operateur)}
              </div>
            </div>
            {minutesRestantes !== null && (
              <div className="text-right">
                <div className="text-xs text-white/70">Soit environ</div>
                <div className="text-base font-extrabold text-white" style={{ fontFamily: FONT_HEAD }}>
                  {minutesRestantes} min
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Compteurs */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: PhoneOutgoing, v: d.emis, l: "Appels émis", c: C.blue },
          { icon: PhoneIncoming, v: d.recus, l: "Appels reçus", c: C.green },
          { icon: PhoneMissed, v: d.manques, l: "Appels manqués", c: C.alertText },
          { icon: Timer, v: `${dureeMoyenne.toFixed(1).replace(".", ",")} min`, l: "Durée moyenne d'un appel émis", c: C.orange },
        ].map((k, i) => (
          <Card key={i} className="flex items-center gap-2.5">
            <IconTile icon={<k.icon size={16} />} color={k.c} bg={k.c + "18"} size={34} />
            <div className="min-w-0">
              <div className="text-base font-extrabold leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                {k.v}
              </div>
              <div className="leading-tight" style={{ fontSize: 11, color: C.muted }}>
                {k.l}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Minutes émises par semaine */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 size={16} color={C.blue} />
          <span className="text-sm font-extrabold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
            Minutes émises par semaine
          </span>
        </div>
        <div className="flex items-end gap-3" style={{ height: 120 }}>
          {d.semaines.map((m, i) => (
            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-1">
              <span className="text-xs font-bold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                {m}
              </span>
              <div
                className="w-full rounded-t-lg"
                style={{ height: `${Math.max(8, (m / maxSemaine) * 80)}px`, background: i === d.semaines.length - 1 && periode === "courant" ? C.orange : C.blueLight }}
              />
              <span style={{ fontSize: 11, color: C.muted }}>Sem. {i + 1}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Répartition des dépenses */}
      <Card>
        <span className="text-sm font-extrabold block mb-3" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Répartition par destination
        </span>
        <div className="flex flex-col gap-3">
          {d.destinations.map((x) => {
            const part = Math.round((x.cout / d.depense) * 100);
            return (
              <div key={x.label}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span style={{ color: C.text, fontWeight: 600 }}>
                    {x.label} · {x.minutes} min
                  </span>
                  <span style={{ color: C.text, fontWeight: 800, fontFamily: FONT_HEAD }}>{montant(x.cout)}</span>
                </div>
                <div className="rounded-full overflow-hidden" style={{ height: 8, background: C.border }}>
                  <div className="h-full rounded-full" style={{ width: `${part}%`, background: C.blue }} />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Numéros les plus appelés */}
      <Card>
        <span className="text-sm font-extrabold block mb-2" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Numéros les plus appelés
        </span>
        <div className="flex flex-col">
          {d.top.map((t, i) => (
            <div
              key={t.numero}
              className="flex items-center gap-3 py-2"
              style={{ borderTop: i === 0 ? "none" : `1px solid ${C.border}` }}
            >
              <span
                className="flex items-center justify-center rounded-full text-xs font-extrabold shrink-0"
                style={{ width: 24, height: 24, background: C.blueSoft, color: C.blueDark, fontFamily: FONT_HEAD }}
              >
                {i + 1}
              </span>
              <span className="text-sm font-bold flex-1" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                {t.numero}
              </span>
              <span className="text-xs" style={{ color: C.muted }}>
                {t.appels} appels · {t.minutes} min
              </span>
            </div>
          ))}
        </div>
      </Card>

      <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
        Ces statistiques portent sur les appels téléphoniques de votre numéro PRO. Les appels et messages entre
        comptes Mobinawa sont gratuits et n'y figurent pas.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  TOUTES LES CATÉGORIES (v127)                                        */
/*  Ouvert par « Choisir une catégorie » sur l'accueil : toutes les     */
/*  catégories de l'annuaire du pays, avec leur nombre d'organisations. */
/*  Un appui ouvre l'annuaire filtré sur la catégorie.                  */
/* ------------------------------------------------------------------ */
function CategoriesScreen({ annuaire, onChoisir }) {
  const organisations = ANNUAIRE_PROCOM[annuaire.id] || [];
  const misesEnAvant = CATEGORIES_MISES_EN_AVANT;
  const presentes = Array.from(new Set(organisations.map((o) => o.secteur))).sort(triSecteurs);
  const ordreComplet = [...misesEnAvant.filter((c) => presentes.includes(c)), ...presentes.filter((c) => !misesEnAvant.includes(c))];
  /* Recherche par nom de catégorie, dans la langue choisie (v128) */
  const [recherche, setRecherche] = useState("");
  const q = normaliser(recherche);
  const ordre = q ? ordreComplet.filter((c) => correspond(c, q)) : ordreComplet;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={LayoutGrid} />
        <h2 className="font-extrabold text-lg leading-tight flex items-center gap-2" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Toutes les catégories
          <DrapeauRond code={annuaire.drapeau} size={20} />
        </h2>
        <LogoAccueil />
      </div>
      {ordreComplet.length > 0 && (
        <div
          className="flex items-center gap-2 rounded-full px-4"
          style={{ height: 44, background: C.card, border: `1px solid ${C.border}` }}
        >
          <Search size={17} color={C.muted} className="shrink-0" />
          <input
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            enterKeyHint="search"
            placeholder="Rechercher une catégorie"
            className="flex-1 min-w-0 outline-none bg-transparent"
            style={{ fontFamily: FONT_BODY, color: C.text }}
          />
          {recherche && (
            <button onClick={() => setRecherche("")} aria-label="Effacer la recherche">
              <X size={16} color={C.muted} />
            </button>
          )}
        </div>
      )}
      {ordre.length === 0 ? (
        <Card style={{ background: C.cardSoft }}>
          <p className="text-sm" style={{ color: C.muted }}>
            {ordreComplet.length === 0
              ? "Aucune organisation n'est encore publiée dans cet annuaire."
              : "Aucune catégorie ne correspond à votre recherche."}
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {ordre.map((cat) => {
            const Icone = SECTEUR_ICONES[cat] || LayoutGrid;
            const n = organisations.filter((o) => o.secteur === cat).length;
            return (
              <button
                key={cat}
                onClick={() => onChoisir(cat)}
                className="flex flex-col items-start gap-2 rounded-2xl p-3 text-left active:scale-[0.98] transition-transform"
                style={{ background: C.card, border: `1px solid ${C.border}` }}
              >
                <IconTile icon={<Icone size={18} />} color={C.blue} bg={C.blueSoft} size={40} />
                <span className="text-sm font-bold leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                  {cat}
                </span>
                <span className="text-xs" style={{ color: C.muted }}>
                  {n} organisation{n > 1 ? "s" : ""}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  NUMÉROS D'URGENCE (v84)                                             */
/*  Accessible depuis le menu, l'aperçu des services de l'accueil et    */
/*  l'écran Services. Les numéros sont ceux du pays de l'annuaire       */
/*  consulté ; un appui ouvre le composeur du téléphone.                */
/* ------------------------------------------------------------------ */
function UrgencesScreen({ pays }) {
  const liste = NUMEROS_URGENCE[pays.id] || [];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={Siren} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Numéros d'urgence
        </h2>
        <LogoAccueil />
      </div>
      <div className="flex items-center gap-2">
        <DrapeauRond code={pays.drapeau} size={22} />
        <span className="text-sm font-bold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          {pays.pays}
        </span>
        <span className="text-xs" style={{ color: C.muted }}>
          · appels gratuits depuis tout téléphone
        </span>
      </div>
      {liste.length === 0 ? (
        <Card style={{ background: C.cardSoft }}>
          <p className="text-sm" style={{ color: C.muted }}>
            Les numéros d'urgence {pays.genitif} ne sont pas encore disponibles.
          </p>
        </Card>
      ) : (
        <div className="flex flex-col gap-2">
          {liste.map((u) => (
            <a
              key={u.numero}
              href={`tel:${u.numero}`}
              className="flex items-center gap-3 rounded-2xl px-3.5 py-3 active:scale-[0.99] transition-transform"
              style={{ background: C.card, border: `1px solid ${C.border}`, textDecoration: "none" }}
            >
              <IconTile icon={<u.icon size={19} />} color="#E4432F" bg="#FCEAE7" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-extrabold" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                  {u.nom}
                </div>
                <div className="text-xs" style={{ color: C.muted }}>
                  {u.detail}
                </div>
              </div>
              <span
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 shrink-0"
                style={{ background: "#E4432F", color: "#fff" }}
              >
                <Phone size={14} />
                <span className="font-extrabold" style={{ fontSize: 15, fontFamily: FONT_HEAD }}>
                  {u.numero}
                </span>
              </span>
            </a>
          ))}
        </div>
      )}
      <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
        Touchez un numéro pour l'appeler directement. En cas de danger immédiat, appelez sans attendre.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ANNUAIRE PROCOM                                                     */
/* ------------------------------------------------------------------ */
/* Puce de filtre : elle met en valeur le choix courant et s'ouvre d'un geste
   pour en changer. Plus lisible qu'une liste déroulante sur mobile. */
function PuceFiltre({ valeur, placeholder, options, icones, onChanger, accent = C.orange }) {
  const [ouvert, setOuvert] = useState(false);
  const Icone = valeur && icones ? icones[valeur] : null;
  const actif = Boolean(valeur);

  return (
    <div className="relative">
      <div
        className="inline-flex items-center gap-1.5 rounded-full pl-3 pr-2 py-1.5 max-w-full"
        style={{
          background: actif ? accent + "1F" : C.card,
          border: `1.5px solid ${actif ? accent : C.border}`,
        }}
      >
        <button
          onClick={() => setOuvert((v) => !v)}
          className="flex items-center gap-1.5 min-w-0"
        >
          {Icone && <Icone size={14} color={accent} />}
          <span
            className="text-xs truncate"
            style={{
              color: actif ? accent : C.muted,
              fontFamily: FONT_HEAD,
              fontWeight: actif ? 800 : 600,
            }}
          >
            {valeur || placeholder}
          </span>
          <ChevronRight size={13} color={actif ? accent : C.muted} style={{ transform: "rotate(90deg)" }} />
        </button>
        {actif && (
          <button onClick={() => onChanger("")} aria-label="Retirer ce filtre" className="shrink-0">
            <X size={13} color={accent} />
          </button>
        )}
      </div>

      {ouvert && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOuvert(false)} />
          <div
            className="absolute left-0 top-10 z-50 rounded-2xl overflow-hidden"
            style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              minWidth: 230,
              maxHeight: 280,
              overflowY: "auto",
              boxShadow: "0 12px 28px rgba(16,36,64,0.18)",
            }}
          >
            <button
              onClick={() => {
                onChanger("");
                setOuvert(false);
              }}
              className="w-full text-left px-3 py-2.5 text-xs font-bold"
              style={{ color: valeur ? C.muted : accent, fontFamily: FONT_HEAD }}
            >
              {placeholder}
            </button>
            {options.map((o) => {
              const OptIcone = icones ? icones[o] : null;
              const choisi = o === valeur;
              return (
                <button
                  key={o}
                  onClick={() => {
                    onChanger(o);
                    setOuvert(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2.5 text-left"
                  style={{ background: choisi ? accent + "14" : "transparent", borderTop: `1px solid ${C.border}` }}
                >
                  {OptIcone && <OptIcone size={15} color={choisi ? accent : C.muted} />}
                  <span
                    className="text-xs flex-1"
                    style={{ color: C.text, fontFamily: FONT_HEAD, fontWeight: choisi ? 800 : 600 }}
                  >
                    {o}
                  </span>
                  {choisi && <Check size={13} color={accent} />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

/* L'appel n'est gratuit que depuis la liste de contacts : il faut d'abord
   ajouter l'organisation et attendre l'acceptation de l'invitation. Cette
   modale explique la marche à suivre au moment où l'usager veut appeler. */
function AppelGratuitModal({ org, onClose }) {
  /* Les libellés d'interface et le nom de l'organisation sont en gras, sans
     guillemets : ce sont les mots que l'usager doit repérer à l'écran. */
  const etapes = [
    <>Ouvrir l'onglet <b>Contacts</b></>,
    <>Cliquer sur <b>Ajouter un contact</b> ➕</>,
    <>Rechercher <b>{org.nom}</b></>,
    <>Sélectionner puis cliquer sur <b>Inviter</b></>,
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full rounded-t-3xl p-5 pb-6" style={{ background: C.card, maxWidth: 430, margin: "0 auto" }}>
        <div className="w-10 h-1.5 rounded-full mx-auto mb-4" style={{ background: C.border }} />
        <div className="flex items-start justify-between mb-1">
          <div className="flex items-center gap-2 min-w-0">
            <IconTile icon={<MessageCircle size={18} />} color={C.green} bg={C.greenSoft} size={38} />
            <span className="font-extrabold text-sm" style={{ color: C.text, fontFamily: FONT_HEAD }}>
              Pour communiquer gratuitement avec {org.nom} depuis votre application Mobinawa :
            </span>
          </div>
          <button onClick={onClose} aria-label="Fermer" className="p-1.5 -mt-1 -mr-1 rounded-full shrink-0">
            <X size={18} color={C.muted} />
          </button>
        </div>

        {/* Le titre introduit directement les étapes (v104) */}
        <div className="flex flex-col gap-2.5 mt-3">
          {etapes.map((label, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-full font-bold text-xs shrink-0"
                style={{ width: 24, height: 24, background: C.greenSoft, color: C.green, fontFamily: FONT_HEAD }}
              >
                {i + 1}
              </div>
              <span className="text-sm" style={{ color: C.text, fontFamily: FONT_BODY }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs leading-relaxed mt-3" style={{ color: C.muted }}>
          Une fois l'invitation acceptée, {org.nom} apparaît dans vos <b>Membres</b>. Vous pourrez alors l'appeler ou lui
          envoyer un message sans dévoiler votre numéro mobile personnel.
        </p>
        {/* Encart « composer directement » retiré (v104) : la fiche le dit déjà */}
      </div>
    </div>
  );
}

/* ==================================================================== */
/*  GLISSIÈRE D'APPEL WEBRTC SIP : Glisser vers la droite pour appeler   */
/* ==================================================================== */
function GlissiereAppelPro({ numero, onAppeler }) {
  const containerRef = useRef(null);
  const knobRef = useRef(null);
  const [dragX, setDragX] = useState(0);
  const [enGlisse, setEnGlisse] = useState(false);
  const [maxDrag, setMaxDrag] = useState(130);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const maxDragRef = useRef(130);
  const dragDistRef = useRef(0);
  const appelDeclencheRef = useRef(false);

  const calculerMaxDrag = () => {
    if (containerRef.current && knobRef.current) {
      const cWidth = containerRef.current.clientWidth;
      const kWidth = knobRef.current.clientWidth;
      const max = Math.max(40, cWidth - kWidth - 6);
      setMaxDrag(max);
      maxDragRef.current = max;
    }
  };

  useLayoutEffect(() => {
    calculerMaxDrag();
    window.addEventListener("resize", calculerMaxDrag);
    return () => window.removeEventListener("resize", calculerMaxDrag);
  }, [numero]);

  const declencherAppel = () => {
    if (appelDeclencheRef.current) return;
    appelDeclencheRef.current = true;
    const max = maxDragRef.current;
    setEnGlisse(false);
    setDragX(max);
    if (typeof onAppeler === "function") {
      onAppeler();
    }
    setTimeout(() => {
      setDragX(0);
      appelDeclencheRef.current = false;
    }, 1200);
  };

  const onPointerDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    dragDistRef.current = 0;
    setEnGlisse(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
  };

  const onPointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const max = maxDragRef.current;
    const diff = Math.max(0, Math.min(e.clientX - startXRef.current, max));
    dragDistRef.current = diff;
    setDragX(diff);
  };

  const onPointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setEnGlisse(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {}

    const max = maxDragRef.current;
    // Si glissé à plus de 30% ou simple clic/tap sans déplacement significatif (<= 6px)
    if (dragDistRef.current >= max * 0.3 || dragDistRef.current <= 6) {
      declencherAppel();
    } else {
      setDragX(0);
    }
  };

  const onTrackClick = () => {
    if (isDraggingRef.current) return;
    declencherAppel();
  };

  return (
    <div className="w-full select-none">
      <div
        ref={containerRef}
        onClick={onTrackClick}
        className="relative flex items-center justify-end rounded-xl overflow-hidden cursor-pointer"
        style={{
          height: 46,
          border: `2px solid ${C.green}`,
          background: "#fff",
        }}
        title="Glisser vers la droite ou cliquer pour appeler"
      >
        {/* Piste verte animée qui suit le curseur */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none transition-all"
          style={{
            width: dragX > 0 ? `calc(${dragX}px + 70px)` : 0,
            background: "rgba(61, 117, 47, 0.12)",
          }}
        />

        {/* Numéro de téléphone cible affiché sur la droite */}
        <div
          className="flex-1 flex items-center justify-end pr-3.5 pl-3 font-extrabold text-sm tracking-wide"
          style={{
            color: C.green,
            fontFamily: FONT_HEAD,
            fontVariantNumeric: "tabular-nums",
            whiteSpace: "nowrap",
            letterSpacing: 0.3,
          }}
        >
          <span>{numero}</span>
          <ChevronRight size={15} className="text-emerald-500 ml-1 animate-pulse shrink-0" />
        </div>

        {/* Bouton glissière « Numéro PRO officiel » */}
        <div
          ref={knobRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="absolute left-1 top-1 bottom-1 flex items-center gap-1.5 pl-2.5 pr-3 rounded-lg z-10 cursor-grab active:cursor-grabbing shadow-sm"
          style={{
            background: C.green,
            color: "#fff",
            fontSize: 12,
            fontWeight: 800,
            fontFamily: FONT_HEAD,
            transform: `translate3d(${dragX}px, 0, 0)`,
            transition: enGlisse ? "none" : "transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
            touchAction: "none",
            boxShadow: enGlisse ? "0 4px 14px rgba(61, 117, 47, 0.4)" : "none",
          }}
        >
          <span
            className="flex items-center justify-center rounded-full shrink-0"
            style={{ width: 22, height: 22, border: "1.5px solid #fff" }}
          >
            <Phone size={11} />
          </span>
          <span className="whitespace-nowrap">Numéro PRO officiel</span>
          <ChevronRight size={14} className="opacity-80 ml-0.5 shrink-0" />
        </div>
      </div>

      {/* Indication sous la barre */}
      <div className="flex items-center justify-center gap-1.5 mt-2 px-1 text-xs font-semibold text-emerald-800">
        <ChevronRight size={13} className="text-emerald-600 animate-pulse" />
        <span>Glisser vers la droite ou appuyer pour appeler</span>
      </div>
    </div>
  );
}

/* ==================================================================== */
/*  INTERFACE D'APPEL WEBRTC VERS SIP LIVEKIT                            */
/*  Appel moderne, épuré et sécurisé aux couleurs de Mobinawa           */
/* ==================================================================== */
function LiveKitCallModal({ org, onClose }) {
  const [etat, setEtat] = useState("dialing"); // "dialing" | "connected" | "ended" | "error"
  const [secondes, setSecondes] = useState(0);
  const [microCoupe, setMicroCoupe] = useState(false);
  const [hautParleur, setHautParleur] = useState(true);
  const [clavierActif, setClavierActif] = useState(false);
  const [touches, setTouches] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [waveHeights, setWaveHeights] = useState([14, 22, 32, 18, 28, 16, 24]);

  const roomRef = useRef(null);
  const remoteAudioRef = useRef(null);
  const currentRoomNameRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const audioContextRef = useRef(null);
  const visIntervalRef = useRef(null);
  const microCoupeRef = useRef(false);

  // Initialisation et connexion directe à l'appel
  useEffect(() => {
    let unmounted = false;
    let timerInterval = null;

    function startTimer() {
      if (timerInterval) clearInterval(timerInterval);
      const startTime = Date.now();
      timerInterval = setInterval(() => {
        if (!unmounted) {
          const elapsed = Math.floor((Date.now() - startTime) / 1000);
          setSecondes(elapsed);
        }
      }, 1000);
    }

    function setupVisualizer(stream) {
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        audioContextRef.current = audioCtx;
        const source = audioCtx.createMediaStreamSource(stream);
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 32;
        source.connect(analyser);

        const buffer = new Uint8Array(analyser.frequencyBinCount);

        visIntervalRef.current = setInterval(() => {
          if (!analyser || unmounted) return;
          analyser.getByteFrequencyData(buffer);
          const heights = [];
          for (let i = 0; i < 7; i++) {
            const val = buffer[i] || 0;
            const h = Math.max(8, Math.min(38, Math.round((val / 255) * 38)));
            heights.push(h);
          }
          setWaveHeights(heights);
        }, 120);
      } catch (_) {}
    }

    async function demarrerAppel() {
      if (unmounted) return;
      setEtat("dialing");
      setErrorMessage("");
      microCoupeRef.current = false;
      setMicroCoupe(false);

      let dest = (org.numero || "").trim().replace(/[\s\-\(\)\.]/g, "");
      if (!dest.startsWith("+") && !dest.startsWith("00")) {
        dest = "+" + dest;
      }

      try {
        // 1. Demande d'autorisation du microphone sans conflit
        try {
          if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === "function") {
            const probe = await navigator.mediaDevices.getUserMedia({
              audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
            });
            // Libérer le probe pour que LiveKit ait un accès microphone propre et exclusif
            probe.getTracks().forEach((t) => t.stop());
          }
        } catch (micErr) {
          console.warn("[Mobinawa Voice] Micro permission probe:", micErr.message);
        }

        if (unmounted) return;

        // 2. Requête vers le backend (/api/calls)
        console.log("[Mobinawa Voice] Envoi requête /api/calls vers:", dest);
        const res = await fetch("/api/calls", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ destinationNumber: dest, orgName: org.nom }),
        });

        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.error || "Échec de connexion au serveur d'appel");
        }

        const { roomName, token, livekitUrl } = data.call;
        currentRoomNameRef.current = roomName;
        console.log("[Mobinawa Voice] Appel SIP initié dans la room:", roomName);

        if (unmounted) return;

        // 3. Connexion WebRTC LiveKit
        const room = new Room({ adaptiveStream: true, dynacast: true });
        roomRef.current = room;

        const passerEnCommunication = () => {
          if (!unmounted) {
            setEtat((prev) => {
              if (prev !== "connected" && prev !== "ended") {
                console.log("[Mobinawa Voice] >>> APPEL DÉCROCHÉ : Passage en communication");
                startTimer();
                return "connected";
              }
              return prev;
            });
          }
        };

        const attacherTrackAudio = (track) => {
          if (!track) return;
          const isAudio = track.kind === Track.Kind.Audio || track.kind === "audio";
          if (!isAudio) return;
          console.log("[Mobinawa Voice] Flux audio distant reçu et attaché");
          try {
            if (remoteAudioRef.current) {
              track.attach(remoteAudioRef.current);
              remoteAudioRef.current.play().catch((e) => console.warn("[Mobinawa Audio] play:", e));
            } else {
              const el = track.attach();
              el.autoplay = true;
              el.playsInline = true;
              el.style.position = "fixed";
              el.style.top = "-9999px";
              el.style.left = "-9999px";
              el.style.width = "1px";
              el.style.height = "1px";
              el.style.opacity = "0.01";
              document.body.appendChild(el);
              el.play().catch((e) => console.warn("[Mobinawa Audio] play:", e));
            }
          } catch (err) {
            console.warn("[Mobinawa Voice] Erreur attachement track:", err);
          }
          // On ne bascule PAS en 'connected' ici : l'audio de sonnerie (early media)
          // est joué tout en maintenant l'état 'Sonnerie en cours...' jusqu'au vrai décrochage.
        };

        const inspecterParticipantSip = (p) => {
          if (!p) return;
          const callStatus = p.attributes?.["sip.callStatus"];
          console.log(`[Mobinawa Voice] Statut SIP participant (${p.identity}):`, callStatus);
          if (callStatus === "active") {
            passerEnCommunication();
          } else if (callStatus === "dialing" || callStatus === "ringing") {
            if (!unmounted && etat !== "connected") {
              setEtat("dialing");
            }
          } else if (callStatus === "hangup") {
            if (!unmounted) {
              setEtat("ended");
              setTimeout(() => { if (!unmounted) onClose(); }, 1800);
            }
          }
        };

        // Événement quand l'audio du correspondant est reçu (sonnerie ou voix)
        room.on(RoomEvent.TrackSubscribed, (track, pub, participant) => {
          console.log("[Mobinawa Voice] TrackSubscribed:", track.kind);
          attacherTrackAudio(track);
          if (participant) inspecterParticipantSip(participant);
        });

        room.on(RoomEvent.TrackPublished, (pub, participant) => {
          console.log("[Mobinawa Voice] TrackPublished:", pub.kind);
          pub.setSubscribed(true);
          if (participant) inspecterParticipantSip(participant);
        });

        // Détection du changement de statut SIP (décrochage : sip.callStatus passe à 'active')
        room.on(RoomEvent.ParticipantAttributesChanged, (changedAttrs, participant) => {
          console.log("[Mobinawa Voice] ParticipantAttributesChanged:", changedAttrs);
          inspecterParticipantSip(participant);
        });

        // Détection de voix distante (dès que le correspondant parle, passage en communication)
        room.on(RoomEvent.ActiveSpeakersChanged, (speakers) => {
          const hasRemoteSpeaker = speakers.some((s) => !s.isLocal);
          if (hasRemoteSpeaker) {
            console.log("[Mobinawa Voice] Voix détectée du correspondant -> Passage en communication");
            passerEnCommunication();
          }
        });

        room.on(RoomEvent.ParticipantConnected, (p) => {
          console.log("[Mobinawa Voice] Participant connecté:", p.identity);
          inspecterParticipantSip(p);
          p.on?.("attributesChanged", () => inspecterParticipantSip(p));
          p.trackPublications.forEach((pub) => {
            if (pub.track) attacherTrackAudio(pub.track);
          });
        });

        room.on(RoomEvent.ParticipantDisconnected, () => {
          console.log("[Mobinawa Voice] Participant déconnecté");
          if (!unmounted) {
            setEtat("ended");
            setTimeout(() => { if (!unmounted) onClose(); }, 1800);
          }
        });

        room.on(RoomEvent.Disconnected, () => {
          if (!unmounted) {
            setEtat("ended");
            setTimeout(() => { if (!unmounted) onClose(); }, 1800);
          }
        });

        // Connexion à la salle LiveKit
        await room.connect(livekitUrl, token);
        console.log("[Mobinawa Voice] Connecté à la room LiveKit:", roomName);

        // Publier le flux microphone de l'utilisateur (en respectant le statut courant)
        try {
          const shouldEnable = !microCoupeRef.current;
          await room.localParticipant.setMicrophoneEnabled(shouldEnable);
          console.log("[Mobinawa Voice] Microphone local initialisé dans la room:", shouldEnable ? "ACTIF" : "COUPÉ");
          if (!shouldEnable) {
            room.localParticipant.audioTrackPublications?.forEach((pub) => {
              pub.mute?.();
              try { pub.pauseUpstream?.(); } catch (_) {}
              if (pub.track?.mediaStreamTrack) {
                pub.track.mediaStreamTrack.enabled = false;
              }
            });
          }
        } catch (micPubErr) {
          console.warn("[Mobinawa Voice] Publier micro local:", micPubErr);
        }

        // Vérifier si des participants distants sont déjà présents dans la room
        room.remoteParticipants.forEach((p) => {
          console.log("[Mobinawa Voice] Participant distant déjà présent:", p.identity);
          inspecterParticipantSip(p);
          p.on?.("attributesChanged", () => inspecterParticipantSip(p));
          p.trackPublications.forEach((pub) => {
            if (pub.track) attacherTrackAudio(pub.track);
          });
        });

      } catch (err) {
        console.error("[Mobinawa Voice] Erreur appel:", err.message);
        if (!unmounted) {
          setEtat("error");
          setErrorMessage(err.message);
        }
      }
    }

    demarrerAppel();

    return () => {
      unmounted = true;
      if (timerInterval) clearInterval(timerInterval);
      if (visIntervalRef.current) clearInterval(visIntervalRef.current);
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close().catch(() => {});
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(t => t.stop());
      }
      if (roomRef.current) {
        try { roomRef.current.disconnect(); } catch (_) {}
        roomRef.current = null;
      }
    };
  }, [org.numero, org.nom]);

  const formaterTemps = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleRaccrocher = () => {
    if (currentRoomNameRef.current) {
      fetch("/api/end-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomName: currentRoomNameRef.current }),
      }).catch(() => {});
      currentRoomNameRef.current = null;
    }
    if (roomRef.current) {
      try {
        roomRef.current.disconnect();
      } catch (e) {
        // ignore
      }
      roomRef.current = null;
    }
    setEtat("ended");
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  const handleToggleMicro = async () => {
    const nextMicroCoupe = !microCoupe;
    microCoupeRef.current = nextMicroCoupe;
    setMicroCoupe(nextMicroCoupe);
    console.log("[Mobinawa Voice] Clic Micro. Nouvel état micro coupé :", nextMicroCoupe);

    if (roomRef.current?.localParticipant) {
      const lp = roomRef.current.localParticipant;
      const shouldEnable = !nextMicroCoupe;

      // 1. Appel méthode standard LiveKit
      try {
        await lp.setMicrophoneEnabled(shouldEnable);
      } catch (e) {
        console.warn("[LiveKit] Erreur setMicrophoneEnabled:", e);
      }

      // 2. Mute / Unmute & Pause / Resume Upstream sur toutes les pistes audio publiées
      try {
        const audioPubs = lp.audioTrackPublications ? Array.from(lp.audioTrackPublications.values()) : [];
        for (const pub of audioPubs) {
          if (pub?.track) {
            if (nextMicroCoupe) {
              await pub.mute().catch(() => {});
              try { await pub.pauseUpstream?.(); } catch (_) {}
              if (pub.track.mediaStreamTrack) {
                pub.track.mediaStreamTrack.enabled = false;
              }
            } else {
              await pub.unmute().catch(() => {});
              try { await pub.resumeUpstream?.(); } catch (_) {}
              if (pub.track.mediaStreamTrack) {
                pub.track.mediaStreamTrack.enabled = true;
              }
            }
          }
        }
      } catch (trackErr) {
        console.warn("[LiveKit] Erreur bascule manuelle pistes audio:", trackErr);
      }
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getAudioTracks().forEach((track) => {
        track.enabled = !nextMicroCoupe;
      });
    }
  };

  const handleToggleHautParleur = () => {
    const nextHP = !hautParleur;
    setHautParleur(nextHP);
    if (remoteAudioRef.current) {
      remoteAudioRef.current.muted = !nextHP;
    }
  };

  const dtmfCodeMap = {
    "0": 0, "1": 1, "2": 2, "3": 3, "4": 4,
    "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
    "*": 10, "#": 11,
  };

  const jouerSonDtmf = (touche) => {
    try {
      const dtmfFreqs = {
        "1": [697, 1209], "2": [697, 1336], "3": [697, 1477],
        "4": [770, 1209], "5": [770, 1336], "6": [770, 1477],
        "7": [852, 1209], "8": [852, 1336], "9": [852, 1477],
        "*": [941, 1209], "0": [941, 1336], "#": [941, 1477],
      };
      const freqs = dtmfFreqs[touche];
      if (!freqs) return;
      const ctx = audioContextRef.current || new (window.AudioContext || window.webkitAudioContext)();
      audioContextRef.current = ctx;
      if (ctx.state === "suspended") ctx.resume();

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc1.frequency.value = freqs[0];
      osc2.frequency.value = freqs[1];

      gainNode.gain.setValueAtTime(0.06, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.12);
      osc2.stop(ctx.currentTime + 0.12);
    } catch (_) {}
  };

  const taperTouche = async (val) => {
    setTouches((prev) => prev + val);
    jouerSonDtmf(val);

    // Envoi DTMF officiel LiveKit SIP (RFC 4733 / RFC 2833 vers le SVI)
    if (roomRef.current?.localParticipant) {
      try {
        const code = dtmfCodeMap[val] ?? 0;
        if (typeof roomRef.current.localParticipant.publishDtmf === "function") {
          await roomRef.current.localParticipant.publishDtmf(code, String(val));
        } else {
          const payload = new TextEncoder().encode(JSON.stringify({ dtmf: val }));
          roomRef.current.localParticipant.publishData(payload, { reliable: true });
        }
      } catch (err) {
        console.warn("[Mobinawa Voice] Erreur émission DTMF:", err);
      }
    }
  };

  const effacerDerniereTouche = () => {
    setTouches((prev) => prev.slice(0, -1));
  };

  const touchesClavier = [
    { k: "1", sub: "" },
    { k: "2", sub: "ABC" },
    { k: "3", sub: "DEF" },
    { k: "4", sub: "GHI" },
    { k: "5", sub: "JKL" },
    { k: "6", sub: "MNO" },
    { k: "7", sub: "PQRS" },
    { k: "8", sub: "TUV" },
    { k: "9", sub: "WXYZ" },
    { k: "*", sub: "" },
    { k: "0", sub: "+" },
    { k: "#", sub: "" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 w-full h-full flex flex-col justify-between bg-[#1C1D1F] text-white select-none transition-all px-4 py-5 sm:py-7 sm:px-6"
    >
      {/* Audio HTML5 pour le flux vocal du destinataire (conforme index.html / app.js) */}
      <audio
        ref={remoteAudioRef}
        autoPlay
        playsInline
        style={{ position: "fixed", top: -9999, left: -9999, width: 1, height: 1, opacity: 0.01 }}
      />

      {/* Barre supérieure discrète Mobile First (fermeture d'appel) */}
      <div className="w-full max-w-md mx-auto flex items-center justify-end pt-1 px-1">
        <button
          onClick={handleRaccrocher}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white/70 hover:text-white"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>
      </div>

      {/* Section Supérieure : Avatar + Nom + État / Minuteur + Numéro */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center pt-1 sm:pt-4 text-center px-4">
        {/* Avatar circulaire neutre comme sur la maquette */}
        <div
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center shadow-xl relative"
          style={{
            background: "#5B5F66",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          }}
        >
          {org.logo ? (
            <img
              src={org.logo}
              alt={org.nom}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <svg viewBox="0 0 24 24" fill="#FFFFFF" className="w-14 h-14 sm:w-16 sm:h-16 opacity-95">
              <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2.5c-3.34 0-10 1.68-10 5v2.5h20v-2.5c0-3.32-6.66-5-10-5z" />
            </svg>
          )}
        </div>

        {/* Nom du contact / entreprise (grand, blanc, gras) */}
        <h2
          className="text-2xl sm:text-3xl font-bold text-white tracking-normal mt-4 px-4 text-center truncate max-w-full"
          style={{ fontFamily: FONT_HEAD }}
        >
          {org.nom}
        </h2>

        {/* État / Minuteur sous le nom */}
        <div className="mt-1.5 flex flex-col items-center">
          {etat === "connected" ? (
            <div className="text-base sm:text-lg font-semibold tracking-wider text-white/90 font-mono">
              {formaterTemps(secondes)}
            </div>
          ) : etat === "dialing" || etat === "connecting" ? (
            <div className="text-sm sm:text-base font-normal text-white/70 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Sonnerie en cours...</span>
            </div>
          ) : etat === "ended" ? (
            <div className="text-sm sm:text-base font-semibold text-red-400">
              Appel terminé ({formaterTemps(secondes)})
            </div>
          ) : etat === "error" ? (
            <div className="text-xs sm:text-sm font-semibold text-red-400 px-4 max-w-xs">
              {errorMessage || "Impossible de joindre le correspondant"}
            </div>
          ) : null}

          {/* Numéro de téléphone en sous-titre discret */}
          <div className="text-xs sm:text-sm font-mono text-white/40 mt-0.5 tracking-wider">
            {org.numero}
          </div>
        </div>
      </div>

      {/* Section Centrale : Interface SVI Moderne OU Contrôles d'appel (Micro, SVI, HP) */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center my-auto py-3">
        {clavierActif ? (
          /* Interface SVI Moderne Complète & Ergonomique */
          <div className="w-full max-w-[310px] mx-auto flex flex-col items-center">
            {/* Écran d'affichage des chiffres SVI composés avec retour arrière */}
            <div className="w-full h-12 flex items-center justify-between px-3.5 mb-3 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-2xl font-mono font-bold tracking-widest text-emerald-400 truncate flex-1 text-center">
                {touches || <span className="text-xs text-white/30 font-sans tracking-normal font-normal">Composez un chiffre SVI</span>}
              </span>
              {touches && (
                <button
                  onClick={effacerDerniereTouche}
                  className="p-1.5 text-white/60 hover:text-white rounded-lg hover:bg-white/10 active:scale-95 transition-all"
                  aria-label="Effacer"
                  title="Effacer"
                >
                  <Delete size={18} />
                </button>
              )}
            </div>

            {/* Pavé 3x4 des touches SVI circulaires modernes */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full justify-items-center">
              {touchesClavier.map((item) => (
                <button
                  key={item.k}
                  onClick={() => taperTouche(item.k)}
                  className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 active:scale-90 transition-all flex flex-col items-center justify-center text-white cursor-pointer select-none border border-white/5 shadow-sm"
                >
                  <span className="text-2xl font-bold leading-none">{item.k}</span>
                  {item.sub ? (
                    <span className="text-[9px] font-semibold tracking-wider text-white/50 leading-none mt-0.5">
                      {item.sub}
                    </span>
                  ) : (
                    <span className="h-[9px] mt-0.5" />
                  )}
                </button>
              ))}
            </div>

            {/* Bouton pour replier le clavier et revenir aux 3 boutons d'appel */}
            <button
              onClick={() => setClavierActif(false)}
              className="mt-3.5 px-5 py-2 text-xs font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/15 rounded-full transition-all active:scale-95 flex items-center gap-1.5"
            >
              <span>Masquer le clavier</span>
            </button>
          </div>
        ) : (
          /* Les 3 boutons essentiels : Microphone, SVI (Clavier) et Haut-parleur */
          <div className="flex items-center justify-center gap-6 sm:gap-10 w-full">
            {/* 1. Microphone */}
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={handleToggleMicro}
                aria-label={microCoupe ? "Activer le micro" : "Couper le micro"}
                className={`w-[74px] h-[74px] rounded-3xl flex items-center justify-center transition-all cursor-pointer select-none active:scale-95 shadow-md ${
                  microCoupe
                    ? "bg-white text-[#1C1D1F] shadow-white/20 ring-2 ring-white/30"
                    : "bg-[#383A3E]/80 hover:bg-[#383A3E] text-white border border-white/5"
                }`}
              >
                {microCoupe ? <MicOff size={28} /> : <Mic size={28} />}
              </button>
              <span className={`text-xs font-medium transition-colors ${
                microCoupe ? "text-amber-400 font-semibold" : "text-white/70"
              }`}>
                {microCoupe ? "Micro coupé" : "Micro"}
              </span>
            </div>

            {/* 2. SVI (Clavier DTMF) */}
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => setClavierActif(true)}
                aria-label="Clavier SVI"
                className="w-[74px] h-[74px] rounded-3xl flex items-center justify-center transition-all cursor-pointer select-none active:scale-95 bg-[#383A3E]/80 hover:bg-[#383A3E] text-white border border-white/5 shadow-md"
              >
                <Grid3X3 size={28} />
              </button>
              <span className="text-xs text-white/70 font-medium">Clavier SVI</span>
            </div>

            {/* 3. Haut-Parleur */}
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={handleToggleHautParleur}
                aria-label={hautParleur ? "Désactiver haut-parleur" : "Activer haut-parleur"}
                className={`w-[74px] h-[74px] rounded-3xl flex items-center justify-center transition-all cursor-pointer select-none active:scale-95 shadow-md ${
                  !hautParleur
                    ? "bg-[#383A3E]/40 text-white/40 border border-white/5"
                    : "bg-[#383A3E]/80 hover:bg-[#383A3E] text-white border border-white/5"
                }`}
              >
                {hautParleur ? <Volume2 size={28} /> : <VolumeX size={28} />}
              </button>
              <span className="text-xs text-white/70 font-medium">Haut-parleur</span>
            </div>
          </div>
        )}
      </div>

      {/* Section Inférieure : Bouton Raccrocher circulaire rouge grand format */}
      <div className="w-full max-w-md mx-auto pb-5 sm:pb-7 flex flex-col items-center">
        <button
          onClick={handleRaccrocher}
          aria-label="Raccrocher"
          className="rounded-full flex items-center justify-center transition-transform active:scale-90 shadow-2xl cursor-pointer"
          style={{
            width: 72,
            height: 72,
            background: "#E53935",
            boxShadow: "0 12px 30px rgba(229, 57, 53, 0.5)",
          }}
        >
          <svg viewBox="0 0 24 24" fill="#FFFFFF" className="w-9 h-9 transform rotate-[135deg]">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-.99-1.12z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* Logo de l'organisation : initiales colorées tant qu'aucune image n'est
   fournie dans sa fiche ProcomCRM. */
function LogoOrg({ org, size = 44 }) {
  return (
    <div
      className="shrink-0 rounded-xl flex items-center justify-center"
      style={{ width: size, height: size, background: org.couleur }}
    >
      <span
        className="font-extrabold text-white"
        style={{ fontSize: size * 0.36, fontFamily: FONT_HEAD, letterSpacing: 0.5 }}
      >
        {initiales(org.nom)}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  INFORMATIONS SUR L'ANNUAIRE PROCOM (v64)                            */
/*  Ce qui distingue ProCom d'un annuaire ordinaire, et qui y figure.   */
/*  Affiché par le bouton « i » à droite du nombre d'organisations, et  */
/*  dans « À propos de Mobinawa ». Ces lignes figuraient auparavant en  */
/*  bas de la liste de l'annuaire.                                      */
/* ------------------------------------------------------------------ */
const INFOS_PROCOM = [
  { icon: PhoneCall, t: "L'appel vers un numéro PRO est gratuit, depuis n'importe quel pays." },
  { icon: BadgeCheck, t: "Chaque fiche est vérifiée par l'opérateur ProCom qui la publie." },
  { icon: NuageCleTuile, t: "MyApp ouvre le service numérique de l'organisation, votre numéro déjà reconnu." }, // icône v123
  {
    icon: Building2,
    t: "Seules les organisations disposant d'un numéro PRO officiel y sont publiées. La publication est comprise dans l'offre Mobinawa-Business ; un numéro Mobinawa-PRO individuel n'y figure pas.",
  },
];

function ListeInfosProcom() {
  return (
    <div className="flex flex-col gap-3">
      {INFOS_PROCOM.map((f, i) => (
        <div key={i} className="flex items-start gap-3">
          <IconTile icon={<f.icon size={16} />} color={C.blueLight} bg={C.blueSoft} size={34} />
          <span className="text-sm leading-relaxed flex-1 pt-1.5" style={{ color: C.text }}>
            {f.t}
          </span>
        </div>
      ))}
    </div>
  );
}

/* Explication de l'icône d'accès aux services numériques (v124), ouverte
   depuis la liste de l'annuaire. */
function MyAppModal({ org, onClose, onVoirFiche }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full rounded-t-3xl p-5 pb-6" style={{ background: C.card, maxWidth: 430, margin: "0 auto" }}>
        <div className="w-10 h-1.5 rounded-full mx-auto mb-4" style={{ background: C.border }} />
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex items-center justify-center rounded-2xl shrink-0" style={{ width: 44, height: 44, background: C.blueSoft }}>
              <NuageCle size={24} color={C.blue} fond={C.blueSoft} />
            </span>
            <span className="font-extrabold text-sm" style={{ color: C.text, fontFamily: FONT_HEAD }}>
              Accès aux services numériques
            </span>
          </div>
          <button onClick={onClose} aria-label="Fermer" className="p-1.5 -mt-1 -mr-1 rounded-full shrink-0">
            <X size={18} color={C.muted} />
          </button>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: C.text }}>
          Cette icône signale une organisation qui vous donne accès à ses services numériques directement depuis
          Mobinawa.
        </p>
        <p className="text-sm leading-relaxed mt-2" style={{ color: C.muted }}>
          L'accès est sécurisé : votre numéro est déjà reconnu, sans compte à créer ni mot de passe à saisir.
        </p>
        <div className="flex items-center gap-1.5 mt-3">
          <SoonBadge />
        </div>
        <div className="mt-4">
          <PrimaryButton color={C.blue} onClick={onVoirFiche}>
            Voir la fiche
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

function InfosProcomModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full rounded-t-3xl p-5 pb-6" style={{ background: C.card, maxWidth: 430, margin: "0 auto" }}>
        <div className="w-10 h-1.5 rounded-full mx-auto mb-4" style={{ background: C.border }} />
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2 min-w-0">
            <IconTile icon={<Info size={18} />} color={C.blue} bg={C.blueSoft} size={38} />
            <span className="font-extrabold text-sm" style={{ color: C.text, fontFamily: FONT_HEAD }}>
              L'annuaire ProCom
            </span>
          </div>
          <button onClick={onClose} aria-label="Fermer" className="p-1.5 -mt-1 -mr-1 rounded-full shrink-0">
            <X size={18} color={C.muted} />
          </button>
        </div>
        <ListeInfosProcom />
      </div>
    </div>
  );
}

function ProcomScreen({ pays, onChangerPays, filtreInitial, onFiltreChange }) {
  /* Le pays consulté est porté par l'app : l'accueil et cet écran le
     partagent, et la catégorie choisie sur l'accueil arrive en filtre. */

  const [recherche, setRecherche] = useState((filtreInitial && filtreInitial.recherche) || "");
  const [secteur, setSecteur] = useState((filtreInitial && filtreInitial.secteur) || "");
  const [sousSecteur, setSousSecteur] = useState("");
  const [paysOuvert, setPaysOuvert] = useState(false);
  const [aideAppel, setAideAppel] = useState(false);
  const [appelEnCours, setAppelEnCours] = useState(null); // organisation appelée via LiveKit WebRTC
  const [infoOuverte, setInfoOuverte] = useState(false);
  const [infoMyApp, setInfoMyApp] = useState(null); // organisation dont on explique l'icône (v124)

  /* Ouvert depuis la barre de recherche de l'accueil (v93) : le champ prend
     le focus aussitôt, pour que le clavier reste ouvert et que les
     résultats s'affichent directement dans la liste. Le drapeau est
     consommé pour ne pas rouvrir le clavier à un retour sur l'écran. */
  const champRef = useRef(null);
  useLayoutEffect(() => {
    if (filtreInitial && filtreInitial.focus && champRef.current) {
      champRef.current.focus();
      onFiltreChange((prev) => ({ ...prev, focus: false }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [fiche, setFiche] = useState(() => {
    const id = filtreInitial && filtreInitial.ficheId;
    return id ? (ANNUAIRE_PROCOM[pays.id] || []).find((o) => o.id === id) || null : null;
  });

  const organisations = ANNUAIRE_PROCOM[pays.id] || [];
  /* Les listes ne proposent que ce qui existe réellement dans cet annuaire :
     un filtre sans résultat possible n'a pas d'intérêt. */
  const secteursPresents = Array.from(new Set(organisations.map((o) => o.secteur))).sort(triSecteurs);
  const sousSecteursPresents = Array.from(
    new Set(organisations.filter((o) => o.secteur === secteur).map((o) => o.sousSecteur).filter(Boolean))
  ).sort(triSecteurs);

  const q = normaliser(recherche);
  const resultats = organisations.filter(
    (o) =>
      (!secteur || o.secteur === secteur) &&
      (!sousSecteur || o.sousSecteur === sousSecteur) &&
      (!q ||
        correspond(o.nom, q) ||
        correspond(o.secteur, q) ||
        correspond(o.sousSecteur, q) ||
        correspond(o.description, q) ||
        correspond(o.numero, q))
  ).sort((a, b) => a.nom.localeCompare(b.nom, "fr", { sensitivity: "base" })); // ordre alphabétique (v80)

  /* Le choix est remonté à l'app : l'accueil met en avant la même catégorie. */
  function choisirSecteur(v) {
    setSecteur(v);
    setSousSecteur("");
    onFiltreChange((prev) => ({ ...prev, secteur: v, sousSecteur: "", ficheId: null }));
  }

  /* ---------- Fiche d'une organisation ---------- */
  if (fiche) {
    return (
      <div className="flex flex-col gap-4">
        {/* La flèche ramène à la liste de l'annuaire, pas à l'écran précédent */}
        <div className="flex items-center gap-2 rangee-titre">
          <BoutonRetour onClick={() => setFiche(null)} />
          <IconeEcran icon={BookOpen} /* livre ouvert (v113) */ />
          <h2
            className="font-extrabold text-lg leading-tight flex items-center gap-2"
            style={{ color: C.text, fontFamily: FONT_HEAD }}
          >
            {/* « Annuaire ProCom » suivi du drapeau du pays (v104) */}
            Annuaire ProCom
            <DrapeauRond code={pays.drapeau} size={20} />
          </h2>
          <LogoAccueil />
        </div>

        <Card>
          <div className="flex items-start gap-3">
            <LogoOrg org={fiche} size={56} />
            <div className="flex-1 min-w-0">
              <div className="font-extrabold text-base" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                {fiche.nom}
              </div>
              <div className="text-xs mt-0.5" style={{ color: C.muted }}>
                {fiche.secteur}
              </div>
              {fiche.sousSecteur && (
                <div className="text-xs font-semibold mt-0.5" style={{ color: C.blueDark }}>
                  {fiche.sousSecteur}
                </div>
              )}
            </div>
          </div>

          {/* Activités dans le même bloc que l'identité, sous un trait (v101) */}
          <div className="mt-3 pt-3" style={{ borderTop: `1px solid ${C.border}` }}>
            <span className="text-xs font-bold uppercase tracking-wide block mb-1.5" style={{ color: C.muted }}>
              Activités
            </span>
            <p className="text-sm leading-relaxed" style={{ color: C.text }}>
              {fiche.description}
            </p>
          </div>
          {/* E-mail de l'entreprise, facultatif (v114) */}
          {fiche.email && (
            <a
              href={`mailto:${fiche.email}`}
              className="flex items-center gap-2 mt-3 pt-3 text-sm font-semibold"
              style={{ borderTop: `1px solid ${C.border}`, color: C.blue, textDecoration: "none", wordBreak: "break-all" }}
            >
              <Mail size={15} className="shrink-0" /> {fiche.email}
            </a>
          )}
          {/* Site web de l'entreprise (v116) */}
          {fiche.site && (
            <a
              href={/^https?:\/\//.test(fiche.site) ? fiche.site : `https://${fiche.site}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-semibold ${fiche.email ? "mt-2" : "mt-3 pt-3"}`}
              style={{ borderTop: fiche.email ? "none" : `1px solid ${C.border}`, color: C.blue, textDecoration: "none", wordBreak: "break-all" }}
            >
              <Globe2 size={15} className="shrink-0" /> {fiche.site}
            </a>
          )}
        </Card>

        {/* Arrondi du bouton « Communiquer gratuitement » et mention centrée (v110) */}
        {/* Numéro PRO officiel en cartouche (v109), sur le modèle des numéros
            de service : un bloc vert « Numéro PRO officiel » et le numéro en
            vert sur fond blanc, dans un même contour vert arrondi. Tout le
            cartouche est un lien d'appel complet, préfixe compris (v80). Sur un
            écran étroit, le libellé passe sur deux lignes. */}
        <Card>
          <GlissiereAppelPro
            numero={fiche.numero}
            onAppeler={() => setAppelEnCours(fiche)}
          />
        </Card>

        <div className="flex flex-col gap-2">
          <GhostButton color={C.blue} onClick={() => setAideAppel(true)}>
            <span className="inline-flex items-center gap-1.5">
              {/* « Communiquer » : on peut aussi écrire, pas seulement appeler (v100) */}
              <MessageCircle size={15} /> Communiquer gratuitement
            </span>
          </GhostButton>

          {fiche.webapp && (
            <div className="flex items-center gap-2">
              <GhostButton color={C.blue}>
                <span className="inline-flex items-center gap-1.5">
                  {/* MyApp (anciennement Click2WebApp) : un nuage, pour le
                      service en ligne de l'organisation (v59, v61) */}
                  <NuageCle size={22} fond="#E4EBE1" /* teinte du bouton */ /> Accéder à nos services
                </span>
              </GhostButton>
              <SoonBadge />
            </div>
          )}
        </div>

        {/* Encart « Fiche publiée par… » retiré (v112) */}

        {aideAppel && <AppelGratuitModal org={fiche} onClose={() => setAideAppel(false)} />}
        {appelEnCours && <LiveKitCallModal org={appelEnCours} onClose={() => setAppelEnCours(null)} />}
      </div>
    );
  }

  /* ---------- Liste ---------- */
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={BookOpen} /* livre ouvert (v113) */ />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Annuaire ProCom
        </h2>
        <LogoAccueil />
      </div>

      {/* Même agencement que sur l'accueil : le drapeau sert de sélecteur de
          pays, la recherche occupe le reste de la ligne. */}
      <div className="flex items-center gap-2">
        <SelecteurPays
          pays={pays}
          onChanger={(a) => {
            onChangerPays(a);
            choisirSecteur("");
          }}
          ouvert={paysOuvert}
          onBasculer={() => setPaysOuvert((v) => !v)}
        />
        <div
          className="flex-1 min-w-0 flex items-center gap-2 rounded-full px-4 py-2.5"
          style={{ background: "#fff", border: `1px solid ${C.border}` }}
        >
          <input
            ref={champRef}
            enterKeyHint="search"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Taper le nom d'une entreprise"
            className="flex-1 min-w-0 text-sm outline-none bg-transparent"
            style={{ fontFamily: FONT_BODY, color: C.text }}
          />
          {recherche ? (
            <button onClick={() => setRecherche("")} aria-label="Effacer la recherche">
              <X size={16} color={C.muted} />
            </button>
          ) : (
            <Search size={17} color={C.muted} />
          )}
        </div>
      </div>

      {/* La catégorie choisie sur l'accueil s'affiche ici en puce : elle met
          le choix en valeur et permet d'en changer sans revenir en arrière. */}
      <div className="flex flex-wrap items-center gap-2">
        <PuceFiltre
          valeur={secteur}
          placeholder="Toutes les catégories"
          options={secteursPresents}
          icones={SECTEUR_ICONES}
          onChanger={choisirSecteur}
        />
        {secteur && sousSecteursPresents.length > 0 && (
          <PuceFiltre
            valeur={sousSecteur}
            placeholder="Tous les sous-secteurs"
            options={sousSecteursPresents}
            onChanger={setSousSecteur}
            accent={C.blue}
          />
        )}
      </div>

      <div className="flex items-center justify-between">
        <SectionTitle>
          {resultats.length} organisation{resultats.length > 1 ? "s" : ""}
        </SectionTitle>
        <button
          onClick={() => setInfoOuverte(true)}
          aria-label="Informations sur l'annuaire ProCom"
          className="flex items-center justify-center rounded-full active:scale-95 transition-transform"
          style={{ width: 28, height: 28, background: C.blueSoft }}
        >
          <Info size={16} color={C.blue} />
        </button>
      </div>

      {resultats.length === 0 ? (
        <Card style={{ background: C.cardSoft }}>
          <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
            Aucune organisation ne correspond à votre recherche dans l'annuaire {pays.pays}.
          </p>
        </Card>
      ) : (
        <div className="flex flex-col gap-2">
          {resultats.map((o) => (
            <button
              key={o.id}
              onClick={() => setFiche(o)}
              className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-left"
              style={{ background: C.card, border: `1px solid ${C.border}` }}
            >
              <LogoOrg org={o} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-extrabold truncate" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                  {o.nom}
                </div>
                <div className="text-xs truncate" style={{ color: C.muted }}>
                  {o.secteur}
                </div>
                {/* Numéro PRO officiel, visible dès la liste (v60) */}
                <div
                  className="text-xs font-bold truncate mt-0.5"
                  style={{ color: C.blue, fontFamily: FONT_HEAD, fontVariantNumeric: "tabular-nums" }}
                >
                  {o.numero}
                </div>
              </div>
              {/* L'icône d'appel a été retirée de la liste (v61) : l'appel se
                  lance depuis la fiche. Seule reste la pastille MyApp, nuage
                  et nom du service (anciennement Click2WebApp, v61). Le champ
                  de données s'appelle toujours « webapp ». */}
              <span className="flex items-center gap-1.5 shrink-0">
                {o.webapp && (
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      /* Explique l'icône au lieu d'ouvrir la fiche (v124) */
                      e.stopPropagation();
                      setInfoMyApp(o);
                    }}
                    className="rounded-full flex items-center justify-center active:scale-95 transition-transform"
                    style={{ width: 34, height: 30, background: C.blueSoft, cursor: "pointer" }}
                    title="MyApp"
                    aria-label="Accès aux services numériques"
                  >
                    {/* Icône d'accès aux services seule, sans le mot MyApp (v123) */}
                    <NuageCle size={18} color={C.blue} fond={C.blueSoft} />
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>
      )}

      {infoOuverte && <InfosProcomModal onClose={() => setInfoOuverte(false)} />}
      {infoMyApp && (
        <MyAppModal
          org={infoMyApp}
          onClose={() => setInfoMyApp(null)}
          onVoirFiche={() => {
            setFiche(infoMyApp);
            setInfoMyApp(null);
          }}
        />
      )}
    </div>
  );
}


/* ------------------------------------------------------------------ */
/*  GRILLE TARIFAIRE : grilles officielles PRO et Business              */
/* ------------------------------------------------------------------ */

/* Une ligne de prix, convertie dans la devise d'affichage */
function LigneTarif({ ligne, deviseSource, devise, premiere }) {
  return (
    <div className="py-2.5" style={{ borderTop: premiere ? "none" : `1px solid ${C.border}` }}>
      <div className="flex items-start justify-between gap-3">
        <span className="text-sm flex-1" style={{ color: C.text }}>
          {ligne.label}
        </span>
        <span className="text-sm font-extrabold shrink-0 text-right" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          {ligne.paliers ? (
            <span style={{ color: C.muted, fontWeight: 600, fontSize: 12 }}>
              de {convertir(ligne.paliers[ligne.paliers.length - 1].prix, deviseSource, devise)} à{" "}
              {convertir(ligne.paliers[0].prix, deviseSource, devise)} {devise.symbole} / {ligne.unite}
            </span>
          ) : ligne.surDevis ? (
            <span style={{ color: C.muted, fontWeight: 600, fontSize: 12 }}>{ligne.surDevis}</span>
          ) : ligne.gratuit ? (
            <span style={{ color: C.green, fontSize: 12 }}>Gratuit</span>
          ) : (
            <>
              {convertir(ligne.prix, deviseSource, devise)}{" "}
              <span style={{ color: C.muted, fontWeight: 500, fontSize: 11 }}>
                {devise.symbole} / {ligne.unite}
              </span>
            </>
          )}
        </span>
      </div>

      {ligne.pilote && (
        <div className="text-xs mt-1" style={{ color: C.green, fontWeight: 600 }}>
          Gratuit pendant la phase pilote
        </div>
      )}

      {ligne.paliers && (
        <div className="mt-2 rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
          <div className="px-2.5 py-1.5" style={{ background: C.cardSoft }}>
            <span className="text-xs font-bold" style={{ color: C.muted, fontFamily: FONT_HEAD }}>
              Selon le solde du crédit d'appel après transfert
            </span>
          </div>
          {ligne.paliers.map((pal, k) => (
            <div
              key={k}
              className="flex items-center justify-between gap-2 px-2.5 py-1.5"
              style={{ borderTop: `1px solid ${C.border}` }}
            >
              <span className="text-xs" style={{ color: C.muted }}>
                {pal.a && !pal.de
                  ? `jusqu'à ${convertir(pal.a, deviseSource, devise)} ${devise.symbole}`
                  : pal.a
                  ? `de ${convertir(pal.de, deviseSource, devise)} à ${convertir(pal.a, deviseSource, devise)} ${devise.symbole}`
                  : `à partir de ${convertir(pal.de, deviseSource, devise)} ${devise.symbole}`}
              </span>
              <span className="text-xs font-extrabold shrink-0" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                {convertir(pal.prix, deviseSource, devise)}{" "}
                <span style={{ color: C.muted, fontWeight: 500 }}>
                  {devise.symbole} / {ligne.unite}
                </span>
              </span>
            </div>
          ))}
        </div>
      )}

      {ligne.inclus && (
        <ul className="flex flex-col gap-1 mt-2">
          {ligne.inclus.map((t, k) => (
            <li key={k} className="flex items-start gap-1.5 text-xs" style={{ color: C.muted }}>
              <Check size={12} color={C.green} className="mt-0.5 shrink-0" /> {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TarifsScreen({ lignes, statut, operateur, offreInitiale }) {
  const bizLine = lignes.find((l) => l.rattachement === "business");
  /* La devise n'est pas un réglage : c'est celle du contrat de l'opérateur,
     lui-même déduit du préfixe du numéro. */
  const devise = DEVISES.find((d) => d.id === operateur.devise) || DEVISES[0];
  /* Onglet d'ouverture : celui demandé par l'écran appelant s'il est
     distribué (la présentation Business ouvre l'onglet Business, v71),
     sinon celui de la ligne de l'usager. */
  const [offre, setOffre] = useState(
    offreInitiale && operateur.offres.includes(offreInitiale) ? offreInitiale : bizLine ? "business" : "pro"
  );
  const offresDispo = operateur.offres;
  /* Chaque opérateur ne publie que sa propre grille PRO. */
  const blocsPro = TARIFS_PRO.filter((b) => b.operateur === operateur.id);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={Coins} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Grille tarifaire
        </h2>
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
          style={{ background: C.blueSoft, border: `1px solid ${C.blue}33` }}
        >
          <Flag code={devise.code} size={16} />
          <span className="font-extrabold" style={{ fontSize: 11, color: C.blueDark, fontFamily: FONT_HEAD }}>
            {devise.symbole}
          </span>
        </span>
        <LogoAccueil />
      </div>

      {/* Choix de l'offre, limité à ce que distribue l'opérateur */}
      {offresDispo.length > 1 && (
      <div className="flex gap-2">
        {[
          { id: "pro", label: "Mobinawa-PRO", accent: C.orange },
          { id: "business", label: "Mobinawa-Business", accent: C.blueDark },
        ].filter((o) => offresDispo.includes(o.id)).map((o) => {
          const actif = offre === o.id;
          return (
            <button
              key={o.id}
              onClick={() => setOffre(o.id)}
              className="flex-1 rounded-xl py-2.5 text-xs font-extrabold"
              style={{
                background: actif ? o.accent : C.card,
                color: actif ? "#fff" : C.muted,
                border: `1.5px solid ${actif ? o.accent : C.border}`,
                fontFamily: FONT_HEAD,
              }}
            >
              {o.label}
            </button>
          );
        })}
      </div>
      )}

      {/* ---------- Mobinawa-PRO ---------- */}
      {offre === "pro" && blocsPro.length === 0 && (
        <Card style={{ background: C.cardSoft }}>
          <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
            La grille tarifaire de {operateur.nom} n'est pas encore publiée dans l'application.
          </p>
        </Card>
      )}

      {offre === "pro" &&
        blocsPro.map((bloc) => (
          <div key={bloc.titre}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Flag code={bloc.drapeau} size={22} />
                <SectionTitle>{bloc.titre}</SectionTitle>
              </div>
              <span
                className="rounded-full px-2 py-0.5 font-bold"
                style={{ background: C.orangeSoft, color: C.orange, fontSize: 9, fontFamily: FONT_HEAD }}
              >
                {bloc.taxe}
              </span>
            </div>
            <Card>
              {bloc.lignes.map((l, i) => (
                <LigneTarif key={i} ligne={l} deviseSource={bloc.devise} devise={devise} premiere={i === 0} />
              ))}
            </Card>
          </div>
        ))}

      {offre === "pro" && (
        <Card style={{ background: C.cardSoft }}>
          <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
            Cette grille est celle de {operateur.nom}, votre opérateur, libellée en{" "}
            {devise.symbole === "FCFA" ? "FCFA" : "euros"}.
          </p>
        </Card>
      )}

      {/* ---------- Mobinawa-Business ---------- */}
      {offre === "business" && (
        <>
          <div className="flex items-center justify-between">
            <SectionTitle>Offre Mobinawa-Business</SectionTitle>
            <span
              className="rounded-full px-2 py-0.5 font-bold"
              style={{ background: C.blueSoft, color: C.blueDark, fontSize: 9, fontFamily: FONT_HEAD }}
            >
              HT
            </span>
          </div>
          {TARIFS_BUSINESS.map((bloc) => (
            <div key={bloc.titre}>
              <div className="mb-2">
                <SectionTitle>{bloc.titre}</SectionTitle>
              </div>
              <Card>
                {bloc.lignes.map((l, i) => (
                  <LigneTarif key={i} ligne={l} deviseSource="XAF" devise={devise} premiere={i === 0} />
                ))}
              </Card>
              {bloc.legende && (
                <p className="text-xs leading-relaxed mt-2 px-1" style={{ color: C.muted }}>
                  {bloc.legende}
                </p>
              )}
            </div>
          ))}
          <Card style={{ background: C.cardSoft }}>
            <span className="text-sm font-extrabold block mb-2" style={{ color: C.text, fontFamily: FONT_HEAD }}>
              Conditions commerciales
            </span>
            <ul className="flex flex-col gap-2">
              {CONDITIONS_BUSINESS.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: C.muted }}>
                  <Check size={13} color={C.blueDark} className="mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </Card>
        </>
      )}

      {/* Le mode de règlement dépend de l'offre, pas de la destination */}
      {bizLine && (
        <Card style={{ background: C.blueSoft, border: "none" }}>
          <div className="flex items-center gap-2 mb-1">
            <Receipt size={15} color={C.blueDark} />
            <span className="text-sm font-extrabold" style={{ color: C.blueDark, fontFamily: FONT_HEAD }}>
              Côté Business : au contrat
            </span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: C.blueDark, opacity: 0.85 }}>
            Les abonnements des numéros et des comptes collaborateurs sont facturés à l'entreprise. Les
            appels et les SMS, eux, sont décomptés du crédit prépayé commandé par l'entreprise, comme sur
            une ligne PRO. Ce crédit se commande depuis l'espace Manager, ou par bon de commande adressé à
            nos équipes commerciales.
          </p>
        </Card>
      )}

      <Card style={{ background: C.cardSoft, borderStyle: "dashed" }}>
        <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
          Grille {operateur.nom}. Mobinawa-PRO est affiché toutes taxes comprises
          {offresDispo.includes("business") ? ", Mobinawa-Business hors taxes" : ""}. La durée de la phase
          pilote sera précisée en cours de route, et vous serez prévenu avant toute mise en facturation de
          votre numéro.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  NOTIFICATIONS : actualités, nouveautés, mises à jour, maintenance   */
/* ------------------------------------------------------------------ */
function NotificationsScreen({ notifications }) {
  const [filtre, setFiltre] = useState("Tout");
  const categories = ["Tout", ...Object.keys(CATEGORIES_NOTIF)];
  const visibles = filtre === "Tout" ? notifications : notifications.filter((n) => n.categorie === filtre);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rangee-titre">
        <BoutonRetour />
        <IconeEcran icon={Bell} />
        <h2 className="font-extrabold text-lg leading-tight" style={{ color: C.text, fontFamily: FONT_HEAD }}>
          Notifications
        </h2>
        <LogoAccueil />
      </div>

      {/* Filtres par catégorie */}
      <div className="flex gap-2 overflow-x-auto -mx-4 px-4 pb-1">
        {categories.map((c) => {
          const actif = filtre === c;
          const meta = CATEGORIES_NOTIF[c];
          const accent = meta ? meta.color : C.blue;
          return (
            <button
              key={c}
              onClick={() => setFiltre(c)}
              className="rounded-full px-3 py-1.5 text-xs font-bold shrink-0"
              style={{
                background: actif ? accent : C.card,
                color: actif ? "#fff" : C.muted,
                border: `1px solid ${actif ? accent : C.border}`,
                fontFamily: FONT_HEAD,
              }}
            >
              {c}
            </button>
          );
        })}
      </div>

      {visibles.length === 0 ? (
        <Card className="text-center">
          <IconTile icon={<Bell size={19} />} color={C.muted} bg="#EEF1F5" />
          <p className="text-sm mt-3" style={{ color: C.muted }}>
            Rien dans cette catégorie pour l'instant.
          </p>
        </Card>
      ) : (
        <div className="flex flex-col gap-2">
          {visibles.map((n) => {
            const meta = CATEGORIES_NOTIF[n.categorie] || CATEGORIES_NOTIF["Actualité"];
            return (
              <Card key={n.id} style={{ borderColor: n.lu ? C.border : meta.color + "55" }}>
                <div className="flex items-start gap-3">
                  <IconTile icon={<meta.icon size={17} />} color={meta.color} bg={meta.bg} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="rounded-full px-2 py-0.5 font-bold"
                        style={{ background: meta.bg, color: meta.color, fontSize: 9, fontFamily: FONT_HEAD }}
                      >
                        {n.categorie.toUpperCase()}
                      </span>
                      <span style={{ color: C.muted, fontSize: 11 }}>{n.date}</span>
                      {!n.lu && <Circle size={7} fill={C.orange} color={C.orange} />}
                    </div>
                    <div className="text-sm font-extrabold leading-snug" style={{ color: C.text, fontFamily: FONT_HEAD }}>
                      {n.titre}
                    </div>
                    <p className="text-sm leading-relaxed mt-1" style={{ color: C.muted }}>
                      {n.texte}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      <Card style={{ background: C.cardSoft, borderStyle: "dashed" }}>
        <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
          Ce fil est alimenté depuis le back-office Mobinawa. Les messages critiques comme une maintenance
          ou un incident réseau sont également poussés en notification système.
        </p>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  RETRAIT D'UN COLLABORATEUR                                          */
/*  Le manager libère la ligne de flotte et supprime le compte du       */
/*  collaborateur. Celui-ci ne redescend pas au niveau Basic : il doit   */
/*  se réinscrire depuis le début pour retrouver un compte Mobinawa.     */
/* ------------------------------------------------------------------ */
/*  COMPTE SUPPRIMÉ                                                     */
/*  Un compte PRO ou Business supprimé ne redescend pas au niveau        */
/*  Basic. Retrouver Mobinawa suppose une nouvelle inscription.          */
/* ------------------------------------------------------------------ */
function CompteSupprimeScreen({ motif, onReinscrire }) {
  const parManager = motif === "manager";
  return (
    <div className="w-full flex items-start justify-center hauteur-ecran" style={{ overflow: "hidden", background: "#DDE5D9", fontFamily: FONT_BODY }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        /* Hauteur de l'écran visible (v82) : 100dvh suit la barre d'adresse
           des navigateurs mobiles, que 100vh ignore. Avec 100vh, la page
           entière pouvait glisser et emporter la ligne de titre figée. */
        .hauteur-ecran { height: 100vh; height: 100dvh; }
        ::-webkit-scrollbar { display: none; }
        .text-white\\/60 { color: rgba(255,255,255,0.6); }
        .text-white\\/70 { color: rgba(255,255,255,0.7); }
        .text-white\\/85 { color: rgba(255,255,255,0.85); }
        .bg-white\\/10 { background-color: rgba(255,255,255,0.10); }
        .bg-black\\/40 { background-color: rgba(0,0,0,0.40); }
        .bg-black\\/5 { background-color: rgba(0,0,0,0.05); }
        .z-\\[80\\] { z-index: 80; }
        .active\\:bg-white\\/10:active { background-color: rgba(255,255,255,0.10); }
        .active\\:bg-black\\/5:active { background-color: rgba(0,0,0,0.05); }
        .active\\:scale-\\[0\\.98\\]:active { transform: scale(0.98); }
        .active\\:scale-\\[0\\.99\\]:active { transform: scale(0.99); }
      `}</style>
      <div
        className="relative w-full flex flex-col px-6 pt-12 pb-8 hauteur-ecran"
        style={{
          maxWidth: 430,
          overflowY: "auto",
          background: `linear-gradient(160deg, ${C.blue} 0%, ${C.blueDark} 100%)`,
          boxShadow: "0 0 40px rgba(0,0,0,0.15)",
        }}
      >
        <div className="flex items-center gap-2 mb-10">
          <div className="rounded-xl p-1" style={{ background: "#fff" }}>
            <img src={LOGO_SRC} alt="Mobinawa" style={{ width: 30, height: 28, display: "block" }} />
          </div>
          <span className="text-white font-extrabold text-lg" style={{ fontFamily: FONT_HEAD }}>
            Mobinawa
          </span>
        </div>

        <div
          className="flex items-center justify-center rounded-full mb-5"
          style={{ width: 72, height: 72, background: "rgba(255,255,255,0.12)" }}
        >
          <Trash2 size={32} color="#fff" />
        </div>

        <h1 className="text-white text-2xl font-extrabold leading-tight" style={{ fontFamily: FONT_HEAD }}>
          Votre compte a été supprimé
        </h1>
        <p className="text-white/70 text-sm mt-2 leading-relaxed" style={{ fontFamily: FONT_BODY }}>
          {parManager
            ? "L'administrateur de votre entreprise vous a retiré du compte. Votre ligne de flotte est revenue à l'entreprise."
            : "Nos équipes ont supprimé ce compte. Votre numéro et votre historique ne sont plus rattachés à Mobinawa."}
        </p>

        <div className="rounded-2xl p-4 mt-6" style={{ background: "rgba(255,255,255,0.10)" }}>
          <span className="text-white font-extrabold text-sm block mb-2" style={{ fontFamily: FONT_HEAD }}>
            Pour revenir sur Mobinawa
          </span>
          <p className="text-white/70 text-xs leading-relaxed" style={{ fontFamily: FONT_BODY }}>
            La suppression ne fait pas redescendre au niveau Mobinawa-Basic : elle efface le compte. Il
            faut vous réinscrire depuis le début, avec votre numéro de téléphone, pour retrouver un profil
            Mobinawa-Basic. Vous pourrez ensuite redemander un numéro PRO si vous le souhaitez.
          </p>
        </div>

        <div className="mt-auto pt-8">
          <button
            onClick={onReinscrire}
            className="w-full rounded-xl py-3.5 font-bold text-white text-sm active:scale-[0.98] transition-transform"
            style={{ background: C.orange, fontFamily: FONT_HEAD }}
          >
            Me réinscrire
          </button>
          <p className="text-center text-xs mt-3" style={{ color: "rgba(255,255,255,0.5)", fontFamily: FONT_BODY }}>
            En production, cette étape repasse par l'activation CIRPACK.
          </p>
        </div>
      </div>
    </div>
  );
}

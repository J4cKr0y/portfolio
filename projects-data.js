const projectsData = {
  "projects": [
    {
      "id": 1,
      "comment": "Jeremy Grosz",
      "date": "05/2024",
      "title": "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
	  "skills": "• Intégrer du contenu conformément à une maquette avec HTML et CSS. </br>• Implémenter une interface responsive. Versionner son projet avec Git et Github. </br>• Installer un environnement de développement front-end.",
      "difficulty": "Impossible de fixer une certaine hauteur en responsive, dés que le texte passait sur deux lignes, tout se décallait",
      "solution": "Il a fallut que je comprenne que l'hérédité de fonctionnait pas de la même manière selon les balises (div, a, h3)",
      "technologies": ["HTML", "CSS"],
      "imageUrl": "img/avis1.webp",
      "projectUrl": "https://j4ckr0y.github.io/Booki/"
    },
    {
      "id": 2,
      "comment": "Grégory Clain",
      "date": "06/2024",
      "title": "Créez une page web dynamique avec JavaScript",
	  "description": "-- Page web dynamique avec JavaScript</br>-- Gestion des événements utilisateurs</br>-- Manipulation des éléments du DOM</br>-- Page de connexion, Modale, upload de média</br>-- Communication avec une API (backend node/express/sqlite)",
	  "skills": "• Récupérer les données utilisateurs. </br>• Manipuler les éléments du DOM avec JavaScript. </br>• Gérer les événements utilisateurs.", 
      "difficulty": "L'utilisation de queryselector() ne fonctionnait pas",
      "solution": "Après une journée de recherche, je ne trouvais toujours pas d'où venait le problème. Finalement, j'ai utilisé getElementsByClassName().",
      "technologies": ["HTML", "CSS", "JavaScript"],
      "imageUrl": "img/avis2.webp",
      "projectUrl": "https://github.com/J4cKr0y/Portfolio-architecte-sophie-bluel"
    },
    {
      "id": 3,
      "comment": "Mohand Ferhi",
      "date": "07/2024",
      "title": "Planifiez le développement du site de votre client",
	  "skills": "• Suivre le déroulement du projet grâce à un outil de gestion de projet. </br>• Rédiger les spécifications techniques à partir de besoins fonctionnels. </br>• Découper une fonctionnalités en tâches pour préparer le développement. </br>• Présenter la solution technique. </br>• Mettre en place une méthode de veille technologique.",
      "difficulty": "Une simple erreur de compréhension concernant la méthode Agile",
      "solution": "Outre les explications du mentor et la reprise des cours, j'ai dû retoucher le Kanban et la présentation. Heureusement, j'ai bien géré mon temps.",
      "technologies": ["PowerPoint", "Word", "LucidChart", "Notion"],
      "imageUrl": "img/avis3.webp",
      "projectUrl": "https://github.com/J4cKr0y/planifiez-le-developpement-du-site"
    },
    {
      "id": 4,
      "comment": "Zakaria Eddouh",
      "date": "07/2024",
      "title": "Débuggez et optimisez un site de photographe",
	  "skills": "• Optimiser les performances d’un site web. </br>• Débugger un site web grâce aux Chrome DevTools. </br>• Rédiger un cahier de recette pour tester un site.",
      "difficulty": "Suivre trop scrupuleusement les directives de Lighthouse peut ralentir le site",
      "solution": "Utilisation appliquée de git/github, voir au cas pas cas et ne pas hésiter à revenir en arrière.",
      "technologies": ["PowerPoint", "Word", "LucidChart", "Notion"],
      "imageUrl": "img/avis4.webp",
      "projectUrl": "https://github.com/J4cKr0y/Nina-Carducci-Dev"
    },
    {
      "id": 5,
      "comment": "Herve Vermot-Desroches",
      "date": "08/2024",
      "title": "Créez une application web de location immobilière avec React",
	  "description": "- Kasa</br>-- Initialisation avec Create React App</br>-- Configuration de la navigation entre les pages avec React Router</br>-- Développement des éléments de l'interface avec des composants React</br>-- Utilisation de données simulées extraites d'un fichier JSON</br>-- Utilisation de SASS pour gérer le CSS</br>-- Implémentation d’animations CSS",
	  "skills": "• Configurer la navigation avec React Router. </br>• Initialiser une application avec Create React App. </br>• Développer des éléments de l'interface grâce à des composants React. </br>• Mettre en œuvre des animations CSS. </br>• Développer une interface web avec Sass.",
      "difficulty": "Je voulais envoyer en page 404 s'il n'y avait pas de donnée. Mais ça le faisait même si y en avait.",
      "solution": "J'ai attribué d'office la valeur undefined, et testé pour la valeure null.",
      "technologies": ["React", "Javascript", "Sass", "SQLite"],
      "imageUrl": "img/avis5.webp",
      "projectUrl": "https://github.com/J4cKr0y/kasa-react"
    },
    {
      "id": 6,
      "comment": "Mohammed Boulouiz",
      "date": "09/2024",
      "title": "Développez le back-end d'un site de notation de livres",
	  "description": "- Mon Vieux Grimoire</br>-- Serveur avec Node/Express</br>-- Architecture MVC (Modèle-Vue-Contrôleur)</br>-- Base de données MongoDB</br>-- Modèles de données avec Mongoose</br>-- Opérations CRUD</br>-- Gestion du téléchargement (Multer)</br>-- Optimisation des images (Sharp)</br>-- Sécurité des données, stockage sécurisé </br>--- DotEnv, JWT, bcrypt, mongo-sanitize, mongo-unique-validator, he</br>-- Système d'authentification sécurisé</br>-- API RESTful</br>-- Journalisation (Morgan)</br>-- Tests unitaires (Jest)",
	  "skills": "• Implémenter un modèle logique de données. </br>• Mettre en œuvre des opérations CRUD de manière sécurisée. </br>• Stocker des données de manière sécurisée. </br>• Tests unitaires.</br>",
      "difficulty": "Des symboles apparaissaient dés que je voulais mettre un titre avec apostrophe",
      "solution": "Après avoir chercher avec acharnement du côté de l'UTF8, je me suis rendu compte que c'était escape-html (remplacé par he) qui posait problème.",
      "technologies": ["Node", "Express", "MongoDB", "Jest"],
      "imageUrl": "img/avis6.webp",
      "projectUrl": "https://github.com/J4cKr0y/Mon-Vieux-Grimoire"
    },
	{
      "id": 7,
	  "comment": "Kayden Spence Royer",
	  "date": "10/2024", 
      "title": "Jeu vidéo old school inspiré du ping pong, jouable à deux, version web desktop et mobile/tablette",
      "description": "- Pong</br>-- Gestion de l'interaction avec les touches du clavier</br>-- Mise en place d'un calcul de trajectoire</br>-- Gestion du contact entre la balle et la raquette</br>-- Simulation des touches en mode mobile/tablette</br>",
      "skills": "• Calculs de trajectoire. </br>• Physique basique. </br>• UI/UX Design. </br>• Interfaçage des contrôles mobiles. </br>• Animation par frame (requestAnimationFrame).", 
      "difficulty": "Une gestion imprécise des collisions rendant le jeu frustrant et imprévisible.", 
	  "solution": "J'ai ajusté la direction et la vitesse de la balle en fonction de l'endroit où elle touchait la raquette.",
	  "technologies": [" HTML ", " CSS ", " JavaScript "],
	  "imageUrl": "img/avis7.webp",
      "projectUrl": "https://github.com/J4cKr0y/pong"
	}
  ]
}
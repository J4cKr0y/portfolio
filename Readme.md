# Portfolio
## Projet
------
Portfolio personnel d'un développeur web moderne, conçu pour présenter mes compétences, projets et expériences professionnelles de manière élégante et interactive.

## C'est quoi ?
------------
Ce portfolio est une vitrine numérique qui présente mon parcours professionnel, mes projets réalisés et mes compétences techniques. Développé en HTML/CSS/JavaScript pur, il reflète ma philosophie de développement axée sur la simplicité, la performance et la sobriété énergétique. Ce choix technique, fait à l'issue de ma certification OpenClassrooms, témoigne d'un retour aux fondamentaux du développement web moderne.

## Technologies Utilisées
-----------------------
- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Styling**: CSS3 moderne (sans framework)
- **PDF Viewer**: PDF.js pour l'affichage du CV
- **SEO**: Schema.org pour le référencement structuré
- **Deployment**: GitHub Pages
- **Version Control**: Git & GitHub

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![PDF.js](https://img.shields.io/badge/PDF.js-FF6B35?style=flat&logo=mozilla&logoColor=white)
![Schema.org](https://img.shields.io/badge/Schema.org-000000?style=flat&logo=schema-dot-org&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=github&logoColor=white)

## Fonctionnalités Clés
---------------------
- **Design Responsive**: Interface parfaitement adaptée à tous les appareils (desktop, tablette, mobile)
- **Mode Sombre/Clair**: Bascule automatique selon les préférences système de l'utilisateur
- **Visualisateur PDF Intégré**: Affichage du CV directement dans le navigateur grâce à PDF.js
- **Animations Fluides**: Transitions et animations CSS pour une expérience utilisateur engageante
- **Section Projets**: Présentation détaillée des réalisations avec liens vers les démos et codes sources
- **Formulaire de Contact**: Interface pour permettre aux visiteurs de me contacter facilement
- **Performance Optimisée**: Chargement rapide et sobriété énergétique
- **SEO Optimisé**: Référencement structuré avec Schema.org
- **Accessibilité**: Respect des standards d'accessibilité web

## Architecture du Projet
------------------------
```
Portfolio/
├── index.html          # Page d'accueil principale
├── css/               # Fichiers de styles
│   ├── style.css      # Styles principaux
│   ├── responsive.css # Styles responsive
│   └── themes.css     # Gestion des thèmes clair/sombre
├── js/                # Scripts JavaScript
│   ├── main.js        # Logique principale
│   ├── animations.js  # Animations et interactions
│   ├── pdf-viewer.js  # Visualisateur PDF personnalisé
│   └── theme-toggle.js # Gestion des thèmes
├── lib/               # Bibliothèques externes
│   └── pdf.js/        # PDF.js pour la lecture de CV
├── images/            # Assets graphiques
│   ├── projects/      # Captures d'écran des projets
│   └── profile/       # Photos de profil
├── assets/            # Autres ressources
│   ├── CV.pdf         # CV téléchargeable
│   └── icons/         # Icônes personnalisées
└── README.md          # Documentation
```

J'ai adopté une architecture vanilla qui privilégie la simplicité et la performance, sans dépendances lourdes ni frameworks externes.

## Par quoi commencer ? 
--------------------
Si vous voulez juste voir le portfolio en action, rendez-vous ici : 
https://j4ckr0y.github.io/portfolio

Sinon, pour explorer le code localement :

1. Clonez le dépôt :
```bash
git clone https://github.com/J4cKr0y/portfolio.git
```

2. Naviguez dans le dossier :
```bash
cd portfolio
```

3. Ouvrez le fichier `index.html` dans votre navigateur, ou utilisez un serveur local :
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server
```

4. Accédez à [http://localhost:8000](http://localhost:8000) dans votre navigateur.

## Roadmap et Améliorations Prévues
----------------------------------
- [ ] Intégration d'un blog personnel
- [ ] Système de recommandations et témoignages
- [ ] Intégration d'analytics respectueux de la vie privée
- [ ] Version Progressive Web App (PWA)
- [ ] Internationalisation (FR/EN)
- [ ] Amélioration continue du visualisateur PDF
- [ ] Optimisation énergétique et éco-conception

Les contributions et suggestions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou soumettre une pull request.

---
*Développé avec ❤️ par J4cKr0y - Portfolio vanilla pour un web plus sobre*
const htmlStruct = `
    <header class="glass-header">
        <div class="theme-toggle">
            <input type="checkbox" class="theme-input" id="theme-toggle">
            <label for="theme-toggle" class="theme-label">
                <i class="fas fa-sun"></i>
                <i class="fas fa-moon"></i>
            </label>
        </div>

        <div class="header-content">
            <h1></h1>
            <p class="title"></p>
            
            <div class="social-links">
                <a href="#" class="social-link">
                    <i class="fab fa-github"></i>
                </a>
                <a href="#" class="social-link">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>

            <nav class="main-nav">
                <a href="#about" class="nav-link">À propos</a>
				<a href="#skills" class="nav-link">Compétences</a>
                <a href="#projects" class="nav-link">Mes projets</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>
        </div>

        <a href="#top" class="return-top hidden">
            <i class="fas fa-arrow-up"></i>
        </a>
    </header>

    <main>
        <section id="about" class="section">
            <div class="parallax-container">
                <svg class="parallax-svg" viewBox="0 0 100 100">
                    <circle class="shape" cx="20" cy="20" r="10"/>
                    <rect class="shape" x="60" y="40" width="20" height="20"/>
                    <polygon class="shape" points="40,60 60,80 20,80"/>
                </svg>
                <div class="content">
                    <h2>À propos</h2>
                <p></br>
                    </br>
                    </br>
                    </p>
                </div>
            </div>
        </section>

		
        <section id="projects" class="section">
            <h2>Mes projets</h2>
            <div class="list">
                <div class="item">
                    <img src="img/bluel.webp" alt="Projet 1" onclick="openModal(1)" />
                </div>
                <div class="item">
                    <img src="img/grimoire.webp" alt="Projet 2" onclick="openModal(2)" />
                </div>
                <div class="item">
                    <img src="img/kasa.webp" alt="Projet 3" onclick="openModal(3)" />
                </div>
                <div class="item">
                    <img src="img/pong.webp" alt="Projet 4" onclick="openModal(4)" />
                </div>
                <div class="item">
                    <img src="img/menumaker.webp" alt="Projet 5" onclick="openModal(5)" />
                </div>
            </div>
        </section>
		
        <!-- Section avis avec carrousel -->
        <section id="avis" class="section">
            <h2>Ce qu'ils disent de moi</h2>
            <div class="carousel">
                <div class="carousel-inner">
                    <div class="project-card">
                        <img src="img/avis1.webp" alt="Avis de Jeremy Grosz">
                        <div class="project-details">
                            <h3>Citation de Jeremy Grosz</h3>
                            <p>05/2024, Projet : Créez la page d'accueil d'une agence de voyage avec HTML & CSS</p>
                            <div class="tech-stack">
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                            <a href="https://j4ckr0y.github.io/Booki/" class="project-link">Voir le projet</a>
                        </div>
                    </div>
					<div class="project-card">
                        <img src="img/avis2.webp" alt="Avis de Grégory Clain">
                        <div class="project-details">
                            <h3>Citation de Grégory Clain</h3>
                            <p>06/2024, Projet : Créez une page web dynamique avec JavaScript</p>
                            <div class="tech-stack">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                            </div>
                            <a href="https://github.com/J4cKr0y/Portfolio-architecte-sophie-bluel" class="project-link">Voir le projet</a>
                        </div>
                    </div>
                    <!-- Répéter pour autres projets -->
                </div>
                <button class="carousel-prev">&lt;</button>
                <button class="carousel-next">&gt;</button>
            </div>
        </section>

        <!-- Section Contact avec halo -->
        <section id="contact" class="section">
            <div class="glow-container">
                <h2>Contact</h2>
                <form id="contact-form" class="contact-form">
                    <div class="form-group">
                        <input type="text" id="name" name="name" required>
                        <label for="name">Nom</label>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" required>
                        <label for="email">Email</label>
                    </div>
                    <div class="form-group">
                        <textarea id="message" name="message" required></textarea>
                        <label for="message">Message</label>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </section>
		
		<!-- Modal des projets -->
	<div id="projectModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <div id="modalContent"></div>
        </div>
    </div>
		
    </main>
        `;
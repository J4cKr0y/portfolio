//script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    let savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            savedTheme = 'dark';
        } else {
            savedTheme = 'light';
        }
    }
    document.documentElement.dataset.theme = savedTheme;
    themeToggle.checked = savedTheme === 'dark';
    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'dark' : 'light';
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    });
});

document.addEventListener('DOMContentLoaded', () => { 
const logos = document.querySelectorAll('.tech-logo'); 
	logos.forEach((logo, index) => { setTimeout(() => { logo.classList.add('active'); }, index * 300);	}); 
});

function updateTitle() {
    const titleElement = document.querySelector('.title');
    const parentElement = titleElement.parentNode;
    parentElement.removeChild(titleElement);
    const newTitleElement = document.createElement('p');
    newTitleElement.classList.add('title');
    if (window.innerWidth <= 1200) {
        newTitleElement.textContent = 'Dev Full-stack';
    } else {
        newTitleElement.textContent = 'Développeur Full-stack : Node - Express / React';
    }
    const secondChild = parentElement.children[1];
    if (secondChild) {
        parentElement.insertBefore(newTitleElement, secondChild);
    } else {
        parentElement.appendChild(newTitleElement); 
    }
}
window.addEventListener('resize', updateTitle);
window.addEventListener('load', updateTitle);  
 


const header = document.querySelector('.glass-header');
const returnTop = document.querySelector('.return-top');
const navLinks = document.querySelectorAll('.nav-link');
const headerContent = document.querySelector('.header-content');
const techLogos = document.querySelectorAll('.tech-logo');

const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const shapes = entry.target.querySelectorAll('.shape');
            shapes.forEach(shape => shape.style.animation = 'float 6s ease-in-out infinite');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
});

let isScrolling;
window.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        if (window.scrollY > 100) {
            header.classList.add('minimized');
            returnTop.classList.remove('hidden');
            techLogos.forEach(logo => {
                logo.style.display = 'none';
            });

            headerContent.style.flexDirection = 'row';
            headerContent.style.gap = '3%';
            if (window.innerWidth <= 900) {
                headerContent.style.gap = '2%';
            }
            if (window.innerWidth <= 775) {
                headerContent.style.gap = '1%';
                headerContent.style.justifyContent = 'left';
            }
        } else {
            header.classList.remove('minimized');
            returnTop.classList.add('hidden');
            techLogos.forEach(logo => {
                logo.style.display = '';
            });

            headerContent.style.flexDirection = 'column';
            headerContent.style.gap = '0';
            headerContent.style.justifyContent = 'center';
        }
    }, 50);
});


const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

function openModal(projectId) {
    const project = projectsData.projects.find(p => p.id === projectId);
    if (!project) return;

    modalContent.innerHTML = `
        <h2>${project.title}</h2><br>
        <p><b>Compétences développées :</b><br>
			${project.skills}</p><br>     
        <p><b>Difficulté :</b><br>
		   ${project.difficulty}</p><br>
        <p><b>Résolution :</b><br>
		   ${project.solution}</p><br>
        <div class="tech-stack">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join(' ')}
        </div><br>
        <a href="${project.projectUrl}" target="_blank">Voir sur GitHub</a>
    `;
    modal.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.style.display = 'none';
    }
});


// Carrousel des avis
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('projectsContainer');
    
    projectsData.projects.forEach(project => {
        const projectHTML = `
            <div class="project-card">
                <img src="${project.imageUrl}" alt="Avis de ${project.comment}">
                <div class="project-details">
                    <h3>Citation de ${project.comment}</h3>
                    <p>${project.date}, <b>Projet :</b> ${project.title}</p>
					<p><b>Compétences développées :</b> ${project.skills}</p>
                    <i>
                        <b>Difficulté :</b> ${project.difficulty}<br>
                        <b>Résolution :</b> ${project.solution}
                    </i>
                    <div class="tech-stack">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <a href="${project.projectUrl}" class="project-link">Voir le projet</a>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', projectHTML);
    });

    let carouselInterval; 
    const carousel = document.querySelector('.carousel-inner');
    const avis = document.querySelectorAll('.project-card');
    const totalAvis = avis.length;
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (prevBtn && nextBtn) { 
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + avis.length) % avis.length;
            updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % avis.length;
            updateCarousel();
        });
    }

    function moveCarousel() {
        currentIndex = (currentIndex + 1) % totalAvis;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function startCarousel() {
        carouselInterval = setInterval(moveCarousel, 10000);
    }

    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    avis.forEach(card => {
        card.addEventListener('mouseenter', stopCarousel);
        card.addEventListener('mouseleave', startCarousel);
    });

    startCarousel();
});

// Effet parallaxe au scroll
window.addEventListener('scroll', () => {
    const shapes = document.querySelectorAll('.shape');
    const scrolled = window.scrollY; 
    shapes.forEach((shape, index) => {
        const speed = 0.2 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
});

// Validation des champs avant soumission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (!/^[A-Za-z\s]+$/.test(name)) {
            alert('Le nom ne doit contenir que des lettres et des espaces.');
            event.preventDefault();
        }
        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            event.preventDefault();
        }
        if (message.length > 500) {
            alert('Le message ne doit pas dépasser 500 caractères.');
            event.preventDefault();
        }
    });


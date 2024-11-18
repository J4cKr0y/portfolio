// __tests__/carousel.test.js
import '@testing-library/jest-dom';

function initCarousel() {
    let currentIndex = 0;
    const carousel = document.querySelector('.carousel-inner');
    const cards = document.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let carouselInterval;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function moveNext() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }

    function movePrev() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }

    function startCarousel() {
        carouselInterval = setInterval(moveNext, 10000);
    }

    function stopCarousel() {
        if (carouselInterval) {
            clearInterval(carouselInterval);
        }
    }

    nextBtn?.addEventListener('click', moveNext);
    prevBtn?.addEventListener('click', movePrev);
    cards.forEach(card => {
        card.addEventListener('mouseenter', stopCarousel);
        card.addEventListener('mouseleave', startCarousel);
    });
    startCarousel();
    return {
        moveNext,
        movePrev,
        stopCarousel,
        startCarousel,
        currentIndex,
        carouselInterval
    };
}

function setupCarouselDOM(projectsData) {
    document.body.innerHTML = `
        <div id="projectsContainer">
            <div class="carousel-inner">
                ${projectsData.projects.map(project => `
                    <div class="project-card">
                        <img src="${project.imageUrl}" alt="Avis de ${project.comment}">
                        <div class="project-details">
                            <h3>Citation de ${project.comment}</h3>
                            <p>${project.date}, <b>Projet :</b> ${project.title}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="carousel-prev"></button>
            <button class="carousel-next"></button>
        </div>
    `;

    const carousel = initCarousel();
    
    return {
        carousel: document.querySelector('.carousel-inner'),
        prevBtn: document.querySelector('.carousel-prev'),
        nextBtn: document.querySelector('.carousel-next'),
        cards: document.querySelectorAll('.project-card'),
        carouselInstance: carousel
    };
}

describe('Carousel', () => {
    const sampleProjectsData = {
        projects: [
            {
                imageUrl: 'image1.jpg',
                comment: 'Great project',
                date: '2023-01-01',
                title: 'Project 1'
            },
            {
                imageUrl: 'image2.jpg',
                comment: 'Another project',
                date: '2023-02-01',
                title: 'Project 2'
            }
        ]
    };

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
        jest.clearAllMocks();
        document.body.innerHTML = '';
    });

    it('should advance to the next project card when next button is clicked', () => {
        const { carousel, nextBtn } = setupCarouselDOM(sampleProjectsData);
        carousel.style.transform = 'translateX(0%)';
        nextBtn.click();
        expect(carousel.style.transform).toBe('translateX(-100%)');
    });

    it('should go to the previous project card when previous button is clicked', () => {
        const { carousel, prevBtn, nextBtn } = setupCarouselDOM(sampleProjectsData);
        carousel.style.transform = 'translateX(0%)';
        nextBtn.click();
        expect(carousel.style.transform).toBe('translateX(-100%)');
        prevBtn.click();
        expect(carousel.style.transform).toBe('translateX(-0%)');
    });

    it('should loop back to the first slide when the next button is clicked on the last slide', () => {
        const { carousel, nextBtn } = setupCarouselDOM(sampleProjectsData);
        carousel.style.transform = 'translateX(0%)';
        nextBtn.click();
        expect(carousel.style.transform).toBe('translateX(-100%)');
        nextBtn.click();
        expect(carousel.style.transform).toBe('translateX(-0%)');
    });

    it('should stop and start the carousel on hover and leave', () => {
        const { cards } = setupCarouselDOM(sampleProjectsData);

        // Mock clearInterval & setInterval
        const clearIntervalSpy = jest.spyOn(window, 'clearInterval');
        const setIntervalSpy = jest.spyOn(window, 'setInterval');

        cards[0].dispatchEvent(new Event('mouseenter'));
        expect(clearIntervalSpy).toHaveBeenCalled();
        cards[0].dispatchEvent(new Event('mouseleave'));
        expect(setIntervalSpy).toHaveBeenLastCalledWith(expect.any(Function), 10000);
    });

    it('should start carousel automatically and cycle every 10 seconds', () => {
        const { carousel } = setupCarouselDOM(sampleProjectsData);
        carousel.style.transform = 'translateX(0%)';
        jest.advanceTimersByTime(10000);
        expect(carousel.style.transform).toBe('translateX(-100%)');  
        jest.advanceTimersByTime(10000);
        expect(carousel.style.transform).toBe('translateX(-0%)');
    });
});
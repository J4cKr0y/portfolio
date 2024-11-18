// __tests__/navigation.test.js
import '@testing-library/jest-dom';

describe('Navigation', () => {
    it('should minimize header and show returnTop when scrolled past 100 pixels', () => {
        document.body.innerHTML = `
            <div class="glass-header"></div>
            <div class="return-top hidden"></div>
            <div class="header-content"></div>
            <div class="tech-logo"></div>
            <div class="tech-logo"></div>
        `;
        const header = document.querySelector('.glass-header');
        const returnTop = document.querySelector('.return-top');
        const techLogos = document.querySelectorAll('.tech-logo');
        const headerContent = document.querySelector('.header-content');

        window.scrollY = 101;
        window.dispatchEvent(new Event('scroll'));

        setTimeout(() => {
            expect(header.classList.contains('minimized')).toBe(true);
            expect(returnTop.classList.contains('hidden')).toBe(false);
            techLogos.forEach(logo => {
                expect(logo.style.display).toBe('none');
            });
            expect(headerContent.style.flexDirection).toBe('row');
        }, 60);
    });

    it('should minimize header and show returnTop when scrolled past 100 pixels', () => {
        document.body.innerHTML = `
            <div class="glass-header"></div>
            <div class="return-top hidden"></div>
            <div class="header-content"></div>
            <div class="tech-logo"></div>
            <div class="tech-logo"></div>
        `;
        const header = document.querySelector('.glass-header');
        const returnTop = document.querySelector('.return-top');
        const techLogos = document.querySelectorAll('.tech-logo');
        const headerContent = document.querySelector('.header-content');

        window.scrollY = 101;
        window.dispatchEvent(new Event('scroll'));

        setTimeout(() => {
            expect(header.classList.contains('minimized')).toBe(true);
            expect(returnTop.classList.contains('hidden')).toBe(false);
            techLogos.forEach(logo => {
                expect(logo.style.display).toBe('none');
            });
            expect(headerContent.style.flexDirection).toBe('row');
        }, 60);
    });
});
// __tests__/theme.test.js
import '@testing-library/jest-dom';

describe('Theme Toggle', () => {
    beforeEach(() => {
        const setTheme = () => {
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme ? 'dark' : 'light');
            document.documentElement.dataset.theme = currentTheme;
            const themeToggle = document.getElementById('theme-toggle');
            themeToggle.checked = currentTheme === 'dark';
        };
        document.addEventListener('DOMContentLoaded', setTheme);
    });

    it('should set theme to dark when user preference is dark', () => {
        // Mock
        window.matchMedia = jest.fn().mockImplementation(query => {
            return {
                matches: query === '(prefers-color-scheme: dark)',
                media: query,
                onchange: null,
                addListener: jest.fn(), 
                removeListener: jest.fn(), 
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            };
        });
        document.body.innerHTML = '<input type="checkbox" id="theme-toggle">';
        const themeToggle = document.getElementById('theme-toggle');

        document.dispatchEvent(new Event('DOMContentLoaded'));
        expect(document.documentElement.dataset.theme).toBe('dark');
        expect(themeToggle.checked).toBe(true);
    });

    it('should set theme based on system preference when no theme is saved in localStorage', () => {
        localStorage.clear();

        // Mock
        window.matchMedia = jest.fn().mockImplementation(query => {
            return {
                matches: query === '(prefers-color-scheme: light)',
                media: query,
                onchange: null,
                addListener: jest.fn(), 
                removeListener: jest.fn(), 
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            };
        });
        document.body.innerHTML = '<input type="checkbox" id="theme-toggle">';
        const themeToggle = document.getElementById('theme-toggle');
        document.dispatchEvent(new Event('DOMContentLoaded'));
        expect(document.documentElement.dataset.theme).toBe('light');
        expect(themeToggle.checked).toBe(false);
    });
});

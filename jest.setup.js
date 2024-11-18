// jest.setup.js

const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;


const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('');
global.window = jsdom.window;
global.document = jsdom.window.document;

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
};
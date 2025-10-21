import { homeContent } from './home-content.js';
import { menuContent } from './menu-content.js';
import './styles.css';

const content = document.querySelector('#content');

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

homeButton.addEventListener('click', () => {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
    homeContent();
})

menuButton.addEventListener('click', () => {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
    menuContent();
})
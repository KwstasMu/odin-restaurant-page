import { homeContent } from './home-content.js';
import { menuContent } from './menu-content.js';
import { aboutContent } from './about-content.js';
import './styles.css';

const content = document.querySelector('#content');

const navButtons = document.querySelectorAll('.nav-buttons');

navButtons.forEach((button) => {
    button.addEventListener('click', () => {
        while(content.firstChild) {
            content.removeChild(content.firstChild);
        };
        if (button.id === 'home') { homeContent() }
        else if (button.id === 'menu') { menuContent() }
        else { aboutContent() };
    })
})
import restaurantImage from './components/premium_photo-1661883237884-263e8de8869b.jpg';
import { LoremIpsum } from 'lorem-ipsum';

export function homeContent() {
    const lorem = new LoremIpsum()

    const content = document.querySelector('#content');
    
    const image = document.createElement('img');
    image.src = restaurantImage;

    const headline = document.createElement('h1');
    headline.classList.add('headline')
    headline.textContent = 'Restaurant Headline';

    const hr1 = document.createElement('hr');
    const hr2 = document.createElement('hr');

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = 'Some nice words about my restaurant!' +  ' ' + lorem.generateSentences(10);

    content.insertAdjacentElement('beforeend', headline);
    content.insertAdjacentElement('beforeend', image);
    content.insertAdjacentElement('beforeend', hr1);
    content.insertAdjacentElement('beforeend', description);
    content.insertAdjacentElement('beforeend', hr2);
    
}
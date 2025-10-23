import { LoremIpsum } from "lorem-ipsum";

export function menuContent() {
    const lorem = new LoremIpsum();

    const content = document.querySelector('#content');

    const cardsDiv = document.createElement('div');
    cardsDiv.classList.add('cards-div');
    
    for (let i = 1; i <= 9; i++) {
    const card = document.createElement('div');
    card.classList.add('card');

    const header = document.createElement('h3');
    header.classList.add('card-header');
    header.textContent = 'Menu item ' + i;

    const price = document.createElement('p');
    price.classList.add('menu-item-price');
    price.textContent = '$' + ((Math.random() * 50) + 1 + Math.random()).toFixed(2);

    // const hr1 = document.createElement('hr');
    // hr1.style.width = '100%'
    // hr1.style.margin = '0'

    card.insertAdjacentElement('beforeend', header);
    card.insertAdjacentElement('beforeend', price)
    // card.insertAdjacentElement('beforeend', hr1)

    const menuItemImg = document.createElement('img');
    menuItemImg.classList.add('menu-item-img');

    card.insertAdjacentElement('beforeend', menuItemImg);

    const menuItemDescriptionDiv = document.createElement('div');
    menuItemDescriptionDiv.classList.add('menu-item-description-div');

    const menuItemDescription = document.createElement('h4');
    menuItemDescription.classList.add('menu-item-description');
    menuItemDescription.textContent = lorem.generateSentences(3);

    menuItemDescriptionDiv.insertAdjacentElement('beforeend', menuItemDescription);
    
    // const hr2 = document.createElement('hr');
    // hr2.style.width = '100%'
    // hr2.style.margin = '0'

    // card.insertAdjacentElement('beforeend', hr2);

    card.insertAdjacentElement('beforeend', menuItemDescriptionDiv);

    cardsDiv.insertAdjacentElement('beforeend', card);
    
}
    content.insertAdjacentElement('beforeend', cardsDiv);
    
}

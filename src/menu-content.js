import { LoremIpsum } from "lorem-ipsum";

export function menuContent() {
    const lorem = new LoremIpsum();

    const content = document.querySelector('#content');

    const cardsDiv = document.createElement('div');
    cardsDiv.classList.add('cards-div');
    
    for (let i = 1; i <= 6; i++) {
    const card = document.createElement('div');
    card.classList.add('card');

    const header = document.createElement('h3');
    header.classList.add('card-header');
    header.textContent = 'Recipe ' + i;

    const hr1 = document.createElement('hr');
    hr1.style.width = '100%'
    hr1.style.margin = '0'

    card.insertAdjacentElement('beforeend', header);
    card.insertAdjacentElement('beforeend', hr1)

    const ingredientsList = document.createElement('ul');
    ingredientsList.classList.add('ingredients-list');

    const ingredientsHeader = document.createElement('h4');
    ingredientsHeader.classList.add('ingredients-header');
    ingredientsHeader.textContent = 'Ingredients'

    for (let i = 1; i <= 6; i++) {
        const ingredient = document.createElement('li');
        ingredient.classList.add('ingredient' + i);
        ingredient.textContent = 'Ingredient ' + i + ': Some ammount';
        ingredientsList.insertAdjacentElement('beforeend', ingredient);
    }

    card.insertAdjacentElement('beforeend', ingredientsHeader);
    card.insertAdjacentElement('beforeend', ingredientsList);
    
    const hr2 = document.createElement('hr');
    hr2.style.width = '100%'
    hr2.style.margin = '0'

    card.insertAdjacentElement('beforeend', hr2);

    const instructionsHeader = document.createElement('h4');
    instructionsHeader.classList.add('instructions-header');
    instructionsHeader.textContent = 'Instructions';

    const instructions = document.createElement('p');
    instructions.classList.add('recipe-instructions');
    instructions.textContent = lorem.generateSentences(3);
   
    card.insertAdjacentElement('beforeend', instructionsHeader);
    card.insertAdjacentElement('beforeend', instructions);

    cardsDiv.insertAdjacentElement('beforeend', card);
    
}
    content.insertAdjacentElement('beforeend', cardsDiv);
    
}

import { LoremIpsum } from "lorem-ipsum";

export function menuContent() {
    const lorem = new LoremIpsum();

    const content = document.querySelector('#content');
    
    for (let i = 1; i <= 6; i++) {
    const card = document.createElement('div');
    card.classList.add('card');

    const header = document.createElement('h3');
    header.classList.add('card-header');
    header.textContent = 'Recipe ' + i;

    card.insertAdjacentElement('beforeend', header);

    const ingredientsList = document.createElement('ul');
    ingredientsList.classList.add('ingredientsList');
    ingredientsList.textContent = 'Ingredients';

    for (let i = 1; i <= 6; i++) {
        const ingredient = document.createElement('li');
        ingredient.classList.add('ingredient' + i);
        ingredient.textContent = 'Ingredient ' + i + ': Some ammount';
        ingredientsList.insertAdjacentElement('beforeend', ingredient);
    }

    card.insertAdjacentElement('beforeend', ingredientsList);

    const instructions = document.createElement('p');
    instructions.classList.add('recipe-instructions');
    instructions.textContent = lorem.generateSentences(3);

    card.insertAdjacentElement('beforeend', instructions);
    
    content.insertAdjacentElement('beforeend', card);
}
    
}

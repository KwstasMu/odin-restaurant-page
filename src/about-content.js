import facebookIcon from './components/facebook.svg';
import instagramIcon from './components/instagram.svg';
import tiktokIcon from './components/tiktok.svg';

export function aboutContent() {
    const content = document.querySelector('#content');

    //Create the locations
    const locationsDiv = document.createElement('div');
    locationsDiv.classList.add('locations-div');

    const locationsHeader = document.createElement('h3');
    locationsHeader.classList.add('list-header');
    locationsHeader.textContent = 'You can find us here.';

    locationsDiv.insertAdjacentElement('beforeend', locationsHeader);
    
    const locationsList = document.createElement('ul');
    locationsList.classList.add('locations-list');

    for (let i = 1; i <= 6; i++) {
        const location = document.createElement('li');
        location.classList.add('location');
        location.textContent = 'location ' + i;

        locationsList.insertAdjacentElement('beforeend', location);
    }

    locationsDiv.insertAdjacentElement('beforeend', locationsList);

    //Create the contacts
    const contactsDiv = document.createElement('div');
    contactsDiv.classList.add('contacts-div');

    const contactHeader = document.createElement('h3');
    contactHeader.classList.add('list-header');
    contactHeader.textContent = 'Our socials.';

    contactsDiv.insertAdjacentElement('afterbegin', contactHeader);
    
    const contactsList = document.createElement('ul');
    contactsList.classList.add('contacts-list');

    const facebook = document.createElement('li');
    facebook.classList.add('links');
    facebook.id = 'facebook-link';
    facebook.textContent = 'Insert Facebook link here';

    const facebookImg = document.createElement('img');
    facebookImg.classList.add('contact-icons');
    facebookImg.src = facebookIcon;

    facebook.insertAdjacentElement('afterbegin', facebookImg);

    const instagram = document.createElement('li');
    instagram.classList.add('links');
    instagram.id = 'instagram-link';
    instagram.textContent = 'Insert instagram link here';

    const instagramImg = document.createElement('img');
    instagramImg.classList.add('contact-icons');
    instagramImg.src = instagramIcon;

    instagram.insertAdjacentElement('afterbegin', instagramImg);

    const tiktok = document.createElement('li');
    tiktok.classList.add('links');
    tiktok.id = 'tiktok-link';
    tiktok.textContent = 'Insert Tiktok link here';

    const tiktokImg = document.createElement('img');
    tiktokImg.classList.add('contact-icons');
    tiktokImg.src = tiktokIcon;

    tiktok.insertAdjacentElement('afterbegin', tiktokImg);


    contactsList.insertAdjacentElement('beforeend', facebook);
    contactsList.insertAdjacentElement('beforeend', instagram);
    contactsList.insertAdjacentElement('beforeend', tiktok);

    contactsDiv.insertAdjacentElement('beforeend', contactsList);

    content.insertAdjacentElement('beforeend', locationsDiv);
    content.insertAdjacentElement('beforeend', contactsDiv);
}
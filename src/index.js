import menuElement from './menu.json';
import menuTemplate from './templates/menu.hbs';
import './theme.js';
import './styles.css';

let menu = document.querySelector('.js-menu');

function createMenuCards(array) {
  const markup = array.map(ingredients => menuTemplate(ingredients)).join('');
  menu.insertAdjacentHTML('beforeend', markup);
}

createMenuCards(menuElement);

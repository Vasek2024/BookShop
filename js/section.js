import { Card } from './card.js'

let search = 'php'; // начальное значение поиска
let cards = new Card('php');
    cards.start();
    
let navUl = document.querySelector('.main__nav-ul');
navUl.addEventListener('click', function(event) {
    if (event.target.classList.contains('main__nav-link')) {
        event.preventDefault();
        document.querySelectorAll('.main__nav-link').forEach(link => {
            link.classList.remove('activLink');
        });
        event.target.classList.add('activLink');
        let newSearch = event.target.textContent.trim();
        cards.updateSearch(newSearch);
    }
});

let loadBtn = document.querySelector('.article__btn-new');
loadBtn.addEventListener('click', function() {
        cards.updateNews();
});

let loadBasket = document.querySelector('.main__description-btn');
loadBasket.addEventListener('click', function() {
        cards.updateBasket();
});
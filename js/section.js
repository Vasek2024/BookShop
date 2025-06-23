import { Card } from './card.js'

let search = 'javascript'; // начальное значение поиска
let cards = new Card(search);
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


// ВЫДАЁТ ОШИБКУ типа NULL
// КАК БУД ТО ДАННОГО HTML ТЕГА НЕТ В DOM дереве
// да же без клика по кнопке
let loadBasket = document.querySelectorAll('.main__description-btn'),
    i = 0
    for (let loadBaskets of loadBasket){
        loadBaskets.addEventListener('click', function() {
            i += 1
            cards.updateBasket(i)
        });
    }
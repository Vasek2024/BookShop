import { Card } from './card.js'

let search = 'javascript'; // начальное значение поиска
let cards = new Card(search);
    cards.start();

// вывод книг при нажатии на катигорию товаров (ссылки с боку)
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

// Добавление ещё 6 книг
let loadBtn = document.querySelector('.article__btn-new');
loadBtn.addEventListener('click', function() {
        cards.updateNews();
});

// обновление карзины, изменение стилей кнопки
let i = 0
document.querySelector('.main__article').addEventListener('click', function(event) {
    if (event.target.classList.contains('main__description-btn')) {
        event.target.classList.toggle('activBasket')
        if(event.target.classList.contains('activBasket')){
            event.target.textContent = 'IN THE CART'
           i += 1; 
        }
        event.target.classList.toggle('btn')
        if(event.target.classList.contains('btn')){
            event.target.textContent = 'buy now'
            i -= 1;
         }
        cards.updateBasket(i);
    }
});
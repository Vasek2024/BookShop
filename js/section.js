import { Card } from './card.js'
// 
let search = 'php' // Что ищем
let navUl = document.querySelector('.main__nav-ul') // общий блок с ссылками
    navUl.addEventListener('click', function(event) { // определяем куда именно был совершён клик
        let link = document.querySelectorAll('.main__nav-link') // ищем все ссылки
        const arrayLink = Array.from(link) // перемодим из nodeList в массив
        arrayLink.forEach((numLinks) => { // проходим по нему циклом 
            numLinks.classList.remove('activLink') // и удаляем класс активности
        })
    let eventLink = event.target // берём ту ссылу по которой был клик
    
    eventLink.classList.add('activLink') // добавляем класс активности
    let velSearch = eventLink.textContent // берём контекст этой ссылки

    // window.search = velSearch
    // return window.vel
    // global = velSearch
    // console.log(window.vel)
  })
console.log(search)

const cards = new Card(search)
cards.start()
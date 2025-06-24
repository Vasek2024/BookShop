const slidesDots = document.getElementsByClassName('result__img'),
    wrappetDots = document.querySelector('.description__revers-pagination'),
    dots = document.getElementsByClassName('description__revers-btn')
    
let slideIndex = 1

showSlides(slideIndex)

function showSlides(index) {
    if (index > slidesDots.length) {// если index больне длинны массива слайдов, то
        slideIndex = 1
    }
    if (index < 1) { // если index меньше одного, то
        slideIndex = slidesDots.length// равно длинне массива
    }
    for (let i = 0; i < slidesDots.length; i++) {// проходим массивом по слайдам
        slidesDots[i].style.display = 'none'// задаём стиль (прячем все слайды)
    }
    for (let i = 0; i < dots.length; i++) {// проходим массивом по точкам
        dots[i].classList.remove('active')// удаляем класс активности у кнопак
    }

    slidesDots[slideIndex - 1].style.display = 'block'// задаём стиль слайду (показываем)
    dots[slideIndex - 1].classList.add('active')// задаём класс активности у кнопаки
}

function pluseSlaide(index) {// прибавить слайд
    showSlides(slideIndex += index)
}

function currentSlaide(index) {// индекс текущего слайда
    showSlides(slideIndex = index);
}

wrappetDots.addEventListener('click', function (event) {// событие клика по блоку с точками
    for (let i = 0; i < dots.length + 1; i++) {// проходим по нему массивом
        // если кликнули именно по точке и 
        if (event.target.classList.contains('description__revers-btn') && event.target == dots[i - 1]) {
            currentSlaide(i)// индекс текущего слайда
        }
    }
})

setInterval(printMessage, 5000)

  function printMessage() {
    for (let i = 0; i < slidesDots.length - 1; i++) {// проходим по нему массивом
            pluseSlaide(i)// индекс текущего слайда
    }
  } 
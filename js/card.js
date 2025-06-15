// import { Request } from './request.js';
export class Card{
    constructor(search){ // принимаем название книги
        this.apiKey = "AIzaSyCzhD-f6_4E5zbyaWjgn0RhaWv1qTVqfOY" 
        this.search = search
        this.max = 6
        // this.data = []
        this.mainArticle = document.querySelector('.main__article') // общиц блок под все карточки
    }

    updateSearch(newSearch) { // вывод книг при нажатии на катнгорию товаров (ссылки с боку)
        this.search = newSearch;
        this.start();
      }

      updateNews() { // Добавление ещё 6 книг
        this.max *= 2
        // this.search = newSearch;
        this.start();
      }

      updateBasket(){ // Обновление карзины

      }
      
    async start() {
                    try{
                        await fetch('https://www.googleapis.com/books/v1/volumes?q='+this.search+'&key='+this.apiKey+'&maxResults='+this.max+'')
                        .then((response) => {return response.json()})
                        .then((info) => {
                            for (let i = 0; i < info.items.length; i++) {
                                // this.mainArticle = document.querySelector('.main__article') // общий блок под все карточки
                                // this.mainArticle.remove(this.articleSection)
                                this.articleSection = document.createElement('section')
                                this.articleSection.className = 'main__article-section'
                                this.articleSection.innerHTML = `
                                        <div class="main__section-carta">
                                            <img class="main__carta-img" src="${info.items[i].volumeInfo.imageLinks.thumbnail}" alt="${info.items[i].volumeInfo.title}">
                                        </div>
                                        <div class="main__section-description">
                                            <h3 class="main__description-h3">${info.items[i].volumeInfo.authors}</h3>
                                            <h1 class="main__description-h1">${info.items[i].volumeInfo.title}</h1>
                                            <div class="main__description-ratings">
                                                <img class="main__ratings-img" src="" alt="">
                                                <span class="main__ratings-num">252</span>
                                                <span class="main__ratings-review">review</span>
                                            </div>
                                            <div class="main__description-title">
                                                <p>${info.items[i].volumeInfo.description.substring(0, 70) + '...'}</p>
                                            </div>
                                            <div class="main__description-price">
                                                <span class="main__price-currency">$</span>
                                                <span class="main__price-sum">${info.items[i].volumeInfo.pageCount}</span>
                                            </div>
                                            <button class="main__description-btn btn" type="button">buy now</button>
                                        </div>`
                                this.mainArticle.append(this.articleSection)
                            }
                        })
                    }
                    catch (err){
                       console.log('Запрос не прошёл!')
                    }
}
}
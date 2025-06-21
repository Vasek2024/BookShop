// import { Request } from './request.js';
export class Card{
    constructor(search){ // принимаем название книги
        this.apiKey = "AIzaSyCzhD-f6_4E5zbyaWjgn0RhaWv1qTVqfOY" 
        this.search = search
        this.max = 6
        this.maxlength = 70
        this.currency = '$ '
        // this.data = []
        this.mainArticle = document.querySelector('.main__article') // общиц блок под все карточки

        this.iconNumber = document.querySelector('.header__icon-number') // общиц блок под колличество товаров в карзине
        this.iconBasket = document.querySelector('.header__icon-basket') // класный кружок
        this.iconQuantity = document.querySelector('.header__icon-quantity') // колличество товаров в карзине
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
        this.iconQuantity.classList.remove('none')
        console.log(this.iconQuantity);
      }
      
    async start() {
                    try{
                        await fetch('https://www.googleapis.com/books/v1/volumes?q='+this.search+'&key='+this.apiKey+'&maxResults='+this.max+'')
                        .then((response) => {return response.json()})
                        .then((info) => {
                            for (let i = 0; i < info.items.length; i++) {
                              // создаём структуру карточек товаров
                              this.articleSection = document.createElement('section')
                              this.articleSection.className = 'main__article-section'

                              this.sectionCarta = document.createElement('div')
                              this.sectionCarta.className = 'main__section-carta'

                              this.cartaimg = document.createElement('img')
                              this.cartaimg.className = 'main__carta-img'
                              this.cartaimg.src = `${info.items[i].volumeInfo.imageLinks.thumbnail}`

                              this.sectionDescription = document.createElement('div')
                              this.sectionDescription.className = 'main__section-description'

                              this.descriptionH3 = document.createElement('h3')
                              this.descriptionH3.className = 'main__description-h3'
                              this.descriptionH3.textContent = `${info.items[i].volumeInfo.authors}`

                              this.descriptionH1 = document.createElement('h1')
                              this.descriptionH1.className = 'main__description-h1'
                              this.descriptionH1.textContent = `${info.items[i].volumeInfo.title}`
                              
                              this.descriptionRatings = document.createElement('div')
                              this.descriptionRatings.className = 'main__description-ratings'

                              this.ratingsImg = document.createElement('img')
                              this.ratingsImg.className = 'main__ratings-img'

                              this.ratingsNum = document.createElement('span')
                              this.ratingsNum.className = 'main__ratings-num'
                              this.ratingsNum.textContent = `${info.items[i].volumeInfo.pageCount} `

                              this.ratingsReview = document.createElement('span')
                              this.ratingsReview.className = 'main__ratings-review'
                              this.ratingsReview.textContent = 'review'

                              this.descriptionTitle = document.createElement('div')
                              this.descriptionTitle.className = 'main__description-title'

                              // this.descriptionP = document.createElement('p')
                              // this.descriptionP.innerText = `${info.items[i].volumeInfo.description.substring(0, 70) + '...'}`

                              this.descriptionPrice = document.createElement('div')
                              this.descriptionPrice.className = 'main__description-price'

                              this.priceCurrency = document.createElement('span')
                              this.priceCurrency.className = 'main__price-currency'
                              this.priceCurrency.textContent = this.currency

                              this.priceSum = document.createElement('span')
                              this.priceSum.className = 'main__price-sum'
                              this.priceSum.textContent = '4.99'

                              this.descriptionBtn = document.createElement('button')
                              this.descriptionBtn.className = 'main__description-btn btn'
                              this.descriptionBtn.textContent = 'buy now'


                              this.articleSection.append(this.sectionCarta, this.sectionDescription)
                              this.sectionCarta.append(this.cartaimg)
                              this.sectionDescription.append(this.descriptionH3, this.descriptionH1, this.descriptionRatings)
                              this.descriptionRatings.append(this.ratingsImg, this.ratingsNum, this.ratingsReview)
                              this.descriptionTitle.append(this.descriptionP)
                              this.sectionDescription.append(this.descriptionTitle, this.descriptionPrice)
                              this.descriptionPrice.append(this.priceCurrency, this.priceSum)
                              this.sectionDescription.append(this.descriptionBtn)
                              this.mainArticle.append(this.articleSection)
        


// Рабочая, но нельзя достать dom элемент
                                // this.articleSection = document.createElement('section')
                                // this.articleSection.className = 'main__article-section'
                                // this.articleSection.innerHTML = `
                                //         <div class="main__section-carta">
                                //             <img class="main__carta-img" src="${info.items[i].volumeInfo.imageLinks.thumbnail}" alt="${info.items[i].volumeInfo.title}">
                                //         </div>
                                //         <div class="main__section-description">
                                //             <h3 class="main__description-h3">${info.items[i].volumeInfo.authors}</h3>
                                //             <h1 class="main__description-h1">${info.items[i].volumeInfo.title}</h1>
                                //             <div class="main__description-ratings">
                                //                 <img class="main__ratings-img" src="" alt="">
                                //                 <span class="main__ratings-num">252</span>
                                //                 <span class="main__ratings-review">review</span>
                                //             </div>
                                //             <div class="main__description-title">
                                //                 <p>${info.items[i].volumeInfo.description.substring(0, 70) + '...'}</p>
                                //             </div>
                                //             <div class="main__description-price">
                                //                 <span class="main__price-currency">$</span>
                                //                 <span class="main__price-sum">${info.items[i].volumeInfo.pageCount}</span>
                                //             </div>
                                //             <button class="main__description-btn btn" type="button">buy now</button>
                                //         </div>`
                                // this.mainArticle.append(this.articleSection)

                            }
                        })
                    }
                    catch (err){
                       console.log('Запрос не прошёл!')
                    }
}
}
import { Request } from './request.js';
// export class Card{
//     constructor(search){
//         this.request = new Request(search)
//         this.data = this.request.request()
        
//         // создаём структуру карточек товаров
//         this.mainArticle = document.querySelector('.main__article')

//         this.articleSection = document.createElement('section')
//         this.articleSection.className = 'main__article-section'

//         this.sectionCarta = document.createElement('div')
//         this.sectionCarta.className = 'main__section-carta'

//         this.cartaimg = document.createElement('img')
//         this.cartaimg.className = 'main__carta-img'
//         this.cartaimg.src = "./images/jpg/cover(1).jpg" // поменять

//         this.sectionDescription = document.createElement('div')
//         this.sectionDescription.className = 'main__section-description'

//         this.descriptionH3 = document.createElement('h3')
//         this.descriptionH3.className = 'main__description-h3'
//         this.descriptionH3.textContent = 'Kevin Kwan'

//         this.descriptionH1 = document.createElement('h1')
//         this.descriptionH1.className = 'main__description-h1'
//         this.descriptionH1.textContent ='Crazy rich asians'
         
//         this.descriptionRatings = document.createElement('div')
//         this.descriptionRatings.className = 'main__description-ratings'

//         this.ratingsImg = document.createElement('img')
//         this.ratingsImg.className = 'main__ratings-img'

//         this.ratingsNum = document.createElement('span')
//         this.ratingsNum.className = 'main__ratings-num'
//         this.ratingsNum.textContent = '252'

//         this.ratingsReview = document.createElement('span')
//         this.ratingsReview.className = 'main__ratings-review'
//         this.ratingsReview.textContent = 'review'

//         this.descriptionTitle = document.createElement('div')
//         this.descriptionTitle.className = 'main__description-title'

//         this.descriptionP = document.createElement('p')
//         this.descriptionP.textContent = 'the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...'

//         this.descriptionPrice = document.createElement('div')
//         this.descriptionPrice.className = 'main__description-price'

//         this.priceCurrency = document.createElement('span')
//         this.priceCurrency.className = 'main__price-currency'
//         this.priceCurrency.textContent = '$'

//         this.priceSum = document.createElement('span')
//         this.priceSum.className = 'main__price-sum'
//         this.priceSum.textContent = '4.99'

//         this.descriptionBtn = document.createElement('button')
//         this.descriptionBtn.className = 'main__description-btn btn'
//         this.descriptionBtn.textContent = 'buy now'
//     }
//     start() {
//         for (let i = 0; i < 4; i++) {
//         // создаём карточки товаров
//         this.mainArticle.append(this.articleSection)

//         this.articleSection.append(this.sectionCarta)

//         this.sectionCarta.append(this.cartaimg)

//         this.articleSection.append(this.sectionDescription)

//         this.sectionDescription.append(this.descriptionH3)
//         this.sectionDescription.append(this.descriptionH1)
//         this.sectionDescription.append(this.descriptionRatings)

//         this.descriptionRatings.append(this.ratingsImg)
//         this.descriptionRatings.append(this.ratingsNum)
//         this.descriptionRatings.append(this.ratingsReview)

//         this.sectionDescription.append(this.descriptionTitle)

//         this.descriptionTitle.append(this.descriptionP)

//         this.sectionDescription.append(this.descriptionPrice)

//         this.descriptionPrice.append(this.priceCurrency)
//         this.descriptionPrice.append(this.priceSum)

//         this.sectionDescription.append(this.descriptionBtn)
//         }
//     }
// }

export class Card{
    constructor(search){
        // this.request = new Request(search)
        // this.data = this.request.request()

        this.apiKey = "AIzaSyCzhD-f6_4E5zbyaWjgn0RhaWv1qTVqfOY"
        this.search = search
        this.data = {}
        
        // создаём структуру карточек товаров
        // this.mainArticle = document.querySelector('.main__article')

        // this.articleSection = document.createElement('section')
        // this.articleSection.className = 'main__article-section'

        // this.sectionCarta = document.createElement('div')
        // this.sectionCarta.className = 'main__section-carta'

        // this.cartaimg = document.createElement('img')
        // this.cartaimg.className = 'main__carta-img'
        // this.cartaimg.src = "./images/jpg/cover(1).jpg" // поменять

        // this.sectionDescription = document.createElement('div')
        // this.sectionDescription.className = 'main__section-description'

        // this.descriptionH3 = document.createElement('h3')
        // this.descriptionH3.className = 'main__description-h3'
        // // this.descriptionH3.textContent = 'Kevin Kwan'

        // this.descriptionH1 = document.createElement('h1')
        // this.descriptionH1.className = 'main__description-h1'
        // this.descriptionH1.textContent ='Crazy rich asians'
         
        // this.descriptionRatings = document.createElement('div')
        // this.descriptionRatings.className = 'main__description-ratings'

        // this.ratingsImg = document.createElement('img')
        // this.ratingsImg.className = 'main__ratings-img'

        // this.ratingsNum = document.createElement('span')
        // this.ratingsNum.className = 'main__ratings-num'
        // this.ratingsNum.textContent = '252'

        // this.ratingsReview = document.createElement('span')
        // this.ratingsReview.className = 'main__ratings-review'
        // this.ratingsReview.textContent = 'review'

        // this.descriptionTitle = document.createElement('div')
        // this.descriptionTitle.className = 'main__description-title'

        // this.descriptionP = document.createElement('p')
        // this.descriptionP.textContent = 'the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...'

        // this.descriptionPrice = document.createElement('div')
        // this.descriptionPrice.className = 'main__description-price'

        // this.priceCurrency = document.createElement('span')
        // this.priceCurrency.className = 'main__price-currency'
        // this.priceCurrency.textContent = '$'

        // this.priceSum = document.createElement('span')
        // this.priceSum.className = 'main__price-sum'
        // this.priceSum.textContent = '4.99'

        // this.descriptionBtn = document.createElement('button')
        // this.descriptionBtn.className = 'main__description-btn btn'
        // this.descriptionBtn.textContent = 'buy now'
    }
    start() {

        fetch('https://www.googleapis.com/books/v1/volumes?q='+this.search+'&key='+this.apiKey+'&maxResults=6')
        .then((response) => {
            // console.log(response)
            return response.json()
        })
        .then((json) => {

            console.log(json.items[3].volumeInfo.title)

            return this.data = json.items
    })
    console.log(this.data)

    // console.log(this.mainArticle)
    for (let i = 0; i < 4; i++) {
        this.mainArticle = document.querySelector('.main__article')
        this.mainArticle.innerHTML = `
        <section class="main__article-section">
                
                <div class="main__section-carta">
                    <img class="main__carta-img" src="./images/jpg/cover(1).jpg" alt="">
                </div>
                <div class="main__section-description">
                    <h3 class="main__description-h3">Kevin Kwan</h3>
                    <h1 class="main__description-h1">Crazy rich asians</h1>
                    <div class="main__description-ratings">
                        <img class="main__ratings-img" src="" alt="">
                        <span class="main__ratings-num">252</span>
                        <span class="main__ratings-review">review</span>
                    </div>
                    <div class="main__description-title">
                        <p>the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...</p>
                    </div>
                    <div class="main__description-price">
                        <span class="main__price-currency">$</span>
                        <span class="main__price-sum">4.99</span>
                    </div>
                    <button class="main__description-btn btn" type="button">buy now</button>
                </div>
                
            </section>`
    // создаём карточки товаров
    // this.mainArticle.appendChild(this.articleSection)

    // this.articleSection.append(this.sectionCarta)

    // // this.cartaimg.src = "./images/jpg/cover(1).jpg"
    // this.sectionCarta.append(this.cartaimg)

    // this.articleSection.append(this.sectionDescription)

    // this.descriptionH3.textContent = json.items[i].volumeInfo.title
    // this.sectionDescription.append(this.descriptionH3)
    // this.sectionDescription.append(this.descriptionH1)
    // this.sectionDescription.append(this.descriptionRatings)

    // this.descriptionRatings.append(this.ratingsImg)
    // this.descriptionRatings.append(this.ratingsNum)
    // this.descriptionRatings.append(this.ratingsReview)

    // this.sectionDescription.append(this.descriptionTitle)

    // this.descriptionTitle.append(this.descriptionP)

    // this.sectionDescription.append(this.descriptionPrice)

    // this.descriptionPrice.append(this.priceCurrency)
    // this.descriptionPrice.append(this.priceSum)

    // this.sectionDescription.append(this.descriptionBtn)
    }

    }
}



// ====================================================================


// export class Request{
//     constructor(search){
//         this.apiKey = "AIzaSyCzhD-f6_4E5zbyaWjgn0RhaWv1qTVqfOY"
//         this.search = search
//         this.data = {}
//     }
//     request(){
//         // console.log(this.search)
//         fetch('https://www.googleapis.com/books/v1/volumes?q='+this.search+'&key='+this.apiKey+'&maxResults=6')
//         .then((response) => {
//             // console.log(response)
//             return response.json()
//         })
//         .then((json) => {
//             console.log(json.items[3].volumeInfo.title)
//             return this.data = json.items
//         })
// }
// }

export class Request{
    constructor(search){
        this.apiKey = "AIzaSyCzhD-f6_4E5zbyaWjgn0RhaWv1qTVqfOY"
        this.search = search
        this.data = {}
    }
    request(){
        // console.log(this.search)
        fetch('https://www.googleapis.com/books/v1/volumes?q='+this.search+'&key='+this.apiKey+'&maxResults=6')
        .then((response) => {
            // console.log(response)
            return response.json()
        })
        .then((json) => {
            console.log(json.items[3].volumeInfo.title)
            return this.data = json.items
        })
}
}














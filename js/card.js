// import { Request } from './request.js';
export class Card{
    constructor(search){ // принимаем название книги
        this.apiKey = "AIzaSyCzhD-f6_4E5zbyaWjgn0RhaWv1qTVqfOY" 
        this.search = search
        this.data = []
        this.mainArticle = document.querySelector('.main__article') // общиц блок под все карточки
    }
    async start() {
        // for (let i = 0; i < 2; i++) {
        //     // console.log(rrrrrrrrrrrrr)
        //     // this.mainArticle = document.querySelector('.main__article') // общиц блок под все карточки
        //     this.mainArticle.innerHTML = `
        //     <section class="main__article-section">
                    
        //             <div class="main__section-carta">
        //                 <img class="main__carta-img" src="./images/jpg/cover(1).jpg" alt="">
        //             </div>
        //             <div class="main__section-description">
        //                 <h3 class="main__description-h3">Kevin Kwan</h3>
        //                 <h1 class="main__description-h1">Crazy rich asians</h1>
        //                 <div class="main__description-ratings">
        //                     <img class="main__ratings-img" src="" alt="">
        //                     <span class="main__ratings-num">252</span>
        //                     <span class="main__ratings-review">review</span>
        //                 </div>
        //                 <div class="main__description-title">
        //                     <p>the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...</p>
        //                 </div>
        //                 <div class="main__description-price">
        //                     <span class="main__price-currency">$</span>
        //                     <span class="main__price-sum">4.99</span>
        //                 </div>
        //                 <button class="main__description-btn btn" type="button">buy now</button>
        //             </div>
                    
        //         </section>`
        // }
                    try{
                        await fetch('https://www.googleapis.com/books/v1/volumes?q='+this.search+'&key='+this.apiKey+'&maxResults=6')
                        .then((response) => {return response.json()})
                        .then((info) => {
                            console.log(info.items[3].volumeInfo)
                            for (let i = 0; i < info.items.length; i++) {
                                // this.mainArticle = document.querySelector('.main__article') // общиц блок под все карточки
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
                        
                        // .then((response) => response.json())
                        // .then((json) => this.data = json.items)
                        // console.log(this.data)
                        // return this.data

                        // .then((info) => {return info.items})
                        
            
                        // .then((response) => response.json())
                        // .then((json) => this.data = json.items)
                        // return this.data
                        // const data = await response.json();
                        // this.data = data
                        // console.log(this.data)
                        // return this.data
                    }
                    catch (err){
                       console.log('Запрос не прошёл!')
                    }














// console.log(this.datas)
    

    // }
}












// export class Card{
//     constructor(search){
//         this.request = new Request(search) // вызываем класс Request (отправляя туда название книги)
//         this.datas = this.request.request() // сохраняем то что вернул запрос в классе Request
//     }
//     start() {
// console.log(this.datas)
//     for (let i = 0; i < 4; i++) {
//         this.mainArticle = document.querySelector('.main__article') // общиц блок под все карточки
//         this.mainArticle.innerHTML = `
//         <section class="main__article-section">
                
//                 <div class="main__section-carta">
//                     <img class="main__carta-img" src="./images/jpg/cover(1).jpg" alt="">
//                 </div>
//                 <div class="main__section-description">
//                     <h3 class="main__description-h3">Kevin Kwan</h3>
//                     <h1 class="main__description-h1">Crazy rich asians</h1>
//                     <div class="main__description-ratings">
//                         <img class="main__ratings-img" src="" alt="">
//                         <span class="main__ratings-num">252</span>
//                         <span class="main__ratings-review">review</span>
//                     </div>
//                     <div class="main__description-title">
//                         <p>the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...</p>
//                     </div>
//                     <div class="main__description-price">
//                         <span class="main__price-currency">$</span>
//                         <span class="main__price-sum">4.99</span>
//                     </div>
//                     <button class="main__description-btn btn" type="button">buy now</button>
//                 </div>
                
//             </section>`
//     }

//     }
}
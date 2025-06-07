import { Request } from './request.js';
export class Card{
    constructor(search){
        this.request = new Request(search) // вызываем класс Request (отправляя туда название книги)
        this.data = this.request.request() // сохраняем то что вернул запрос в классе Request
    }
    start() {
        // КАК В ПРОМИСЕ ДОБРАТЬСЯ ДО ЗНАЧЕНИЙ (типа заголовлк, картинка, описание),
        // чтобы вставить их в разметку?
        // В ЦИКЛЕ FOR ВМЕСТО i < 4 ВСТАВИТЬ ДЛИННУ ПОЛУЧЕННОГО МАССИВА ИЗ КЛАССА Request !!!
    console.log(this.data)

    for (let i = 0; i < 4; i++) {
        this.mainArticle = document.querySelector('.main__article') // общиц блок под все карточки
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
    }

    }
}
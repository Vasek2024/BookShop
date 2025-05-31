import { Request } from './request.js'
export class Card{
    constructor(){
        this.request = new Request()
        this.request.request()
    }
    start(){
        for(let i = 0; i<2; i++){
            console.log(this.request);
            // В ЭТОМ ЦИКЛЕ ХОЧУ ВЫВЕСТИ СЕКЩИИ (6 штук) С ТОВАРАМИ
            // ВСТАВИВ ТО ЧТО ВЕРНУЛ class Request (из массива data.items)
            // КАК ДО ЭТИХ ЗНАЧЕНИЙ ДОБРАТЬСЯ ?
        }
    }
}
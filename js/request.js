export class Request{
    constructor(search){ // принимаем название книги
        this.apiKey = "AIzaSyCzhD-f6_4E5zbyaWjgn0RhaWv1qTVqfOY" 
        this.search = search
    }
    async request(){
        try{
            const response = await fetch('https://www.googleapis.com/books/v1/volumes?q='+this.search+'&key='+this.apiKey+'&maxResults=6')
            let data = await response.json();
            return data
        }
        catch (err){
            console.log('Запрос не прошёл!')
        }
}
}
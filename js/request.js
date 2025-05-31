export class Request{
    constructor(){
this.apiKey = "AIzaSyCzhD-f6_4E5zbyaWjgn0RhaWv1qTVqfOY"
this.search = "JavaScript"
this.bookData = []
    }
    request(){
        fetch('https://www.googleapis.com/books/v1/volumes?q='+this.search+'&key='+this.apiKey+'&maxResults=6')
        .then(response => response.json())
        .then(data => {
            this.bookData = data.items
            // return this.bookData
            // console.log(this.bookData)
            // console.log(accessInfo.id);
        })
}
}
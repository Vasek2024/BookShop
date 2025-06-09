export class Request{
    constructor(search){ // принимаем название книги
        this.apiKey = "AIzaSyCzhD-f6_4E5zbyaWjgn0RhaWv1qTVqfOY" 
        this.search = search
        this.data = []
  
    }
//     async request(){
//         // try{
//             await fetch('https://www.googleapis.com/books/v1/volumes?q='+this.search+'&key='+this.apiKey+'&maxResults=6')
//             .then((data) => {
//                 if(data.status === 200){
//                     this.data = data.json()
//                     return this.data
//                 } else {
//                     console.error('Беда с запросом!')
//                 }
//             })
//             // .then((info) => {return info.items})

//             // .then((response) => response.json())
//             // .then((json) => this.data = json.items)
//             // return this.data
//             // const data = await response.json();
//             // this.data = data
//             // console.log(this.data)
//             // return this.data

//         // }
//         // catch (err){
//         //     console.log('Запрос не прошёл!')
//         // }
// }

    async request(){
        try{
            const response = await fetch('https://www.googleapis.com/books/v1/volumes?q='+this.search+'&key='+this.apiKey+'&maxResults=6')
            this.data = await response.json();
            // this.data = data
            // console.log(this.data)
            return this.data

        }
        catch (err){
            console.log('Запрос не прошёл!')
        }
}
}
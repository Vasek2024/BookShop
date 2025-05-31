// Почему если указать так import { Card } from '.js/card.js'
// То выдаёт ошибку (ведь card.js лежит всё таки в папке js)? 
import { Card } from './card.js'
const cards = new Card()
cards.start()
const {Engine, Hero, Action, Rule} = require('../../world')
const {cards, randomCard} = require('./rules/card-rule')
const {getCard} = require('./actions/get-card')
const {needMoreCard} = require('./actions/need-more-card')
const {winOrLose} = require('./actions/win-or-lose')

heroParams = {points: 0, cards: []}

let hero = new Hero("Мой герой", heroParams)
let enemy = new Hero("Враг", heroParams)
const randomCardRule = new Rule('Получает случайную карту', {rule: randomCard})

const getCardAction = new Action("Герой получает случайную карту", randomCardRule, {use: getCard}, ["cards"])
const needMoreCardAction = new Action("Получить новую карту?", randomCardRule, {use: needMoreCard}, ["cards", "points"])
const winOrLoseAction = new Action("Ты уже выиграл?", randomCardRule, {use: winOrLose}, ['points', 'cards'])

let engine = new Engine("21 Очко", [hero, enemy], [getCardAction], [randomCardRule])
engine.welcome()

getCardAction.use({hero})

while (!winOrLoseAction.use({hero}) && needMoreCardAction.use({hero})) {
console.log(hero)
}
console.log(hero)
console.log("End Game")

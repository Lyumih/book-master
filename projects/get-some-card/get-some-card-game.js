const {Engine, Hero, Action, Rule} = require('../../world')
const {cards, randomCard} = require('./rules/card-rule')
const {getCard} = require('./actions/get-card')

const hero = new Hero("Герой", {cards:[]})

const randomCardRule = new Rule('Получает случайную карту', {rule: randomCard})
const getCardAction = new Action("Герой получает случайную карту", randomCardRule, {use: getCard}, ["cards"])

const engine = new Engine("Вытяни карту", [hero], [getCardAction], [randomCard])
engine.welcome()
console.log(hero)

getCardAction.use({hero})
getCardAction.use({hero})
getCardAction.use({hero})
console.log(hero.cards)

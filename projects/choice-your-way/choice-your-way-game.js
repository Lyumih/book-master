const {Engine, Hero, Action, Rule} = require('../../world')
const {ways} = require('./rules/direction-rule')
const {getCard} = require('./actions/choice-way')

const hero = new Hero("Герой", {
        history: []
    }
)

const randomCardRule = new Rule('Получает список случайных направлений', {rule: randomCard})
const getCardAction = new Action("Герой получает случайную карту", randomCardRule, {use: getCard}, ["cards"])

const engine = new Engine("Вытяни карту", [hero], [getCardAction], [randomCard])
engine.welcome()

console.log(hero)

getCardAction.use({hero})
getCardAction.use({hero})
getCardAction.use({hero})
console.log(hero.cards)

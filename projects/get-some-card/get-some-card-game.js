const {Engine, Hero, Action, Rule} = require('../../world')
const {cards, randomCard} = require('./rules/card-rule')

const hero = new Hero("Герой",["cards"])
// const randomCardRule = new Rule('Получает случайную карту', {rule: })
const engine = new Engine("Вытяни карту", [hero],)
console.log(`Мир: ${engine.name}`)


console.log(cards, randomCard)

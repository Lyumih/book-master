const {Engine, Hero, Action, Rule} = require('../../world')

const {randomItem} = require('./rules/item-rule')
const {play} = require('./actions/play')

heroParams = ['result', 'win']

let hero = new Hero("Мой герой", heroParams)
let enemy = new Hero("Враг", heroParams)

let randomItemRule = new Rule("", {rule: randomItem})
console.log(randomItemRule)
let playAction = new Action("Сыграть в камень, ножницы, бумагу", randomItemRule.rules, {use: play})
let engine = new Engine("Камень Ножницы Бумага", [hero, enemy], [playAction])

console.log(`Мир: ${engine.name}`)
playAction.use({hero, enemy})
playAction.use({hero, enemy})
playAction.use({hero, enemy})

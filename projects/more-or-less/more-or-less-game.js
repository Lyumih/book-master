const {Engine, Hero, Action, Rule} = require('../../world')

const {randomInt} = require('./rules/random-rule')
const {inputNumber} = require('./actions/input-number')

let hero = new Hero("Герой")
let enemy = new Hero("Враг")

let randomIntRule = new Rule("Случайное число от 0 до 100", {rule: randomInt})
let inputNumberAction = new Action("Ввести число и попробовать угадать", randomIntRule, {use: inputNumber})

let engine = new Engine("Больше или Меньше", [hero, enemy], [inputNumberAction], [randomIntRule])

console.log(`Мир: ${engine.name}`)
inputNumberAction.use({hero, enemy})


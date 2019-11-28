const {Hero} = require('./../hero')
const {Action} = require('./../action')
const {Engine} = require('./../engine')
const {randomItem} = require('./rules/item-action')
const {play} = require('./actions/play')

heroParams = ['result', 'win']

let hero = new Hero("Мой герой", heroParams)
let enemy = new Hero("Враг", heroParams)

let playAction = new Action("Выбросить действие ", {action: randomItem}, play)
let engine = new Engine("Камень Ножницы Бумага", [hero, enemy], [playAction])

console.log(`Мир: ${engine.name}`)
playAction.use({hero, enemy})
playAction.use({hero, enemy})
playAction.use({hero, enemy})

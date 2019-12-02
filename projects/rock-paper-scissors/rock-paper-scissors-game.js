const {Engine, Hero, Action, Rule} = require('../../world')

const {randomItem} = require('./rules/item-rule')
const {play} = require('./actions/play')

heroParams = {result: undefined, win: undefined}

let hero = new Hero("Мой герой", heroParams)
let enemy = new Hero("Враг", heroParams)

let randomItemRule = new Rule("Задаёт рандомный предмет", {rule: randomItem})
let playAction = new Action("Сыграть в камень, ножницы, бумагу", randomItemRule, {use: play}, ['result', 'win'])
let engine = new Engine("Камень Ножницы Бумага", [hero, enemy], [playAction])

engine.welcome()
playAction.use({hero, enemy})
playAction.use({hero, enemy})
playAction.use({hero, enemy})

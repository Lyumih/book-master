const {Engine, Hero, Action, Rule} = require('./world')

let props = {
    cards: [],
    healths: 10
}

let hero = new Hero("Герой", props)

console.log(hero)

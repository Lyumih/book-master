const {Hero} = require('./hero')
const {Action} = require('./action')
const {Engine} = require('./engine')

console.log('Loaded')

function helloWorld(text) {
    console.log("Hello World. " + text)
}

let hero = new Hero("Мой герой")
let action = new Action("Моё действие", [], function (name) {
console.log('my name')
})
let engine = new Engine("Мир", [hero], [action])


// console.log(engine)


action.use()
engine.actions[0].use("Привет. Мир")

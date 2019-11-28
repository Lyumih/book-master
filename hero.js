class Hero {
    constructor(name, props = []) {
        this.name = name
        props.forEach(prop => this[prop] = undefined)
    }
}

export default Hero

// создание новых любых свойств персонажа
let props = ["health", "damage", "armor", "skills"]
let me = new Hero("I", props)
console.log(me)

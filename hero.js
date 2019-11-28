class Hero {
    constructor(name="No name", props = []) {
        this.name = name
        props.forEach(prop => this[prop] = undefined)
    }
}

exports.Hero = Hero

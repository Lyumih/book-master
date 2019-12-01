class Hero {
    constructor(name="No name", props = []) {
        this.name = name
        Object.assign(this,props)
        // props.forEach(prop => this[prop.name] = prop)
    }
}

exports.Hero = Hero

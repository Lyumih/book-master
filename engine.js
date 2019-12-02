class Engine {
    constructor(name, players = [], actions = [], rules = []) {
        this.name = name
        this.players = players
        this.actions = actions
        this.rules = rules
    }

    welcome() {
        console.log(`Добро пожаловать в мир: ${this.name}`)
    }
}

exports.Engine = Engine

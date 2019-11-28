class Engine {
    constructor(name, players = [], actions = [], rules = []) {
        this.name = name
        this.players = players
        this.actions = actions
        this.rules = rules
    }
}

exports.Engine = Engine

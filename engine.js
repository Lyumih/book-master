class Engine {
    constructor(name, players = [], actions = [], rules = []) {
        this.name = name
        this.players = players
        this.actions = actions
        this.rules = rules
    }

    welcome(text = "Мир: ") {
        console.log(`${text}${this.name}`)
    }

    //todo: возможно, движок должен уметь ещё обрабатывать входящий поток?
}

exports.Engine = Engine

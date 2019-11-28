class Action {
    constructor(name, {rules}, {
        use =  () => {}
    }) {
        this.name = name
        this.rules = rules
        this._use = use
    }

    use(members = {}) {
        console.log(this.rules)
        this._use(this.rules, members)
    }
}

exports.Action = Action

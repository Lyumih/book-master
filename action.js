class Action {
    constructor(name, rules = {}, use = function () {
    }) {
        this.name = name
        this.rules = rules
        this._use = use
    }

    use(members = {}) {
        this._use(this.rules, members)
    }
}

exports.Action = Action

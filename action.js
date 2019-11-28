class Action {
    constructor(name, members = [], use = function () {}) {
        this.name = name
        this.members = members
        this.use = use
    }
}

exports.Action = Action

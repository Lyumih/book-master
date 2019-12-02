class Action {
    constructor(name, {rules}, {
        use = () => {
        }
    }, validateParams = []) {
        this.name = name
        this.rules = rules
        this._use = use
        this.params = validateParams
    }

    use(members = {}) {
        if (this.validate(members).length > 0) throw new Error(`Внимание! Для работы действия "${this.name}" 
участникам необходимы ПАРАМЕТРЫ: <${this.validate(members).join(">, <")}. `)
        return this._use(this.rules, members)
    }

    validate(members) {
        for (let prop in members) {
            let errors = this.params.filter(param => !Object.keys(members[prop]).includes(param))
            if (errors.length > 0) return errors
        }
        return []
    }

}

exports.Action = Action

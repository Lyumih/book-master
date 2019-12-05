let app = new Vue({
  el: "#app",
  data: {
    world: "Камень, Ножницы, Бумага",
    params: [
      'result: String',
      'win: Boolean'
    ],
    heroes: ['Герой', 'Враг'],
    rules: ['ItemRule.js - вытянуть [камень, ножницы, бумага]'],
    actions: ['Play - Бросить камень и определить победителя'],
    logic: ['Бросить камень, ножницы, бумагу', 'Определить победителя'],
    itemText: ""
  },
  computed: {
    exportToJson() {
      let { world, params, heroes, rules, actions, logic} = this
      return {
        world, params, heroes, rules, actions, logic
      }
    }
  },
})
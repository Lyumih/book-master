const assert = require('assert')
const {randomItem} = require('./item-rule')

describe('rock-paper-scissors', () => {
    describe('item-rule', () => {


        it('Должны быть выданы значения Камень, Ножницы, Или Бумага', () => {
            for (let i = 0; i < 30; i++) {
                assert.equal(['Камень', "Ножницы", "Бумага"].includes(randomItem()), true)
            }
        })
    })
})

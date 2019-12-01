const assert = require('assert')
const {cards} = require('./card-rule')


describe("get-some-card", () => {

    describe("card-rule", () => {

        xit('Вытянуты правильные карты', () => {
            for (let i = 0; i < 30; i++) {
                let number = randomInt()
                assert.equal(number >= 0, true)
            }
        })
    })
})

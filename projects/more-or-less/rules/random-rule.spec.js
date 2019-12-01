const assert = require('assert')
const {randomInt} = require('./random-rule')


describe("more-or-less", () => {

    describe("random-rule", () => {

        it('Случайное число должно быть больше 0', () => {
            for (let i = 0; i < 30; i++) {
                let number = randomInt()
                assert.equal(number >= 0, true)
            }
        })
        it('Случайное число должно быть меньше 100', () => {
            for (let i = 0; i < 30; i++) {
                let number = randomInt()
                assert.equal(number <= 100, true)
            }
        })
    })
})

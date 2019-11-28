const readlineSync = require('readline-sync');

function inputNumber({rule}, {hero, enemy}) {
    hero.number = readlineSync.question('Try to guess a number from 1 to 100\n')
    enemy.number = rule()
    if (hero.number === enemy.number) {
        console.log(`Ты угадал число ${hero.number}`)
    } else if (hero.number > enemy.number) {
        console.log(`Нужно меньше!  ${hero.number} > ${enemy.number}`)
    } else {
        console.log(`Нужно больше ${hero.number} < ${enemy.number}`)
    }
}

exports.inputNumber = inputNumber

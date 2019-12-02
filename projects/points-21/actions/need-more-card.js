const readlineSync = require('readline-sync');

function needMoreCard({rule}, {hero}) {
    let answer = readlineSync.question("Do you wont more card? yes/no\n")
    if (answer === 'yes') {
        hero.cards.push(rule())
        return true
    }
    return false
}

module.exports = {
    needMoreCard
}

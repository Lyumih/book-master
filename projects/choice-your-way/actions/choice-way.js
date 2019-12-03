const readlineSync = require('readline-sync');

function getWay({rule}, {hero}) {
    const youWay = readlineSync.question("Выберите ваш путь")
    if (!hero.cards) hero.cards = []
    hero.cards.push(rule())
}

module.exports = {
    getCard
}

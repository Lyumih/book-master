function winOrLose({rule, maxPoints=21}, {hero}) {
    hero.points = hero.cards.reduce((sum, card) => sum + card.value, 0)
    if (hero.points > maxPoints) {
        console.log("Ты проиграл")
        return true
    } else if (hero.points === maxPoints) {
        console.log("Чистая победа")
        return true
    } else {
        console.log("Продолжаем")
        return false
    }
}
module.exports = {
    winOrLose
}

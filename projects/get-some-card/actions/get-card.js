function getCard({rule}, {hero}) {
    if (!hero.cards) hero.cards = []
    hero.cards.push(rule())
}

module.exports = {
    getCard
}

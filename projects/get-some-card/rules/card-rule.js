const cards = {
    suits: ["Бубны", "Червы", "Пики", "Трефы"],
    values: ["6", "7", "8", "9", "10", "Валет", "Дама", "Король", "Туз"]
}

const randomCard = () => {
    return {
        value: cards.values[Math.floor(Math.random() * cards.values.length)],
        suit: cards.suits[Math.floor(Math.random() * cards.suits.length)]
    }
}

module.exports = {
    cards,
    randomCard
}

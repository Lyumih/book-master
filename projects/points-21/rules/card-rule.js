const cards = {
    suits: ["Бубны", "Червы", "Пики", "Трефы"],
    name: ["6", "7", "8", "9", "10", "Валет", "Дама", "Король", "Туз"],
    values: [6, 7, 8, 9, 10, 2, 3, 4, 11]
}

const randomCard = () => {
    let idCard = Math.floor(Math.random() * cards.values.length)
    return {
        name: cards.name[idCard],
        value: cards.values[idCard],
        suit: cards.suits[Math.floor(Math.random() * cards.suits.length)]
    }
}

module.exports = {
    cards,
    randomCard
}

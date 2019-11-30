const cards = {
    suits: ["Бубны", "Червы", "Пики", "Трефы"],
    values: ["6", "7", "8", "9", "10", "Валет", "Дама", "Кароль", "Туз"]
}

const randomCard = () => {
    return {value: cards.values[0], suit: cards.suits[0]}
}

module.exports = {
    cards,
    randomCard
}

let randomItem = () => {
    const items = ["Камень", "Ножницы", "Бумага"]
    return items[Math.floor(Math.random() * items.length)]
}

exports.randomItem = randomItem

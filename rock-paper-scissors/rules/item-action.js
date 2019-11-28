let randomItem = () => {
    return Math.random() > 0.6 ? (Math.random() > 0.5 ? "Камень" : "Ножницы") : 'Бумага'
}

exports.randomItem = randomItem

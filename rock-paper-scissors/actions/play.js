function play({action}, {hero, enemy}) {
    hero.result = action()
    enemy.result = action()
    if (hero.result === enemy.result) {
        hero.win = true
        enemy.win = true
        console.log(":X Ничья ", hero.result, enemy.result)
    } else if ((hero.result === "Бумага" && enemy.result === "Камень")
        || (hero.result === "Камень" && enemy.result === "Ножницы")
        || (hero.result === "Ножницы" && enemy.result === "Бумага")) {
        hero.win = true
        enemy.win = false
        console.log(":) Вы победили ", hero.result, enemy.result)
    } else {
        hero.win = false
        enemy.win = true
        console.log(":( Вы проиграли ", hero.result, enemy.result)
    }
}

exports.play = play

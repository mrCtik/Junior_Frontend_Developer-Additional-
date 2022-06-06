

const hero = {
    name: 'Batman',
    health: 100,
    heatEnemy(heat) {
        return heat.health -= 10;
    }
}

const enemy = {
    name: 'Joker',
    health: 100,
    heatHero(heat) {
        return heat.health -= 10;
    }
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(heroPlayer, enemyPlayer) {
    const move = getRandomNumberInRange(0, 1) ? heroPlayer.heatEnemy(enemyPlayer) : enemyPlayer.heatHero(heroPlayer);
    if (heroPlayer.health === 0) { 
        alert(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`);
    } else if (enemy.health === 0) {
        alert(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`);
    }
    return move;
}

while (startGame(hero, enemy) !== 0) {}
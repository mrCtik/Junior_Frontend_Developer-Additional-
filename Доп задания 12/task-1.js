const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject) {
        let chances = 0;
        Object.entries(this).forEach(([key, dictionary]) => {
        if (Number.isInteger(this[key])) {
            (this[key] > defenderObject[key]) ?  chances += 1 : chances = chances;
        }});
        return [chances, (Object.keys(defenderObject).length)]
    },
    improveArmy() {
        Object.entries(this).forEach(([key, dictionary]) => {
            if (Number.isInteger(this[key])) {
                this[key] += 5;
            }
        });
    },

    attack(defender) {
        const maximumChances = 1;
        const ourArmyChances = this.checkChancesToWin(defender)
        .reduce((chanceForAttack, maximumChances) => 
        chanceForAttack / maximumChances);

        if (ourArmyChances < 0.7) {
            this.improveArmy();
            alert(`Наши шансы равны ${(ourArmyChances/maximumChances)*100} %. Необходимо укрепление!`);
        } else {
            alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
        }
    }
};

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10
};
  
attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление! 
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!
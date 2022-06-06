
function getKiller(suspectInfo, deadPeople) {
    const keys = Object.keys(suspectInfo);
    let sovpad = 0;
    for (let y = 0; y < keys.length; y++) {
        const key = keys[y];
        for (let i = 0; i < deadPeople.length; i += 1) {
            for (let j = 0; j < suspectInfo[key].length; j += 1) {
                if (deadPeople[i] === suspectInfo[key][j])
                {
                    sovpad += 1;
                    if (sovpad === deadPeople.length)
                    {
                        console.log("Убийца", key);
                    }
                }

            }
        }
    }
}

// const getKiller = (suspects, victims) => 
// console.log(Object.keys(suspects).reduce((killer, i) => 
// (new Set([...suspects[i], ...victims]).size === suspects[i].length) 
// ? i : killer, 'Нет убийцы!'));

getKiller(
    {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
); // Убийца James

getKiller(
    {
        'Brad': [],
        'Megan': ['Ben', 'Kevin'],
        'Finn': [],
    },
    ['Ben']
); // Убийца Megan
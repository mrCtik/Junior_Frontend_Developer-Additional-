const usersArray = [
    { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
    { id: '76rdca3eeb7f6fgeed471100', name: 'Alexey', age: 15 },
    { id: '12rdca3eeb7f6fgeed4711012', name: 'Egor', age: 13 },
    { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
    { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 }
];

const usersObject = {
    '34rdca3eeb7f6fgeed471198': {
    id: '34rdca3eeb7f6fgeed471198',
    name: 'Andrew',
    age: 25
    },
    '76rdca3eeb7f6fgeed471100': {
    id: '76rdca3eeb7f6fgeed471100',
    name: 'Alexey',
    age: 15
    },
    '12rdca3eeb7f6fgeed4711012': {
    id: '12rdca3eeb7f6fgeed4711012',
    name: 'Egor',
    age: 13
    },
    '32rdca3eeb7f6fgeed471101': {
    id: '32rdca3eeb7f6fgeed471101',
    name: 'Kate',
    age: 31
    },
    '98rdca3eeb7f6fgeed471102': {
    id: '98rdca3eeb7f6fgeed471102',
    name: 'Elena',
    age: 18
    }
};

function getAdultUsers(users) {
    const keys = Object.keys(users);

    // console.log(keys);

    for (let i = 0; i < keys.length; i += 1) {
        if (users[keys[i]].age < 18) {
                    // console.log(users[keys[i]])
                    // newArray = users[keys[i]];
                    delete users[keys[i]];
                }
    }
    return users;
    // const asArray = Object.entries(...users);

    // const newObj = {};
    // for (const [key, value] of Object.entries(...users)) {
    //     if (typeof value > 18) {
    //         newObj[key] = value;
    //     }
    // }
    // console.log(newObj);

    // const filtered = asArray.filter(([key, value]) => key > 18);
    // const filtered2 = asArray.filter([key, value]);

    // console.log(filtered);
    // console.log('filtered', filtered2);

    // console.log('Object.keys', keys);

    // let newArray = [];
    // console.log(Object.fromEntries(Object.entries(users).filter(({ age }) => age >= 18)));
    // newArray = users.filter(({ age }) => age >= 18 ).map(({name}) => name);
    // console.log(newArray);
    // const newArray1 = [];
    // const newArray = (Object.entries(users)).forEach(([key, value]) => (value.age >= 18) 
    // ? newArray1.push(value) : newArray1);
    //return Object.fromEntries(newArray1);
    // console.log((newArray1));
    // console.log(Object.keys(newArray));

    // for (const key in users) {
    //     if (users[key].age >= 18) {
    //         newArray = users[key];
    //         console.log(newArray);
    //     }
    // }

    // console.log('Object.keys', keys.length);
    // for (let i = 0; i < keys.length; i += 1) {
    //     if (users[keys[i]].age >= 18) {
    //         newArray = users[keys[i]];
    //         Object.assign(newArray);
    //     }
    // }
    // console.log(newArray);

    // for (let i = 0; i < keys.length; i += 1) {
    //работает с массивом
    // const usersOnlineNames = newArray
    // .filter(({ age }) => age >= 18);
    // console.log(usersOnlineNames);
    // return usersOnlineNames;
    //------------------------------------
    // }

    //const newArray = Array.from(usersOnlineNames);
    // .map(({name}) => name);
    // const scoreArr = Object.entries(usersOnlineNames);
    // const newScore = Object.fromEntries(scoreArr);

    // for (let i = 0; i < users.length; i += 1) {
    //     console.log(Object.keys(users[i]));
    // }
}
// console.log('typeof usersArray', typeof(usersArray));
// console.log('typeof usersObject', typeof(usersObject));

// console.log('usersArray', (usersArray));
// console.log('usersObject', (usersObject));
console.log(getAdultUsers(usersObject));

console.log(getAdultUsers(usersArray));

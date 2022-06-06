
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getWinner(applicants, winnerObject) {
    const keys = Object.keys(applicants);
    //const scoreArr = Object.entries(applicants);
    // const usersOnlineNames = scoreArr.filter(function([key, value]) {
    //                  return key === '201'; });
    //console.log(...scoreArr);
    // console.log('usersOnlineNames', usersOnlineNames);
    // const newScore = Object.fromEntries(usersOnlineNames);
    // console.log('newScore', newScore);
  
    const random = getRandomNumberInRange(0, 3);
    const randomize = applicants[keys[random]];
    // console.log(randomize.name);
    // //const randomizeMap = randomize.map(({name}) => name);
    // console.log(randomize);
    return (Object.assign(winnerObject, randomize))
  
}

const todaysWinner = {
    prize: '10 000$',
}

const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
}

    const resultWinner = getWinner(winnerApplicants, todaysWinner);
    console.log('resultWinner', resultWinner);
    // { prize: '10 000$', name: 'Максим', age: 25 }
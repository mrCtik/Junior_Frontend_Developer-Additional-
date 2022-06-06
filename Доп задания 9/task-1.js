const goals = [8, 1, 1, 3, 2, -1, 5];


//1.
alert(`Самый результативный матч был под номером ${goals.indexOf(Math.max.apply(null, goals)) + 1}. 
В нем было забито ${Math.max.apply(null, goals)} гол(ов).`);

//2.
const sortedGoals = goals.map((goal) => goal).sort();

for (let i = 0; i <= sortedGoals.length; i += 1) {
    if (sortedGoals[i] >= 0) {
        if (sortedGoals[i] === sortedGoals[i + 1]) {
            alert(`Самые нерезультативные матчи были под номерами ${i + 1} и ${i + 2}. В каждом из них было забито по ${sortedGoals[i]} мячу(а).`);
        }
    }
}

//3.
let numberOfGoals = 0;

goals.forEach(sumOfGoals => {
    if (Math.sign(sumOfGoals > 0)) {
        numberOfGoals += sumOfGoals;
    }
})

alert(`Общее количество голов за сезон равно ${numberOfGoals}`);

//4.
const even = (goal) => (Math.sign(goal) > 0);
if (goals.every(even)) {
    alert('Были автоматические поражения: нет');
} else {
    alert('Были автоматические поражения: да');
}


//5.
const numberOfGoals2 = goals.reduce(
    (previousValue, currentValue) => Math.abs(previousValue) + Math.abs(currentValue), 0 );
alert(`Среднее количество голов за матч равно ${numberOfGoals2 / goals.length}`);


//6.
alert(goals.map((goal) => goal).sort());

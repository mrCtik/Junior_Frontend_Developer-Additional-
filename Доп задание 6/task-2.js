let clientName = '';
let clientSpentForAllTime = 0; //$
let clientSpentToday = 0;
let discount = 0; //%

let isOk = false;

clientName = prompt('Введите имя клиента');

if ((clientName) === null || clientName === '') 
clientName = 'Клиент не назвался';
else clientName = clientName.trim();

clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?'));
clientSpentForAllTime = Number(prompt('Сколько клиент потратил за все время?'));

if (isNaN(clientSpentToday) || isNaN(clientSpentForAllTime))
alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.')
else isOk = true;

if (isOk) {

if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
} else if (clientSpentForAllTime >= 500) {
    discount = 30;
}

alert(`Вам предоставляется скидка в ${discount}%!`)

clientSpentForAllTime += clientSpentToday - clientSpentToday*discount/100;
clientSpentToday = clientSpentToday - clientSpentToday*discount/100;

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. \nЗа все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
}
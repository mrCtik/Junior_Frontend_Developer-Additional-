const clientName = 'Игорь';
let clientSpentForAllTime = 110; //$

let discount = 0; //%
let clientSpentToday = 25;

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

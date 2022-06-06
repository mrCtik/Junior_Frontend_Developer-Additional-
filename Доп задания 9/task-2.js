request = prompt('Введите два числа и математический знак через пробел', '2 * 5');

const mathematicalSign = '>, <, =, +, -, *, /';
let arrayOfNames = '';
function splitString(stringToSplit, separator = ' ') {

    if (stringToSplit != null) {
        arrayOfNames = stringToSplit.trim().split(separator);
    }
}

function operators (operator, number1, number2) {
    switch (operator) {
        case '>':
            alert(number1 > number2);
        break;
        case '<':
            alert(number1 < number2);
        break;
        case '=':
            alert(number1 === number2);
        break;
        case '+':
            alert(number1 + number2);
        break;
        case '-':
            alert(number1 - number2);
        break;
        case '*':
            alert(number1 * number2);
        break;
        case '/':
            alert(number1 / number2);
        break;
    }
}
function getMathResult(expression) {

    let numbers = [];
    let mathSign = '';
        splitString(expression);
        if (arrayOfNames.length > 2) {
            //onsole.log(arrayOfNames);
            for (let i = 0; i < arrayOfNames.length; i += 1) {

                if (mathematicalSign.includes(arrayOfNames[i])) { // проверка на наличие математического знака
                    mathSign = arrayOfNames[i];
                } else if (!Number.isNaN(Number(arrayOfNames[i]))) {
                    numbers.push(Number(arrayOfNames[i]));
                } 
            }
            if (!mathSign) {
                alert('Ошибка');
            }
            operators(mathSign, numbers[0], numbers[1]);
        }
    } 

    getMathResult(request);
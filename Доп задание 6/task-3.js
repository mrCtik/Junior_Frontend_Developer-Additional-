//1234f - не удовлетворяет условиям
//123456 - не удовлетворяет условиям
//1234F - удовлетворяет условиям 
//12 - не удовлетворяет условиям
//JavaScript - не удовлетворяет условиям
//JavaScript123 - удовлетворяет условиям

let ThereIsANumber = false;
let UppercaseLetter = false;
let LengthMatches = false;

let password = prompt('Введите пароль');

console.log(password);

if (!((password) === null || password === '') )
check (password);

if (ThereIsANumber && UppercaseLetter && LengthMatches) 
    alert('Пароль валидный. Добро пожаловать в аккаунт!'); 
else alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.');

function check (string) {
    if (password.length > 3 && password.length < 20) {
        LengthMatches = true;
    }

    for (let i = 0; i < string.length; i += 1) {
        if (Number(string[i]) < 9 || Number(string[i]) > 0) //так как преобразование регистров не работает с цифрами, сперва проверяем на их наличии
            ThereIsANumber = true; 
        else if (string[i] === string[i].toUpperCase()) {
            UppercaseLetter = true;
        }
    }
}

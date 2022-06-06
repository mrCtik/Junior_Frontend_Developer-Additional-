
function checkQuestionAnswer (question , correctAnswer) {
    if (String(prompt(question)).trim().toUpperCase() === correctAnswer.toUpperCase()) {
        alert ('Ответ верный');
    } else {
        alert ('Ответ не верный');
    }
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');
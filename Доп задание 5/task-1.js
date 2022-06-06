
const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';

let text1 = javaScriptDescription.slice(0, Math.floor(javaScriptDescription.length/2));

let text2 = text1.replaceAll('а', 'А');

let text3 = text1.replaceAll(' ', '');

let text4 = text3.repeat(3);

let text5 = (text4[Math.floor(text4.length/2)]);

console.log(text5);
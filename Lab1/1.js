/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    //return str.replace(/(!\s|\s)\S/g, function(firstSymbol) { return firstSymbol.toUpperCase()})
    return str.split(' ').map(symb => symb[0].toUpperCase() + symb.slice(1)).join(' ');
   }
module.exports = capitalize;
/* я использовал символьные классы https://learn.javascript.ru/regexp-character-classes
*/
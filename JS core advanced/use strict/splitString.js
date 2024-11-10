'use strict';

function splitStringToWords(inputString) {
    if (typeof inputString !== 'string') {
        throw new Error('Входное значение должно быть строкой');
    }

    // Разбиваем строку по пробелам и возвращаем массив слов
    return inputString.trim().split(/\s+/);
}

// use example
try {
    const result = splitStringToWords("Это пример строки, разделенной на слова. чего происходит-то");
    console.log(result);
} catch (error) {
    console.error(error.message);
}

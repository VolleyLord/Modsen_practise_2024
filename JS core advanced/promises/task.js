'use strict';

function firstPromise() {
    return new Promise(resolve => {
        setTimeout(() => resolve(2), 1000);  // Начинаем с числа 2 через 1 секунду
    });
}

function secondPromise(number) {
    return new Promise(resolve => {
        setTimeout(() => resolve(number * number), 3000);  // Возводим в квадрат через 3 секунды
    });
}

function thirdPromise(number) {
    return new Promise(resolve => {
        setTimeout(() => resolve(number * number), 3000);  // Возводим в квадрат еще раз
    });
}

firstPromise()
    .then(secondPromise)
    .then(thirdPromise)
    .then(result => {
        console.log('Final result:', result);  //результат
    })
    .catch(error => {
        console.error('Error:', error);  //ошибки
    });

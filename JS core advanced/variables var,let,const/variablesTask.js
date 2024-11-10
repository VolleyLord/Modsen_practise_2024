'use strict';

for (let i = 0; i < 3; i++) {
    var varVar = "переменная с var";
    let letVar = "переменная с let";
    const constVar = "переменная с const";
}

// доступ к переменным после цикла
console.log(varVar);  // Доступно, так как var имеет функциональную или глобальную область видимости
console.log(letVar);  // Ошибка: let имеет блочную область видимости
console.log(constVar); // Ошибка: const имеет блочную область видимости

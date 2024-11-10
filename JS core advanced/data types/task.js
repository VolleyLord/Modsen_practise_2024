'use strict';

function isDivisible(num1, num2) {
    if (num2 === 0) {
        throw new Error("На ноль делить нельзя");
    }
    return num1 % num2 === 0;
}

try {
    console.log(isDivisible(10, 2));  // true
    console.log(isDivisible(10, 3));  // false
} catch (error) {
    console.error(error.message);
}

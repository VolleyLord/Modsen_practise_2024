'use strict';

function findMin(arr) {
    if (arr.length === 0) {
        throw new Error("Массив не может быть пустым");
    }
    return Math.min(...arr);
}

try {
    console.log(findMin([10, 2, 5, 1, 9]));  // 1
    console.log(findMin([0, -5, 3, 7]));    // -5
} catch (error) {
    console.error(error.message);
}

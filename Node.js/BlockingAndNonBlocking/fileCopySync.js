const fs = require('fs');

console.time('fileCopy');

// Blocking reading and writing
try {
    const data = fs.readFileSync('source.txt', 'utf-8');
    fs.writeFileSync('destination.txt', data);
    console.log("Копирование завершено (блокирующее).");
} catch (error) {
    console.error("Ошибка:", error);
}

console.timeEnd('fileCopy');

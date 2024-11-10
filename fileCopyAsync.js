const fs = require('fs');

console.time('AsyncFileCopy');

// NonBlocking reading and writing
const readStream = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('destination.txt');

readStream.pipe(writeStream);
writeStream.on('finish', () => {
    console.log("Копирование завершено (неблокирующее).");
    console.timeEnd('AsyncFileCopy');
});

writeStream.on('error', (error) => {
    console.error("Ошибка записи:", error);
});
readStream.on('error', (error) => {
    console.error("Ошибка чтения:", error);
});

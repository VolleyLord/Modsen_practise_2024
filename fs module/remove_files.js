const fs = require('fs');
const path = require('path');

const directoryPath = './files to be deleted';
const extension = '.txt';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Ошибка при чтении директории:', err);
  }

  // вывод удаляемых файлов
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    if (path.extname(file) === extension) {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Ошибка при удалении ${file}:`, err);
        } else {
          console.log(`Удалён файл: ${file}`);
        }
      });
    }
  });

  // Вывод оставшихся файлов после удаления
  setTimeout(() => {
    fs.readdir(directoryPath, (err, remainingFiles) => {
      if (err) {
        console.error('Ошибка при чтении директории:', err);
      } else {
        console.log('Оставшиеся файлы:', remainingFiles);
      }
    });
  }, 500); // Пауза, чтобы дождаться удаления файлов
});

const http = require('http');
const url = require('url');
const fs = require('fs');

let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;

  if (parsedUrl.pathname === '/items') {
    // Обработка GET запроса на /items
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(items));
    }
    // Обработка POST запроса на /items (добавление нового элемента)
    else if (method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        const newItem = JSON.parse(body);
        newItem.id = items.length + 1; // automatic id increment 
        items.push(newItem);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newItem));
      });
    }
  } 
  else if (parsedUrl.pathname.startsWith('/items/') && method === 'GET') {
    // Обработка GET запроса на /items/:id
    const id = parseInt(parsedUrl.pathname.split('/')[2]);
    const item = items.find((item) => item.id === id);
    if (item) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(item));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Item not found');
    }
  }
  else if (parsedUrl.pathname.startsWith('/items/') && method === 'PUT') {
    // Обработка PUT запроса на /items/:id (обновление элемента)
    const id = parseInt(parsedUrl.pathname.split('/')[2]);
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const updatedItem = JSON.parse(body);
      const index = items.findIndex((item) => item.id === id);
      if (index !== -1) {
        items[index] = { id, ...updatedItem };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(items[index]));
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Item not found');
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

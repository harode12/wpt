const http = require('http');
const { URL } = require('url');

const todos = [
  { id: 1, task: 'Read Carefully' },
  { id: 2, task: 'Implement' },
  { id: 3, task: 'Test Code' },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const parsedUrl = new URL(url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  if (method === 'GET') {
    if (pathname === '/todos') {
      // Return a
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(todos));
    } else if (pathname.startsWith('/todos/')) {
      // Extract ID from path
      const idStr = pathname.split('/')[2];
      const id = Number(idStr);

      if (!isNaN(id)) {
        const todo = todos.find(t => t.id === id);
        if (todo) {
          // Show todo as simple HTML page
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(`
            <!DOCTYPE html>
            <html>
              <head><title>Todo ${todo.id}</title></head>
              <body>
                <h1>Todo ID: ${todo.id}</h1>
                <p>Task: ${todo.task}</p>
              </body>
            </html>
          `);
        } else {
          // Not found
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Todo not found');
        }
      } else {
        // Invalid ID format
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid todo ID');
      }
    } else {
      // Unknown path
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } else {
    // Method not supported
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(3409, () => console.log('Server running at http://localhost:3409'));

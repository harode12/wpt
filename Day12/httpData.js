const http = require('http');
const { URL } = require('url');

const server = http.createServer((request, res) => {
    const { method, url } = request;
    const parsedUrl = new URL(url, `http://${request.headers.host}`);
    const pathname = parsedUrl.pathname;

    if (method === 'GET' && pathname === '/') {
        // Get query parameters
        const fName = parsedUrl.searchParams.get('fName') || 'Guest';

        // Prepare HTML response
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head><title>Hello Page</title></head>
            <body>
                <h1>Hello ${fName}</h1>
            </body>
            </html>
        `;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    } else {
        // 404 Not Found for other routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3409, () => console.log("Server running at http://localhost:3409"));

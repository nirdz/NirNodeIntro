// This code file tells the computer to write "Hello World!" if anyone (e.g. a web browser)
// tries to access your computer on port 3000.

const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// The createServer() method of http creates a new HTTP server and returns it.
const server = createServer(
    /**
     * Whenever a new request is received, the request event is called, providing two objects: a request and a response.
     * @param {*} req provides the request details. In this simple example, this is not used, but you could access the request headers and request data.
     * @param {*} res used to return data to the caller.
     */
    (req, res) => {
        res.statusCode = 200; // we set the statusCode property to 200, to indicate a successful response.
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World!'); // we close the response, adding the content as an argument to end():
    }
);

// The server is set to listen on the specified port and host name. 
// When the server is ready, the callback function is called,
// in this case informing us that the server is running.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
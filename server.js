const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

// Unhandled promise rejection example
db.query("SELECT * FROM users", (err, result) => {
  if(err) {
    console.error("Error: ", err);
  }
  console.log("Result: ", result);
});

// The bug is that this promise rejection is not handled.
// This can cause the server to crash and exit unexpectedly
// if it encounters an unhandled promise rejection.  This can happen without explicit error handling in async functions or callbacks.
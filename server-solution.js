const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

//Simulate database query
const db = {
  query: (sql, callback) => {
    setTimeout(() => {
      const error = Math.random() < 0.5 ? new Error('Simulated database error') : null;
      callback(error, {rows: [{id:1, name:'test'}]});
    }, 100);
  }
};

// Handle unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

//Example of try...catch error handling
try {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.error('Database query error:', err);
      // Handle the error appropriately, perhaps log it, send an error response,
      // or attempt a retry
    } else {
      console.log('Database query result:', result);
    }
  });
} catch (error) {
  console.error('Error:', error);
}

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
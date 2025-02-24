# Unhandled Promise Rejection in Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  The server includes a database query (simulated here) that may fail.  Without proper error handling, this failure can lead to the server crashing unexpectedly.  The solution demonstrates how to handle potential errors from asynchronous operations like database queries to ensure the server remains operational.

## Bug

The `server.js` file contains a simple HTTP server and a database query (simulated).  The query lacks proper error handling, leading to an unhandled promise rejection if the query fails.  This causes the server to crash and exit. 

## Solution

The `server-solution.js` file demonstrates the solution using a try...catch block and a process.on('unhandledRejection') event listener. This ensures that the server handles errors gracefully and continues running even if a promise rejects.
const express = require('express');
const app = express();
const path = require('path');

// Static web server
app.use(express.static(path.join(__dirname, 'public')));

//routes

// app.get tells the express web server when someone opens the homepage, perform this method that we passed in the arrow function
// app.get(...) -> I want to handle GET requests
// '/' path example http://localhost:3000/
// (request, response) => {...} arrow function - Internally, express is expecting a method of this signature, where first param is req and second param is response
// express also provides some methods like the one used here - send() 
// OBSERVATION : In Javascript, no need to specify type for params. JS is dynamically typed language.

// app.get('/', (request, response)=> {
//     response.send("<h1>Hello from the web server!!!</h1>")
// });

app.listen(3000, ()=>{
    console.log("Listening at localhost:3000");
});
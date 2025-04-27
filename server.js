import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import saveRoutes from './routes/save.js';
import readRoutes from './routes/read.js';
import mongoose from 'mongoose';

// connection to MongoDB
mongoose.connect('mongodb+srv://ritzy224:6361865225@chartapp.0rkph82.mongodb.net/chartDatabase?retryWrites=true&w=majority&appName=chartApp'); 

// connection is an object provided by mongoose that represents the current connection to MongoDB database
mongoose.connection.on('error', (err)=>{
    console.log("ERROR:" + err);
});

mongoose.connection.once('open', ()=>{
    console.log("The connection to MongoDB is working!");
});


const app = express();

// Parsing info from web browser
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// routers
// app.use is used to 
//      - register middleware (code that runs when a request is made)
//      - mount routers on specific paths
// require is a method in node.js which imports code from another file or module
// I replaced the old require syntax with the modern import syntax.
app.use('/api/savechart', saveRoutes);
app.use('/api/readchart', readRoutes);

// route
// every time the user visits any url address then the file index.html will display the web browser.
app.get(/(.*)/, (request, response) => {
    response.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, ()=>{
    console.log("Listening at localhost:3000");
});
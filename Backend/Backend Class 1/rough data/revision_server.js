// create instance of Express
const express = require('express');
const myApp = express();
const port = 4000;

// this is for fetch data. post request
const bodyParser = require('body-parser');
myApp.use(bodyParser.json());

// where our application will run, tell here
myApp.listen(port, () => {
    console.log("App successfully run on", port);
})

// route
// get request , 
myApp.get('/', (request, response) => {
    response.send("My Application is started")
})

// post request
myApp.post('/laptop/myLaptop', (request, response) => {
    const { name, price } = request.body;
    console.log(name);
    console.log(price);
    response.send("Data fetch successfully")
})

// connect express and mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cars', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connectin done");
}).catch((error) => {
    console.log("connection error : ", error);
})
const express = require("express");
const app = express();
const port = 4000;

const bodyParse = require('body-parser');
app.use(bodyParse.json());

app.listen(port, () => {
    console.log(`server started at ${port}`);
});

// get request
// req -> request
// res -> response
app.get('/', (req, res) => {
    res.send("Hello, jaymin darji here, can you help me");
})

// post request
app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted succesfully");
});

// mongodb connection start
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cars', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("connection done") })
    .catch((error) => { console.log("error occure while connection", error) })
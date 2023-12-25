// import express
const express = require("express");

// instance create of express
const app = express();

const port = 4000;

app.listen(port, () => {
    console.log(`Our application is listening on ${port}`);
})

app.get('/', (req, res) => {
    res.send("welcome to codehelp")
})


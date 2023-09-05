const mongoose = require('mongoose');

// fetch .env data and store it to process object
require('dotenv').config();  // it will store data in process

const databaseConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("Connection done"))
        .catch((error) => {
            console.log("Connection error while connecting to database : ", error);
            process.exit(1);
        })
}

module.exports = databaseConnect
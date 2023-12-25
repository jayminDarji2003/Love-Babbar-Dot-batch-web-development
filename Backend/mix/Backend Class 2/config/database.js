// Connection to database
const mongoose = require('mongoose');

// accessing environment variables file
require('dotenv').config();

// this function is used to configure the database connection settings for the application.
const connectToDatabase = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }).then(()=>{
        console.log('Connected to database');
    }).catch((error)=>{
        console.log("Failed to connect to database : " + error.message);
        process.exit(1);
    });
}

module.exports = connectToDatabase;
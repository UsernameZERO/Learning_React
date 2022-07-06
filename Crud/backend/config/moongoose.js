const mongoose = require('mongoose');
require('dotenv').config();
const dbUrl = process.env.DB_URL ;
// console.log("vcjhvakh ====",dbUrl);
mongoose.connect( dbUrl , {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error',console.error.bind(console, "Error connecting MongoDB"));

db.once('open',function(){
    console.log(`Mongo-Db is Connected, the data can be stored now.`);
});

module.exports = db;
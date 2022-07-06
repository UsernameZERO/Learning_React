const express = require('express');
const db = require('./config/moongoose');
const app = express();
const cors = require('cors');

app.use(cors()); 
app.use(express.urlencoded());
app.use(express.json());



app.use('/', require('./routes'));
app.listen(1111, (err)=>{
    if (err) {
        console.log(`Error in server err : ${err}`);
    }else{
        console.log(`Server running on Port: ${1111}`);
    }

})
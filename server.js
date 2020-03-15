const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/votingDB', {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Could not connect to database:'));
db.once('open', ()=> {
    console.log("Database Connected")
});


const router = require('./routes/routes');
const StudentData = require('./models/studentSchema')


app.use(parser.urlencoded({extended: true }));
app.use(parser.json())
app.use(router);
app.use(StudentData);


const port = process.env.PORT || 5000;
app.listen(port , ()=>{
    console.log(`Server up and running on ${port}!!`)}
)
const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', users);



mongoose.connect('mongodb+srv://zamaniramin549:GrDyYzdIJATAjkNb@cluster0.iwdm2hp.mongodb.net/user').then(() => {
    app.listen(3002);
    console.log('connected')
}).catch(err => {
    console.log(err);
})
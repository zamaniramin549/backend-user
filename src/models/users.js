const mongoose = require('mongoose');
const { Schema } = mongoose;

const Users = new Schema({
    name:{
        type: String,
        require: true
    },
    lastName:{
        type: String, 
        require: true
    },
    email :{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Users', Users);
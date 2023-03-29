const express = require('express');
const route = express.Router();
const addUsers = require('./addUser');
const getAllUsers = require('./getUsers');
const deleteUser = require('./deleteUser');

// Get all users
route.get('/', getAllUsers);

// Add user
route.post('/', addUsers);

// Delete user
route.delete('/', deleteUser);


module.exports = route;
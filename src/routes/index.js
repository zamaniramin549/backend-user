const express = require('express');
const route = express.Router();

route.get('/', (_, res) => {
    res.json({ message: 'Get and Add users' });
})

module.exports = route;
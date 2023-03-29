const Users = require('../../models/users');

const addUser = (req, res) => {
    const {name, lastName, email} = req.body;
    const saveUser = new Users({
        name: name,
        lastName: lastName,
        email: email
    });
    saveUser.save().then(result => {
        return res.status(200).json(result);
    })
}

module.exports = addUser
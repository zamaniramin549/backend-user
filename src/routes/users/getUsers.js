const Users = require('../../models/users');

const getAllUsers = (req, res) => {
    try {
        Users.find().then(
            (result) =>{
                return res.status(200).json(result);
            }
        );
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getAllUsers
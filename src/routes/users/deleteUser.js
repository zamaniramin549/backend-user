const Users = require('../../models/users');

const deleteUser = (req, res) => {
    const {userId} = req.body;
    Users.findByIdAndDelete(userId).then(result => {
        return res.status(200).json(result);
    })
};

module.exports = deleteUser;
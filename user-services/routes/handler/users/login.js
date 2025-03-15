const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const v = new Validator();

const { User } = require('../../../models');

module.exports = async (req, res) => {
    // Add schema for validation
    const schema = {
        email: 'email|empty:false',
        password: 'string|min:6',
    }

    // Validate the body data from req
    const validate = v.validate(req.body, schema);

    // Return error if validate has length
    if (validate.length) { 
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    // Check if user email from req.body is match on db by User model
    const user = await User.findOne({
        where: { email: req.body.email }
    });

    // Return error if email not match on db
    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        });
    }

    // Check if user password is match on db -- comparing hashed-posted password -> hashed password on db
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);

    // Return error if password doesn't match on db
    if (!isValidPassword) {
        return res.status(404).json({
            status: 'error',
            message: 'wrong password'
        });
    }

    // 
    return res.json({
        status: 'success',
        data: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            profession: user.profession
        }
    });

}
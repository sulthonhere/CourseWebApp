const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/users');

router.get('/', usersHandler.getUsers);     // Multiple get data user
router.get('/:id', usersHandler.getUser);   // Individual get data user

router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);
router.post('/logout', usersHandler.logout);

router.put('/:id', usersHandler.update);

module.exports = router;
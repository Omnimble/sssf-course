'use strict';
const express = require('express');
const {login} = require('../controllers/authController');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/user'), user_create_post;

router.post('/login', authController.login);

module.exports = router;
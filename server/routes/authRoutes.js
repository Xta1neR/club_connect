const express = require('express');
const router = express.Router();
const cors = require('cors');
const axios = require("axios");

const {test, registerUser, loginUser} = require('../controllers/authController');
const {authenticate} = require('../controllers/authenticate');

//middleware
router.use(
	cors({
		credentials: true,
		origin: 'http://localhost:5173'
	})
)

//routes
router.post('/authenticate',authenticate)
router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router;
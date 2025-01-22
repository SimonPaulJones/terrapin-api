const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

// Define the POST route for handling instructions
router.post('/', controller.handleInstructions);

module.exports = router;
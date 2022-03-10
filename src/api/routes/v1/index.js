const express = require('express');
const todoRoutes = require('./todo.route');
const router = express.Router();

/**
 * GET v1/status
 */
router.use('/todos', todoRoutes);
module.exports = router;

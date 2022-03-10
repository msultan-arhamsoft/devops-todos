const express = require('express');
const controller = require('../../controllers/todos.controller');

const router = express.Router();

router.route('/')
  .post( controller.create);
router.route('/')
  .get( controller.get);

module.exports = router;

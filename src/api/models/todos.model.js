const mongoose = require('mongoose');
/**
 * User Schema
 * @private
 */
const TodoSchema = new mongoose.Schema({
  title:{
    type: String
  },
  description:{
    type: String
  },
  status:{
    type: Boolean
  }
}, {
    timestamps: true,
});

/**
 * @typedef Users
 */
module.exports = mongoose.model('Todos', TodoSchema);
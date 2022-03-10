const Todos = require('../models/todos.model');
exports.create = async (req, res, next) => {
  try {
      const newTodo = new Todos(req.body);
      const todo = await newTodo.save();
      return res.send({status: true, data: todo, message: "Todo saved successfully",});
  }
  catch (error)
  {
    return res.send({status: false, error, message: "Something went wrong"});
  }
};

exports.get = async (req, res, next) => {
  try {
    let todos = await Todos.find({});
    res.send({status:true, data: todos, message: "Todos retrieved successfully."});
  } catch (error) {
    return res.send({status: false, error, message: "Something went wrong"});
  }
};

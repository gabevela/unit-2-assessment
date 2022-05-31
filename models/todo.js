const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: String,
    done: false
});

let todoModel = mongoose.model('Todo', todoSchema);

module.exports = {
    todoModel
};


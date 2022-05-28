      
  function newTodo(req, res) {
    res.render('todos/new');
  }
  
  module.exports = {
    index,
    show,
    new: newTodo
  };

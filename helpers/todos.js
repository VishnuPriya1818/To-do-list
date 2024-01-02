var db = require("../models")
exports.getTodos = (req,res) => {
    // res.send('router working fine');
    db.todo.find()
    .then( (todos) => {
        console.log(todos)
        res.json(todos);
    })
    .catch( (err)=>{
        console.log(err)
        res.send(err)
    })
}
exports.createTodo = (req,res) => {
    db.todo.create(req.body)
    .then((todo) => {
        res.json(todo)
      
    })
    .catch( (err) =>{
        res.send(err)
    })

}
exports.fetchTodo = (req,res) =>
{
    db.todo.findById(req.params.todoId)
    .then( function(foundtodo){
        res.json(foundtodo)
    })
    .catch( function(err){
        res.send(err)
    })
}
exports.updateTodo = (req,res) => {
    db.todo.findOneAndUpdate({_id:req.params.todoId},req.body,{new:true})
    .then((todo) => {
        res.json(todo)
    })
    .catch( (err) =>{
           res.send(err)
    })
}
exports.deleteTodo = (req,res) =>{
    db.todo.findByIdAndDelete(req.params.todoId)
    .then( () =>{
        res.json({message:'deleted todo'})
    })
    .catch( (err) =>{
        res.send(err)
    })

}
module.exports =exports;
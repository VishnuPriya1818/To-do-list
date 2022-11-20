var express = require('express');
var router = express.Router()
var db = require("../models")
router.get('/',(req,res) => {
    // res.send('router working fine');
    db.todo.find()
    .then( (todos) => {
        res.json(todos);
    })
    .catch( (err)=>{
        req.send(err)
    })
});
router.post('/',(req,res) => {
    db.todo.create(req.body)
    .then((todo) => {
        res.json(todo)
      
    })
    .catch( (err) =>{
        res.send(err)
    })

});
router.get('/:todoId',(req,res) =>
{
    db.todo.findById(req.params.todoId)
    .then( function(foundtodo){
        res.json(foundtodo)
    })
    .catch( function(err){
        re.send(err)
    })
});
module.exports = router;
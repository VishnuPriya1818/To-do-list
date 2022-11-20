var express = require('express')
app = express();
var mongoose = require('mongoose')
mongoose.connect("")
app.get('/',(req,res) => {
    res.send('route clear server running')
})
app.listen(4000,function(){
    console.log('sucess')
})
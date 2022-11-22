var express = require('express')
app = express();
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var todoRoutes = require('./routes/todo')
app.use(express.static(__dirname + '/veiws'));
app.get('/',(req,res) => {
    res.sendFile('index.html')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true
}))
app.use('/api/todos',todoRoutes);

app.listen(3000,function(){
    console.log('app running on port'+ 3000)
})
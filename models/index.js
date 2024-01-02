var mongoose =require('mongoose');
mongoose.set('debug',true);
var MONGODB_URL = process.env
mongoose.connect('mongodb+srv://vishnupriya:vish18@cluster0.bbodeek.mongodb.net/todo-api')
mongoose.Promise = Promise;
module.exports.todo = require('./todo')

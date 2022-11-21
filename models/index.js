var mongoose =require('mongoose');
mongoose.set('debug',true);
var MONGODB_URL = process.env
mongoose.connect('mongodb+srv://nishanth:nish1234@cluster0.bbodeek.mongodb.net/todo-api')
mongoose.Promise = Promise;
module.exports.todo = require('./todo')

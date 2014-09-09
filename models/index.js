var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chops');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Entry, User, Prompt;
var Schema = mongoose.Schema;
 
var entrySchema = new Schema({
  name:  String,
  title: String,
  // url_name: String,
  owner_id:  String,
  body:   String,
  city: String,
  date: { type: Date, default: Date.now },
  status: Number
});
 
var userSchema = new Schema({
  name:  {
      first: String,
      last: String
    },
  email: String
});

var promptSchema = new Schema({
  text: String,
  source: String,
  title: String,
  url_name: String
});
 
Entry = mongoose.model('Entry', entrySchema);
User = mongoose.model('User', userSchema);
Prompt = mongoose.model('Prompt', promptSchema);
 
module.exports = {"Entry": Entry, "User": User, "Prompt": Prompt};






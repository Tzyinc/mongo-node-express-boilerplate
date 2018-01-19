 var mongoose	= require('mongoose');
 var Schema 	= mongoose.Schema

//add variables here to change schema
 var exampleSchema = new Schema({
	 name: String
 });
 
 module.exports = mongoose.model('example', exampleSchema);
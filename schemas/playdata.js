var mongoose = require('mongoose');
var { Schema }  = mongoose;
var schema_playdata = new Schema({
	name : {
		type : String,
		required : true,
		unique : true,
	},
	pwd : {
		type : Number,
		required : true,
	},
	mode : {
		type : Number,
		required : true,
	},
	round : {
		type : Number,
		required : true,
	},
	score : {
		type : Number,
		required : true,
	},
	playdtime : {
		type : Date,
		default : Date.now,
		required : true,
	},
});

module.exports = mongoose.model('playdata', schema_playdata);

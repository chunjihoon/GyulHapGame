/*
//CONNECT TO MONGODB SERVER
var mongoose = require('mongoose');
//mongoose.connect(process.env.MONGO_DB);
var db = null;
/*
try{
	db = mongoose.connect('mongodb://jihun:30tmchungin8!@cluster0-gfzco.gcp.mongodb.net:27017/jihun', 
			{ useNewUrlParser: true },
			{ dbName : 'gyulhap'}
	);
}catch(err){
	console.log("mongoDB connection err: ", err);
}finally{
	if(db !== null){
		db.close();
	}
}

var url = 'mongodb://jihun:30tmchungin8!@cluster0-gfzco.gcp.mongodb.net:27017/jihun';
var url2 = 'mongodb://localhost:27017/jihun'
mongoose.connect(url,
		{ useNewUrlParser: true },
		{ dbName : 'gyulhap'}
)
/*
	.then((success) => {
		console.log(success);
	})
	.catch((fail) => {
		console.error(fail);
	})
*/

/*
var uri = "mongodb://jihun:30tmchungin8!@cluster0-gfzco.gcp.mongodb.net:27017/jihun";
mongoose.connect(uri, { useNewUrlParser: true }
		//{ dbName : 'gyulhap'}
);
var db = mongoose.connection;
db.once("open", function(){
	console.log("DB connected");
});
db.on("error", function(err){
	console.log("DB ERROR : ", err);
});
*/

var mongoose = require('mongoose');
module.exports = function() {
	var connect = function(){
		if(process.env.NODE_ENV !== "production"){
			mongoose.set("debug", true);
		}
		mongoose.connect('mongodb://jihun:30tmchungin8!@cluster0-gfzco.gcp.mongodb.net:27017/jihun', 
			{ dbName : 'gyulhap' }, (error) => {
			if(error) {
				console.log("DB ERROR : ", error);
			} else{
				console.log("DB connected");
			}
		});	
	};
	connect();

	mongoose.connection.on("error", (error) => {
		console.error("DB ERROR : ", error);
	});
	mongoose.connection.on("disconnected", () => {
		console.error("몽고디비 연결이 끊겼습니다. 연결 재시도 중.");
		connect();
	});
	require('./playdata');
};

console.log("DB connected");
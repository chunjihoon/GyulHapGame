var express = require("express");
var playdata = require("../schemas/playdata");
var router = express.Router();

// 로그인 POST
router.post("/users", function(req, res, next){
	var body = req.body;
	var result = playdata.findOne({
	    where: {
	      name : body.name
	    }
	  });
	var pw = result.dataValues.pw;
	var inputpw = body.pw;
})


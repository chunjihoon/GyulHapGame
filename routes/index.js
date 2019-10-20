
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};

exports.intro = function(req, res){
	res.render('intro', { title: 'Express' });
};
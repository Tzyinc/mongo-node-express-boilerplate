var Example 	= require('../models/example');

module.exports.createExample = function(req, res) {
	var example = new Example();
	example.name = req.body.name
	example.save(function(err) {
		if (err){
			res.send(err);
		}
		res.json({message: 'Example created success!'});
	});
}

module.exports.retrieveAllExample = function(req, res) {
	Example.find(function(err, all) {
		if (err) {
			res.send(err);
		}
		res.json(all);
	});
}

module.exports.retrieveOneExample = function(req, res) {
	Example.findById(req.params.example_id, function(err, example) {
		if (err) {
			res.send(err);
		}
		res.json(example);
	});
}

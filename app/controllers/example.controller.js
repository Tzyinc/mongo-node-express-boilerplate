var Example 	= require('../models/example');

//ensure that req.body.name exists, alternatively can create a json object and use that to create
module.exports.createExample = function(req, res) {
	var example = new Example();
	example.name = req.body.name;
	example.save(function(err) {
		if (err){
			res.send(err);
		}
		res.json({message: 'Example created success!'});
	});
}

//retrieve all
module.exports.retrieveAllExample = function(req, res) {
	Example.find(function(err, all) {
		if (err) {
			res.send(err);
		}
		res.json(all);
	});
}

//find by id only. to use other type of search, use mongoose's findOne and pass in the params
module.exports.retrieveOneExample = function(req, res) {
	Example.findById(req.params.example_id, function(err, example) {
		if (err) {
			res.send(err);
		}
		res.json(example);
	});
}

//update by id. can also just call updateOne if needed
module.exports.updateExample = function(req, res) {
	var example = new Example();
	example.name = req.body.name;
	example._id = req.params.example_id
	Example.findByIdAndUpdate(req.params.example_id, example, function(err, example) {
		if (err) {
			res.send(err);
		}
		res.json(example);
	});
}

//delete by id. can also use deleteMany for things not using identity key
module.exports.deleteExample = function(req, res) {
	Example.deleteOne({_id: req.params.example_id}, function(err, example) {
		if (err) {
			res.send(err);
		}
		res.json(example);
	});
}
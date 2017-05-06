 var express 	= require('express');
 var router 	= express.Router();

router.get('/', function(req, res) {
	res.json({ message: 'API entry point is /api/<object>'})
});

var exampleController = require('../controllers/example.controller.js');
router.route('/example').post(exampleController.createExample);
router.route('/example').get(exampleController.retrieveAllExample);
router.route('/example/:example_id').get(exampleController.retrieveOneExample);

module.exports = router;
 let express = require('express');
 let router = express.Router();

router.get('/', function(req, res) {
  res.json({message: 'API entry point is /api/<object>'});
});

let userController = require('../controllers/user.controller.js');
router.route('/userlogin').post(userController.login);

let eventController = require('../controllers/event.controller.js');
router.route('/content').get(eventController.getContent);
router.route('/content/:content_id').get(eventController.getOneEvent);
router.route('/like/:content_id').get(eventController.setOneEventLike);
router.route('/going/:content_id').get(eventController.setOneEventGoing);
router.route('/contentComment/:content_id').post(eventController.addNewComment);
router.route('/getUserContent').get(eventController.getUserContent);
module.exports = router;

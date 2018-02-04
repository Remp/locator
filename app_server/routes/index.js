var express = require('express');
var router = express.Router();
var locationCtrl = require('../controllers/location');
var otherCtrl = require('../controllers/other');

/* GET home page. */
router.get('/', locationCtrl.homeList);
router.get('/location', locationCtrl.locationInfo);
router.get('/location/review/new', locationCtrl.addReview);
router.get('/about', otherCtrl.about);

module.exports = router;

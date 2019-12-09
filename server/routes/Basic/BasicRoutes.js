var express = require('express');
var router = express.Router();
var BasicController = require('./BasicController.js');

// const expressJwt = require('express-jwt');
// var  doctorSingUpValidatioSchema = require('./doctorSingUpvalidationSchema')

router.route('/list').get(BasicController.list)

router.route('/:id').get(BasicController.show)

router.route('/add').post(BasicController.add)

router.route('/update/:id').post(BasicController.update)

module.exports = router;

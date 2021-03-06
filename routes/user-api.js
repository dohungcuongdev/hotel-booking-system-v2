var express = require('express');
var router = express.Router();
var ctrl = require('../controller/app-controller');

router.get('/:id', ctrl.getUserByID);
router.get('/username/:username', ctrl.GetUserByUsername);
router.get('/', ctrl.getUser);
router.put('/:id', ctrl.putUser);
router.get('/status/username/:status/:username', ctrl.updateUserStatus);

module.exports = router;
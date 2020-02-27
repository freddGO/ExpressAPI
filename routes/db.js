var express = require('express');
const dbControllers = require('../controllers/db/db');
var router = express.Router();

router.post('/getInfoFromDatabase', dbControllers.getInfoFromDatabase);

module.exports = router;
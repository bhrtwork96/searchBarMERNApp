const express = require('express');

const router = express.Router();

const {adSearch} = require('../controller/ad')

router.get('/api/v1/search',adSearch);


module.exports = router;
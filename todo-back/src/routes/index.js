

const express = require('express');

const router = express.Router();

const taskRoutes = require('./taskRoutes')

router.use('/', taskRoutes);




module.exports = router;
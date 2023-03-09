const express = require('express');
const router = express.Router();

const publicController = require('../controller/publicController');
const dono = require('../model/Dono');
const casa = require('../model/Casa');
const post = require('../model/Post');
router.get('/blog',publicController.index)

module.exports = router

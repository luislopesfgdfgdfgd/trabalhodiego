const express = require('express');
const router = express.Router();
const upload = require('../config/upload')

const donoController = require('../controller/donoController');
const dono = require('../model/Dono');

router.get('/dono/add',donoController.abreadd)
router.post('/dono/add',upload.single('foto'), donoController.add)
router.get('/dono/lst',donoController.list)
router.post('/dono/lst',donoController.filtro)
router.get('/dono/edt/:id',donoController.abreedt)
router.post('/dono/edt/:id', upload.single('foto'), donoController.edt)
router.get('/dono/del/:id',donoController.del)

module.exports = router

const express = require('express');
const router = express.Router();

const upload = require('../config/upload')
const casaController = require('../controller/casaController')

router.get('/casa/add', casaController.abreadd)
router.post('/casa/add', upload.single('foto'), casaController.add)
router.get('/casa/lst', casaController.list)
router.post('/casa/lst', casaController.filtro)
router.get('/casa/edt/:id', casaController.abreedt)
router.post('/casa/edt/:id', upload.single('foto'), casaController.edt)
router.get('/casa/del/:id', casaController.del)

module.exports = router
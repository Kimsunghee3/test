const express = require('express')
const router = express.Router()
const controller = require('../controllers/board.controller')

// get
router.get('/list', controller.getList)
router.get('/view', controller.getView)
router.get('/write', controller.getWrite)
router.get('/modify', controller.getModify)

// post
router.post('/write', controller.postWrite)
router.post('/modify', controller.postModify)

module.exports = router

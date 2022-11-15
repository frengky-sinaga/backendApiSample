const express=require('express')
const { TestControllers } = require('../controllers')
const router = express.Router()

router.get('/test', TestControllers.test)

module.exports=router
const express = require('express')
const route = express.Router()
const controllerUpload = require('../controllers/controllerUpload')


route.get('/',controllerUpload.Index)

route.post('/upload', controllerUpload.Store)

module.exports = route;
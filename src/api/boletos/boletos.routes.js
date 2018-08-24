const express = require('express')

module.exports = function (server) {

    const boletosController = require('../boletos/boletos.controller')  
    const openRoutes = express.Router()

    server.use('/boletos', openRoutes)
    openRoutes.post('/', boletosController.post)
    // openRoutes.get('/', boletosController.get)
  }
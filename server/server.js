const path = require('path')
const express = require('express')

const scenario = require('./routes/scenario')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/scenario', scenario)

module.exports = server

//1. setup route, add the routes to server js
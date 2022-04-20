const express = require('express')

const router = express.Router()

const db = require('../db/db')

// GET /api/v1/welcome/
router.get('/', (req, res) => {
  db.getScenario()
    .then((scenario) => {
      res.json(scenario)
      return null
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
  
})

// database SQL is not accessible front end. So have created a endpoint to access database

module.exports = router

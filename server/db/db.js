const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getScenario,
}

function getScenario(db = connection) {
  return db('scenario').select()
}

//3. Created database function
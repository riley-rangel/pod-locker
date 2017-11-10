const { Router } = require('express')
const findSubs = require('./middleware/find-subs')
const updateSubs = require('./middleware/update-subs')
const findEps = require('./middleware/find-eps')

module.exports = function subRouter(gateway) {
  const router = new Router()

  router
    .get('/subscriptions', (req, res) => {
      findSubs(req, res, gateway)
    })
    .post('/subscribe', (req, res) => {
      updateSubs(req, res, gateway)
    })
    .post('/episodes', (req, res) => {
      findEps(req, res)
    })

  return router
}

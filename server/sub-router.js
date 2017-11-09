const { Router } = require('express')
const findSubs = require('./middleware/find-subs')
const updateSubs = require('./middleware/update-subs')
const findEps = require('./middleware/find-eps')

module.exports = function subRouter(gateway) {
  const router = new Router()

  router
    .get('/subscriptions', (req, res) => {
      const subs = findSubs(req, res, gateway)
      res.status(200).json(subs)
    })
    .post('/subscribe', (req, res) => {
      const sub = updateSubs(req, res, gateway)
      sub
        ? res.status(202).json(sub)
        : res.status(400).json(null)
    })
    .get('/episodes', (req, res) => {
      const episodes = findEps(req)
      res.json(episodes)
    })

  return router
}

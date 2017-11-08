const { Router } = require('express')
const rssParser = require('rss-parser')
const feedConverter = require('./feed-converter')
const handleError = require('./handle-error')

module.exports = function subRouter(gateway) {
  const router = new Router()

  router
    .get('/subscriptions', async (req, res) => {
      try {
        const subs = await gateway.find()
        res.status(200).json(subs)
      }
      catch (err) {
        handleError(err, res, 500)
      }
    })
    .post('/subscribe', (req, res) => {
      const { feed } = req.body
      rssParser.parseURL(feed, async (err, parsed) => {
        if (err) handleError(err, res, 400, 1)
        const converted = feedConverter(parsed.feed)
        try {
          const podcast = { about: converted.about, feed }
          await gateway.subscribe(podcast)
          res.status(202).json(podcast)
        }
        catch (err) {
          handleError(err, res, 500)
        }
      })
    })

  return router
}

const { Router } = require('express')
const { promisify } = require('util')
const rssParser = require('rss-parser')
const wrap = require('./utilities/wrap')
const feedConverter = require('./utilities/feed-converter')

const asyncParseURL = promisify(rssParser.parseURL)

module.exports = function subRouter(gateway) {
  const router = new Router()

  router
    .get('/subscriptions', wrap(async (req, res) => {
      const subs = await gateway.find()
      res.status(200).json(subs)
    }))
    .delete('/subscription/:id', wrap(async ({ params: { id } }, res) => {
      const result = await gateway.deleteOne(id)
      result.n ? res.status(204).json(result) : res.sendStatus(404)
    }))
    .post('/subscribe', wrap(async ({ body: { feed } }, res) => {
      const parsed = await asyncParseURL(feed)
      const { about } = feedConverter(parsed.feed)
      const sub = await gateway.subscribe({ about, feed })
      sub ? res.status(202).json(sub) : res.status(400).json(null)
    }))
    .post('/episodes', wrap(async ({ body: { feed } }, res) => {
      const parsed = await asyncParseURL(feed)
      res.json(feedConverter(parsed.feed))
    }))
    .get('/episodes/:id', wrap(async ({ params = {} }, res) => {
      const { feed } = await gateway.findOne(params)
      const parsed = await asyncParseURL(feed)
      res.status(200).json(feedConverter(parsed.feed))
    }))

  return router
}

const { Router } = require('express')
const rssParser = require('rss-parser')
const feedConverter = require('./feed-converter')

module.exports = function subRouter(gateway) {
  const router = new Router()

  router.post('/subscribe', (req, res) => {
    const { feed } = req.body
    rssParser.parseURL(feed, async (err, parsed) => {
      if (err) {
        console.error(err)
        res.sendStatus(400)
        process.exit(1)
      }
      const converted = feedConverter(parsed.feed)
      try {
        const podcast = { about: converted.about, feed }
        await gateway.subscribe(podcast)
        res.status(202).json(podcast)
      }
      catch (err) {
        console.error(err)
        res.sendStatus(500)
        process.exit(1)
      }
    })
  })

  return router
}

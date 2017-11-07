const express = require('express')
const rssParser = require('rss-parser')
const bodyParser = require('body-parser')

module.exports = function createApp() {
  const app = express()

  app
    .use(bodyParser.json())
    .post('/subscribe', (req, res) => {
      const { url } = req.body
      rssParser.parseURL(url, (err, parsed) => {
        if (err) {
          console.error(err)
          res.sendStatus(400)
          process.exit(1)
        }
        res.status(202).json(parsed.feed.title)
      })
    })

  return app
}

const express = require('express')
const path = require('path')
const rssParser = require('rss-parser')
const bodyParser = require('body-parser')
const feedConverter = require('./feed-converter')

module.exports = function createApp() {
  const app = express()

  app
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.json())
    .post('/subscribe', (req, res) => {
      const { url } = req.body
      rssParser.parseURL(url, (err, parsed) => {
        if (err) {
          console.error(err)
          res.sendStatus(400)
          process.exit(1)
        }
        const converted = feedConverter(parsed.feed)
        res.status(202).json(converted)
      })
    })

  return app
}

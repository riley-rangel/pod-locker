const handleError = require('../handle-error')
const rssParser = require('rss-parser')
const feedConverter = require('../feed-converter')

module.exports = function findEps(req, res) {
  const { feed } = req.body
  rssParser.parseURL(feed, (err, parsed) => {
    if (err) handleError(err, res, 400, 1)
    const { episodes } = feedConverter(parsed.feed)
    res.json(episodes)
  })
}

const handleError = require('../handle-error')
const rssParser = require('rss-parser')
const feedConverter = require('../feed-converter')

module.exports = function updateSubs(req, res, gateway) {
  const { feed } = req.body
  rssParser.parseURL(feed, async (err, parsed) => {
    if (err) handleError(err, res, 400, 1)
    const { about } = feedConverter(parsed.feed)
    try {
      const sub = await gateway.subscribe({ about, feed })
      return sub
    }
    catch (err) {
      handleError(err, res, 500)
    }
  })
}

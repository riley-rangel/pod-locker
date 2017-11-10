const handleError = require('../handle-error')

module.exports = async function findSubs(req, res, gateway) {
  try {
    const subs = await gateway.find()
    res.status(200).json(subs)
  }
  catch (err) {
    handleError(err, res, 500)
  }
}

const handleError = require('../handle-error')

module.exports = async function findSubs(req, res, gateway) {
  try {
    const subs = await gateway.find()
    return subs
  }
  catch (err) {
    handleError(err, res, 500)
  }
}

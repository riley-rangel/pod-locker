module.exports = function wrap(middleware) {
  return function (req, res, next) {
    return middleware(req, res, next)
      .catch(next)
  }
}

module.exports = function errorHandler(err, res, req, next) {
  console.error(err)
  res.status(500).json({
    error: 'Internal Server Error'
  })
}

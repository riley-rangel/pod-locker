module.exports = function handleError(err, res, status, exit = 0) {
  console.error(err)
  res.sendStatus(status)
  if (!exit) process.exit(exit)
}

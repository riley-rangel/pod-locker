require('dotenv/config')

module.exports = {
  port: process.env.SYNC_PORT,
  proxy: 'localhost:' + process.env.PORT,
  files: 'server/public/*'
}

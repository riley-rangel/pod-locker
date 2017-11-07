const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const subGateway = require('./sub-gateway')
const subRouter = require('./sub-router')

module.exports = function createApp(collection) {
  const app = express()
  const subs = subGateway(collection)
  const router = subRouter(subs)

  app
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.json())
    .use(router)

  return app
}

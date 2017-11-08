require('dotenv/config')
const { expect } = require('chai')
const { before, describe, it, after } = require('mocha')
const createApp = require('../server/create-app')
const { MongoClient } = require('mongodb')
const request = require('request')

describe('app', () => {

  let db
  let server
  let app

  before(done => {
    MongoClient.connect(process.env.MONGODB_URI_TEST, (err, _db) => {
      if (err) return console.error(err)
      db = _db
      app = createApp(db.collection('subscriptions'))
      server = app.listen(process.env.TEST_PORT, () => done())
    })
  })

  after(done => {
    server.close()
    db.close(() => done())
  })

  describe('POST route for subscriptions', () => {

    it('adds sub info to database and returns object with info', done => {
      const options = {
        uri: 'http://localhost:' + process.env.TEST_PORT + '/subscribe',
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ feed: 'https://www.relay.fm/material/feed' })
      }
      request(options, (error, response, body) => {
        const parsed = JSON.parse(body)
        expect(error).to.equal(null)
        expect(response.statusCode).to.equal(202)
        expect(parsed).to.be.an('object')
          .which.includes.property('about')
        expect(parsed).to.be.an('object')
          .which.includes.property('feed')
        expect(parsed.about).to.be.an('object')
        expect(Object.keys(parsed.about)).to.be.an('array')
          .with.lengthOf(9)
          .which.includes('title', 'description', 'pubDate', 'link', 'image')
          .and.includes('explicit', 'author', 'owner', 'email')
        const values = Object.values(parsed.about)
        expect(values).to.be.an('array')
          .with.lengthOf(9)
        values.forEach(value => {
          expect(typeof value).to.equal('string')
        })
        expect(parsed.feed).to.be.an('string')
        done()
      })
    })

  })

})

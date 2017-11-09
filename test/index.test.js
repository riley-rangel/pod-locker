require('dotenv/config')
const { expect } = require('chai')
const { before, beforeEach, describe, it, after } = require('mocha')
const createApp = require('../server/create-app')
const { MongoClient } = require('mongodb')
const request = require('request')
const testSample = require('./test-sample')

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

  beforeEach(async () => {
    const subsTest = db.collection('subscriptions')
    await subsTest.deleteMany()
    await subsTest.insertMany(testSample())
  })

  after(done => {
    server.close()
    db.close(() => done())
  })

  describe('POST /subscribe (add subscriptions)', () => {

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

  describe('GET /subscriptions', () => {

    it('returns an array of subscription objects.', done => {
      const uri = 'http://localhost:' + process.env.TEST_PORT + '/subscriptions'
      request(uri, (error, response, body) => {
        const parsed = JSON.parse(body)
        expect(error).to.equal(null)
        expect(response.statusCode).to.equal(200)
        expect(parsed).to.be.an('array').with.lengthOf(2)
        parsed.forEach(sub => {
          expect(Object.keys(sub)).to.be.an('array').with.lengthOf(4)
            .which.includes('about', 'feed', 'id', '_id')
          expect(Object.keys(sub.about)).to.be.an('array').with.lengthOf(9)
            .which.includes('title', 'description', 'pubDate', 'link', 'image')
            .and.includes('explicit', 'author', 'owner', 'email')
          const values = Object.values(sub.about)
          expect(values).to.be.an('array').with.lengthOf(9)
          values.forEach(value => {
            expect(typeof value).to.equal('string')
          })
          expect(sub.feed).to.be.a('string')
          expect(sub.id).to.be.a('string')
          expect(sub._id).to.be.an('string')
        })
        done()
      })
    })

  })

})

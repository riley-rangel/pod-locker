require('dotenv/config')
const { expect } = require('chai')
const { before, beforeEach, describe, it, after } = require('mocha')
const createApp = require('../server/create-app')
const { MongoClient } = require('mongodb')
const request = require('request')
const uuidv4 = require('uuid/v4')

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

function testSample() {
  return [
    {
      about: {
        author: 'Relay FM',
        description: 'Material is a weekly discussion about the Google and Android universe. Your intrepid hosts try to answer the question, “What holds up the digital world?” The answer, so far, is that it’s Google all the way down. Hosted by Andy Ihnatko, Russell Ivanovic, and Florence Ion.',
        email: 'hello@relay.fm',
        explicit: 'clean',
        image: 'http://relayfm.s3.amazonaws.com/uploads/broadcast/image/19/material_artwork.png',
        link: 'https://www.relay.fm/material',
        owner: 'Relay FM',
        pubDate: 'Fri, 03 Nov 2017 00:45:00 GMT',
        title: 'Material'
      },
      feed: 'https://www.relay.fm/material/feed',
      id: uuidv4()
    },
    {
      about: {
        author: 'The Verge',
        description: 'This Vergecast is your source for an irreverent and informative look at what\'s happening right now (and next) in the world of technology and gadgets. Hosted by Nilay Patel alongside a cavalcade of tech luminaries, The Vergecast is the only podcast you need to make sense of the week in tech news.',
        email: 'vergecastreplays@theverge.com',
        explicit: '',
        image: 'https://dfkfj8j276wwv.cloudfront.net/images/9d/1f/43/48/9d1f4348-093d-4844-b0fd-542fcaf189b5/c33f88bcfe2f5a8b9dce1dd4c387101f0127c44abb74bc29423a695cfc02a181a7cd9a9cf9fecf12b8d70b55fd6a0450510db9233984ff3e4b2d3ae3c5bd960b.jpeg',
        link: 'https://art19.com/shows/vergecast',
        owner: 'The Verge',
        pubDate: '',
        title: 'The Vergecast'
      },
      feed: 'http://feeds.feedburner.com/ThisIsMyNextPodcast',
      id: uuidv4()
    }
  ]
}

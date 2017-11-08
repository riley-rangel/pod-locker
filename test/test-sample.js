const uuidv4 = require('uuid/v4')

module.exports = function testSample() {
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

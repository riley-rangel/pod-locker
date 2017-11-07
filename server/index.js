require('dotenv/config')
const createApp = require('./create-app')
const { MongoClient } = require('mongodb')

MongoClient.connect(process.env.MONGODB_URI, (err, db) => {
  if (err) return console.error(err)
  const app = createApp(db.collection('subscriptions'))
  app.listen(process.env.PORT, console.log('Listening:', process.env.PORT))
})

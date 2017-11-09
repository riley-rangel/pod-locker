const uuidv4 = require('uuid/v4')

module.exports = function subGateway(collection) {
  return {
    async subscribe(podcast) {
      const subscribed = await collection.findOne(podcast)
      const subscription = { id: uuidv4(), ...podcast }
      if (!subscribed) await collection.insertOne(subscription)
      return (!subscribed) ? subscription : null
    },
    async find(filter = {}) {
      const subscriptions = await collection.find(filter).toArray()
      return subscriptions
    }
  }
}

const uuidv4 = require('uuid/v4')

module.exports = function subGateway(collection) {
  return {
    async subscribe(podcast) {
      const subscription = { id: uuidv4(), ...podcast }
      await collection.insertOne(subscription)
      return subscription
    }
  }
}

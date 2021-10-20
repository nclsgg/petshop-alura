const InvalidValue = require('./errors/InvalidValue')

class Serializer {
  json(data) {
    return JSON.stringify(data)
  }

  serialize(data) {
    if (this.contentType === 'application/json') {
      return this.json(data)
    }

    throw new InvalidValue(this.contentType)
  }
}

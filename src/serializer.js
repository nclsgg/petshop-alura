const InvalidValue = require('./errors/InvalidValue')

class Serializer {
  json(data) {
    return JSON.stringify(data)
  }

  serialize(data) {
    if (this.contentType === 'application/json') {
      return this.json(this.filter(data))
    }

    throw new InvalidValue(this.contentType)
  }

  filterObjects(data) {
    const newObject = {}

    this.publicFields.forEach((field) => {
      if (data.hasOwnProperty(field)) {
        newObject[field] = data[field]
      }
    })

    return newObject
  }

  filter(data) {
    if (Array.isArray(data)) {
      data = data.map((item) => {
        return this.filterObjects(item)
      })
    } else {
      data = this.filterObjects(data)
    }

    return data
  }
}

class ProviderSerializer extends Serializer {
  constructor(contentType) {
    super()
    this.contentType = contentType
    this.publicFields = ['id', 'company', 'category']
  }
}

module.exports = {
  Serializer: Serializer,
  ProviderSerializer: ProviderSerializer,
  acceptedFormats: ['application/json'],
}

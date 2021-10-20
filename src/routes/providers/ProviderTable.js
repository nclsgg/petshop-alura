const Model = require('./providersTableModel')
const NotFounded = require('../../errors/NotFounded')

module.exports = {
  insert(provider) {
    return Model.create(provider)
  },

  async searchById(id) {
    const foundedProvider = await Model.findOne({
      where: {
        id: id,
      },
    })

    if (!foundedProvider) {
      throw new NotFounded()
    }

    return foundedProvider
  },

  async update(id, updateData) {
    return Model.update(updateData, {
      where: { id: id },
    })
  },

  delete(id) {
    return Model.destroy({
      where: { id: id },
    })
  },
}

const Model = require('./providersTableModel')

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
      throw new Error('Fornecedor não encontrado')
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

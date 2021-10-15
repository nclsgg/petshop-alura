const Model = require("./providersTableModel")

module.exports = {
  insert(provider) {
    return Model.create(provider)
  },
}

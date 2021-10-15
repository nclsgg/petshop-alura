const sequelize = require("sequelize")
const instance = require("../../database/connection")

const columns = {
  company: {
    type: sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: sequelize.STRING,
    allowNull: true,
  },
  category: {
    type: sequelize.ENUM("ração", "brinquedos"),
    allowNull: true,
  },
}

const options = {
  freezeTableName: true,
  tableName: "providers",
  timestamps: true,
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  version: "version",
}

module.exports = instance.define("provider", columns, options)

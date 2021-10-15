const ProviderTable = require("./ProviderTable")

class Provider {
  constructor({ id, company, email, category, createdAt, updatedAt, version }) {
    this.id = id
    this.company = company
    this.email = email
    this.category = category
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.version = version
  }

  async create() {
    const result = await ProviderTable.insert({
      company: this.company,
      email: this.email,
      category: this.category,
    })

    this.id = result.id
    this.createdAt = result.createdAt
    this.updatedAt = result.updatedAt
    this.version = result.version
  }

  async load() {
    const providerFounded = await ProviderTable.searchById(this.id)
    this.company = providerFounded.company
    this.email = providerFounded.email
    this.category = providerFounded.category
    this.createdAt = providerFounded.createdAt
    this.updatedAt = providerFounded.updatedAt
    this.version = providerFounded.version
  }

  async update() {
    await ProviderTable.searchById(this.id)
    const fields = ["company", "email", "category"]
    const updateData = {}

    fields.forEach((field) => {
      const value = this[field]
      if (typeof value === "string" && value.length > 0) {
        updateData[field] = value
      }
    })

    if (Object.keys(updateData).length === 0) {
      throw new Error("Não foram fornecidos dados para atualizar!")
    }

    await ProviderTable.update(this.id, updateData)
  }
}

module.exports = Provider

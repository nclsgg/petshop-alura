class NotFounded extends Error {
  constructor() {
    super('Fornecedor não foi encontrado!')
    this.name = 'NotFounded'
    this.errorId = 0
  }
}

module.exports = NotFounded

class InvalidValue extends Error {
  constructor(contentType) {
    super(`O tipo de conteúdo ${contentType} não é suportado`)
    this.name = 'InvalidValue'
    this.errorId = 3
  }
}

module.exports = InvalidValue

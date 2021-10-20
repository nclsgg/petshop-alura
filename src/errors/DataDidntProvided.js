class DataDidntProvided extends Error {
  constructor() {
    super('Não foram fornecidos dados para atualizar!')
    this.name = 'DataDidntProvided'
    this.errorId = 2
  }
}

module.exports = DataDidntProvided

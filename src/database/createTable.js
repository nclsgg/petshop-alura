const tableModel = require("../routes/providers/providersTableModel")

tableModel
  .sync()
  .then(() => console.log("Tabela criada com sucesso"))
  .catch(console.log)

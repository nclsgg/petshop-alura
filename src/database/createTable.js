const tableModel = require("../routes/providers/providersTable")

tableModel
  .sync()
  .then(() => console.log("Tabela criada com sucesso"))
  .catch(console.log)

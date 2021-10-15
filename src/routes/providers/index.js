const router = require("express").Router()
const tableModel = require("./providersTableModel")
const Provider = require("./Provider")

router.get("/", async (req, res) => {
  const results = await tableModel.findAll()
  res.send(JSON.stringify(results))
})

router.post("/", async (req, res) => {
  const dataReceived = req.body
  const provider = new Provider(dataReceived)
  await provider.create()
  res.send(JSON.stringify(provider))
})

module.exports = router

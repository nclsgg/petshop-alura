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

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id
    const provider = new Provider({ id: id })
    await provider.load()
    res.send(JSON.stringify(provider))
  } catch (error) {
    res.send(
      JSON.stringify({
        message: error.message,
      })
    )
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id
    const dataReceived = req.body
    const data = Object.assign({}, dataReceived, { id: id })
    const provider = new Provider(data)

    await provider.update()
    res.send("Fornecedor atualizado: " + JSON.stringify(provider))
  } catch (error) {
    res.send(
      JSON.stringify({
        message: error.message,
      })
    )
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const id = requisição.params.id
    const provider = new Provider({ id: id })
    await provider.load()
  } catch (error) {
    res.send(
      JSON.stringify({
        message: error.message,
      })
    )
  }
  provider.delete()
})

module.exports = router

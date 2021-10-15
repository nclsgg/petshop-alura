const router = require("express").Router()
const tableModel = require("./providersTable")

router.use("/", async (req, res) => {
  const results = await tableModel.findAll()
  res.send(JSON.stringify(results))
})

module.exports = router

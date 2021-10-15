const customExpress = require("./config/customExpress")
const config = require("config")

const router = require("./routes/providers")

const app = customExpress()

app.listen(config.get("api.port"), (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log("Servidor rodando na porta 3000")

    app.get("/", (req, res) => {
      res.send("Você está usando o método GET")
    })

    app.use("/api/providers", router)
  }
})

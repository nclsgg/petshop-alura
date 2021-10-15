const customExpress = require("./config/customExpress")

const app = customExpress()

app.listen(3000, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log("Servidor rodando na porta 3000")

    app.get("/", (req, res) => {
      res.send("Você está usando o método GET")
    })
  }
})

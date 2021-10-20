const customExpress = require('./config/customExpress')
const config = require('config')

const router = require('./routes/providers')
const NotFounded = require('./errors/NotFounded')
const InvalidField = require('./errors/InvalidField')
const DataDidntProvided = require('./errors/DataDidntProvided')
const InvalidValue = require('./errors/InvalidValue')

const app = customExpress()

app.use((error, req, res, send) => {
  let status = 500

  if (error instanceof NotFounded) {
    status = 404
  }

  if (error instanceof InvalidField || error instanceof DataDidntProvided) {
    status = 400
  }

  if (error instanceof InvalidValue) {
    status = 406
  }

  res.status(status)

  res.send(
    JSON.stringify({
      message: error.message,
      id: error.errorId,
    })
  )
})

app.listen(config.get('api.port'), (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Servidor rodando na porta 3000')

    app.get('/', (req, res) => {
      res.send('Você está usando o método GET')
    })

    app.use('/api/providers', router)
  }
})

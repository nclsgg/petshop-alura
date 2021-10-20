const router = require('express').Router()
const tableModel = require('./providersTableModel')
const Provider = require('./Provider')
const { response } = require('express')

router.get('/', async (req, res) => {
  const results = await tableModel.findAll()
  res.status(200).send(JSON.stringify(results))
})

router.post('/', async (req, res) => {
  try {
    const dataReceived = req.body
    const provider = new Provider(dataReceived)
    await provider.create()
    res.status(201).send(JSON.stringify(provider))
  } catch (error) {
    res.send(
      JSON.stringify({
        message: error.message,
      })
    )
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const provider = new Provider({ id: id })
    await provider.load()
    res.status(200).send(JSON.stringify(provider))
  } catch (error) {
    res.send(
      JSON.stringify({
        message: error.message,
      })
    )
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const dataReceived = req.body
    const data = Object.assign({}, dataReceived, { id: id })
    const provider = new Provider(data)

    await provider.update()
    res.status(201).send('Fornecedor atualizado: ' + JSON.stringify(provider))
  } catch (error) {
    res.send(
      JSON.stringify({
        message: error.message,
      })
    )
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const provider = new Provider({ id: id })
    await provider.load()
    await provider.delete()
    res.status(204).end()
  } catch (error) {
    res.send(
      JSON.stringify({
        message: error.message,
      })
    )
  }
})

module.exports = router

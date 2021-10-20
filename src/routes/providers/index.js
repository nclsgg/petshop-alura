const router = require('express').Router()
const tableModel = require('./providersTableModel')
const Provider = require('./Provider')
const ProviderSerializer = require('../../serializer').ProviderSerializer

router.get('/', async (req, res) => {
  const results = await tableModel.findAll({ raw: true })
  res.status(200)
  const serializer = new ProviderSerializer(res.getHeader('Content-Type'))
  res.send(serializer.serialize(results))
})

router.post('/', async (req, res, next) => {
  try {
    const dataReceived = req.body
    const provider = new Provider(dataReceived)
    await provider.create()
    res.status(201)
    const serializer = new ProviderSerializer(res.getHeader('Content-Type'))
    res.send(serializer.serialize(provider))
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const provider = new Provider({ id: id })
    await provider.load()
    res.status(200)
    const serializer = new ProviderSerializer(res.getHeader('Content-Type'), [
      'email',
      'createdAt',
      'updatedAt',
      'version',
    ])
    res.send(serializer.serialize(provider))
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const dataReceived = req.body
    const data = Object.assign({}, dataReceived, { id: id })
    const provider = new Provider(data)

    await provider.update()
    res.status(201).end()
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const provider = new Provider({ id: id })
    await provider.load()
    await provider.delete()
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = router

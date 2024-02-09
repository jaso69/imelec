const {Router} = require('express')
const { clientGet, clientGetId, clientPost, clientPatch, clientDelete } = require('../controller/client.controller')
const router = Router()

router.get('/', clientGet)

router.get('/:id', clientGetId)

router.post('/', clientPost)

router.post('/:id', clientPatch)

router.delete('/:id', clientDelete)

module.exports = router

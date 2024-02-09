const {Router} = require('express')
const { proovedorGet, proovedorGetId, proovedorPost, proovedorPatch, proovedorDelete } = require('../controller/proovedor.controller')
const router = Router()

router.get('/', proovedorGet)

router.get('/:id', proovedorGetId)

router.post('/', proovedorPost)

router.post('/:id', proovedorPatch)

router.delete('/:id', proovedorDelete)

module.exports = router

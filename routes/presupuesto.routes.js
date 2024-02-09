const {Router} = require('express')
const { presupuestoGet, presupuestoGetId, presupuestoPost, presupuestoPatch, presupuestoDelete } = require('../controller/presupuesto.controller')
const router = Router()

router.get('/', presupuestoGet)

router.get('/:id', presupuestoGetId)

router.post('/', presupuestoPost)

router.patch('/:id', presupuestoPatch)

router.delete('/:id', presupuestoDelete)

module.exports = router
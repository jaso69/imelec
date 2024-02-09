const {Router} = require('express')
const { budgetGet, budgetGetId, budgetPost, budgetGetNumero, budgetPatch, budgetDelete } = require('../controller/budget.controller')
const router = Router()

router.get('/', budgetGet)

router.get('/:id', budgetGetId)

router.post('/', budgetPost)

router.post('/:id', budgetGetNumero)

router.patch('/:id', budgetPatch)

router.delete('/:id', budgetDelete)

module.exports = router
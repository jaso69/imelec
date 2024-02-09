const {Router} = require('express')
const { materialGet, materialGetId, materialPost, materialPatch, materialDelete } = require('../controller/material.controller')
const router = Router()

router.get('/', materialGet)

router.get('/:id', materialGetId)

router.post('/', materialPost)

router.patch('/:id', materialPatch)

router.delete('/:id', materialDelete)

module.exports = router
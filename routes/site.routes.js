const {Router} = require('express')

const { siteGet, siteGetId, sitePost, sitePatch, siteDelete } = require('../controller/site.controller')
const router = Router()

router.get('/', siteGet)

router.put('/:id', siteGetId)

router.post('/', sitePost)

router.patch('/:id', sitePatch)

router.delete('/:id', siteDelete)

module.exports = router
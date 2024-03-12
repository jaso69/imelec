const {Router} = require('express')
const { gptPost } = require('../controller/gpt.controller')
const router = Router()

router.post('/', gptPost)

module.exports = router

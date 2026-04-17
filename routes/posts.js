const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

router.get('/', postController.index )

router.delete('/:id', postController.destroy )

module.exports = router
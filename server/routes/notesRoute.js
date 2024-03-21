const express = require('express')
const router = express.Router()
const { getAllNotes, getSingleNote } = require('../controllers/notesController')

router.route('/notes').get(getAllNotes)
router.route('/note/:id').get(getSingleNote)

module.exports = router
const notes = require('../data/notes')

const getAllNotes = (req, res) => {
    res.json(notes)
}

const getSingleNote = (req, res) => {
    const { id } = req.params

    const item = notes.find(note => note._id === id)

    res.json(item)
}

module.exports = {
    getAllNotes,
    getSingleNote
}
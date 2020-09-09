const express = require('express');
const router = express.Router();

const Note = require('../../models/Note');

/**
 * @route GET api/notes
 * @desc get all notes
 * @access public
 */
router.get('/*', (request, response) => {
    //response.json({msg: "notes works!"})
    Note.find()
        .sort({title: -1})
        .then(notes => response.json(notes))
});


/**
 * @route POST api/notes
 * @desc Create a note
 * @access public
 */
router.post('/', (request, response) => {
    const newNote = new Note({
        title: request.body.title,
        content: request.body.content
    });

    newNote.save().then(note => response.json(note));
});

/**
 * @route DELETE api/notes
 * @desc DELETE a note
 * @access public
 */

 router.delete('/:id', (request, response) => {
     // fetches id from uri
     Note.findById(request.params.id)
        .then(note => note.remove().then(() => response.json({success: true})))
        .catch(err => response.status(404).json({success: false}))
 })

module.exports = router;
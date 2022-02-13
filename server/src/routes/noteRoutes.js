const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const {
    getNotes,
    addNote,
    updateNote,
    deleteNote
} = require('../controllers/noteController');

router.route('/').get(authMiddleware, getNotes).post(authMiddleware, addNote);
router
    .route('/:id')
    .put(authMiddleware, updateNote)
    .delete(authMiddleware, deleteNote);

module.exports = router;

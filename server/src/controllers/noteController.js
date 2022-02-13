const asyncHandler = require('express-async-handler');
const database = require('../database');

// @desc    Get all notes
// @route   GET /notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
    const notes = await database.note.findMany({
        where: {
            userId: req.user.id
        }
    });

    res.status(200).json({
        notes: notes
    });
});

// @desc    Set note
// @route   POST /notes
// @access  Private
const addNote = asyncHandler(async (req, res) => {
    const { title, content, color, group } = req.body;

    if (!title || !content) {
        res.status(400);
        throw new Error('Please provide title and content');
    }

    const note = await database.note.create({
        data: {
            userId: req.user.id,
            title,
            content,
            color: color == null ? '#F6A7C1' : color,
            noteGroupId: group == null ? null : group,
            public: false
        }
    });

    res.status(200).json({
        message: 'Set Note',
        note
    });
});

// @desc    Update note
// @route   PUT /notes/:id
// @access  Private
const updateNote = asyncHandler(async (req, res) => {
    const note = await database.note.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    if (!note) {
        res.status(404);
        throw new Error('Note does not exist');
    }

    if (note.userId != req.user.id) {
        res.status(403);
        throw new Error('Unauthorized');
    }

    const updated = await database.note.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            ...req.body
        }
    });

    res.status(200).json({
        message: 'Update Note',
        updated
    });
});

// @desc    Delete a note
// @route   DELETE /notes/:id
// @access  Private
const deleteNote = asyncHandler(async (req, res) => {
    const note = await database.note.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    if (!note) {
        res.status(404);
        throw new Error('Note does not exist');
    }

    if (note.userId != req.user.id) {
        res.status(403);
        throw new Error('Unauthorized');
    }

    await database.note.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json({
        message: 'Delete Note',
        id: req.params.id
    });
});

module.exports = {
    getNotes,
    addNote,
    updateNote,
    deleteNote
};

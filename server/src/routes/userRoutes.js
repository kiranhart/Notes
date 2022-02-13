const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const {
    getMe,
    registerUser,
    loginUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', authMiddleware, getMe);

router
    .route('/:id')
    .put(authMiddleware, updateUser)
    .delete(authMiddleware, deleteUser);

module.exports = router;

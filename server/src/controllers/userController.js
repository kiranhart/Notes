const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const database = require('../database');

// @desc    Register user
// @route   GET /users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        res.status(400);
        throw new Error('Please enter all fields');
    }

    console.log(email);

    const userAlreadyExists = await database.User.findFirst({
        where: {
            email
        }
    });

    if (userAlreadyExists) {
        res.status(400);
        throw new Error('A user with that email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await database.User.create({
        data: {
            firstName,
            lastName,
            email,
            password: hashedPassword
        }
    });

    if (user) {
        return res.status(201).json({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user.id)
        });
    } else {
        res.status(400);
        throw new Error('Unable to register user');
    }
});

// @desc    Authenticate user
// @route   POST /users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('Please enter all fields');
    }

    const user = await database.User.findFirst({
        where: {
            email
        }
    });

    if (!user) {
        res.status(400);
        throw new Error('User does not exist');
    }

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user.id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid user credentials');
    }
});

// @desc    Get user
// @route   GET /users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json({
        user: req.user
    });
});

// @desc    Update user
// @route   PUT /users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
    if (req.params.id != req.user.id) {
        res.status(403);
        throw new Error('You are not authorized to perform this action');
    }

    res.status(200).json({
        message: 'Update user'
    });
});

const deleteUser = asyncHandler(async (req, res) => {
    if (req.params.id != req.user.id) {
        res.status(403);
        throw new Error('You are not authorized to perform this action');
    }

    await database.User.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json({
        message: 'Deleted user',
        id: req.user.id
    });
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
};

module.exports = {
    getMe,
    registerUser,
    loginUser,
    updateUser,
    deleteUser
};

const jwt = require('jsonwebtoken');
const database = require('../database');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // get user
            req.user = await database.user.findUnique({
                where: {
                    id: decoded.id
                },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true
                }
            });

            next();

        } catch (error) {
            console.log(error)
            res.status(401);
            throw new Error('Please authenticate');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Please authorized, token not found');
    }
});

module.exports = protect;

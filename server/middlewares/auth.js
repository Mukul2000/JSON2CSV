const { decode } = require('jsonwebtoken');

async function authByToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[0];

    if (!token) {
        return res.status(401).json({
            errors: {
                body: ['Authorization Failed', 'Token missing'],
            }
        });
    }

    try {

        const decodedData = decode(token);
        req.userId = decodedData?.sub; // Google's unique ID for every user
        req.userName = decodedData?.name;
        req.userPicture = decodedData?.picture;

        if (!req.userId) throw 'Unauthenticated';
        if (!req.userName) throw 'Something went wrong';

        next();
    }
    catch (e) {
        return res.status(401).json({
            errors: {
                body: ['Authorization Failed', e],
            }
        });
    }
}

module.exports = authByToken;
const { decode } = require('jsonwebtoken');

async function authByToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ');

    if (!token) {
        return res.status(401).json({
            errors: {
                body: ['Authorization Failed', 'Token missing'],
            }
        });
    }
    console.log(token);
    try {
        const decodedData = decode(token);
        console.log(decodedData);
        req.userId = decodedData?.sub;
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
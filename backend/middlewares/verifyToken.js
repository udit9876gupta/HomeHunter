import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'You are not authorized!' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) return res.status(403).json({ message: 'Token is not valid!' });
        req.userId = payload.id;
        next();
    });
}
const jwt = require('jsonwebtoken');
const Company = require('../models/Company');

module.exports = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token is required');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.company = await Company.findById(decoded.id);
        next();
    } catch (error) {
        return res.status(401).send('Invalid token');
    }
};

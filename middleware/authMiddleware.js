import jwt from 'jsonwebtoken';

// Middleware to authenticate requests using JWT
const authMiddleware = (req, res, next) => {
    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized - No token provided' });

    try {
        // Verify the token and attach the decoded user information to the request object
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next(); // Allow the request to proceed
    } catch (e) {
        // Handle specific JWT errors
        if (e.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        if (e.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired' });
        }
        // Handle other errors
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export default authMiddleware; 
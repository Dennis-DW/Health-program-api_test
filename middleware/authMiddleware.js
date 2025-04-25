import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized - No token provided' });
  
    try {
      req.user = jwt.verify(token, process.env.JWT_SECRET);
      next();
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
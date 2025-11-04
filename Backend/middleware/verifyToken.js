import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        success: false,
        message: 'No token provided. Authorization denied.',
      });
      return;
    }

    // Extract token
    const token = authHeader.split(' ')[1];

    if (!token) {
      res.status(401).json({
        success: false,
        message: 'Invalid token format. Authorization denied.',
      });
      return;
    }

    // Verify token
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      res.status(500).json({
        success: false,
        message: 'JWT secret not configured.',
      });
      return;
    }

    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).json({
        success: false,
        message: 'Invalid token. Authorization denied.',
      });
      return;
    }
    
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({
        success: false,
        message: 'Token expired. Please login again.',
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: 'Token verification failed.',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
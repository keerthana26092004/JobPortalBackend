const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const adminMiddleware = async (req, res, next) => {
  
  const token = req.header("Authorization").split(" ")[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
 
    const decoded = jwt.verify(token, "secret_key");
    
    
    const user = await User.findById(decoded.userId);
    
   
    if (!user || user.role != "admin") {
      return res.status(403).json({ error: 'Access denied' });
    }

   
    req.user = user;

    next();
  } catch (err) {
    console.error('Error in adminMiddleware:', err);
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = adminMiddleware;

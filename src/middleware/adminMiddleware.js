//Restrict access to admin-only routes
const authAdmin = (req, res, next) => {
  // Check if the user is authenticated and has admin privileges
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }
  // Allow the request to proceed if the user is an admin
  next();
};

export default authAdmin;
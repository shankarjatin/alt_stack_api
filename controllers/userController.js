const User = require('../models/User');

exports.getUserInfo = async (req, res, next) => {
    try {
        // Extract user ID from the token
        const userId = req.user.userId;
        // Find the user in the database
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Return the user information
        res.status(200).json({ username: user.username });
    } catch (error) {
        next(error);
    }
};

const activeSessions = {}; // Object to store active sessions with their last activity time

function checkInactiveUsers(req, res, next) {
    const now = new Date();
    for (const username in activeSessions) {
        if ((now - activeSessions[username].lastActivity) > 120000) { // 2 minutes in milliseconds
            delete activeSessions[username];
        }
    }
    next();
}

module.exports = { activeSessions, checkInactiveUsers };

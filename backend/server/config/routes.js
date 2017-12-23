const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const users = require('../controllers/users_ctrl.js')
const media = require('../controllers/media_ctrl.js')
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false })

module.exports = function(app) {
    // protected routes
    app.get('/api/media/', requireAuth, media.getAll);
    app.post('/api/media/', requireAuth, media.add);
    app.get('/api/media/:id', requireAuth, media.getByUser);
    app.delete('/api/media/:id', requireAuth, media.delete);
    app.put('/api/media/:id', requireAuth, media.edit);
    app.get('/api/media/:id/like', requireAuth, media.like);
    // -----

    // login reg
    app.post('/api/users/signup', users.signup)
    app.post('/api/users/signin', requireSignIn, users.signin)
}

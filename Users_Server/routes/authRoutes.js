const passport = require('passport');

module.exports = app => {
  // google auth route
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  // google callback route
  app.get('/auth/google/callback', passport.authenticate('google'));
}

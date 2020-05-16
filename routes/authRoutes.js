const passport = require('passport');

module.exports = app => {
  // google auth route
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  // google callback route
  app.get('/auth/google/callback', passport.authenticate('google'));

  // logout route
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send('<h3>You signed out!</h3>')
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })
}

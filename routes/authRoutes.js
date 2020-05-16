const passport = require('passport');

module.exports = app => {

  // home page route
  app.get('/', (req, res) => {
    res.send(
      `<h1><b><center>Welcome to CodeBase Server</center></b></h1>`
    )
  })

  // google auth route
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  // google callback route
  app.get('/auth/google/callback', passport.authenticate('google'));

  // logout route
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(
      `<h2><b><center>You signed out!</center></b></h2>`
    )
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })
}

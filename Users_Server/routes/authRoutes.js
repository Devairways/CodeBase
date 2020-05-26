const passport = require('passport');

module.exports = app => {

  // home page route
  app.get('/', (req, res) => {
    res.render('index');
  })

  // documentation route
  app.get('/documentation', (req, res) => {
    res.render('documentation');
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
      `<h2><center>You signed out!</center></h2>`
    )
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })
}

// // keys.js:
// // this code figures out what set of credentials to return depending on the application status

if (process.env.NODE_ENV === 'production') {
  // if in production - return the prod keys
  module.exports = require('./prod');
} else {
  // if in development - return the dev keys
  module.exports = require('./dev');
}
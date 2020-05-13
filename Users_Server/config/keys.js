// // keys.js:
// // this code figures out what set of credentials to return depending on the application status

// if (process.env.NODE_ENV === 'production') {
//   // if in production - return the prod keys
//   module.exports = require('./prod');
// } else {
//   // if in development - return the dev keys
//   module.exports = require('./dev');
// }

module.exports = {
  googleClientID: '703539071362-vs9vffnmmsb07197643jvk38dqfrs8u9.apps.googleusercontent.com',
  googleClientSecret: 'ggY92c4Xd5hp2Xek0qwvtsH1',
  mongoURI: 'mongodb+srv://admin:Codebase!@cluster0-md6hl.mongodb.net/test?retryWrites=true&w=majority'
  // cookieKey: process.env.COOKIE_KEY
}
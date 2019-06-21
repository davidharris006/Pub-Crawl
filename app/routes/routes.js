var passport = require("../config/passport")

module.exports = function(app) {

    app.get('/auth/google',
    passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }))
  
  // GET /auth/google/callback
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  If authentication fails, the user will be redirected back to the
  //   login page.  Otherwise, the primary route function function will be called,
  //   which, in this example, will redirect the user to the home page.
  app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    })
};
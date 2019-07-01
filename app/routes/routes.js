var passport = require("../config/passport")
var Handlebars =require("handlebars");

module.exports = function(app) {

  app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(user);
    // Successful authentication, redirect home.
   
    // console.log(userData.email + userData.name);
    Handlebars.registerPartial("user-block",
    user);
    res.redirect('/loggedin');
    
  });
  
  passport.serializeUser(function(user, done) {
    
  
    done(null, user.id);
  });
  
  // passport.deserializeUser(function(id, done) {
  //   User.findById(id, function(err, user) {
  //     done(err, user);
  //   });
  // });
  app.get('/api/users/me',
   passport.authenticate('google', { session: false }, { scope: ['email', 'profile' ]}),
   function(req, res) {
     res.json({ name: req.user.name, email: req.user.emial });
   });
};
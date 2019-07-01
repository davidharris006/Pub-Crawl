var passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:     "66709955163-gn4qb9posephajpv0m5vdres6g3e29fr.apps.googleusercontent.com",
    clientSecret: "znnOzafewcu83s3uYbNGUmTb",
    callbackURL: "http://localhost:8080/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    if (profile) {
      user = profile;
      return done(null, user);
      }
      else {
      return done(null, false);
      }
  }
));

module.exports = passport

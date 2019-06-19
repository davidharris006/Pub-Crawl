var GoogleStrategy = require('passport-google-oauth20').Strategy;
var passport = require('passport')

passport.use(new GoogleStrategy({
    clientID: "66709955163-gn4qb9posephajpv0m5vdres6g3e29fr.apps.googleusercontent.com",
    clientSecret: "znnOzafewcu83s3uYbNGUmTb",
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

module.exports = passport
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const config = require('./config/keys');
const keys = require('./config/keys');

const app = express();

// new GoogleStrategy will be an object named 'google' for later use.
passport.use(new GoogleStrategy({ 
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (acessToken, refreshToken, profile, done) => {
    console.log("access token: ", acessToken);
    console.log("refresh token: ", refreshToken);
    console.log("profile: ", profile);
    console.log("done: ", done);
}));

app.get('/auth/google',
    passport.authenticate('google', {
    scope: ['profile','email']
})
);

// The app.gep below is for users who arent signing for the first time? 
// The big diff is that it uses the callback function to print the access token 
app.get('/auth/google/callback', passport.authenticate('google'));
const PORT = process.env.PORT || 5000
app.listen(PORT);
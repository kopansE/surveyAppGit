const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users'); 

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user=>{
            done(null, user);
        });
});

// new GoogleStrategy will be an object named 'google' for later use.
passport.use(new GoogleStrategy({ 
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (acessToken, refreshToken, profile, done) => {
    // console.log("access token: ", acessToken);
    // console.log("refresh token: ", refreshToken);
    // console.log("profile: ", profile);
    // console.log("done: ", done);
    User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if(existingUser){
                // user already exists
                done(null, existingUser);
            }
            else{
                // no user exists - create and save
                new User({googleId: profile.id})
                    .save()
                    .then(user => done(null, user));
            }
        })

}));
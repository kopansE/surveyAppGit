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
}, 
async (acessToken, refreshToken, profile, done) => {
    // console.log("access token: ", acessToken);
    // console.log("refresh token: ", refreshToken);
    // console.log("profile: ", profile);
    // console.log("done: ", done);
    const existingUser = await User.findOne({ googleId: profile.id })
    if(existingUser){
        // user already exists - return it
        return done(null, existingUser);
    }

    // no user exists - create and save
    const user = await new User({googleId: profile.id}).save();
    done(null, user);
}));
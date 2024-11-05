const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google',
        passport.authenticate('google', {
        scope: ['profile','email']
    })
    );

    // The app.gep below is for users who arent signing for the first time? 
    // The big diff is that it uses the callback function to print the access token 
    app.get('/auth/google/callback', passport.authenticate('google'));
};
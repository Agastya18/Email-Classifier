import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { googleAuthCallback } from '../services/authService.js';
import dotenv from 'dotenv';
dotenv.config();
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
   // passReqToCallback: true,
},
    googleAuthCallback
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
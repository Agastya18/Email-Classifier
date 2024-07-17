export const googleAuthCallback = (token, tokenSecret, profile, done) => {
    return done(null, { profile, token });
};

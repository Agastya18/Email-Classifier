export const googleAuthCallback = (token,access_token, tokenSecret, profile, done) => {
    const user = { profile, token,access_token, tokenSecret };
    return done(null, user);
};

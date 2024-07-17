import passport from 'passport';

export const googleAuth = passport.authenticate('google', { scope: ['profile','email'] });

export const googleAuthCallback = passport.authenticate('google', { failureRedirect: '/',successRedirect: 'http://localhost:5173/email' });

export const LoginSuccess=(req,res)=>{
   
    if(req.user){
        res.status(201).json({
            message:"Login Success",
            success: true ,
            user: req.user
        });
    }
};

export const logout = (req, res) => {
    req.logout((err) => {
        if (err) {
          return next(err);
        }
       
        res.redirect('http://localhost:5173');
      });
};

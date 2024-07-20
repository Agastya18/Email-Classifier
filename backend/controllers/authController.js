import passport from 'passport';

export const googleAuth = passport.authenticate('google', { scope: ['profile','email','https://www.googleapis.com/auth/gmail.readonly'] });

export const googleAuthCallback = passport.authenticate('google', { failureRedirect: '/',successRedirect: 'https://email-classifier-lc2v.onrender.com/email' });

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
        //   return next(err);
        console.log(err)
        }else{
            res.redirect('https://email-classifier-lc2v.onrender.com');
        }
       
       
      });
};

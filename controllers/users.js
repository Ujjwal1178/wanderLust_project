const User = require('../models/user');

//signup route
module.exports.signupRoute = (req, res) => {
    res.render("users/signup.ejs") ;
};


//sign up post req form data 
module.exports.newUser = async (req, res,next) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ username, email });
      const registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.login(registeredUser, (err) =>{
        if(err){
          return next(err);
        }
        req.flash("success", "Welcome to Wanderlust");
      res.redirect('/listings');
      });
      
    } catch (err) {
      req.flash("error", err.message);
      res.redirect("/signup");
    }
}


//login form render || login route
module.exports.loginFormRender = (req, res) => {
    res.render("users/login.ejs");
};

//login form post req , login form data
module.exports.loginData = async (req, res) => {
    req.flash('success',"Welcome back to wanderlust");
    let redirectUrl = res.locals.redirectUrl || "/listings"; 

    res.redirect(redirectUrl);
};


//Making user logged out
module.exports.userLogOut = async (req, res, next)=>{
    req.logOut((err) =>{
        if(err){
            return next(err);
        }
        req.flash('success','You are logged out!');
        res.redirect('/listings');
    });
};
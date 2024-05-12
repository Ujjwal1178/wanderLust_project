const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

//signup route && sign up post req form data
router
  .route("/signup")
  .get(userController.signupRoute)
  .post(wrapAsync(userController.newUser));

// login route && login form data post req
router
  .route("/login")
  .get(userController.loginFormRender)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.loginData
  );

//logged out the user
router.get("/logout", userController.userLogOut);

module.exports = router;

if(process.env.NODE_ENV != "production"){
  require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 8080;
// const MONOGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL
const session = require('express-session');
const MongoStore = require("connect-mongo");
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const ExpressError = require("./utils/ExpressError.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/reviews.js");
const userRouter = require("./routes/user.js");

app.set("views", path.join("views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);


//connecting to db
main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}


const store = MongoStore.create( {
  mongoUrl : dbUrl,
  crypto : {
    secret :  process.env.SECRET, 
  },
  touchAfter : 24*3600,
})

store.on('error', () =>{
  console.log('Error In Mongo Session Store',err);
})


//session object

const sessoionOptions = {
  store,
  secret : process.env.SECRET,
  resave : false,
  saveUninitialized : true,
  cookie : {
    expires : Date.now() + 7 * 24  * 60 * 60 * 1000 ,
    maxAge : 7 * 24  * 60 * 60 * 1000, 
    httpOnly :  true,
  }
};





//passing session object in session middleware
app.use(session(sessoionOptions));
//using flash
app.use(flash());



//Initializing passport as a middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy((User.authenticate())));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());






//flash middleware
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currUser = req.user;
  next();
}); 


app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});

app.get('/',(req,res)=>{
  res.redirect('/listings');
});


//Requiring routes from routes folder
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use('/',userRouter);




app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not found!!!"));
});






app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!!" } = err;
  res.status(statusCode);
  res.render("error.ejs", { err });
});

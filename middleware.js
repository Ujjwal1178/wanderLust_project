const Listing = require('./models/listing');
const ExpressError = require('./utils/ExpressError');
const {listingSchema,reviewSchema} = require("./schema");
const Review = require('./models/reviews');



module.exports.isloggedIn = (req,res,next) =>{
    if(!req.isAuthenticated()){
      //redirect url
      // console.log(req);
      req.session.redirectUrl = req.originalUrl; 
      req.flash('error',"You Must be logged in before to create a listing!!!");
      return res.redirect('/signup');
    }
    next();
};  


module.exports.isloggedInEdit = (req,res,next) =>{
    // console.log(req.user);
    if(!req.isAuthenticated()){
      req.session.redirectUrl = req.originalUrl; 
      req.flash('error',"You Must be logged in before to make any change!!!");
      return res.redirect('/signup');
    }
    next();
}; 

module.exports.reviewChecker = (req,res,next)=>{
  if(!req.isAuthenticated()){
    let id = req.params.id;
    req.session.redirectUrl = `/listings/${id}`; 

    req.flash('error',"You Must be logged in before to make any change!!!");
    return res.redirect('/signup');
  }
  next();
}

module.exports.saveRedirectUrl = (req,res,next)=>{
  if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
  }

  next();
}

module.exports.isBookingListingOwner = async(req,res,next)=>{
  let { id } = req.params;
    let listing = await Listing.findById(id);
    if(listing.owner.equals(res.locals.currUser._id)){
      req.flash("error","You are the owner, You can not book");
      return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    throw new ExpressError(500, error);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    throw new ExpressError(500, error);
  } else {
    next();
  }
};






module.exports.isOwner = async (req,res,next) => {
  let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
      req.flash("error","You are not the owner of this listing");
      return res.redirect(`/listings/${id}`);
    }
    next();
};



module.exports.isReviewAuthor =async (req,res,next) =>{
  let {id,reviewId} = req.params
  let review = await Review.findById(reviewId);
  
    if(!review.author.equals(res.locals.currUser._id)){
      req.flash("error","You do not have permission to edit this review!");
      return res.redirect(`/listings/${id}`);
    }
    next();
};  
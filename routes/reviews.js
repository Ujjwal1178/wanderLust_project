const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require('../models/reviews.js');
const Listing = require("../models/listing.js");
const {validateReview, reviewChecker,isReviewAuthor} = require('../middleware.js');
const reviewController = require('../controllers/reviews');


//Review Post request || New Review
router.post("/",reviewChecker,validateReview,wrapAsync(reviewController.newReview));

//Delete review Route
router.delete("/:reviewId",reviewChecker,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;

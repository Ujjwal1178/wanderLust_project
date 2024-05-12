const Listing = require('../models/listing');
const Review = require('../models/reviews');

//new review post request
module.exports.newReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = await new Review(req.body.review) ;
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    console.log("New review saved");
    req.flash('success',"New review added successfully");
    res.redirect(`/listings/${req.params.id}`);
};

//review delete
module.exports.destroyReview = async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, {
      $pull: { reviews: req.params.reviewId },
    });
    await Review.findByIdAndDelete(req.params.reviewId);
    console.log("Review Deleted");
    req.flash('success',"Review deleted successfully");
    res.redirect(`/listings/${req.params.id}`);
}
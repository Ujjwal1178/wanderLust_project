const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {
  isloggedIn,
  isloggedInEdit,
  isOwner,
  validateListing,
  isBookingListingOwner,
} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

//new route form page
router.get("/new", isloggedIn, listingController.renderNewForm);

//index route && create new route form data post req
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isloggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.newListingFromData)
  );

//booking get req

router.get(
  "/:id/booking",
  isloggedIn,
  isBookingListingOwner,
  listingController.bookListing
);

router.post("/booking", (req, res) => {
  console.log("Listing Booked SuccessFully");
  req.flash(
    "success",
    "Your Req is initated. Owner of your booked listing will contact you in next 24 hour, As soon as your req is acceptd you'll get a message for payment:), Thank you for choosing wanderlust!!!"
  );
  res.redirect("/listings");
});

//show route , edit listing && Delete listing
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isloggedInEdit,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.editListing)
  )
  .delete(isloggedInEdit, isOwner, wrapAsync(listingController.delete));

// Edit listing form route
router.get(
  "/:id/edit",
  isloggedInEdit,
  isOwner,
  wrapAsync(listingController.editListingFrom )
);

router.get('/listingcategory/:value',listingController.listingcategory);

module.exports = router;

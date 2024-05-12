const Listing = require('../models/listing');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

//index route
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    // console.log(allListings);
    res.render("listings/index.ejs", { allListings });
  }



//add new listing form render 
module.exports.renderNewForm =  (req, res) => {
    res.render("listings/new.ejs");
}



//show listing
module.exports.showListing = async (req, res) => {
    try {
      let { id } = req.params;
      const data = await Listing.findById(id)
        .populate({
          path: "reviews",
          populate: { 
            path: "author" 
        }
       })
        .populate("owner");
      // console.log(id);
      if (!data) {
        req.flash("error", "Listing you request for does not exist");
        res.redirect("/listings");
      }

      res.render("listings/show.ejs", { data });
    } catch (err) {
      req.flash("error", "Listing you request for does not exist");
      res.redirect("/listings");
    }
}

//edit listing
module.exports.editListing = async (req, res) => {
    // console.log(req.body.listing.location);
    let response = await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1,
    })
    .send();

    // console.log(response.body.features[0].geometry);
    let { id } = req.params;
    
    let listing = await Listing.findByIdAndUpdate(id, req.body.listing);
    
    // console.log(req.body.listing.location);
    if(typeof req.file !== "undefined"){
      let url = req.file.path;
      let filename = req.file.filename;
      listing.image = {url,filename};
      
      await listing.save();
    }
    listing.geometry = response.body.features[0].geometry;
    await listing.save();
    // console.log(listing);
    req.flash("success", "Listing edit successfully");
    res.redirect(`/listings/${id}`);
}


//new listing form data Post req || Create listing
module.exports.newListingFromData = async (req, res) => {
    let response = await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1,
    })
    .send();
    let url = req.file.path;
    let filename = req.file.filename;
    const user = new Listing(req.body.listing);
    user.owner = req.user._id;
    user.image = {url, filename};
    user.geometry = response.body.features[0].geometry;

    let savedListing = await user.save();
    console.log(savedListing);
    req.flash("success", "New listing created successfully!!");
    res.redirect("/listings");
};

//listing edit form route
module.exports.editListingFrom = async (req, res) => {
    let { id } = req.params;
    let user = await Listing.findById(id);
    if (!user) {
      req.flash("error", "Listing you requested for does not exist");
      res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { user });
};


module.exports.bookListing = async (req,res,next)=>{
  const {id} = req.params;
  let user = await Listing.findById(id);
  console.log(id);
  res.render('listings/booking.ejs',{user});
}

module.exports.listingcategory = async(req,res)=>{
  let {value} = req.params;
  console.log(value);
  let allListings = await Listing.find({category : value});
  // console.log(allListings);
  // res.redirect('/listings');
  if(allListings.length != 0){
    return res.render('listings/category.ejs',{allListings});
  }
  req.flash('error',"Listing of this category does not exist");
  res.redirect('/listings');
};

//listing delete req
module.exports.delete = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully");
    console.log("data deleted");
    res.redirect("/listings");
};
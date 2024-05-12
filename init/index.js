const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const MONOGO_URL = "mongodb://127.0.0.1:27017/wanderlust";


main().then(()=>{
    console.log('connection established');
}).catch(err => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONOGO_URL);
}

const initDB = async() => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner : "663ac9c503a8bbb1446e3760"}));
    await Listing.insertMany(initData.data);
    console.log('data was initilized');
};

initDB();
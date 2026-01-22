const mongoose = require("mongoose");
const Listing = require("./models/listing.js"); // adjust path if needed
const sampleListings = require("./init/data.js");    // your data.js file

mongoose.connect("mongodb://127.0.0.1:27017/wanderheaven")
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch(err => {
    console.log("❌ Error:", err);
  });

const seedDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(sampleListings);
  console.log("🌱 Database seeded with listings!");
};

seedDB().then(() => mongoose.connection.close());

module.exports = sampleListings;

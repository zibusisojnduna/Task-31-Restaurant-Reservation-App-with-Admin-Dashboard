const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  cuisine: { type: String, required: true },
  availableSlots: [{ type: String }], // e.g., ["12:00 PM", "2:00 PM"]
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);

const Restaurant = require("../models/restaurant");

// Get all restaurants
exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Get a single restaurant by ID
exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ msg: "Restaurant not found" });

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Create a new restaurant (Admin only)
exports.createRestaurant = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Access denied" });
    }

    const { name, location, cuisine, availableSlots } = req.body;

    const restaurant = new Restaurant({ name, location, cuisine, availableSlots });
    await restaurant.save();

    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Update restaurant details (Admin only)
exports.updateRestaurant = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Access denied" });
    }

    const updatedRestaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedRestaurant) return res.status(404).json({ msg: "Restaurant not found" });

    res.json(updatedRestaurant);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Delete a restaurant (Admin only)
exports.deleteRestaurant = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Access denied" });
    }

    await Restaurant.findByIdAndDelete(req.params.id);
    res.json({ msg: "Restaurant deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

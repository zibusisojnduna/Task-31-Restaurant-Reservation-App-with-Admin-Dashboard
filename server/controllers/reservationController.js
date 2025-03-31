const Reservation = require("../models/reservation");

// Create a reservation (User)
exports.createReservation = async (req, res) => {
  try {
    const { restaurantId, date, time } = req.body;

    const reservation = new Reservation({
      user: req.user.userId,
      restaurant: restaurantId,
      date,
      time,
      status: "pending",
    });

    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Get user's reservations
exports.getUserReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.user.userId }).populate("restaurant", "name location cuisine");
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Get all reservations for a restaurant (Admin only)
exports.getRestaurantReservations = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Access denied" });
    }

    const reservations = await Reservation.find({ restaurant: req.params.restaurantId }).populate("user", "name email");
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Update reservation status (Admin)
exports.updateReservationStatus = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Access denied" });
    }

    const { status } = req.body;
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, { status }, { new: true });

    if (!reservation) return res.status(404).json({ msg: "Reservation not found" });

    res.json(reservation);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Cancel a reservation (User)
exports.cancelReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findOneAndDelete({ _id: req.params.id, user: req.user.userId });

    if (!reservation) return res.status(404).json({ msg: "Reservation not found or unauthorized" });

    res.json({ msg: "Reservation cancelled" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

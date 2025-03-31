const express = require("express");
const { createReservation, getUserReservations, getRestaurantReservations, updateReservationStatus, cancelReservation } = require("../controllers/reservationController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createReservation);
router.get("/", authMiddleware, getUserReservations);
router.get("/restaurant/:restaurantId", authMiddleware, getRestaurantReservations);
router.put("/:id/status", authMiddleware, updateReservationStatus);
router.delete("/:id", authMiddleware, cancelReservation);

module.exports = router;

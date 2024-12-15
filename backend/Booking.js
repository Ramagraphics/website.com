const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  event_date: {
    type: Date,
    required: true,
  },
  event_time: {
    type: String,
    required: true,
  },
  event_type: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  postal_code: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;

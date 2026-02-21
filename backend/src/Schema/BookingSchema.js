const { Schema, model } = require("mongoose");

const BookingSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true }, 
  service: { type: String, required: true },
  status: { type: String, default: 'Pending' }, // Pending, In-Suite, Complete, Cancelled
  arrivalTime: { type: Date }, // Set when patient checks in
  treatmentStartTime: { type: Date }, // Set when they move to In-Suite
  nextAppointmentDate: { type: Date, default: null }, // Crucial for Follow-up logic
  createdAt: { type: Date, default: Date.now }
});

const Appointment = model("appointment", BookingSchema);

module.exports = Appointment
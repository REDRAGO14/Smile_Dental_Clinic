const Appointment = require("../Schema/BookingSchema");

exports.Booking = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, service } = req.body;
    const booked = await Appointment.create({
      fullName: fullName,
      email: email,
      phoneNumber,
      service: service,
    });
    await booked.save();
    return res.status(201).json({
      message: "Booking Successful!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("internal server error");
  }
};

exports.fetchBooking = async (req, res) => {
  try {
    const bookings = await Appointment.find()
    return res.status(201).json(bookings)
    console.log(bookings)
  } catch (error) {}
};

exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedBooking = await Appointment.findByIdAndUpdate(
      req.params.id, 
      { status }, 
      { new: true } // Returns the updated document
    );
    res.json(updatedBooking);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
}
exports.analytics =  async (req, res) => {
  const bookings = await Appointment.find();
  
  // Calculate Wait Time: (TreatmentStart - ArrivalTime)
  const treatedPatients = bookings.filter(b => b.treatmentStartTime && b.arrivalTime);
  const avgWait = treatedPatients.length > 0 
    ? treatedPatients.reduce((acc, curr) => acc + (curr.treatmentStartTime - curr.arrivalTime), 0) / treatedPatients.length / 60000 
    : 0;

  // Follow-up Logic: Patients with status 'Complete' but no 'nextAppointmentDate'
  const needsFollowUp = bookings.filter(b => b.status === 'Complete' && !b.nextAppointmentDate).length;

  res.json({
    avgWait: avgWait.toFixed(1),
    activeSuites: bookings.filter(b => b.status === 'In-Suite').length,
    followUpCount: needsFollowUp
  });
};
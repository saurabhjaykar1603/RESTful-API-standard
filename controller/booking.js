import Booking from "../models/Booking.js";

const postApiBooking = async (req, res) => {
  const { user, bus, contactNumber, seatNumber, date, isConfirmed, from, to } =
    req.body;
  const booking = Booking({
    user,
    bus,
    contactNumber,
    seatNumber,
    date,
    isConfirmed,
    from,
    to,
  });
  try {
    const savedBooking = await booking.save();
    res.status(200).json({
      success: true,
      data: savedBooking,
      message: "Booking saved successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

//GET / bookings
const getApiBookings = async (req, res) => {
  try {
    const allBookings = await Booking.find().populate("user bus");

    allBookings.forEach((booking) => {
      booking.user.password = undefined;
    });

    res.status(200).json({
      success: true,
      data: allBookings,
      message: "Bookings found successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export { postApiBooking, getApiBookings };

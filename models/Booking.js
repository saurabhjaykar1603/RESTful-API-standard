import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bus: {
      type: Schema.Types.ObjectId,
      ref: "Bus",
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    seatNumber: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    isConfirmed: {
      type: Boolean,
      default: false,
    },

    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;

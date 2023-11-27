import { Schema, model } from "mongoose";
const busSchema = new Schema(
  {
    busNo: {
      type: String,
      required: true,
      enum: ["123", "456", "789", "334"],
    },
    seatType: {
      type: String,
      enum: ["seater", "sleeper"],
    },
    busType: {
      type: String,
      enum: ["ac", "nonac"],
    },
    totalSeatCount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
const Bus = model("Bus", busSchema);
export default Bus;

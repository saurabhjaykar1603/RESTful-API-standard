import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { getApiHealth } from "./controller/health.js";
import { postApiUser } from "./controller/user.js";
import { postApiv1Busses, postApiv2Busses } from "./controller/bus.js";
import { postApiBooking, getApiBookings } from "./controller/booking.js";
const app = express();

app.use(express.json());

const connDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_DB_URI);
  if (conn) {
    console.log("mongodb connected successfully");
  }
};
connDB();

app.get("/api/health", getApiHealth);

app.post("/api/users", postApiUser);

app.post("/api/v1/busses", postApiv1Busses);
app.post("/api/v2/busses", postApiv2Busses);

app.post("/api/bookings", postApiBooking);
app.get("/api/bookings", getApiBookings);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

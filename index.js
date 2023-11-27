import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { getApiHealth } from "./controller/health.js";
import { postApiUser } from "./controller/user.js";
import { postApiBusses } from "./controller/bus.js";

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

app.post("/api/busses", postApiBusses);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

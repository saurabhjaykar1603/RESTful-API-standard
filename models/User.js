import { Schema, model } from "mongoose";
const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  mobile: { type: String, required: true },
  adress: { type: String, required: true },
  gender: ["male", "female", "other"],
});

const User = model("User", userSchema);
export default User;

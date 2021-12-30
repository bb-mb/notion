import { IUser } from "@/types";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema<IUser>({
  firebaseId: String,
  name: String,
  email: String,
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model<IUser>("Page", userSchema);

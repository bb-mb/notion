import { IUser } from "@/types";
import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema<IUser>({
  firebaseId: String,
  name: String,
  email: String,
  blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model<IUser>("User", userSchema);

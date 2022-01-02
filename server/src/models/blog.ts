import mongoose, { Schema } from "mongoose";
import { IBlog } from "@/types";

const blogSchema = new mongoose.Schema<IBlog>({
  subdomain: String,
  title: String,
  icon: String,
  pages: [{ type: Schema.Types.ObjectId, ref: "Page" }],
  createdAt: { type: Date, default: Date.now },
});

export const Blog = mongoose.model<IBlog>("Blog", blogSchema);

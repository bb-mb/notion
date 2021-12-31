import { IPage } from "@/types";
import mongoose from "mongoose";

const pageSchema = new mongoose.Schema<IPage>({
  pageId: String,
  author: String,
  title: String,
  thumbnail: String,
  value: Object,
  cleanUrl: String,
  count: {
    type: Number,
    default: 0,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Page = mongoose.model<IPage>("Page", pageSchema);

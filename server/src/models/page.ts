import { Ipage } from "@/types";
import mongoose from "mongoose";

const pageSchema = new mongoose.Schema<Ipage>({
  pageId: String,
  author: String,
  title: String,
  value: Object,
  cleanUrl: String,
  count: {
    type: Number,
    default: 0,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  coments: [{ text: String, date: Date }],
});

export const Page = mongoose.model<Ipage>("Page", pageSchema);

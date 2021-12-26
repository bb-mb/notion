import { Router } from "express";

export const router = Router();

router.post("/parse");

router.get("/", (req, res) => {
  res.send("pageRouter");
});

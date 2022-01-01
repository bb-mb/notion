import { checkAuthorization } from "@/middlewares";
import { Router } from "express";

export const router = Router();

router.get("/", checkAuthorization, (req, res) => {
  console.log(req.user);

  res.send("hi");
});

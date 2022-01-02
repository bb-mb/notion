import { checkAuthorization } from "@/middlewares";
import { User } from "@/models";
import { Router } from "express";

export const router = Router();

router.get("/", checkAuthorization, async (req, res) => {
  const user = await User.findOne({ firebaseId: req.user?.firebaseId });

  res.json({ msg: "조회 성공", value: user });
});

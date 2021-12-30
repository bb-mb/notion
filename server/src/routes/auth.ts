import { Router } from "express";
import admin from "firebase-admin";

export const router = Router();

interface ILoginRequestBody {
  tokenId: string;
}

router.post("/login", async (req, res) => {
  const { tokenId }: ILoginRequestBody = req.body;

  const result = await admin.auth().verifyIdToken(tokenId);

  res.send("done");
});

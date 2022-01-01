import { jwt } from "@/lib/jwt";
import { IUser } from "@/types";
import { RequestHandler } from "express";

export const checkAuthorization: RequestHandler = async (req, res, next) => {
  try {
    const token = (req.headers.authorization as string).split(" ")[1];
    const payload = jwt.verifyAccessToken(token);

    req.user = getUserData(payload as IUser);
    next();
  } catch {
    res.status(401).json({ msg: "로그인이 필요합니다." });
  }
};

function getUserData(payload: IUser) {
  const { firebaseId, name, email } = payload;

  return { firebaseId, name, email };
}

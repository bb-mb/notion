import { Router } from "express";
import admin from "firebase-admin";

import { User } from "@/models";
import { jwt } from "@/lib/jwt";
import { IUser } from "@/types";

export const router = Router();

interface ILoginRequestBody {
  tokenId: string;
}

router.post("/login", async (req, res) => {
  try {
    const { tokenId }: ILoginRequestBody = req.body;
    const {
      sub: firebaseId,
      name,
      email,
    } = await admin.auth().verifyIdToken(tokenId);

    const userData = { firebaseId, name, email };
    await User.findOneAndUpdate({ firebaseId }, userData, {
      new: true,
      upsert: true,
    });

    res.json({ msg: "로그인 성공!", value: jwt.getTokens(userData) });
  } catch (e) {
    res.status(403).json({ msg: "로그인 실패" });
  }
});

interface IRefreshRequestBody {
  refreshToken: string;
}

router.post("/refresh", (req, res) => {
  const { refreshToken }: IRefreshRequestBody = req.body;

  try {
    const { firebaseId, name, email } = jwt.verifyRefreshToken(
      refreshToken
    ) as IUser;

    res.json({
      msg: "리프레쉬 성공",
      value: { accessToken: jwt.getAccessToken({ firebaseId, name, email }) },
    });
  } catch {
    res.status(403).json({ msg: "리프레쉬 실패" });
  }
});

/* 결과 예시

{

  name: '김윤후',

  picture: 'https://lh3.googleusercontent.com/a/AATXAJyRZhNkjOQDVtU05UiToGp9XJnGFAOfOhZY49zG=s96-c',

  iss: 'https://securetoken.google.com/notion-blog-336610',

  aud: 'notion-blog-336610',

  auth_time: 1640925140,

  user_id: 'S8obiWVUgzURf2vPVkdWVVCuUsz2',

  sub: 'S8obiWVUgzURf2vPVkdWVVCuUsz2',

  iat: 1640925140,

  exp: 1640928740,

  email: '6125024@gmail.com',

  email_verified: true,

  firebase: {

    identities: { 'google.com': [Array], email: [Array] },

    sign_in_provider: 'google.com'

  },

  uid: 'S8obiWVUgzURf2vPVkdWVVCuUsz2'

}
*/

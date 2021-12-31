import { NextPage } from "next";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

import { Layout } from "components/layout";
export const Login: NextPage = () => {
  const googleLogin = async () => {
    await signInWithPopup(getAuth(), new GoogleAuthProvider())
      .then(async (result) =>
        axios.post("http://localhost:3001/auth/login", {
          tokenId: await result.user.getIdToken(),
        })
      )
      .catch((e) => {
        console.log("에러", e);
      });
  };

  return (
    <Layout>
      로그인
      <button className="btn" onClick={googleLogin}>
        로그인
      </button>
    </Layout>
  );
};

import { NextPage } from "next";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

import { Layout } from "components/layout";
import { useLoginMutation } from "queries";
export const Login: NextPage = () => {
  const { mutate: loginMutate } = useLoginMutation();

  const googleLogin = async () => {
    await signInWithPopup(getAuth(), new GoogleAuthProvider())
      .then(async (result) => loginMutate(await result.user.getIdToken()))
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

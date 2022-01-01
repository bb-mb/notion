import { NextPage } from "next";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { Layout } from "components/layout";
import { useLoginMutation } from "queries";
import toast from "react-hot-toast";
export const Login: NextPage = () => {
  const { mutate: loginMutate } = useLoginMutation();

  const googleLogin = async () => {
    await signInWithPopup(getAuth(), new GoogleAuthProvider())
      .then(async (result) =>
        loginMutate({ tokenId: await result.user.getIdToken() })
      )
      .catch(() => {
        toast.error("구글 로그인 실패");
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

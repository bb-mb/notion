import { NextPage } from "next";

import { Layout } from "components/layout";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from "react-google-login";

export const Login: NextPage = () => {
  const loginResponse = (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log(res);
  };

  return (
    <Layout>
      로그인
      <GoogleLogin
        clientId="1012375576219-fv215tgm0mud85p4hqdjjrpdog9dkkjm.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={loginResponse}
        onFailure={loginResponse}
        cookiePolicy="single_host_origin"
      />
    </Layout>
  );
};

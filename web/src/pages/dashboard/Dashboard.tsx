import { OnlyLoginUser } from "components/wrap/OnlyLoginUser";
import { NextPage } from "next";

export const Dashboard: NextPage = () => {
  return (
    <OnlyLoginUser>
      <div>dashboard</div>
    </OnlyLoginUser>
  );
};

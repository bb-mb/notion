import type { NextPage } from "next";
import { Layout } from "components/layout";
import { api } from "lib/api";
import { useUserQuery } from "queries/user";

const Home: NextPage = () => {
  const onClick = async () => {
    const res = await api.get("/user");
    console.log(res);
  };

  return (
    <Layout>
      <button className="btn" onClick={onClick}>
        check!
      </button>
    </Layout>
  );
};

export default Home;

import type { NextPage } from "next";
import { Layout } from "components/layout";
import { api } from "lib/api";

const Home: NextPage = () => {
  const onClick = async () => {
    const res = await api.get("/user");
    console.log(res);
  };

  return (
    <>
      <button className="btn" onClick={onClick}>
        check!
      </button>
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import { Nav } from "components/nav";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen">
      <Nav />
    </div>
  );
};

export default Home;

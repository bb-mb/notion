import { ReactNode } from "react";
import { Nav } from "components/nav";

interface IHomeProps {
  children: ReactNode;
}

export const Layout = (props: IHomeProps) => {
  return (
    <div className="flex h-screen">
      <Nav />
      <div className="flex-1 ">{props.children}</div>
    </div>
  );
};

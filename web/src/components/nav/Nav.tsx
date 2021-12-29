import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IconType } from "react-icons";
import {
  CgHome,
  CgEditMarkup,
  CgProfile,
  CgLogIn,
  CgLogOut,
} from "react-icons/cg";
import { PATH } from "lib/constants";

interface NavItemProps {
  Icon: IconType;
  href?: string;
  text?: string;
}

// eslint-disable-next-line react/display-name
const NavItem = ({ Icon, href = "/", text }: NavItemProps) => {
  return (
    <Link href={href} passHref>
      <li>
        <a>
          <Icon size={20} />
        </a>
      </li>
    </Link>
  );
};

export function Nav() {
  return (
    <ul className="mr-2 flex menu py-3 shadow-lg bg-base-200 rounded-box">
      <div className="flex-1">
        <div className="flex justify-center cursor-pointer mt-2 mb-6">
          <Link href={PATH.HOME} passHref>
            <div className="select-none">
              <Image src="/logo.png" width={30} height={30} alt="logo" />
            </div>
          </Link>
        </div>
        <NavItem Icon={CgHome} text="Home" />
        <NavItem Icon={CgEditMarkup} text="Home" />
        <NavItem Icon={CgProfile} text="Home" />
      </div>

      <NavItem Icon={CgLogIn} href={PATH.LOGIN} text="로그인" />
      <NavItem Icon={CgLogOut} text="Home" />
    </ul>
  );
}

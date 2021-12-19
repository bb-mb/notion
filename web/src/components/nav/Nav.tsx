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

interface NavItemProps {
  Icon: IconType;
  text: string;
}

function NavItem({ Icon, text }: NavItemProps) {
  return (
    <li className="my-2">
      <a>
        <Icon size={20} />
      </a>
    </li>
  );
}

export function Nav() {
  return (
    <ul className="flex menu py-3 shadow-lg bg-base-200 rounded-box">
      <div className="flex-1">
        <div className="flex justify-center cursor-pointer mb-6">
          <Link href="/" passHref>
            <Image src="/logo.png" width={30} height={30} alt="logo" />
          </Link>
        </div>
        <NavItem Icon={CgHome} text="Home" />
        <NavItem Icon={CgEditMarkup} text="Home" />
        <NavItem Icon={CgProfile} text="Home" />
      </div>

      <NavItem Icon={CgLogIn} text="Home" />
      <NavItem Icon={CgLogOut} text="Home" />
    </ul>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CgHome, CgEditMarkup, CgProfile } from "react-icons/cg";

import { PATH } from "lib/constants";
import { OnlyClient } from "components/wrap";

import { NavItem } from "./NavItem";
import { LoginMenuItems } from "./LoginMenuItems";

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
        <NavItem Icon={CgHome} href={PATH.DASHBOARD} text="Home" />
        <NavItem Icon={CgEditMarkup} text="Home" />
        <NavItem Icon={CgProfile} text="Home" />
      </div>
      <OnlyClient>
        <LoginMenuItems />
      </OnlyClient>
    </ul>
  );
}

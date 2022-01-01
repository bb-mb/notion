import React, { MouseEventHandler } from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface NavItemProps {
  Icon: IconType;
  href?: string;
  text?: string;
  onClick?: MouseEventHandler;
}

export const NavItem = ({ Icon, href = "/", onClick, text }: NavItemProps) => {
  return (
    <Link href={href} passHref>
      <li onClick={onClick}>
        <a>
          <Icon size={20} />
        </a>
      </li>
    </Link>
  );
};

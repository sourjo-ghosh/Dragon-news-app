"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = pathName === href
  return <Link href={href} className={`${isActive ? "underline font-bold" : ""}`}>{children}</Link>;
};

export default NavLink;

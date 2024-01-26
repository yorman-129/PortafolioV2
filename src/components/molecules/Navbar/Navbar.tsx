import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import { navbarData } from "@/dummy";

export const Navbar = () => {
  return (
    <div>
      {navbarData.map((item, index) => {
        return (
          <Link key={index} href={item.path}>
            {item.title}
          </Link>
        );
      })}
      {/* <Link href="/">
        {" "}
        <HomeIcon />
        Home
      </Link>
      <Link href="/blog">Pricing</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link> */}
    </div>
  );
};

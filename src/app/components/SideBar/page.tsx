"use client";
import React, { useState } from "react";
import { navs } from "./mockdata";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/app/assets/img/logo_banner_transparent.png";
type Props = {};

function SideBar({}: Props) {
  const pathname = usePathname();

  return (
    <div className="SideBar">
      {pathname}
      <Image alt="logo" src={LogoImg} className="logo" />
      <div className="navs">
        {navs.map((nav) => (
          <Link
            href={nav.url}
            className={`nav flex items-center justify-start gap-4 mb-2 cursor-pointer p-4 pr-10 w-full rounded ${
              pathname === `${nav.url}` && "active"
            }`}
            key={uuidv4()}
          >
            {pathname === `${nav.url}` ? (
              <nav.iconFilled size={25} />
            ) : (
              <nav.iconOutline size={25} />
            )}
            {nav.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;

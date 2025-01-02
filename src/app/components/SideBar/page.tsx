"use client";
import LogoImg from "@/app/assets/img/logo_banner_transparent.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { navs } from "./mockdata";
import "./style.scss";
type Props = {};

function SideBar({}: Props) {
  const pathname = usePathname();

  return (
    <div className="SideBar">
      <Image alt="logo" src={LogoImg} className="logo" />
      <div className="navs w-full">
        {navs.map((nav) => (
          <Link
            href={nav.url}
            className={`nav flex items-center justify-between mb-2 cursor-pointer p-4 pr-5 w-full rounded ${
              pathname === `${nav.url}` && "active"
            }`}
            key={uuidv4()}
          >
            <div className="flex justify-start gap-4 ">
              {pathname === `${nav.url}` ? (
                <nav.iconFilled size={25} />
              ) : (
                <nav.iconOutline size={25} />
              )}
              {nav.title}
            </div>
            <div className="count flex items-center justify-center rounded-full">
              9
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;

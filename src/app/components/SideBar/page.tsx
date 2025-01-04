"use client";
import LogoImgTitle from "@/app/assets/img/logo_banner_transparent_title.svg";
import LogoImgSmall from "@/app/assets/img/logo_icon_transparent.svg";
import { useAppSelector } from "@/app/lib/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { navs } from "./mockdata";
import "./style.scss";

function SideBar() {
  const pathname = usePathname();
  const hasSideBarCollapsed = useAppSelector(
    (state) => state.auth.hasSideBarCollapsed
  );
  return (
    <div className={`SideBar ${hasSideBarCollapsed && "collapsed"}`}>
      <div className="flex gap-3 items-center pl-1">
        <Image
          alt="logo"
          src={LogoImgSmall}
          className="logo"
          // style={{
          //   padding: hasSideBarCollapsed && "10px"
          // }}
        />
        {!hasSideBarCollapsed && (
          <Image alt="title" src={LogoImgTitle} className="title" />
        )}
      </div>

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
              {!hasSideBarCollapsed && <>{nav.title}</>}
            </div>
            {!hasSideBarCollapsed && (
              <div className="count flex items-center justify-center rounded-full">
                9
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;

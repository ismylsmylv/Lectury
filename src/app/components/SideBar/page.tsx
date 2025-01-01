"use client";
import React, { useState } from "react";
import { navs } from "./mockdata";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";
type Props = {};

function SideBar({}: Props) {
  const [active, setactive] = useState("");
  return (
    <div className="SideBar">
      <div className="logo">Lectury</div>
      <div className="navs">
        {navs.map((nav) => (
          <div
            onClick={() => {
              setactive(nav.title);
            }}
            className={`nav flex items-center justify-start gap-4 mb-2 cursor-pointer p-4 pr-10 w-full rounded ${
              active === nav.title && "active"
            }`}
            key={uuidv4()}
          >
            {active ? (
              <nav.iconFilled size={25} />
            ) : (
              <nav.iconOutline size={25} />
            )}
            {nav.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;

import React from "react";
import { navs } from "./mockdata";

type Props = {};

function SideBar({}: Props) {
  return (
    <div className="SideBar">
      <div className="logo">Lectury</div>
      <div className="navs">
        {navs.map((nav) => (
          <div className="nav">{nav.title}</div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;

import React from "react";
import "./style.scss";
import { LuIndentDecrease } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
type Props = {};

function Navbar({}: Props) {
  return (
    <div className="Navbar flex justify-between items-center w-full p-5">
      <div className="left flex w-full gap-5 items-center ">
        <button>
          <LuIndentDecrease size={25} color="#ffffff" />
        </button>
        <div className="searchbar flex gap-3 items-center p-4 rounded">
          <IoSearch size={20} color="#ffffff" />
          <input type="text" placeholder="Search Forums..." />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

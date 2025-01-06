import React from "react";
import { FaChevronRight } from "react-icons/fa6";
type Props = {};
import "./style.scss";
import Link from "next/link";

function Breadcrumbs({}: Props) {
  return (
    <div className="Breadcrumbs flex items-center justify-start gap-5">
      <div className="dot rounded-full"></div>
      <Link href={"/"} className="route">
        home
      </Link>
      <div className="route">
        <FaChevronRight />
      </div>
      <Link href={"/community"} className="route">
        Community
      </Link>
    </div>
  );
}

export default Breadcrumbs;

import React from "react";
import { FaChevronRight } from "react-icons/fa6";
type Props = {};

function Breadcrumbs({}: Props) {
  return (
    <div>
      <div className="route">home</div>
      <div className="route">
        <FaChevronRight />
      </div>
      <div className="route">Community</div>
    </div>
  );
}

export default Breadcrumbs;

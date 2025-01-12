import React from "react";
import "./style.scss";
import { FiUsers } from "react-icons/fi";
type Props = {
  heading: {
    text: string;
    icon: React.ElementType;
  };
};

function HeadingSm({ heading }: Props) {
  return (
    <div className="HeadingSm mt-5">
      <div className="heading flex items-center justify-start gap-2 mb-3">
        <heading.icon />{" "}
        <h3 className="capitalize font-semibold ">{heading.text}</h3>
      </div>
    </div>
  );
}

export default HeadingSm;

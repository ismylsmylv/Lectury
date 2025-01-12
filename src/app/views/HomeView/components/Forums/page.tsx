import React from "react";
import "./style.scss";
import { BiMessageDetail } from "react-icons/bi";
import HeadingSm from "@/app/components/HeadingSm/page";
type Props = {};

function Forums({}: Props) {
  const headData = {
    text: "community forums",
    icon: BiMessageDetail
  };
  return (
    <div className="Forums">
      <HeadingSm heading={headData} />
      <div className="types">
        <button>all</button>
        <button>official forums</button>
        <button>customer forums</button>
        <button>public forums</button>
      </div>
      <div className="list"></div>
    </div>
  );
}

export default Forums;

import React from "react";
import "./style.scss";
import { forums } from "./mockdata";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { ChartExample } from "./treemap/page";
type Props = {};

function ForumMap({}: Props) {
  return (
    <div className="ForumMap">
      <ChartExample />
      {forums.map((forum) => (
        <div className="forum" key={uuidv4()}>
          {forum.title}
          <Image height={50} width={50} src={forum.icon} alt="forum icon" />
        </div>
      ))}
    </div>
  );
}

export default ForumMap;

import React from "react";
import "./style.scss";
import { forums } from "./mockdata";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { ChartExample } from "./treemap/page";
type Props = {};

function ForumMap({}: Props) {
  return (
    <div className="ForumMap flex gap-5">
      {/* <ChartExample /> */}
      {forums.map((forum) => (
        <div
          className="forum bg-cover bg-no-repeat bg-center rounded"
          key={uuidv4()}
          style={{
            backgroundImage: `url(${forum.icon.src})`,
            width: forum.departments.length * 50,
            height: forum.departments.length * 50
          }}
        >
          {forum.title}
          {/* <Image height={50} width={50} src={forum.icon} alt="forum icon" /> */}
          {forum.departments.map((department) => (
            <div key={uuidv4()} className="department">
              {department.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ForumMap;

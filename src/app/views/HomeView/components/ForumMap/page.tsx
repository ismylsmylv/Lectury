import React from "react";
import "./style.scss";
import { forums } from "./mockdata";
import { v4 as uuidv4 } from "uuid";
type Props = {};

function ForumMap({}: Props) {
  return (
    <div className="ForumMap">
      {forums.map((forum) => (
        <div className="forum" key={uuidv4()}>
          {forum.title}
        </div>
      ))}
    </div>
  );
}

export default ForumMap;

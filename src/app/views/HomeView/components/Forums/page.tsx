import React from "react";
import "./style.scss";
type Props = {};

function Forums({}: Props) {
  return (
    <div className="Forums">
      <h3>Community Forums</h3>
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

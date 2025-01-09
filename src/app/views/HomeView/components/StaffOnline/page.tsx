import { v4 as uuidv4 } from "uuid";
import React from "react";
import "./style.scss";
import { staff } from "./mockdata";
import { FiUsers } from "react-icons/fi";

type Props = {};

function StaffOnline({}: Props) {
  return (
    <div>
      <div className="heading flex items-center justify-start gap-2">
        <FiUsers />
        <h3>staff online</h3>
      </div>
      <div className="staff">
        {staff.map((member) => (
          <div key={uuidv4()} className="member">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="info">
              <div className="name">{member.displayName}</div>
              <div className="role">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StaffOnline;

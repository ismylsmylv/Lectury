import { v4 as uuidv4 } from "uuid";
import React from "react";
import "./style.scss";

import { staff } from "./mockdata";

import { FiUsers } from "react-icons/fi";

import { FaUser } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import HeadingSm from "@/app/components/HeadingSm/page";

type Props = {};

function StaffOnline({}: Props) {
  const headData = { text: "staff online", icon: FiUsers };
  return (
    <div className="StaffOnline mb-10">
      <HeadingSm heading={headData} />
      <div className="staff">
        {staff.map((member) => (
          <Link
            href={"#"}
            key={uuidv4()}
            className="member flex items-center justify-start gap-3 mb-3 pr-3  rounded-lg "
          >
            <div className="img rounded-lg flex items-center justify-center">
              {member.img ? (
                <Image alt="profile picture" src={member.img} />
              ) : (
                <FaUser />
              )}
            </div>
            <div className="info opacity-70 hover:opacity-100">
              <div className="name font-medium line-clamp-1">
                {member.displayName}
              </div>
              <div className="role font-light line-clamp-1"> {member.role}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="line mt-10"></div>
    </div>
  );
}

export default StaffOnline;

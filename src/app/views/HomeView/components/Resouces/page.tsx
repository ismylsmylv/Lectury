import { v4 as uuidv4 } from "uuid";
import "./style.scss";

import { AiOutlineHistory } from "react-icons/ai";
import { LuDot } from "react-icons/lu";
import { resouces } from "./mockdata";

import HeadingSm from "@/app/components/HeadingSm/page";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";

function Resouces() {
  const headData = { text: "recent Resouces", icon: AiOutlineHistory };
  return (
    <div className="Resouces mb-15">
      <HeadingSm heading={headData} />
      <div className="staff">
        {resouces.map((thread) => (
          <Link
            href={"#"}
            key={uuidv4()}
            className="member flex items-start justify-start gap-3 mb-3 pr-3  rounded-lg "
          >
            <div className="img rounded-lg flex items-center justify-center">
              {thread.img ? (
                <Image alt="profile picture" src={thread.img} />
              ) : (
                <FaUser />
              )}
            </div>
            <div className="info opacity-70 hover:opacity-100">
              <div className="name font-medium  mb-2">{thread.displayName}</div>
              <div className="role flex items-center justify-start text-sm font-normal mb-2">
                By: {thread.user} <LuDot />
                {thread.date}
              </div>
              <div className="category text-xs  mb-2">{thread.category}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="line mt-3"></div>
    </div>
  );
}

export default Resouces;

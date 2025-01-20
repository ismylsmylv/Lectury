import { v4 as uuidv4 } from "uuid";
import "./style.scss";

import { resources } from "./mockdata";

import HeadingSm from "@/app/components/HeadingSm/page";
import Image from "next/image";
import Link from "next/link";
import { FaRegObjectGroup, FaUser } from "react-icons/fa6";
function Resources() {
  const headData = { text: "recent Resources", icon: FaRegObjectGroup };
  return (
    <div className="Resources mb-15">
      <HeadingSm heading={headData} />
      <div className="staff">
        {resources.map((thread) => (
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
              <div className="category text-xs  mb-2">{thread.category}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="line mt-3"></div>
    </div>
  );
}

export default Resources;

import React from "react";
import "./style.scss";

import { BiMessageDetail } from "react-icons/bi";
import HeadingSm from "@/app/components/HeadingSm/page";

import { forums } from "./mockdata";

import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

type Props = {};

function Forums({}: Props) {
  const headData = {
    text: "community forums",
    icon: BiMessageDetail
  };

  return (
    <div className="Forums w-full ">
      <HeadingSm heading={headData} />
      <div className="types">
        <button>all</button> <button>official forums</button>
        <button>customer forums</button> <button>public forums</button>
      </div>
      <div className="list">
        {forums.map((forum) => {
          return (
            <Link
              href={"#"}
              className="forum flex items-center justify-between gap-5 p-5 rounded-xl mb-3 "
              key={uuidv4()}
            >
              <div className="left flex gap-5 items-center">
                <div
                  className="icon rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: forum.bg
                  }}
                >
                  <forum.icon color="#ffffff" size={25} />
                </div>
                <h3 className="text-left font-semibold"> {forum.title}</h3>
              </div>
              <div className="infos capitalize flex gap-5 font-semibold">
                <div className="box">
                  <p> {forum.threads}</p>
                  <h4 className="opacity-70">threads</h4>
                </div>
                <div className="box">
                  <p> {forum.messages}</p>
                  <h4 className="opacity-70">messages</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Forums;

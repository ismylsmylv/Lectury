import Breadcrumbs from "@/app/components/Breadcrumbs/page";
import React from "react";
import "./style.scss";
import ForumMap from "../components/ForumMap/page";
import StaffOnline from "../components/StaffOnline/page";
import { FiUsers } from "react-icons/fi";
import Forums from "../components/Forums/page";
import Threads from "../components/Threads/page";
import Resouces from "../components/Resouces/page";
type Props = {};

function HomeView({}: Props) {
  return (
    <div className="HomeView p-5 rounded-lg ">
      <Breadcrumbs />
      <div className="flex gap-10">
        <div className="left">
          <div className="map">
            <h1 className="capitalize font-semibold">
              largest community forums
            </h1>
            <div className="content flex gap-5  ">
              <ForumMap />
            </div>
          </div>
          <Forums />
        </div>
        <div className="right">
          <StaffOnline />
          <Threads />
          <Resouces />
        </div>
      </div>
    </div>
  );
}

export default HomeView;

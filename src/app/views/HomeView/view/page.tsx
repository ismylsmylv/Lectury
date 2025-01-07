import Breadcrumbs from "@/app/components/Breadcrumbs/page";
import React from "react";
import "./style.scss";
import ForumMap from "../components/ForumMap/page";
type Props = {};

function HomeView({}: Props) {
  return (
    <div className="HomeView p-5 rounded-lg">
      <Breadcrumbs />
      <div className="content flex gap-5">
        <ForumMap />
      </div>
    </div>
  );
}

export default HomeView;

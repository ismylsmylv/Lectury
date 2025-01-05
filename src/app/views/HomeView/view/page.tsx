import Breadcrumbs from "@/app/components/Breadcrumbs/page";
import React from "react";
import "./style.scss";
type Props = {};

function HomeView({}: Props) {
  return (
    <div className="HomeView p-5">
      <Breadcrumbs />
    </div>
  );
}

export default HomeView;

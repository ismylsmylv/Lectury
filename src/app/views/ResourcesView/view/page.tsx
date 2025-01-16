import React from "react";
import SearchBar from "./components/SearchBar/page";
import FilesGrid from "./components/FilesGrid/page";

type Props = {};

function ResourcesView({}: Props) {
  return (
    <div className="ResourcesView">
      <SearchBar />
      <FilesGrid />
    </div>
  );
}

export default ResourcesView;

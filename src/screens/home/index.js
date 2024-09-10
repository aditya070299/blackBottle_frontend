import React from "react";
import LatestVideos from "./LatestVideos";
import PopularPosts from "./PopularPosts";

function index() {
  return (
    <div>
      <LatestVideos />
      <PopularPosts />
    </div>
  );
}

export default index;

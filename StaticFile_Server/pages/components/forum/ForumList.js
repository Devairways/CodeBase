import React from "react";
import { store } from "../../services/Store";
import ForumTopicsContainer from "./ForumTopicsContainer";

function ForumList() {
  const userData = useContext(store);
  console.log(userData);

  return (
    <div className="feedlist">
      <div className="feed_nav">
        <ul>
          <li className="selected">Following</li>
          <li>Featured</li>
          <li>Top Posts</li>
          <li>Recommended</li>
        </ul>
      </div>
      <div className="feed_content">
        {tempList.map((feed) => {
          return <ForumTopicsContainer feed={feed} />;
        })}
      </div>
    </div>
  );
}

export default ForumList;

const tempList = [
  {
    user: "React, Redux, Redis",
    category: "javascript | tutorial",
    count: 16,
    id: 1,
  },
  {
    user: "jQuery",
    category: "javascript | tutorial",
    count: 24,
    id: 2,
  },
  {
    user: "Vanilla Javascript",
    category: "javascript | tutorial",
    count: 11,
    id: 3,
  },
];

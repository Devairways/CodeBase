import React, { useEffect } from "react";
import API from "../../services/Controller";
import { store } from "../../services/Store";
import ForumTopicsContainer from "./ForumTopicsContainer";

function ForumList() {
  const userData = useContext(store);
  const { dispatch } = userData;

  useEffect(function () {
    API.getForumTopics().then((data) =>
      dispatch({ type: "ForumTopics", payload: data })
    );
  });

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
        {(userData.state.data || []).map((feed) => {
          return <ForumTopicsContainer feed={feed} />;
        })}
      </div>
    </div>
  );
}

export default ForumList;

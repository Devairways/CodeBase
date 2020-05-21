import React from "react";

function ForumTopicsContainer(props) {
  console.log("props", props);
  const { feed } = props;
  return (
    <div className="forum-topics-container">
      <header>
        <div className="forum-head">
          <img src="https://via.placeholder.com/50" alt="avatar" />
          <h3>Your Name</h3>
          <bdi>Posted</bdi>
          <h4>
            <i>Java</i>
          </h4>
        </div>
        <div className="forum-tail">
          <p>{feed.count} hours ago</p>
        </div>
      </header>
      <div className="forum-body">
        <img
          src="https://via.placeholder.com/100x100.png"
          alt="image"
          className="forum-body-img"
        />
        <div className="forum-text">
          <div className="forum-body-header">
            <div className="forum-body-title">
              <h2>{feed.user}</h2>
              <p>{feed.category}</p>
            </div>
            <div className="forum-body-buttons">
              <button>Favorite</button>
              <button>Back</button>
              <button>Refresh</button>
            </div>
          </div>
          <div className="forum-body-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              id nibh tortor. Sed quis enim vel lectus lobortis interdum vitae
              non erat. Cras cursus felis pellentesque consequat gravida. Nulla
              tincidunt a nulla eu convallis. Duis nisi tortor, dapibus in
              posuere ac, cursus ut quam. Vestibulum luctus mollis ipsum, sit
              amet aliquam felis condimentum in. Vivamus bibendum pellentesque
              eros, et vestibulum felis aliquam nec. Donec commodo, purus sed
              sollicitudin ultrices, dui dui semper felis, et cursus eros magna
              at mauris. Nam lobortis at enim maximus tempus. Maecenas ultrices
              convallis vulputate. Suspendisse vehicula eleifend lacinia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumTopicsContainer;

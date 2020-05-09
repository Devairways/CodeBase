import React from "react";

function ForumTopicsContainer() {
  return (
    <div className="forum-topics-container">
      <header>
        <div className="forum-head">
          <img src="https://via.placeholder.com/50" alt="avatar" />
          <h3>Your Name</h3>
          <bdi>Posted</bdi>
          <h4>Java</h4>
        </div>
        <div className="forum-tail">
          <p>12 hours ago</p>
        </div>
      </header>
      <div className="forum-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
          nibh tortor. Sed quis enim vel lectus lobortis interdum vitae non
          erat. Cras cursus felis pellentesque consequat gravida. Nulla
          tincidunt a nulla eu convallis. Duis nisi tortor, dapibus in posuere
          ac, cursus ut quam. Vestibulum luctus mollis ipsum, sit amet aliquam
          felis condimentum in. Vivamus bibendum pellentesque eros, et
          vestibulum felis aliquam nec. Donec commodo, purus sed sollicitudin
          ultrices, dui dui semper felis, et cursus eros magna at mauris. Nam
          lobortis at enim maximus tempus. Maecenas ultrices convallis
          vulputate. Suspendisse vehicula eleifend lacinia.
        </p>
      </div>
    </div>
  );
}
export default ForumTopicsContainer;

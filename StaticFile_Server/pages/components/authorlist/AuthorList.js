import React, { useContext, useEffect, useDebugValue } from "react";
import API from "../../services/Controller";
import { store } from "../../services/Store";

function AuthorList() {
  const userData = useContext(store);
  const { dispatch } = userData;

  useEffect(function () {
    API.getAuthorList().then((data) =>
      dispatch({ type: "AuthorList", payload: data })
    );
  }, []);

  console.log(userData);
  return (
    <div className="authorlist">
      <h3>
        Top <span>Authors</span>
      </h3>
      {(userData.state.authors || []).map((author, i) => {
        return (
          <div key={i} className="author">
            <img
              src="https://i.kym-cdn.com/photos/images/newsfeed/000/252/758/c6f.jpg"
              height="25px"
              width="25px"
              alt="profile pic"
            />
            <h4>{author.id}</h4>
            <div>
              <img
                src="/assets/icons/trophy_icon.png"
                height="20px"
                width="20px"
                alt="Trophy"
              />
              <span>{author.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const tempList = [
  {
    user: "Geronimo",
    count: 29,
  },
  {
    user: "kalimero",
    count: 6,
  },
  {
    user: "Peter",
    count: 36,
  },
  {
    user: "Geronimo",
    count: 29,
  },
  {
    user: "kalimero",
    count: 6,
  },
  {
    user: "Peter",
    count: 36,
  },
];

export default AuthorList;

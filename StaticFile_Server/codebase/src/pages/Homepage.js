import React, { Fragment } from "react";
import NavBar from "../components/nav/Nav";
import AuthorList from "../components/authorlist/AuthorList";
import FeedList from "../components/feed/FeedList";
import NewsFeed from "../components/newsfeed/NewsFeed";
import Footer from "../components/footer/Footer";
import ProfileCard from "../components/profilecard/Profilecard";

function HomePage() {
  return (
    <Fragment>
      <NavBar />
      <ProfileCard />
      <img
        src="https://via.placeholder.com/200x500.png"
        className="commercial"
        style={{ gridColumn: "1/2", gridRow: "2/4", margin: "auto" }}
        alt="potential commercial"
      />
      <FeedList />
      <NewsFeed />
      <AuthorList />
      <Footer />
    </Fragment>
  );
}

export default HomePage;

import React, { Fragment } from "react";
import NavBar from "./components/nav/Nav";
import ProfileCard from "./components/profilecard/Profilecard";
import FeedList from "./components/feed/FeedList";
import Footer from "./components/footer/Footer";


function HomePage() {
  return (
    <Fragment>
      <NavBar />
      <img
        src="https://via.placeholder.com/200x500.png"
        className="commercial"
        style={{ gridColumn: "1/2", gridRow: "2/4", margin: "auto" }}
        alt="potential commercial"
      />
      <FeedList />
      <ProfileCard />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
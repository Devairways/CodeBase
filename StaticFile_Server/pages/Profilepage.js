import React, { Fragment, useEffect, useContext } from "react";
import Router from 'next/router';
import { store } from "./services/Store";
import NavBar from "./components/nav/Nav";
import ProfileCard from "./components/profilecard/Profilecard";
import FriendsList from "./components/friendslist/FriendsList";
import ForumList from "./components/forum/ForumList";
import Footer from "./components/footer/Footer";

function HomePage() {
  const userData = useContext(store);

  useEffect(()=>{
		if(!userData.state.authed){
			Router.push("/");
		}
  },[]);
  
  return (
    <Fragment>
      <NavBar />
      <FriendsList
        style={{ gridColumn: "1/2", gridRow: "2/4", margin: "auto" }}
      />
      <ForumList />
      <ProfileCard />
      <Footer />
    </Fragment>
  );
}

export default HomePage;

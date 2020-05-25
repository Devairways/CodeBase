import React, { Fragment, useState } from "react";
import NavBar from "./components/nav/Nav";
import AuthorList from "./components/authorlist/AuthorList";
import FeedList from "./components/feed/FeedList";
import NewsFeed from "./components/newsfeed/NewsFeed";
import Footer from "./components/footer/Footer";
import Modal from './components/modal/Modal';

function HomePage() {
  const [modal, setModal] = useState({ open: false, type: "" });

  const closeModal = () =>{
		setModal(false);
	}

  return (
    <Fragment>
      <NavBar openModal={setModal} />
      <FeedList />
      <NewsFeed />
      <div>
        <AuthorList />
        <img
        src="https://via.placeholder.com/200x500.png"
        className="commercial"
        style={{ gridColumn: "1/2", gridRow: "2/4", margin: "auto" }}
        alt="potential commercial"
        />
      </div>
      <Footer />
      {
        modal.open && <Modal type={modal.type} close={closeModal}/>
      }
    </Fragment>
  );
}

export default HomePage;

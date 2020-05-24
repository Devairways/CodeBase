import React, { useContext, useState } from 'react';
import Router from 'next/router';
import { store } from '../../services/Store';
import Modal from '../modal/Modal';


function NavBar({ openModal }) {
    const userData = useContext(store);
    const [modal, setModal] = useState(false);

    const closeModal = () =>{
		setModal(false);
	}

    return (
        <nav className="nav">
            <div className="nav_main">
                <h2 className="selected">codebase</h2>
                <ul className="nav_links">
                    <li onClick={() => Router.push('/Homepage', "/")}>FEED</li>
                    <li>DISCOVER</li>
                    <li>TUTORIALS</li>
                    <li>CATEGORIES</li>
                </ul>
            </div>
            {
                userData.state.authed ?
                <div>
                    <ul className="nav_icons">
                        <li><img src='/assets/icons/bookmark_icon.png'  height="15px" width="15px" alt="bookmark"/></li>
                        <li><img src='/assets/icons/bell_icon.png' height="20px" width="20px" alt="notification"/></li>
                        <li><img src='/assets/icons/search_icon.png'  height="15px" width="15px" alt="search"/></li>
                        <li><img src='/assets/icons/plus_icon.png'  height="30px" width="30px"  alt="add"/></li>
                        <li><img src='/assets/chick.jpg'  height="30px" width="30px" alt="profile_picture" onClick={() => Router.push('/Profilepage', "/profile")}/></li>
                    </ul>
                </div> :
                <div>
                    <h3 onClick={() => setModal(true)}>login</h3>
                </div> 
            }
            {
			    modal && <Modal type="login" params="nog niks" close={closeModal}/>
		    }
        </nav>
    );
}

export default NavBar;

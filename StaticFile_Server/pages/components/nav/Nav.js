import React from 'react';
<<<<<<< HEAD
import Router from 'next/router';
=======
>>>>>>> 95e4404aea7869113cdd72684a38d1aeb5692b77

function NavBar() {
  return (
    <nav className="nav">
        <div className="nav_main">
            <h2 className="selected">codebase</h2>
            <ul className="nav_links">
                <li>FEED</li>
                <li>DISCOVER</li>
                <li>TUTORIALS</li>
                <li>CATEGORIES</li>
            </ul>
        </div>
        <div>
            <ul className="nav_icons">
                <li><img src='/assets/icons/bookmark_icon.png'  height="15px" width="15px" alt="bookmark"/></li>
                <li><img src='/assets/icons/bell_icon.png' height="20px" width="20px" alt="notification"/></li>
                <li><img src='/assets/icons/search_icon.png'  height="15px" width="15px" alt="search"/></li>
                <li><img src='/assets/icons/plus_icon.png'  height="30px" width="30px"  alt="add"/></li>
<<<<<<< HEAD
                <li><img src='/assets/chick.jpg'  height="30px" width="30px" alt="profile_picture" onClick={() => Router.push('/Profilepage', "/profile")}/></li>
=======
                <li><img src='/assets/chick.jpg'  height="30px" width="30px" alt="profile_picture"/></li>
>>>>>>> 95e4404aea7869113cdd72684a38d1aeb5692b77
            </ul>
        </div> 
    </nav>
  );
}

export default NavBar;

import React from 'react';

// nog te veranderen in migratie naar next.js!
import bell from '../../assets/icons/bell_icon.png';
import bookmark from '../../assets/icons/bookmark_icon.png';
import search from '../../assets/icons/search_icon.png';
import plus from '../../assets/icons/plus_icon.png';
import chick from '../../assets/chick.jpg';

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
                <li><img src={bookmark}  height="15px" width="15px" alt="bookmark"/></li>
                <li><img src={bell} height="20px" width="20px" alt="notification"/></li>
                <li><img src={search}  height="15px" width="15px" alt="search"/></li>
                <li><img src={plus}  height="30px" width="30px"  alt="add"/></li>
                <li><img src={chick}  height="30px" width="30px" style={{borderRadius:"50%", marginTop:"-5px"}} alt="profile_picture"/></li>
            </ul>
        </div> 
    </nav>
  );
}

export default NavBar;

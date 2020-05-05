import React from 'react';

function NavBar() {
  return (
    <nav className="nav">
        <div className="nav_main">
            <img src="" alt="logo"/>
            <ul className="nav_ul">
                <li>FEED</li>
                <li>DISCOVER</li>
                <li>TUTORIALS</li>
                <li>CATEGORIES</li>
            </ul>
        </div>
        <div>
            <ul className="nav_ul">
                <li>Icon</li>
                <li>Icon</li>
                <li>Icon</li>
                <li>Icon</li>
                <li>Icon</li>
            </ul>
        </div> 
    </nav>
  );
}

export default NavBar;

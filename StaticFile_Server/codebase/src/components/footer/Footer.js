import React from 'react';

// nog te veranderen in migratie naar next.js!
import bell from '../../assets/icons/bell_icon.png';
import bookmark from '../../assets/icons/bookmark_icon.png';
import search from '../../assets/icons/search_icon.png';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer_main">
            <div>
                <h2 className="selected">codebase</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse at finibus orci.
                     Donec eget nisl sed mauris feugiat pretium non et enim.
                     Vivamus eget neque viverra, interdum ipsum commodo, pulvinar urna.
                     Donec pharetra turpis semper condimentum euismod.
                     Integer dictum tellus ut egestas maximus.
                     Suspendisse at consectetur velit.
                     Morbi non scelerisque.
                </p>
                <ul className="footer_icons">
                    <li><img src={bookmark}  height="15px" width="15px" alt="bookmark"/></li>
                    <li><img src={bell} height="20px" width="20px" alt="notification"/></li>
                    <li><img src={search}  height="15px" width="15px" alt="search"/></li>
                    <li><img src={bookmark}  height="15px" width="15px" alt="bookmark"/></li>
                    <li><img src={bell} height="20px" width="20px" alt="notification"/></li>
                    <li><img src={search}  height="15px" width="15px" alt="search"/></li>
                </ul>
            </div>
            <div>
                <h4>Product</h4>
                <ul className="footer_links">
                    <li>How it works</li>
                    <li>Help & Support</li>
                </ul>
            </div>
            <div>
                <h4>About Us</h4>
                <ul className="footer_links">
                    <li>Mission</li>
                    <li>Investors</li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <p>Support@codebase.com</p>
            </div>
            
        </div>
        <div className="disclaimer">
            <h5>CodeBase.com &copy; 2020-2021 All rights reserved</h5>
            <div>
                <h5>Disclaimer</h5>
                <h5>Privacy Policy</h5>
                <h5>Terms and Conditions</h5>
            </div>
        </div> 
    </footer>
  );
}

export default Footer;

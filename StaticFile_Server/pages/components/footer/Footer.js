import React, { useState } from "react";

function Footer() {
  const [open, setOpen] = useState({
    1: false,
    2: false,
    3: false,
  });

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
                    <li><img src='/assets/icons/bookmark_icon.png'  height="15px" width="15px" alt="bookmark"/></li>
                    <li><img src='/assets/icons/bell_icon.png' height="20px" width="20px" alt="notification"/></li>
                    <li><img src='/assets/icons/search_icon.png'  height="15px" width="15px" alt="search"/></li>
                    <li><img src='/assets/icons/bookmark_icon.png'  height="15px" width="15px" alt="bookmark"/></li>
                    <li><img src='/assets/icons/bell_icon.png' height="20px" width="20px" alt="notification"/></li>
                    <li><img src='/assets/icons/search_icon.png'  height="15px" width="15px" alt="search"/></li>
                </ul>
            </div>
            <div className="accordion" onClick={() =>{ setOpen({...open, [1]: !open[1]}); }}>
                <h4>Product</h4>
                <img className="arrowRotate" style={open[1] ? {transform:"rotate(180deg)"}: null} src='assets/arrow.png' alt="arrow"/>
                <ul className="paneel" style={open[1] ? {maxHeight:"250px"}: {maxHeight:"0"}}>
                    <li>How it works</li>
                    <li>Help & Support</li>
                </ul>
            </div>
            <div className="accordion" onClick={() =>{ setOpen({...open, 2: !open[2]}); }}>
                <h4>About Us</h4>
                <img className="arrowRotate" style={open[2] ? {transform:"rotate(180deg)"}: null} src='assets/arrow.png' alt="arrow"/>
                <ul className="paneel" style={open[2] ? {maxHeight:"250px"}: {maxHeight:"0"}}>
                    <li>Mission</li>
                    <li>Investors</li>
                </ul>
            </div>
            <div className="accordion" onClick={() =>{ setOpen({...open, 3: !open[3]}); }}>
                <h4>Contact</h4>
                <img className="arrowRotate" style={open[3] ? {transform:"rotate(180deg)"}: null} src='assets/arrow.png' alt="arrow"/>
                <p className="paneel" style={open[3] ? {maxHeight:"250px"}: {maxHeight:"0"}}>Support@codebase.com</p>
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

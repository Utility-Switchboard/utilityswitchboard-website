import React from "react";

// CSS
import "./footer-styles.scss"

const Footer: React.FC = () => {
   return (
      <div className="footer-outer-container">
         <div className="footer-inner-container container-width">
            {/* Column 1 - Logo, etc. */}
            <div className="footer-column-1-wrapper">
               <img
                  className="footer-logo"
                  src="/images/usb-logo-colour.png"
                  alt="Utility Switchboard logo"
               />

               <p>Utility Switchboard is a free service provider of UK utility-industry advice and price comparison.</p>

               <p><strong>Follow us on socials</strong></p>

               <div className="social-icons-wrapper">
                  <a
                     href="https://www.facebook.com/UtilitySwitchboard"
                     target="_blank"
                     className="standard-text-link social-icon-link"
                  >
                     <i className="fa-brands fa-square-facebook"></i>
                  </a>

                  <a
                     href="https://www.linkedin.com/company/utilityswitchboard"
                     target="_blank"
                     className="standard-text-link social-icon-link"
                  >
                     <i className="fa-brands fa-linkedin"></i>
                  </a>

                  <a
                     href="#"
                     target="_blank"
                     className="standard-text-link social-icon-link"
                  >
                     <i className="fa-brands fa-square-twitter"></i>
                  </a>
               </div>
            </div>

            {/* Column 2 - Most visited */}
            <ul className="footer-navigation-list">
               <a className="title">Most visited</a>
               <a>Compare gas & electricity tariffs</a>
               <a>Compare TV & broadband plans</a>
               <a>Best renewable energy tariffs</a>
               <a>Average UK energy usage</a>
               <a>Broadband speeds in the UK</a>
               <a>Do I need a TV licence?</a>
            </ul>

            {/* Column 3 - About us */}
            <ul className="footer-navigation-list">
               <a className="title">Utility Switchboard</a>
               <a>About us</a>
               <a>Contact us</a>
               <a>Careers</a>
               <a>Privacy policy</a>
               <a>Cookies policy</a>
               <a>Terms of use</a>
            </ul>
         </div>

         <p style={{margin: 0}}>All rights reserved - © 2022</p>
      </div>
   )
}

export default Footer
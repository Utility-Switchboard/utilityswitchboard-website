import React from "react";
import { HeadFC } from "gatsby";

// Components
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import Footer from "../components/footer/footer";
import Navigation from "../components/navigation/navigation";
import SEO from "../components/SEO/seo";
import HeroCTA from "../components/hero-cta/hero-cta";

// CSS
import "../sass/page-specific/content-template.scss"
import StylesComponent from "../components/styles";
import "../sass/page-specific/contact.scss"

const Contact: React.FC = () => {
   return (
      <React.Fragment>
         <StylesComponent/>
         <Navigation/>

         {/** HERO SECTION **/}
         <div className="content-hero-outer-container">
            <div className="content-hero-inner-container container-width">
               <span>
                  
                  <h1>Get in touch</h1>

                  <p>Hi! We're delighted that you've made it to our contact page and you'd like to talk to us. Use any of the contact methods below to get started.</p>

                  <br/>

                  <HeroCTA/>
               </span>
            </div>
         </div>

         <div className="contact-content-outer-container">
            <div className="contact-content-inner-container container-width">
               <Breadcrumbs location="contact"/>

               <h2>Who would you like to talk to?</h2>

               <div className="contact-information-grid-container">
                  <div className="contact-information-left-side">
                     <span>
                        <h3>Customer service</h3>


                        <a className="contact-link" href="tel:+443330151313"><i className="fa-solid fa-phone"/> 0333&nbsp;015&nbsp;1313</a>
                        <br/>
                        <br/>

                        <a className="contact-link" href="mailto:info@utilityswitchboard.com"><i className="fa-solid fa-envelope"/> info@utilityswitchboard.com</a>
                     </span>
                     
                     <span>
                        <h3>Switching</h3>

                        <a className="contact-link" href="tel:+442039927717"><i className="fa-solid fa-phone"/> 020&nbsp;3992&nbsp;7717</a>
                        <br/>
                        <br/>

                        <a className="contact-link" href="mailto:sales@utilityswitchboard.com"><i className="fa-solid fa-envelope"/> sales@utilityswitchboard.com</a>
                     </span>

                     <span>
                        <h3>Data & Privacy</h3>

                        <a className="contact-link" href="mailto:privacy@utilityswitchboard.com"><i className="fa-solid fa-envelope"/> privacy@utilityswitchboard.com</a>
                     </span>
                  </div>

                  <div className="contact-information-right-side">
                     <span>
                        <h3>Head office</h3>

                        <p>2nd Floor, Melrose House<br/>
                        42 Dingwall Road<br/>
                        Croydon<br/>
                        Surrey<br/>
                        CR0 2NE</p>
                     </span>
                  </div>
               </div>
            </div>
         </div>

         <Footer/>
      </React.Fragment>
   )
}

export default Contact

export const Head: HeadFC = () => {
   return (
      <SEO
         title="Get in touch | Utility Switchboard"
         metaDescription=""
         slug="contact"
      />
   )
}
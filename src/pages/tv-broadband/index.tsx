import { HeadFC } from "gatsby";
import React from "react";
import Footer from "../../components/footer/footer";
import Navigation from "../../components/navigation/navigation";

// CSS
import StylesComponent from "../../components/styles";
import "../../sass/page-specific/product-landing.scss"

const TvBroadbandLandingPage: React.FC = () => {
   const guideTypes: { name: string, uri: string }[] = [
      { name: "Billing", uri: "billing" },
      { name: "Business", uri: "business" },
      { name: "Deals", uri: "deals" },
      { name: "Network", uri: "network" },
      { name: "Switching", uri: "switching" },
      { name: "Technical", uri: "technical" }
   ]

   return (
      <React.Fragment>
         <StylesComponent/>
         <Navigation/>

         {/* HERO */}
         <div className="product-landing-hero-outer-container">
            <div className="product-landing-hero-inner-container container-width">
               <h1>
                  Cheaper TV & broadband<br/><span id="h1-span">Quick & simple! 💸</span>
               </h1>

               <p>Using our provider guides, expert customer service line and full in-depth guides, become and TV & broadband expert and start saving £100s per year on your bills.</p>

               <button
                  className="standard-button green"
               >
                  Get started
               </button>
            </div>
         </div>

         {/* CONTENT */}
         <div className="product-landing-content-outer-container">
            <div className="product-landing-content-inner-container container-width">
               <h2>Get started</h2>
               <p>First choose whether you'd like to read about a specific TV or broadband supplier or guides about specific topics and concepts.</p>

               <div className="supplier-guide-choice-container">
                  <a className="supplier-guide-choice-card" href="providers">
                     <img src="/images/broadband-providers-icon.png" />

                     <h3>Suppliers</h3>
                  </a>
                  <a className="supplier-guide-choice-card" href="guides">
                     <img src="/images/product-guides-icon.png" />

                     <h3>Guides</h3>
                  </a>
               </div>

               <div style={{height: 100}}/>

               <div className="separator"/>

               <br/>
               <br/>

               <h2>Specific TV & broadband questions?</h2>

               <div className="product-guides-grid">
                  {guideTypes.map(type => (
                     <a className="product-guides-link" href={`/tv-broadband/guides/${type.uri}`}>{type.name}</a>
                  ))}
               </div>
            </div>
         </div>

         <Footer/>
      </React.Fragment>
   )
}

export default TvBroadbandLandingPage

export const Head: HeadFC = () => (
   <script src="https://kit.fontawesome.com/fc576cdb67.js" crossOrigin="anonymous" async></script>
 )
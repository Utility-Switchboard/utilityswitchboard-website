import { HeadFC } from "gatsby";
import React from "react";
import Footer from "../../components/footer/footer";
import Navigation from "../../components/navigation/navigation";
import SEO from "../../components/SEO/seo";

// CSS
import StylesComponent from "../../components/styles";
import "../../sass/page-specific/product-landing.scss"

const GasElectricityLandingPage: React.FC = () => {
   const guideTypes: { name: string, uri: string }[] = [
      { name: "Business", uri: "business" },
      { name: "Distribution", uri: "distribution" },
      { name: "Environment", uri: "environment" },
      { name: "Meters", uri: "meters" },
      { name: "Schemes", uri: "schemes" },
      { name: "Switching", uri: "switching" },
      { name: "Tariffs", uri: "tariffs" }
   ]

   return (
      <React.Fragment>
         <StylesComponent/>
         <Navigation/>

         {/* HERO */}
         <div className="product-landing-hero-outer-container">
            <div className="product-landing-hero-inner-container container-width">
               <h1>
                  Cheaper energy bills<br/><span id="h1-span">Quick & simple! 💸</span>
               </h1>

               <p>Using our provider guides, expert customer service line and full in-depth guides, become and energy expert and start saving £100s per year on your bills.</p>

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
               <p>First choose whether you'd like to read about a specific energy supplier or guides about specific topics and concepts.</p>

               <div className="supplier-guide-choice-container">
                  <a className="supplier-guide-choice-card" href="providers">
                     <img src="/images/energy-supplier-icon.png" />

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

               <h2>Specific energy questions?</h2>

               <div className="product-guides-grid">
                  {guideTypes.map(type => (
                     <a className="product-guides-link" href={`/gas-electricity/guides/${type.uri}`}>{type.name}</a>
                  ))}
               </div>
            </div>
         </div>

         <Footer/>
      </React.Fragment>
   )
}

export default GasElectricityLandingPage

export const Head: HeadFC = () => (
   <SEO
      metaDescription="Using our provider guides, expert customer service line and full in-depth guides, become and energy expert and start saving £100s per year on your bills."
      title="UK Gas & electricity guides"
      titleTemplate="%s - Utility Switchboard"
      slug="gas-electricity/guides"
   />
 )
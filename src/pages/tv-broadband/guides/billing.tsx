import { graphql, HeadFC } from "gatsby";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import GetHelpSidebarCTA from "../../../components/ctas/sidebar/get-help-sidebar/get-help-sidebar";
import Footer from "../../../components/footer/footer";
import HeroCTA from "../../../components/hero-cta/hero-cta";
import Navigation from "../../../components/navigation/navigation";
import SEO from "../../../components/SEO/seo";

// CSS
import StylesComponent from "../../../components/styles";
import "../../../sass/page-specific/guides-index.scss";

interface pageProps {
   allContentfulTvBroadbandGuideStandardPage: {
      edges: {
         node: {
            slug: string,
            category: string,
            title: string
         }
      }[]
   }
}

const BillingGuides = ({ data }: { data: pageProps }) => {
   const [filterSize, setFilterSize] = useState<number>(0)
   const [showMaxRecords, setShowMaxRecords] = useState<number>(0)

   const pages = data.allContentfulTvBroadbandGuideStandardPage.edges

   useEffect(() => {
      const guides_size = pages.length;

      let new_figure = 8;

      if(new_figure > guides_size) {
         new_figure = guides_size
      }
   
      setFilterSize(guides_size)
      setShowMaxRecords(new_figure)
   }, [])

   const generateContent = () => {
      let jsx: any = []
      
      if(pages.length > 0) {
         for (let i = 0; i < showMaxRecords; i++) {
            const element = pages[i];
            const page = element.node;
            
            jsx.push(
               <a className="guide-card-container" href={`/${page.slug}`}>
                  <div className="guide-card-image-header"/>
                  <div className="guide-card-content">
                     <span>
                        <p className="guide-card-title">{page.title}</p>
                        <span className="guide-card-category">{page.category.charAt(0).toUpperCase() + page.category.slice(1)}</span>
                     </span>

                     <p className="guide-card-arrow">Read guide</p>
                  </div>
                  
               </a>
            )
         }
      }
      return jsx;
   }

   const handleLoadMoreRecords = () => {
      let new_figure = showMaxRecords + 8;

      if(new_figure > filterSize) {
         new_figure = filterSize
      }

      setShowMaxRecords(new_figure)
   }

   return (
      <React.Fragment>
         <StylesComponent/>
         <Navigation/>

         {/** HERO SECTION **/}
         <div className="content-hero-outer-container">
            <div className="content-hero-inner-container container-width">
               <span>
                  <h1>Billing guides<br/><span>TV & Broadband</span></h1>

                  <p>Make sure you fully understand your TV & Broadband bills, ensuring your price is the best it can be and you're not being overcharged!</p>

                  <br/>

                  <HeroCTA/>
               </span>
            </div>
         </div>

         <div className="content-outer-container">
            <div className="content-inner-container container-width">
               <div className="content-container">
                  <Breadcrumbs location="tv-broadband/guides/billing"/>

                  <h2 style={{color: "#222222"}}>Select a guide <i className="fa-solid fa-book"/></h2>

                  <br/>

                  <div className="separator" style={{justifyContent: "flex-start"}}/>

                  <br/>
                  <br/>

                  <div className="guide-results-container">
                     {generateContent()}
                  </div>

                  {
                     filterSize > showMaxRecords ? (
                        <center>
                           <button 
                              className="standard-button purple"
                              onClick={handleLoadMoreRecords}
                              style={{marginTop: 60}}
                           >
                              Load more guides
                           </button>
                        </center>
                     ) : null
                  }
                  
               </div>

               <div className="content-sidebar-container with-margin">
                  <div className="content-sidebar-sticky-wrapper">
                     <GetHelpSidebarCTA/>
                  </div>
               </div>
            </div>
         </div>


         <Footer/>
      </React.Fragment>
   )
}

export default BillingGuides

export const Head: HeadFC = () => (
   <SEO
      metaDescription="Make sure you fully understand your TV & Broadband bills, ensuring your price is the best it can be and you're not being overcharged!"
      title="UK TV & Broadband billing guides"
      titleTemplate="%s - Utility Switchboard"
      slug="tv-broadband/guides/billing"
   />
)

export const pageQuery = graphql`
   query relatedPages {
      allContentfulTvBroadbandGuideStandardPage (
         filter: {
            category: { eq: "billing" }
         }
      ) {
         edges {
            node {
               slug
               title
               category
            }
         }
      }
   }
`
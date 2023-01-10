import { graphql, HeadFC } from "gatsby";
import React from "react";
const Html2ReactParser = require("html-to-react/lib/parser")

// Components
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import insertCTAs from "../components/ctas/insert_ctas";
import Footer from "../components/footer/footer";
import Navigation from "../components/navigation/navigation";

// CSS
import "../sass/page-specific/content-template.scss"
import StylesComponent from "../components/styles";
import GetHelpSidebarCTA from "../components/ctas/sidebar/get-help-sidebar/get-help-sidebar";
import ContentNavigationWidget from "../components/content-navigation/content-navigation";
import RelatedPagesSidebarWidget from "../components/related-pages/related-pages-sidebar";
import SEO from "../components/SEO/seo";
import HeroCTA from "../components/hero-cta/hero-cta";

interface pageProps {
   contentfulGasElectricityGuideStandardPage: {
      title: string,
      slug: string,
      category: string,
      updatedAt: string,
      content: {
         internal: {
            content: string
         }
      },
      metaDescription: {
         internal: {
            content: string
         }
      },
      navigation: {
         internal: {
            content: string
         }
      }
   },
   allContentfulGasElectricityGuideStandardPage: {
      edges: {
         node: {
            title: string,
            slug: string
         }
      }[]
   }
}

const GasElectricityGuideStandardPageTemplate = ({ data }: { data: pageProps }) => {
   const page = data.contentfulGasElectricityGuideStandardPage;
   const related_pages = data.allContentfulGasElectricityGuideStandardPage.edges

   // Variables
   const navigation = page.navigation.internal.content

   const generateContent = (): React.ReactNode => {
      const content = page.content.internal.content;
      const htmlToReactParser = new Html2ReactParser();
      const reactElement = htmlToReactParser.parse(content)

      // Insert CTAs
      const final_content_jsx = insertCTAs(reactElement)

      return final_content_jsx
   }

   return (
      <React.Fragment>
         <StylesComponent/>
         <Navigation/>

        {/** HERO SECTION **/}
        <div className="content-hero-outer-container">
            <div className="content-hero-inner-container container-width">
               <span>
                  
                  <h1>{page.title}</h1>

                  <p>{page.metaDescription.internal.content}</p>

                  <br/>

                  <HeroCTA/>
               </span>
            </div>
         </div> 

         <div className="content-outer-container">
            <div className="content-inner-container container-width">
               <div className="content-container">
                  <Breadcrumbs location={page.slug}/>

                  <p className="disclaimer">Disclaimer: The information on this page was last updated on {new Date(page.updatedAt).toLocaleString("en-GB")}</p>

                  {generateContent()}

                  <br/>

                  <p className="disclaimer">The subject matter of this webpage is subject to the opinion of, and factual research carried out by, the author. We always strive to provide the most up to date, correct and informative information in all of our webpages, but from time to time, you may spot an error or something you don't agree with. Please report this to us at <a href="info@utilityswitchboard.com" className="standard-text-link">info@utilityswitchboard.com</a></p>

                  <p className="disclaimer">Any products or services displayed on this webpage may only represent a portion of the options available to you. We encourage you to carry out your own independent research and seek advice where necessary to aid your decision making. We may receive a commission from <a href="/terms-of-use/our-partners/" className="standard-text-link" target="_blank">selected partnered companies</a> for the introduction of potential customers and business mentioned on this website. This helps us to provide our website to you for free as a customer.</p>
               </div>
               <div className="content-sidebar-container with-margin">
                  <div className="content-sidebar-sticky-wrapper">
                     <GetHelpSidebarCTA />

                     <ContentNavigationWidget navigation={navigation}/>

                     {
                        related_pages.length > 0 ? (
                           <RelatedPagesSidebarWidget data={related_pages}/>
                        ) : null
                     }
                  </div>
               </div>
            </div>
         </div>

         <Footer/>
      </React.Fragment>
   )
}

export default GasElectricityGuideStandardPageTemplate

export const pageQuery = graphql`
   query pageBySlug ( $slug: String!, $category: String! ) {
      contentfulGasElectricityGuideStandardPage ( slug: { eq: $slug } ) {
         metaDescription {
            internal {
               content
            }
         }
         title
         slug
         category
         updatedAt
         content {
            internal {
               content
            }
         }
         navigation {
            internal {
               content
            }
         }
      }
      allContentfulGasElectricityGuideStandardPage ( 
         filter: { slug: { ne: $slug }, category: { eq: $category } },
         limit: 5
         sort: { updatedAt: DESC }
      ) {
         edges {
            node {
               slug
               title
            }
         }
      }
   }
`

export const Head = ({ data }: { data: pageProps }) => {
   const page = data.contentfulGasElectricityGuideStandardPage
   return (
      <SEO
         title={page.title}
         metaDescription={page.metaDescription.internal.content}
         slug={page.slug}
      />
   )
}
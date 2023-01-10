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
import ContentNavigationWidget from "../components/content-navigation/content-navigation";
import RelatedPagesSidebarWidget from "../components/related-pages/related-pages-sidebar";
import SEO from "../components/SEO/seo";

interface pageProps {
   contentfulPolicy: {
      title: string,
      slug: string,
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
   allContentfulPolicy: {
      edges: {
         node: {
            title: string,
            slug: string
         }
      }[]
   }
}

const PolicyTemplate = ({ data }: { data: pageProps }) => {
   const page = data.contentfulPolicy;
   const related_pages = data.allContentfulPolicy.edges

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
               </span>
            </div>
         </div> 

         <div className="content-outer-container">
            <div className="content-inner-container container-width">
               <div className="content-container">
                  <Breadcrumbs location={page.slug}/>

                  <p className="disclaimer">Disclaimer: The policy was last updated on {new Date(page.updatedAt).toLocaleString("en-GB")}</p>

                  {generateContent()}
               </div>
               <div className="content-sidebar-container with-margin">
                  <div className="content-sidebar-sticky-wrapper">
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

export default PolicyTemplate

export const pageQuery = graphql`
   query pageBySlug ( $slug: String! ) {
      contentfulPolicy ( slug: { eq: $slug } ) {
         metaDescription {
            internal {
               content
            }
         }
         title
         slug
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
      allContentfulPolicy ( 
         filter: { slug: { ne: $slug } },
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
   const page = data.contentfulPolicy
   return (
      <SEO
         title={page.title + " | Utility Switchboard"}
         metaDescription={page.metaDescription.internal.content}
         slug={page.slug}
      />
   )
}
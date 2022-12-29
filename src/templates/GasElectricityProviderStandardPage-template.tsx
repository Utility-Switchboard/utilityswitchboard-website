import { graphql, HeadFC } from "gatsby";
import React from "react"
const Html2ReactParser = require("html-to-react/lib/parser");

// Components
import Footer from "../components/footer/footer";
import Navigation from "../components/navigation/navigation";
import GetHelpSidebarCTA from "../components/ctas/sidebar/get-help-sidebar/get-help-sidebar";
import ContentNavigationWidget from "../components/content-navigation/content-navigation";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import insertCTAs from "../components/ctas/insert_ctas";

// CSS
import "../sass/page-specific/content-template.scss"
import StylesComponent from "../components/styles";
import HeroCTA from "../components/hero-cta/hero-cta";
import SEO from "../components/SEO/seo";


interface pageProps {
   contentfulGasElectricityProviderStandardPage: {
      slug: string,
      title: string,
      category: string,
      updatedAt: string,
      logo: {
         file: {
            url: string
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
      },
      content: {
         internal: {
            content: string
         }
      },
      provider: string
   },
   allContentfulGasElectricityProviderStandardPage: {
      edges: {
         node: {
            category: string,
            slug: string
         }
      }[]
   }
}

const GasElectricityProviderStandardPageTemplate = ({ data }: { data: pageProps }) => {
   const page = data.contentfulGasElectricityProviderStandardPage;

   // Title formatting
   const title_parts = page.title.split("-")

   let title_part_1 = title_parts[0]
   let title_part_2 = title_parts.slice(1).join("-") 

   //-- Specific cases
   if(page.provider === 'Co-operative Energy') {
      title_part_1 = title_parts[0] + "-" + title_parts[1]
      title_part_2 = title_parts.slice(2).join("-")
   }

   // Provider
   const slug = page.slug
   const provider_uri = slug.split("/")[2]
   const provider_name = provider_uri.charAt(0).toUpperCase() + provider_uri.slice(1).replaceAll("-", " ")

   // Variables
   const logo_url = page.logo.file.url
   const related_pages = data.allContentfulGasElectricityProviderStandardPage.edges
   const category = page.category
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
                  
                  <h1>{title_part_1}<br/><span>{title_part_2}</span></h1>

                  <p>{page.metaDescription.internal.content}</p>

                  <br/>

                  <HeroCTA/>
               </span>
               
               <div className="content-hero-provider-logo-container">
                  <img
                     alt={`${page.provider} logo`}
                     title={`${page.provider} logo`}
                     src={`https:${logo_url}`}
                  />
               </div>
            </div>
         </div>

         <div className="content-provider-navigation-bar">
            <h2>More from {page.provider}</h2>
            
            <ul>
               <a href={`/${slug}`} className="active">{category.replaceAll("-", " ")}</a>

               {related_pages.map(node => (
                  <React.Fragment>
                     <a href={"/" + node.node.slug}>{node.node.category.replaceAll("-", " ")}</a>
                  </React.Fragment>
               ))}

               <a href={`/gas-electricity/providers/${provider_uri}`}>Home</a>
            </ul>
         </div>

         <div className="content-outer-container">
            <div className="content-inner-container container-width">
               <div className="content-container">
                  <Breadcrumbs location={slug}/>

                  <p className="disclaimer">Disclaimer: The information on this page was last updated on {new Date(page.updatedAt).toLocaleString("en-GB")}</p>

                  {generateContent()}

                  <br/>

                  <p className="disclaimer">The subject matter of this webpage is subject to the opinion of, and factual research carried out by, the author. We always strive to provide the most up to date, correct and informative information in all of our webpages, but from time to time, you may spot an error or something you don't agree with. Please report this to us at <a href="info@utilityswitchboard.com" className="standard-text-link">info@utilityswitchboard.com</a></p>

                  <p className="disclaimer">Any products or services displayed on this webpage may only represent a portion of the options available to you. We encourage you to carry out your own independent research and seek advice where necessary to aid your decision making. We may receive a commission from <a href="/terms-of-use/our-partners/" className="standard-text-link" target="_blank">selected partnered companies</a> for the introduction of potential customers and business mentioned on this website. This helps us to provide our website to you for free as a customer.</p>
               </div>
               <div className="content-sidebar-container">
                  <div className="content-sidebar-sticky-wrapper">
                     <GetHelpSidebarCTA />

                     <ContentNavigationWidget navigation={navigation}/>
                  </div>
               </div>
            </div>
         </div>

         

         <Footer/>
      </React.Fragment>
   )
}

export default GasElectricityProviderStandardPageTemplate

export const pageQuery = graphql`
   query pageBySlug( $slug: String!, $provider: String! ) {
      contentfulGasElectricityProviderStandardPage ( slug: { eq: $slug } ) {
         metaDescription {
            internal {
               content
            }
         },
         title
         slug
         category
         updatedAt
         provider
         logo {
            file {
               url
            }
         }
         navigation {
            internal {
               content
            }
         }
         content {
            internal {
               content
            }
         }
      }
      allContentfulGasElectricityProviderStandardPage ( filter: { slug: { ne: $slug }, provider: { eq: $provider } } ) {
         edges {
            node {
               slug,
               category
            }
         }
      } 
   }
`

export const Head = ({ data }: { data: pageProps }) => {
   const page = data.contentfulGasElectricityProviderStandardPage
   return (
      <SEO
         title={page.title}
         metaDescription={page.metaDescription.internal.content}
         slug={page.slug}
      />
   )
}
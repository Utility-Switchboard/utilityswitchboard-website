import { graphql, HeadFC } from "gatsby";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import GetHelpSidebarCTA from "../components/ctas/sidebar/get-help-sidebar/get-help-sidebar";
import Footer from "../components/footer/footer";
import HeroCTA from "../components/hero-cta/hero-cta";
import Navigation from "../components/navigation/navigation";
import SEO from "../components/SEO/seo";
import StylesComponent from "../components/styles";
import categoryIcons from "../resources/category-icons";

// CSS
import '../sass/page-specific/content-template.scss'
import '../sass/page-specific/provider-main-page.scss'

interface pageProps {
   contentfulTvBroadbandProviderMainPage: {
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
      provider: string
   },
   allContentfulTvBroadbandProviderStandardPage: {
      edges: {
         node: {
            slug: string,
            category: string,
            navigation: {
               internal: {
                  content: string
               }
            }
         }
      }[]
   }
}

const TvBroadbandProviderMainPageTemplate = ({ data }: { data: pageProps }) => {
   // State
   const [selectedCategory, setSelectedCategory] = useState<number>(0)

   const page = data.contentfulTvBroadbandProviderMainPage;
   const related_pages = data.allContentfulTvBroadbandProviderStandardPage.edges;

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

   // Variables
   const logo_url = page.logo.file.url
   const category = page.category

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

         <div className="content-outer-container">
            <div className="content-inner-container container-width">
               <div className="content-container">
                  <Breadcrumbs location={slug}/>


                  <h2>Get help by category</h2>

                  <p>For all you {page.provider} queries, take a look at the below grid to find what you're looking for.</p>

                  {/* Large devices version */}
                  <div className="provider-navigation-grid-container">
                     <ul className="provider-navigation-category-options">
                        {related_pages.map((page, i) => (
                           <li onClick={() => setSelectedCategory(i)} className={selectedCategory === i ? 'active' : 'inactive'}>
                              <i className={categoryIcons[page.node.category]}/> {page.node.category.replaceAll("-", " ")}
                           </li>
                        ))}
                     </ul>
                     <div className="provider-navigation-category-results-container">
                        <h3>{page.provider} {related_pages[selectedCategory].node.category.replaceAll("-", " ")}</h3>

                        <ul className="provider-navigation-category-results-list">
                           {Object.entries(JSON.parse(related_pages[selectedCategory].node.navigation.internal.content)).map(option => (
                              <a href={"/" + related_pages[selectedCategory].node.slug + option[1]}><span><i className="fa-solid fa-right-long"/>{option[0]}</span></a>
                           ))}
                        </ul>
                     </div>
                  </div>

                  {/* Medium / small devices version */}
                  <div className="sm-provider-navigation-grid-container">
                     {
                        related_pages.map((page, i) => (
                           <React.Fragment>
                              <input 
                                 checked={selectedCategory === i}
                                 type="radio"
                                 className="standard-accordion-trigger invisible"
                                 name="page-list"
                                 value={i}
                                 id={`query_${i}`}
                                 onChange={() => setSelectedCategory(i)}
                              />
                              
                              <label className="standard-accordion-wrapper pink" htmlFor={'query_' + i}>
                                 <div className="standard-accordion-header"><span style={{textTransform: 'capitalize'}}>{page.node.category.replaceAll("-", " ")}</span></div>

                                 <div className="standard-accordion-content">
                                    <ul className="provider-navigation-category-results-list sm-pages-list">
                                       {Object.entries(JSON.parse(related_pages[selectedCategory].node.navigation.internal.content)).map(option => (
                                          <a href={"/" + related_pages[selectedCategory].node.slug + option[1]}>{option[0]}</a>
                                       ))}
                                    </ul>
                                 </div>
                              </label> 
                           </React.Fragment>
                        ))
                     }
                  </div>

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

export default TvBroadbandProviderMainPageTemplate

export const pageQuery = graphql`
   query pageBySlug ( $slug: String!, $provider: String! ) {
      contentfulTvBroadbandProviderMainPage ( slug: { eq: $slug }) {
         metaDescription {
            internal {
               content
            }
         }
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
      }
      allContentfulTvBroadbandProviderStandardPage ( filter: { provider: { eq: $provider } } ) {
         edges {
            node {
               slug,
               category,
               navigation {
                  internal {
                     content
                  }
               }
            }
         }
      }
   }
`

export const Head = ({ data }: { data: pageProps }) => {
   const page = data.contentfulTvBroadbandProviderMainPage
   return (
      <SEO
         title={page.title}
         metaDescription={page.metaDescription.internal.content}
         slug={page.slug}
      />
   )
}
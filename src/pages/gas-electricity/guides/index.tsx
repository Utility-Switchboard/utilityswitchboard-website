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
   allContentfulGasElectricityGuideStandardPage: {
      edges: {
         node: {
            slug: string,
            category: string,
            title: string
         }
      }[]
   }
}

interface filterSizes { [ key: string ]: number }

const Guides = ({ data }: { data: pageProps }) => {
   const [filter, setFilter] = useState<string>('')
   const [filterSizes, setFilterSizes] = useState<filterSizes>({})
   const [showMaxRecords, setShowMaxRecords] = useState<number>(8)

   const pages = data.allContentfulGasElectricityGuideStandardPage.edges

   useEffect(() => {
      let new_filter_sizes: filterSizes = {
         "": 0
      }

      for (let i = 0; i < pages.length; i++) {
         const page = pages[i].node;
         
         if(new_filter_sizes[page.category] === undefined) {
            new_filter_sizes[page.category] = 1
         } else {
            new_filter_sizes[page.category] += 1
         }

         new_filter_sizes[""] += 1
      }

      setFilterSizes(new_filter_sizes)
   }, [])

   useEffect(() => {
      let new_figure = 8;

      if(new_figure > filterSizes[filter]) {
         new_figure = filterSizes[filter]
      }

      setShowMaxRecords(new_figure)
   }, [filter])

   const generateContent = () => {
      let jsx: any = []

      let filtered_array = pages
      
      if(filter !== '') {
         filtered_array = pages.filter((e => e.node.category === filter))
      }
      

      if(filtered_array.length > 0 && showMaxRecords <= filterSizes[filter]) {
         for (let i = 0; i < showMaxRecords; i++) {
            const element = filtered_array[i];
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

      if(new_figure > filterSizes[filter]) {
         new_figure = filterSizes[filter]
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
                  <h1>Gas & electricity<br/><span>Guides</span></h1>

                  <p>Read up about a wide range of energy related topics, from renewable energy to meters. Learn more and save money along the way!</p>

                  <br/>

                  <HeroCTA/>
               </span>
            </div>
         </div>

         <div className="content-outer-container">
            <div className="content-inner-container container-width">
               <div className="content-container">
                  <Breadcrumbs location="gas-electricity/guides"/>

                  <p>Select a category to filter guides</p>

                  <select
                     className="standard-select"
                     value={filter}
                     onChange={(e) => setFilter(e.target.value)}
                  >
                     <option value="">All guides</option>
                     <option value="business">Business</option>
                     <option value="distribution">Distribution</option>
                     <option value="environment">Environment</option>
                     <option value="meters">Meters</option>
                     <option value="schemes">Schemes</option>
                     <option value="switching">Switching</option>
                     <option value="tariffs">Tariffs</option>
                  </select>

                  <br/>
                  <br/>

                  <div className="separator" style={{justifyContent: "flex-start"}}/>

                  <br/>
                  <br/>

                  <div className="guide-results-container">
                     {generateContent()}
                  </div>

                  {
                     filterSizes[filter] > showMaxRecords ? (
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

export default Guides

export const Head: HeadFC = () => (
   <SEO
      metaDescription="Using our provider guides, expert customer service line and full in-depth guides, become and energy expert and start saving £100s per year on your bills."
      title="UK Gas & electricity guides"
      titleTemplate="%s - Utility Switchboard"
      slug="gas-electricity/guides"
   />
 )

export const pageQuery = graphql`
   query relatedPages {
      allContentfulGasElectricityGuideStandardPage {
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
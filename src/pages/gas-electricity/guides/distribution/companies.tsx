import { graphql, HeadFC } from "gatsby";
import React from "react";
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs";
import GetHelpSidebarCTA from "../../../../components/ctas/sidebar/get-help-sidebar/get-help-sidebar";
import Footer from "../../../../components/footer/footer";
import HeroCTA from "../../../../components/hero-cta/hero-cta";
import Navigation from "../../../../components/navigation/navigation";
import SEO from "../../../../components/SEO/seo";

// CSS
import StylesComponent from "../../../../components/styles";
import "../../../../sass/page-specific/providers-index.scss";

interface pageProps {
   allContentfulGasElectricityGuideCompanyPage: {
      edges: {
         node: {
            slug: string,
            logo: {
               file: {
                  url: string
               }
            },
            provider: string
         }
      }[]
   }
}

const GasElectricityDistributionCompanies = ({ data }: { data: pageProps }) => {
   const related_pages = data.allContentfulGasElectricityGuideCompanyPage.edges

   related_pages.sort((a, b) => a.node.provider.localeCompare(b.node.provider))

   const generateAZList = () => {
      let jsx: any = []

      let alphabetJsx: { [key: string]: any } = {}

      for (let i = 0; i < related_pages.length; i++) {
         const page = related_pages[i];
         const letter = page.node.provider.charAt(0)

         const to_push = [
            <a className="az-provider-option" href={"/" + page.node.slug}>
               <img src={`https:${page.node.logo.file.url}`}/>
               <p>{page.node.provider}</p>
            </a>
         ]
         
         if(alphabetJsx[letter] === undefined) {
            alphabetJsx[letter] = to_push
         } else {
            alphabetJsx[letter].push(to_push)
         }
      }

      const alphabetArray = Object.entries(alphabetJsx)

      for (let i = 0; i < alphabetArray.length; i++) {
         const el = alphabetArray[i];
         
         jsx.push(
            <React.Fragment key={el[0]}>
               <h3 className="az-provider-letter">{el[0]}</h3>
               {el[1]}
            </React.Fragment>
         )
      }

      jsx.sort((a: any, b: any) => a.key.localeCompare(b.key))

      return jsx;
   }

   return (
      <React.Fragment>
         <StylesComponent/>
         <Navigation transparent={false}/>

         {/** HERO SECTION **/}
         <div className="content-hero-outer-container">
            <div className="content-hero-inner-container container-width">
               <span>
                  <h1>Electricity<br/><span>Distribution companies</span></h1>

                  <p>Find your electricity distribution network operator (DNO), or read up about the DNO in the area that you're moving to. Whatever your need, find it in the list below.</p>

                  <br/>

                  <HeroCTA/>
               </span>
            </div>
         </div>


         <div className="content-outer-container">
            <div className="content-inner-container container-width">
               <div className="content-container">
                  <Breadcrumbs location="gas-electricity/guides/distribution/companies"/>

                  <h2>A-Z companies</h2>

                  {generateAZList()}
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

export default GasElectricityDistributionCompanies

export const pageQuery = graphql`
   query relatedPages {
      allContentfulGasElectricityGuideCompanyPage {
         edges {
            node {
               slug
               provider
               logo {
                  file {
                     url
                  }
               }
            }
         }
      }
   }
`

export const Head: HeadFC = () => (
   <SEO
      metaDescription="Find your electricity distribution network operator (DNO), or read up about the DNO in the area that you're moving to."
      title="UK Gas & electricity distribution companies"
      titleTemplate="%s - Utility Switchboard"
      slug="gas-electricity/guides/distribution/companies"
   />
)
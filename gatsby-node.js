const path = require("path")

exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions

   graphql(`
      {
         allContentfulGasElectricityProviderStandardPage {
            edges {
               node {
                  title
                  slug
                  provider
               }
            }
         }
         allContentfulGasElectricityProviderMainPage {
            edges {
               node {
                  title
                  slug
                  provider
               }
            }
         }
         allContentfulGasElectricityGuideStandardPage {
            edges {
               node {
                  title
                  slug
                  category
               }
            }
         }
         allContentfulGasElectricityGuideCompanyPage {
            edges {
               node { 
                  title
                  slug
               }
            }
         }
      }
   `)
   .then( async (value) => {
      if(value.errors) {
         throw value.errors
      }

      let postArray = Object.entries(value.data)

      for (let i = 0; i < postArray.length; i++) {
         const post_type = postArray[i][0];
         const page_info = postArray[i][1];
         const template_prefix = post_type.replace("allContentful", "")
         const template = path.resolve(`./src/templates/${template_prefix}-template.tsx`)

         const edges = page_info.edges;
         
         for (let ind = 0; ind < edges.length; ind++) {
            const edge = edges[ind];

            let page_params = {
               path: edge.node.slug,
               component: template,
               context: {
                  slug: edge.node.slug
               }
            }

            if(template_prefix.includes("Provider") === true) {
               page_params.context.provider = edge.node.provider
            }

            if(template_prefix.includes("Guide") === true) {
               page_params.context.category = edge.node.category
            }
            
            await createPage(page_params)
         }
      }
   })
}
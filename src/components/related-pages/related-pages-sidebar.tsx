import React from "react";

// CSS
import "./related-pages-sidebar-styles.scss";

interface pageProps {
   node: {
      slug: string,
      title: string
   }
}

const RelatedPagesSidebarWidget = ({ data }: { data: pageProps[] }) => {
   return (
      <React.Fragment>
         <input
            className="standard-accordion-trigger invisible"
            defaultChecked={false}
            id="related_pages"
            type="checkbox"
         />

         <label className="standard-accordion-wrapper pink-cream standard" htmlFor="related_pages">
            <div className="standard-accordion-header"><span>More like this</span></div>

            <ol className="related-pages-list">
               {data.map(page => (
                  <li>
                     <a href={"/" + page.node.slug}>{page.node.title}</a>
                  </li>
               ))}
            </ol>
         </label>
      </React.Fragment>
   )
}

export default RelatedPagesSidebarWidget
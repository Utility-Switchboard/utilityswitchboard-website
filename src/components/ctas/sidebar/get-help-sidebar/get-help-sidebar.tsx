import React from "react";

// CSS
import "./get-help-sidebar-styles.scss";

const GetHelpSidebarCTA = () => {
   return (
      <React.Fragment>
         <div className="cta-container">
            <h2>Need a <span>hand</span>?</h2>

            <div className="separator" />
            
            <p>Let us help you out with your query. Call us now and talk to an expert.</p>

            <a href="tel:+442039927717" className="standard-button green">020&nbsp;3992&nbsp;7717</a>
         </div>
      </React.Fragment>
   )
}

export default GetHelpSidebarCTA
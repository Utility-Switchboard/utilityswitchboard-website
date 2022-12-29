import React from "react";

// CSS
import '../content-cta-styles.scss'

const MovingHouseCTA: React.FC = () => {
   return (
      <div className="standard-cta-outer-container">
         <div className="standard-cta-strip-header">Moving house? 🏠 Set up your utilities, today!</div>
         
         <div className="standard-cta-content-section">
            <p>Let us set everything up for you and leave you with <strong>one less thing</strong> to think about when moving house! Give us a call now, <strong>sit back</strong> and let us do the work.</p>

            <div className="standard-cta-content-buttons-wrapper">
               <a href="tel:+442039927717" className="standard-button green telephone-link">020&nbsp;3992&nbsp;7717</a>
               <button disabled className="standard-text-link">Or get a callback</button>
            </div>
         </div>
      </div>
   )
}

export default MovingHouseCTA
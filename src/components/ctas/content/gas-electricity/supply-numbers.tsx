import React from "react";

// CSS
import '../content-cta-styles.scss'

const SupplyNumbersCTA: React.FC = () => {
   return (
      <div className="standard-cta-outer-container">
         <div className="standard-cta-strip-header">Looking for your supply numbers? 🔍</div>
         
         <div className="standard-cta-content-section">
            <p>Give us a quick call and we can give you your <strong>MSN, MPAN & MPRN</strong> in seconds. We can also help you with any other query you may have about your energy supply!</p>

            <div className="standard-cta-content-buttons-wrapper">
               <a href="tel:+442039927717" className="standard-button green telephone-link">020&nbsp;3992&nbsp;7717</a>
               <button disabled className="standard-text-link">Or get a callback</button>
            </div>
         </div>
      </div>
   )
}

export default SupplyNumbersCTA
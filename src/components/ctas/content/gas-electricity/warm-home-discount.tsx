import React from "react";

// CSS
import '../content-cta-styles.scss'

const WarmHomeDiscountCTA: React.FC = () => {
   return (
      <div className="standard-cta-outer-container">
         <div className="standard-cta-strip-header">Get £140 off your energy bills 💸</div>
         
         <div className="standard-cta-content-section">
            <p>Let us guide you through the <strong>Warm Home Discount</strong> and find you the right tariff that can also give you an <strong>additional £140</strong> from the Warm Home Discount.</p>

            <div className="standard-cta-content-buttons-wrapper">
               <a href="tel:+442039927717" className="standard-button green telephone-link">020&nbsp;3992&nbsp;7717</a>
               <button disabled className="standard-text-link">Or get a callback</button>
            </div>
         </div>
      </div>
   )
}

export default WarmHomeDiscountCTA
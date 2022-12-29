import React from "react";

// CSS
import '../content-cta-styles.scss'

const SmartMeterCTA: React.FC = () => {
   return (
      <div className="standard-cta-outer-container">
         <div className="standard-cta-strip-header">Give accurate, automatic meter readings ⚡️</div>
         
         <div className="standard-cta-content-section">
            <p>Did you know that with a smart meter you may <strong>never have to submit a meter reading</strong> again! 100% accurate bills, all the time. Give us a call to find out more about automatic meter readings.</p>

            <div className="standard-cta-content-buttons-wrapper">
               <a href="tel:+442039927717" className="standard-button green telephone-link">020&nbsp;3992&nbsp;7717</a>
               <button disabled className="standard-text-link">Or get a callback</button>
            </div>
         </div>
      </div>
   )
}

export default SmartMeterCTA
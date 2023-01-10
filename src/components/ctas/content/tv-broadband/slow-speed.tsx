import React from "react";

// CSS
import '../content-cta-styles.scss'

const SlowSpeedsCTA: React.FC = () => {
   return (
      <div className="standard-cta-outer-container">
         <div className="standard-cta-strip-header">Slow broadband speeds? 🐌 Get a supercharge today!</div>
         
         <div className="standard-cta-content-section">
            <p>The most complained about issue when it comes to broadband is <strong>slow speeds and dropping connection</strong>. We can help you improve both of these if you give us a call today!</p>

            <div className="standard-cta-content-buttons-wrapper">
               <a href="tel:+442039927717" className="standard-button green telephone-link">020&nbsp;3992&nbsp;7717</a>
               <button disabled className="standard-text-link">Or get a callback</button>
            </div>
         </div>
      </div>
   )
}

export default SlowSpeedsCTA
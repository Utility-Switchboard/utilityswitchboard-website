import React, { useState } from "react";

import "./hero-cta-styles.scss";

const HeroCTA: React.FC = () => {
   const [showModal, setShowModal] = useState<boolean>(false)

   const handleCloseNavigationViaBackdrop = (event: React.MouseEvent): void => {
      event.stopPropagation();

      if(event.target === event.currentTarget) {
         setShowModal(false)
      }
   }

   return (
      <React.Fragment>
         {/* Button */}
         <button
            className="standard-button green"
            onClick={() => setShowModal(!showModal)}
         >Get started</button>

         {/* Modal */}
         <div className={`modal-backdrop ${showModal ? 'show' : 'hide'}`} onClick={handleCloseNavigationViaBackdrop}>
            <div className="modal-wrapper-container">
               <div className="modal-container">
                  <div className="modal-header">
                     <h2>Call customer service 👩‍💻</h2>
                  </div>

                  <div className="modal-content">
                     <p>Speak to an expert and have your query resolved in minutes.</p>

                     <br/>

                     <a style={{fontSize: 22}} className="telephone-link black" href="tel:+442039927717">020&nbsp;3992&nbsp;7717</a>

                     <p style={{margin: 10}}>or</p>

                     <input
                        disabled
                        type="text"
                        className="standard-input"
                        placeholder="Enter your phone number"
                     />

                     <br/>
                     <br/>

                     <button
                        className="standard-button green">
                           Get a free callback
                        </button>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default HeroCTA
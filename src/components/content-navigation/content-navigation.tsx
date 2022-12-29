import React from "react";

// CSS
import "./content-navigation-styles.scss";

const ContentNavigationWidget = ({ navigation }: { navigation: string }) => {
   const navigation_json: { [key: string]: string } = JSON.parse(navigation)   

   const handleNavigateTo = (event: any):void => {
      const { value } = event.target;

      try {
         document.querySelector(value).scrollIntoView({ behavior: 'smooth'})
      }

      catch {
         window.scrollTo({top: 700, behavior: 'smooth'})
      }
      
   }

   return (
      <div className="navigation-widget-container">
         <h3>Skip to content&nbsp; <i className="fa-solid fa-forward"></i></h3>

         <select onChange={handleNavigateTo} value="">
            <option value="" selected disabled>Choose a section</option>

            {Object.entries(navigation_json).map(option => (
               <option value={option[1]}>{option[0]}</option>
            ))}
         </select>
      </div>
   )
}

export default ContentNavigationWidget
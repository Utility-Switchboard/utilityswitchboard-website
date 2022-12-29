import React from "react";

// CSS
import "./breadcrumbs-styles.scss";

const Breadcrumbs = ({ location }: { location: string }) => {
   const printCrumbs = () => {
      let jsx = [
         <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            id="home-breadcrumb"
         >
            <a 
               href="/"
               itemProp="item"
            >
               <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="0" />
         </li>
      ]

      const split_url = location.split("/");

      for (let i = 0; i < split_url.length; i++) {
         const el = split_url[i];
         const name_spaces = el.replaceAll("-", " ");
         let clean_name = name_spaces.toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
         
         // Individual cases
         if(el === 'gas-electricity') clean_name = "Gas & electricity"
         if(el === 'edf-energy') clean_name = "EDF Energy"
         if(el === 'sse') clean_name = "SSE"
         if(el === 'co-operative-energy') clean_name = "Co-operative Energy"
         if(el === 'ovo-energy') clean_name = "OVO Energy"
         
         let url_array = [];
         for (let ind = 0; ind < i+1; ind++) {
            const elem = split_url[ind];
            
            url_array.push(elem);
         }

         const url = url_array.join("/")

         jsx.push(
            <li 
               itemProp="itemListElement" 
               itemScope 
               itemType="https://schema.org/ListItem"
            >
               <a 
                  href={`/${url}`}
                  itemProp="item"
               >
                  <span itemProp="name">{clean_name}</span>
               </a>
               <meta itemProp="position" content={(i+1).toString()}/>
            </li>
         )
      }

      return jsx
   }

   return (
      <ol className="breadcrumbs-standard" itemScope itemType="https://schema.org/BreadcrumbList">
         {printCrumbs()}
      </ol>
   )
}

export default Breadcrumbs
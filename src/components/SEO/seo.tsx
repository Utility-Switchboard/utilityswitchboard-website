import React from "react";

interface propTypes {
   metaDescription: string,
   image?: string,
   title: string,
   titleTemplate?: string,
   slug: string
}

export const SEO = ( props: propTypes ) => {
   let image = '//utilityswitchboard.com/images/usb-default-og.jpg'

   if(props.image !== '' && props.image !== undefined) {
      image = props.image
   }

   return (
      <>
         <title>{props.title}</title>
         <meta name="description" content={props.metaDescription}/>
         <meta name="image" content={`https:${image}`}/>
         <meta property="og:url" content={`https://appliancesure.com/${props.slug}`}/>
         <meta property="og:type" content="article"/>
         <meta property="og:image" content={`https:${image}`}/>
         <meta property="twitter:image" content={`https:${image}`}/>

         <script src="https://kit.fontawesome.com/fc576cdb67.js" crossOrigin="anonymous" async></script>
      </>
   )
}

export default SEO
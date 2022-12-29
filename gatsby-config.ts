import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Utility Switchboard`,
    siteUrl: `https://utilityswitchboard.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
  /*{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": ""
    }
  }*/ "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  {
    resolve: "gatsby-source-contentful",
    options: {
      "accessToken": "2PWE81F-9N6GGtNiI9hs1qd1NRWSoJOFx-SGq4ROzng",
      "spaceId": "rkcp8nckeo70"
    }
  }]
};

export default config;

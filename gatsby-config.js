const linkResolver = require("./src/utils/linkResolver")

module.exports = {
  siteMetadata: {
    title: `Vikings Floorball Club`,
    description: `Home of the Melbourne Vikings Floorball Club | Social Floorball | Most central floorball club in Melbourne`,
    author: `@vikingsfc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Melbourne Vikings Floorball Club`,
        short_name: `Vikings FC`,
        start_url: `/`,
        background_color: `#ff4d4d`,
        theme_color: `#ff4d4d`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "vikingswebsite",
        accessToken:
          "MC5YYno3OUJFQUFDQUFsSnlI.77-977-9B--_vTsSS--_vXzvv710ThNZ77-977-9Bu-_ve-_ve-_ve-_vV3vv71o77-9C--_ve-_vRsFOmw", // (optional API access token)
        path: "/preview", // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        linkResolver,
        pages: [
          {
            type: "Article",
            match: `/news/:uid`,
            path: `/previews/news`,
            component: require.resolve("./src/templates/ArticlePage.jsx"),
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

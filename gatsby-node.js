/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      articles: allPrismicArticle {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)
  result.data.articles.edges.forEach(({ node }) => {
    createPage(
      {
        path: `/news/${node.uid}`,
        component: path.resolve("./src/templates/ArticlePage.jsx"),
        context: {
          ...node,
        },
      },
      true
    )
  })
}

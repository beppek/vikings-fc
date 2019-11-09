import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ArticleList from "../components/ArticleList"

export const query = graphql`
  query ArticlesQuery {
    articles: allPrismicArticle {
      edges {
        node {
          data {
            hero_image {
              alt
              copyright
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            title {
              text
            }
          }
          first_publication_date
          last_publication_date
          type
          uid
        }
      }
    }
  }
`

const NewsPage = ({ data }) => {
  const articles = data.articles.edges.map(edge => ({
    ...edge.node,
  }))
  console.log("articles", articles)
  return (
    <Layout>
      <SEO title="News" />
      <h2>News</h2>
      <ArticleList articles={articles} />
    </Layout>
  )
}

export default NewsPage

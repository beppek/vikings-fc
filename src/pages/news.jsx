import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ArticleList from "../components/ArticleList"

export const query = graphql`
  query ArticlesQuery {
    prismic {
      allArticles {
        edges {
          node {
            content
            _meta {
              uid
              tags
              firstPublicationDate
              lastPublicationDate
            }
            hero_image
            hero_imageSharp {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            title
          }
        }
      }
    }
  }
`

const NewsPage = ({ data }) => {
  const articles = data.prismic.allArticles.edges.map(edge => ({
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

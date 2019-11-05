import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"

export const query = graphql`
  query ArticleQuery($uid: String) {
    prismic {
      allArticles(uid: $uid) {
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
                fluid(maxWidth: 800) {
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
const ArticlePage = ({ data }) => {
  console.log("data", data)
  if (
    !data.prismic.allArticles.edges ||
    data.prismic.allArticles.edges.length < 1
  )
    return null
  const article = data.prismic.allArticles.edges[0].node
  return (
    <Layout>
      <SEO title={article.title[0].text} />
      <Hero
        title={article.title}
        image={article.hero_image}
        imageSharp={article.hero_imageSharp.childImageSharp}
      />
      {RichText.render(article.content)}
    </Layout>
  )
}

export default ArticlePage

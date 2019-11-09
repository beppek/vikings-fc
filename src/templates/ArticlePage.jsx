import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"

export const query = graphql`
  query ArticleQuery($uid: String) {
    article: prismicArticle(uid: { eq: $uid }) {
      data {
        content {
          html
        }
        hero_image {
          alt
          copyright
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        title {
          html
          text
        }
      }
      first_publication_date
      last_publication_date
      uid
      type
      slugs
    }
  }
`
const ArticlePage = ({ data }) => {
  const { article } = data
  return (
    <Layout>
      <SEO title={article.data.title.text} />
      <Hero title={article.data.title.text} image={article.data.hero_image} />
      <div dangerouslySetInnerHTML={{ __html: article.data.content.html }} />
    </Layout>
  )
}

export default ArticlePage

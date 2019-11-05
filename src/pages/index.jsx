import React from "react"
import { graphql } from "gatsby"
import shortid from "shortid"
import Container from "../components/Styled/Container"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Hero from "../components/Hero"

export const query = graphql`
  query AllHomepages {
    prismic {
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyRich_text {
                type
                label
                fields {
                  image
                  imageSharp {
                    childImageSharp {
                      fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                  text_content
                }
                primary {
                  section_heading
                }
              }
              ... on PRISMIC_HomepageBodyImage {
                type
                label
                fields {
                  gallery_image
                  gallery_imageSharp {
                    childImageSharp {
                      fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
                primary {
                  gallery_title
                }
              }
              ... on PRISMIC_HomepageBodyMap {
                type
                label
                fields {
                  location
                }
                primary {
                  section_heading: section_heading_map
                }
              }
              ... on PRISMIC_HomepageBodyBlog_posts {
                type
                label
                fields {
                  blog_posts {
                    ... on PRISMIC_Article {
                      title
                      hero_image
                      hero_imageSharp {
                        childImageSharp {
                          fluid(maxWidth: 600) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                          }
                        }
                      }
                      _linkType
                      _meta {
                        uid
                        tags
                        lastPublicationDate
                        firstPublicationDate
                      }
                      content
                    }
                    _linkType
                  }
                }
                primary {
                  title1
                }
              }
            }
            hero_image
            hero_imageSharp {
              childImageSharp {
                fluid(maxWidth: 1200) {
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

const IndexPage = ({ data }) => {
  const homepage = data.prismic.allHomepages.edges[0].node
  const homepageBody = homepage.body
  console.log("homepageBody", homepageBody)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title={homepage.title}
        image={homepage.hero_image}
        imageSharp={homepage.hero_imageSharp.childImageSharp}
      />
      <Container fluid>
        {homepageBody.map(section => (
          <Section key={shortid.generate()} content={section} />
        ))}
      </Container>
    </Layout>
  )
}

export default IndexPage

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
    homepage: prismicHomepage(type: { eq: "homepage" }) {
      data {
        body {
          ... on PrismicHomepageBodyMap {
            id
            items {
              location {
                latitude
                longitude
              }
            }
            primary {
              section_heading {
                html
                text
              }
            }
            slice_type
          }
          ... on PrismicHomepageBodyVideo {
            id
            slice_type
            primary {
              section_heading {
                html
                text
              }
            }
            items {
              embedded {
                html
              }
            }
          }

          ... on PrismicHomepageBodyRichText {
            id
            items {
              image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 700) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
                copyright
              }
              text_content {
                html
              }
            }
            slice_type
            slice_label
            primary {
              section_heading {
                html
                text
              }
            }
          }
        }
        hero_image {
          alt
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        subheading {
          html
          text
        }
        title {
          html
          text
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { homepage } = data
  const homepageBody = homepage.data.body
  return (
    <Layout>
      <SEO title="Home" />
      <Hero title={homepage.data.title.text} image={homepage.data.hero_image} />
      <Container fluid>
        {homepageBody.map(section => (
          <Section key={shortid.generate()} content={section} />
        ))}
      </Container>
    </Layout>
  )
}

export default IndexPage

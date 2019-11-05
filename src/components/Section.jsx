import React from "react"
import Img from "gatsby-image"
import { RichText } from "prismic-reactjs"
import shortid from "shortid"
import { Col } from "shards-react"

import Row from "./Styled/Row"
import { TransformLeft, HeadingWrapper } from "./Styled/Wrappers"

import Map from "./Map"

const Section = ({ content }) => {
  return (
    <Row spaceBetween={content.type !== "map"} full>
      <Col>
        <HeadingWrapper>
          {RichText.render(content.primary.section_heading)}
        </HeadingWrapper>
        {content.fields.map(field => {
          const image = field.image ? (
            field.imageSharp.childImageSharp ? (
              <Img
                alt={field.image.alt}
                fluid={field.imageSharp.childImageSharp.fluid}
              />
            ) : (
              <img alt={field.image.alt} src={field.image.url} />
            )
          ) : null
          const sectionContent =
            content.type === "map" ? (
              <Map
                lng={field.location.longitude}
                lat={field.location.latitude}
              />
            ) : (
              RichText.render(field.text_content)
            )
          return (
            <Row
              full={content.type === "map"}
              spaceBetween={content.type !== "map"}
              key={shortid.generate()}
            >
              {image && (
                <Col>
                  <TransformLeft>{image}</TransformLeft>
                </Col>
              )}
              <Col>{sectionContent}</Col>
            </Row>
          )
        })}
      </Col>
    </Row>
  )
}

export default Section

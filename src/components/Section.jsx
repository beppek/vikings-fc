import React from "react"
import Img from "gatsby-image"
import { RichText } from "prismic-reactjs"
import shortid from "shortid"
import { Col } from "shards-react"

import Row from "./Styled/Row"
import { TransformLeft, HeadingWrapper } from "./Styled/Wrappers"

import Map from "./Map"
import Video from "./Video"

const Section = ({ content }) => {
  return (
    <Row spaceBetween={content.slice_type !== "map"} full>
      <Col>
        <HeadingWrapper>
          <div
            dangerouslySetInnerHTML={{
              __html: content.primary.section_heading.html,
            }}
          />
        </HeadingWrapper>
        {content.items.map(item => {
          const image = item.image ? (
            item.image.localFile ? (
              <Img
                alt={item.image.alt}
                fluid={item.image.localFile.childImageSharp.fluid}
              />
            ) : (
              <img alt={item.image.alt} src={item.image.url} />
            )
          ) : null
          let sectionContent = null
          if (content.slice_type === "map") {
            sectionContent = (
              <Map lng={item.location.longitude} lat={item.location.latitude} />
            )
          } else if (content.slice_type === "video") {
            sectionContent = <Video embedded={item.embedded} />
          } else {
            sectionContent = (
              <div
                dangerouslySetInnerHTML={{ __html: item.text_content.html }}
              />
            )
          }
          return (
            <Row
              full={content.slice_type === "map"}
              spaceBetween={content.slice_type !== "map"}
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
